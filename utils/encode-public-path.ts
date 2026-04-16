/**
 * Encode a `/public` URL so spaces, `&`, etc. work reliably with `next/image` and CSS `url()`.
 */
export function encodePublicPath(path: string): string {
  if (typeof path !== "string" || !path.startsWith("/")) return path;
  return encodeURI(path);
}
