"use client";

import Box from "@mui/material/Box";
import { alpha, useTheme, type Theme } from "@mui/material/styles";

/** Default SVG height — matches Sapt Sadhana home promo. */
export const SECTION_TOP_ARC_HEIGHT = "clamp(4.25rem, 16vw, 11rem)" as const;

/** Arc fill must match the section body behind it (seam where SVG meets the box). */
export type SectionTopArcSurface = "default" | "paper" | "primaryLight";

export type SectionTopArcProps = {
  svgHeight?: string;
  surface?: SectionTopArcSurface;
};

function arcFillColor(theme: Theme, surface: SectionTopArcSurface) {
  if (surface === "paper") return theme.palette.background.paper;
  if (surface === "primaryLight") return theme.palette.primary.light;
  return theme.palette.background.default;
}

/**
 * Curved top silhouette (SVG fill + stroked arc with top-only drop shadow).
 * Place inside a `position: relative` section; sits above the section via `bottom: 100%`.
 * Set `surface` to match the section seam: `default` / `paper` / `primaryLight` (mint band tops).
 */
export function SectionTopArc({ svgHeight = SECTION_TOP_ARC_HEIGHT, surface = "default" }: SectionTopArcProps) {
  const theme = useTheme();
  const curveTopShadow = `drop-shadow(0 -10px 22px ${alpha(theme.palette.primary.dark, 0.32)})`;

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "100%",
        width: "100%",
        zIndex: 2,
        pointerEvents: "none",
        color: (t) => arcFillColor(t, surface)
      }}
    >
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          width: "100%",
          height: svgHeight,
          verticalAlign: "bottom"
        }}
      >
        <path fill="currentColor" d="M0 200V108C400 0 800 0 1200 108V200H0Z" />
        <path
          d="M0 108 C400 0 800 0 1200 108"
          fill="none"
          stroke={alpha(theme.palette.primary.dark, 0.04)}
          strokeWidth={3}
          strokeLinecap="round"
          style={{ filter: curveTopShadow }}
        />
      </svg>
    </Box>
  );
}
