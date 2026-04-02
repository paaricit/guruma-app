import { createTheme } from "@mui/material/styles";
import { DESIGN_TOKENS } from "@/lib/design-system";

export const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: DESIGN_TOKENS.colors.primary
    },
    secondary: {
      main: DESIGN_TOKENS.colors.secondary
    },
    background: {
      default: "transparent",
      paper: DESIGN_TOKENS.colors.paper
    },
    text: {
      primary: DESIGN_TOKENS.colors.textPrimary,
      secondary: DESIGN_TOKENS.colors.textSecondary
    }
  },
  shape: {
    borderRadius: DESIGN_TOKENS.shape.radius
  },
  typography: {
    fontFamily: "var(--font-poppins), var(--font-inter), sans-serif",
    h1: {
      fontFamily: "var(--font-forum), serif"
    },
    h2: {
      fontFamily: "var(--font-forum), serif"
    },
    h3: {
      fontFamily: "var(--font-inter), sans-serif"
    }
  }
});
