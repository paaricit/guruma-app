import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type Body = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = str(body.name);
  const phone = str(body.phone);
  const email = str(body.email);
  const message = str(body.message);

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json({ error: "Phone is required" }, { status: 400 });
  }
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const record = {
    name,
    phone,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  const webhook = process.env.CALLBACK_REQUEST_WEBHOOK_URL;
  if (webhook) {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record)
    });
    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      return NextResponse.json(
        { error: "Could not reach callback service", detail: text.slice(0, 200) },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  const fileName = "callback-requests.jsonl";
  const dirs = [path.join(process.cwd(), "data"), path.join("/tmp", "guruma-app")];

  for (const dir of dirs) {
    try {
      await mkdir(dir, { recursive: true });
      await appendFile(path.join(dir, fileName), `${JSON.stringify(record)}\n`, "utf8");
      return NextResponse.json({ ok: true });
    } catch {
      // try next dir
    }
  }

  console.error("[callback-request] persist failed", record);
  return NextResponse.json(
    {
      error:
        "Could not store this request on the server. Set CALLBACK_REQUEST_WEBHOOK_URL to your backend URL, or ensure the process can write under ./data or /tmp/guruma-app."
    },
    { status: 503 }
  );
}
