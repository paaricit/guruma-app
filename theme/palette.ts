import type { PaletteOptions } from "@mui/material/styles";

/**
 * Semantic light palette for Guruma (aligned with design direction + legacy tokens where useful).
 */
export const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#2b46a1",
    light: "#d1f1f5",
    dark: "#031942",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#021649",
    contrastText: "#ffffff"
  },
  background: {
    default: "#f8f8f6",
    paper: "#ffffff"
  },
  text: {
    primary: "#111125",
    secondary: "#2c4a4a",
    disabled: "rgba(17, 17, 37, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.08)",
  guru: {
    warm: "#ffc19a",
    mint: "#d1f1f5",
    ink: "#031942",
    surfaceWash: "#f2f2ee",
    surfaceCream: "#fdfdf8"
  }
};
