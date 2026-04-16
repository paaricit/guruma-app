"use client";

import Box from "@mui/material/Box";
import { alpha, useTheme, type Theme } from "@mui/material/styles";

/** Default SVG height — matches Sapt Sadhana home promo (min = narrow / mobile). */
export const SECTION_TOP_ARC_HEIGHT = "clamp(5.65rem, 17vw, 11.75rem)" as const;

/** Arc fill must match the section body behind it (seam where SVG meets the box). */
export type SectionTopArcSurface = "default" | "paper" | "primaryLight";

/** Preset surface token or any valid CSS color (e.g. `#F3F2EE`, `rgb(...)`, `var(--token)`). */
export type SectionTopArcSurfaceProp = SectionTopArcSurface | (string & {});

export type SectionTopArcProps = {
  svgHeight?: string;
  /** Preset (`default` / `paper` / `primaryLight`) or a CSS color string for a custom seam fill. */
  surface?: SectionTopArcSurfaceProp;
  placement?: "top" | "bottom";
};

function resolveArcFill(theme: Theme, surface: SectionTopArcSurfaceProp): string {
  switch (surface) {
    case "paper":
      return theme.palette.background.paper;
    case "primaryLight":
      return theme.palette.primary.light;
    case "default":
      return theme.palette.background.default;
    default:
      return surface;
  }
}

/**
 * Curved top silhouette (SVG fill + stroked arc with top-only drop shadow).
 * Place inside a `position: relative` section; sits above the section via `bottom: 100%`.
 * Set `surface` to a preset (`default` / `paper` / `primaryLight`) or any CSS color string (e.g. `#F3F2EE`).
 */
export function SectionTopArc({
  svgHeight = SECTION_TOP_ARC_HEIGHT,
  surface = "default",
  placement = "top"
}: SectionTopArcProps) {
  const theme = useTheme();
  const curveTopShadow = `drop-shadow(0 -10px 22px ${alpha(theme.palette.primary.dark, 0.32)})`;
  const isBottom = placement === "bottom";

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        ...(isBottom ? { top: "100%", transform: "rotate(180deg)", transformOrigin: "center top" } : { bottom: "100%" }),
        width: "100%",
        zIndex: 2,
        pointerEvents: "none",
        color: (t) => resolveArcFill(t, surface)
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
        <path fill="currentColor" d="M0 200V118C400 0 800 0 1200 118V200H0Z" />
        <path
          d="M0 118 C400 0 800 0 1200 118"
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
