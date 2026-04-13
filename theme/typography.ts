import type { TypographyVariantsOptions } from "@mui/material/styles";

/** Loaded in `app/layout.tsx` via `next/font` CSS variables. */
const fontSans = 'var(--font-poppins), var(--font-inter), system-ui, sans-serif';
const fontDisplay = "var(--font-forum), ui-serif, Georgia, serif";
const fontAccent = 'var(--font-montserrat), var(--font-inter), system-ui, sans-serif';

/**
 * Typography scale: hierarchy from Figma-inspired roles; line heights are theme-owned (not Figma literals).
 */
export const typography: TypographyVariantsOptions = {
  fontFamily: fontSans,
  h1: {
    fontFamily: fontDisplay,
    fontWeight: 400,
    fontSize: "2.5rem",
    lineHeight: 1.15,
    letterSpacing: 0
  },
  h2: {
    fontFamily: fontDisplay,
    fontWeight: 400,
    fontSize: "2rem",
    lineHeight: 1.2,
    letterSpacing: 0
  },
  h3: {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.25,
    letterSpacing: 0
  },
  h4: {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.3,
    letterSpacing: 0
  },
  h5: {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: 1.35,
    letterSpacing: 0
  },
  h6: {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.4,
    letterSpacing: 0
  },
  subtitle1: {
    fontFamily: fontAccent,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: 0
  },
  subtitle2: {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: 0
  },
  body1: {
    fontFamily: fontSans,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: 0
  },
  body2: {
    fontFamily: fontSans,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: 0
  },
  button: {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: 0,
    textTransform: "none"
  },
  caption: {
    fontFamily: fontSans,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.5,
    letterSpacing: 0
  },
  overline: {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: "0.75rem",
    lineHeight: 1.5,
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  }
};
