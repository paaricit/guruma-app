"use client";

import SharedHeader from "@/components/site/shared-header";

/**
 * Global site chrome: same nav as legacy pages, mounted once from `MuiProvider`.
 */
export default function SiteHeader() {
  return <SharedHeader />;
}
