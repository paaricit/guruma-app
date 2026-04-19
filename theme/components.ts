import type { Components, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { GurumaSelectChevron } from "@/component/footer-contact-form/select-chevron";
import { unitScale } from "@/utils/unit-scale";

/** Figma frame 1580: lg content width 1280; scales with viewport (`unitScale` floor, no cap). */
const containerMaxWidthLg = unitScale(1280);

/**
 * Cross-component defaults. Keep thin; grow per component as screens migrate to `theme/`.
 */
export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true
    },
    styleOverrides: {
      root: {
        borderRadius: "12px",
        fontSize: "1.0625rem",
        textTransform: "none"
      }
    }
  },
  MuiLink: {
    defaultProps: {
      underline: "hover"
    }
  },
  MuiInputBase: {
    styleOverrides: {
      sizeSmall: {
        minHeight: 47
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      /** Matches footer / “Stay Connected” field spec (Figma `1:6912` field row; atomic `1:6913`). */
      root: ({ theme }) => ({
        borderRadius: "10px",
        backgroundColor: alpha(theme.palette.common.white, 0.92),
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: alpha(theme.palette.primary.main, 0.55)
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: 1
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.error.main
        },
        "& .MuiOutlinedInput-input::placeholder": {
          color: alpha(theme.palette.text.primary, 0.42),
          opacity: 1
        },
        "& .MuiOutlinedInput-input": {
          fontFamily: theme.typography.body2.fontFamily,
          fontSize: theme.typography.body2.fontSize,
          fontWeight: theme.typography.body2.fontWeight,
          lineHeight: 1.4,
          letterSpacing: theme.typography.body2.letterSpacing,
          padding: `${theme.spacing(1.25)} ${theme.spacing(1.5)}`
        },
        "&.MuiInputBase-sizeSmall .MuiOutlinedInput-input": {
          padding: `${theme.spacing(1.125)} ${theme.spacing(1.5)}`
        }
      })
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: alpha(theme.palette.primary.main, 0.85),
        "&.Mui-focused": {
          color: theme.palette.primary.main
        }
      })
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: alpha(theme.palette.text.secondary, 0.95),
        marginLeft: 0,
        marginRight: 0
      })
    }
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: GurumaSelectChevron
    },
    styleOverrides: {
      icon: ({ theme }) => ({
        color: theme.palette.primary.main,
        right: theme.spacing(1.25),
        top: "calc(50% - 0.5em)",
        pointerEvents: "none"
      })
    }
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "small"
    }
  },
  MuiContainer: {
    styleOverrides: {
      maxWidthLg: {
        maxWidth: `${containerMaxWidthLg} !important`,
      }
    }
  }
};
