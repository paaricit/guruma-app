import "./types";
import { createTheme } from "@mui/material/styles";
import { components } from "./components";
import { palette } from "./palette";
import { spacing } from "./spacing";
import { typography } from "./typography";

/**
 * Guruma app theme — composed from `palette`, `typography`, and `components`.
 * Not wired into the app yet; import from `@/theme` when ready.
 */
export const theme = createTheme({
  palette,
  typography,
  spacing,
  shape: {
    borderRadius: 8
  },
  /**
   * Align `md` with common tablet / Tailwind `md` (768px). MUI’s default `md` is 900px,
   * which left ~768px viewports on mobile layouts (single column, stacked hero, etc.).
   */
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536
    }
  },
  components
});

export type AppTheme = typeof theme;

export { components } from "./components";
export { palette } from "./palette";
export { spacing } from "./spacing";
export { typography } from "./typography";
export * from "./page-section";
