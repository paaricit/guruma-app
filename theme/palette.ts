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
    surfaceCream: "#fdfdf8",
    aboutHerTeachingsBand: "#f9f9f7",
    aboutHerTeachingsAccent: "#f4b497",
    aboutHerTeachingsTitle: "#2a2a2a",
    aboutHerTeachingsBody: "#878787",
    aboutHerTeachingsImageWell: "linear-gradient(180deg, #e8f2f8 0%, #f5f9fc 100%)",
    pathwaySectionHeading: "#353535",
    pathwaySectionSurface: "#f2f1ed",
    pathwayCardTitle: "#353535",
    pathwayCardBody: "#878787",
    pathwayIconAccent: "#ffc19a",
    pathwayCardBorder: "rgba(14, 123, 125, 0.15)",
    /** Sessions FAQ band floor (Figma `1:7953`). */
    sessionsFaqSurface: "#f7fbfc",
    coral: "#E9967B"
  }
};
