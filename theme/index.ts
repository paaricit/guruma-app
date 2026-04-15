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
  components
});

export type AppTheme = typeof theme;

export { components } from "./components";
export { palette } from "./palette";
export { spacing } from "./spacing";
export { typography } from "./typography";
export * from "./page-section";
