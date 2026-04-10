import type { SxProps, Theme } from "@mui/material/styles";

export const uiPresets: Record<string, SxProps<Theme>> = {
  sectionContainer: {
    py: { xs: 7, md: 10 }
  },
  heroTitle: {
    fontFamily: "var(--font-forum), serif",
    lineHeight: 0.95
  },
  ctaButton: {
    textTransform: "none",
    borderRadius: "12px",
    fontSize: 17
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" },
    gap: { xs: 2.5, md: 3.5 }
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
    gap: { xs: 4, md: 7 },
    alignItems: "start",
    width: "100%"
  }
};
