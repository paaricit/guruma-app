"use client";

import Box from "@mui/material/Box";
import { alpha, useTheme, type Theme } from "@mui/material/styles";
import { unitScale } from "@/utils/unit-scale";

/** Default SVG height — was `clamp(5.65rem, 17vw, 11.75rem)` @ 16px/rem; middle stays `17vw`. */
export const SECTION_TOP_ARC_HEIGHT = `clamp(${unitScale(90.4)}, 17vw, ${unitScale(188)})`;

/** Arc fill must match the section body behind it (seam where SVG meets the box). */
export type SectionTopArcSurface = "default" | "paper" | "primaryLight";

/** Preset surface token or any valid CSS color (e.g. `#F3F2EE`, `rgb(...)`, `var(--token)`). */
export type SectionTopArcSurfaceProp = SectionTopArcSurface | (string & {});

export type SectionTopArcProps = {
  svgHeight?: string;
  /** Preset (`default` / `paper` / `primaryLight`) or a CSS color string for a custom seam fill. */
  surface?: SectionTopArcSurfaceProp;
  /**
   * `top` (default): arc along the **top** of the section (`bottom: 100%`).
   * `bottom`: same shape **rotated 180°** so the bulge points **up** into the section (`top: 100%`) — use for a bottom edge or prefer {@link SectionBottomArc}.
   */
  placement?: "top" | "bottom";
};

/** Props for {@link SectionBottomArc} — same as {@link SectionTopArcProps} without `placement` (always bottom / inverted). */
export type SectionBottomArcProps = Omit<SectionTopArcProps, "placement">;

/** Props for {@link SectionTopUShapedArc} — top “U” / valley curve (no `placement`). */
export type SectionTopUShapedArcProps = Omit<SectionTopArcProps, "placement"> & {
  /**
   * Fill **inside the U** (below the curved boundary). SVG pixels **above** that boundary stay transparent
   * so the previous section shows through (e.g. starfield).
   * @default "#ffffff"
   */
  cupFill?: string;
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
  const curveTopShadow = `drop-shadow(0 calc(-1 * (${unitScale(10)})) ${unitScale(22)} ${alpha(theme.palette.primary.dark, 0.32)})`;
  const isBottom = placement === "bottom";

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        ...(isBottom ? { top: "100%", transform: "rotate(180deg)", transformOrigin: "center top" } : { bottom: "99%" }),
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

/**
 * Inverted section curve: same SVG as {@link SectionTopArc} with `placement="bottom"` (bulge up into the block above).
 * Put inside a `position: relative` section; anchors at `top: 100%` with `rotate(180deg)`.
 *
 * @example
 * ```tsx
 * <SectionBottomArc surface="#D1F1F5" />
 * ```
 */
export function SectionBottomArc(props: SectionBottomArcProps) {
  return <SectionTopArc {...props} placement="bottom" />;
}

/**
 * **U-shaped** curve along the **top** of a section (sides high, center dips — symmetric valley).
 * Same viewBox scale, stroke weight, and {@link SECTION_TOP_ARC_HEIGHT} defaults as {@link SectionTopArc} / {@link SectionBottomArc}.
 *
 * Place as the first child inside a `position: "relative"` section and reserve top space, e.g.
 * `pt: SECTION_TOP_ARC_HEIGHT` (or your chosen `svgHeight`), with `overflow: "visible"` if the curve should overlap the section above.
 *
 * @example
 * ```tsx
 * <Box sx={{ position: "relative", pt: SECTION_TOP_ARC_HEIGHT, bgcolor: "background.paper" }}>
 *   <SectionTopUShapedArc cupFill="#fff" />
 *   …
 * </Box>
 * ```
 */
export function SectionTopUShapedArc({
  svgHeight = SECTION_TOP_ARC_HEIGHT,
  surface = "default",
  cupFill = "#ffffff"
}: SectionTopUShapedArcProps) {
  const theme = useTheme();
  const curveShadow = `drop-shadow(0 ${unitScale(10)} ${unitScale(22)} ${alpha(theme.palette.primary.dark, 0.32)})`;
  const rimColor =
    typeof surface === "string" && surface !== "default" && surface !== "paper" && surface !== "primaryLight"
      ? alpha(surface, 0.35)
      : alpha(theme.palette.primary.dark, 0.06);

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 2,
        pointerEvents: "none"
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
          verticalAlign: "top"
        }}
      >
        {/*
          Symmetric “U” / valley: quadratic so left → right dips once (center lowest).
          t=0.5 lies at (600,118) with control (600,236). Only the region below the curve is filled — transparent above shows the section *behind* this block (overlap How to Join + transparent parent).
        */}
        <path fill={cupFill} d="M0 0 Q600 236 1200 0 L1200 200 L0 200 Z" />
        <path
          d="M0 0 Q600 236 1200 0"
          fill="none"
          stroke={rimColor}
          strokeWidth={3}
          strokeLinecap="round"
          style={{ filter: curveShadow }}
        />
      </svg>
    </Box>
  );
}
