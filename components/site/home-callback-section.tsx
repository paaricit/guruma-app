"use client";

import { useState } from "react";
import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";

const callbackFieldSx = {
  "& .MuiInput-underline:before": { borderColor: "rgba(255,255,255,0.5)" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderColor: "rgba(255,255,255,0.8)" },
  "& .MuiInput-underline:after": { borderColor: "#fff" },
  "& .MuiInputLabel-root": {
    color: (theme: Theme) => theme.palette.common.white,
    fontSize: "1.5rem" /* 24px at 16px root */,
    fontWeight: (theme: Theme) => theme.typography.fontWeightBold
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: (theme: Theme) => theme.palette.common.white
  },
  "& .MuiInputBase-input": { color: "#fff" },
  "& .MuiInputBase-input::placeholder": { color: "rgba(255,255,255,0.55)", opacity: 1 }
};

const callbackFormFields = [
  { key: "name", label: "NAME", hint: "Enter your name", type: "text" as const },
  { key: "phone", label: "PHONE", hint: "Enter your phone number", type: "tel" as const },
  { key: "email", label: "EMAIL", hint: "Enter your Email ID", type: "email" as const },
  { key: "message", label: "MESSAGE", hint: "Give us a message", type: "text" as const }
];

type CallbackFormValues = Record<(typeof callbackFormFields)[number]["key"], string>;

const initialCallbackValues: CallbackFormValues = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

/**
 * Full-width “Get a call back” strip with four fields + CTA; posts to `/api/callback-request`.
 */
export function HomeCallbackSection() {
  const [callbackValues, setCallbackValues] = useState<CallbackFormValues>(initialCallbackValues);
  const [callbackStatus, setCallbackStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [callbackError, setCallbackError] = useState("");

  async function handleCallbackSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCallbackStatus("loading");
    setCallbackError("");
    try {
      const res = await fetch("/api/callback-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(callbackValues)
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setCallbackStatus("success");
      setCallbackValues(initialCallbackValues);
    } catch (err) {
      setCallbackStatus("error");
      setCallbackError(err instanceof Error ? err.message : "Request failed");
    }
  }

  return (
    <Stack
      component="form"
      onSubmit={handleCallbackSubmit}
      noValidate
      direction={{ xs: "column", md: "row" }}
      sx={{
        width: "100%",
        gap: { xs: 1.8, md: 2.2 },
        alignItems: { xs: "center", md: "stretch" },
        position: 'relative',
        zIndex: 4

      }}
    >
      <Box
        sx={{
          flex: { md: 1 },
          width: "100%",
          minWidth: 0,
          alignSelf: { xs: "stretch", md: "auto" },
          bgcolor: "#091a43",
          backgroundImage:
            "linear-gradient(rgba(9,26,67,0.65), rgba(9,26,67,0.5)), url('/images/Home Page Photos/section-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 0,
          py: { xs: 2.2, md: 3 }
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))"
            },
            alignItems: "center",
            gap: { xs: 1.8, md: 2.2 },
            px: { xs: 2, md: 4, lg: 10 },
            height: "100%"
          }}
        >
          {callbackFormFields.map((field) => (
            <TextField
              key={field.key}
              name={field.key}
              variant="standard"
              type={field.type}
              label={field.label}
              placeholder={field.hint}
              value={callbackValues[field.key]}
              onChange={(ev) =>
                setCallbackValues((prev) => ({
                  ...prev,
                  [field.key]: ev.target.value
                }))
              }
              fullWidth
              sx={callbackFieldSx}
              slotProps={{
                inputLabel: { shrink: true }
              }}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          textAlign: { xs: "center", md: "left" },
          alignSelf: { xs: "center", md: "center" },
          px: { xs: 2, md: 4 },
          py: { xs: 0, md: 3 },
          maxWidth: { xs: 360, md: 280 }
        }}
      >
        <Button
          type="submit"
          disabled={callbackStatus === "loading"}
          sx={{
            textTransform: "none",
            p: 0,
            minWidth: 0,
            bgcolor: "transparent",
            color: "#031942",
            boxShadow: "none",
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
            "&:hover": { bgcolor: "transparent", boxShadow: "none", opacity: 0.85 },
            "&.Mui-disabled": { color: "rgba(3,25,66,0.45)" }
          }}
        >
          <Typography
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "clamp(1.5rem, 6vw, 2rem)", md: 52 },
              lineHeight: 0.95,
              textAlign: { xs: "center", md: "left" }
            }}
          >
            Get a
            <br />
            call back
          </Typography>
        </Button>
        {callbackStatus === "success" ? (
          <Alert severity="success" sx={{ mt: 1.5, textAlign: "left" }}>
            Thank you — we will reach out soon.
          </Alert>
        ) : null}
        {callbackStatus === "error" ? (
          <Alert severity="error" sx={{ mt: 1.5, textAlign: "left" }} onClose={() => setCallbackStatus("idle")}>
            {callbackError}
          </Alert>
        ) : null}
      </Box>
    </Stack>
  );
}
