import { unitScale } from "@/utils/unit-scale";

/** Pixels per `theme.spacing(1)` at the 1580 design reference (same as default MUI 8px grid). */
export const SPACING_PX_PER_UNIT = 8;

/**
 * `theme.spacing(n)` → fluid length from `unitScale(n * 8)` (1580-based `vw` + auto floor).
 * Multiple arguments join with spaces (MUI padding/margin shorthand). `0` → `0px`.
 * Negative factors → `calc(-1 * (...))` so negative margins stay fluid.
 */
export function spacing(...factors: number[]): string {
  if (factors.length === 0) return "0px";
  return factors.map(spacingToken).join(" ");
}

function spacingToken(factor: number): string {
  if (!Number.isFinite(factor) || factor === 0) {
    return "0px";
  }
  const px = Math.abs(factor) * SPACING_PX_PER_UNIT;
  const scaled = unitScale(px);
  return factor < 0 ? `calc(-1 * (${scaled}))` : scaled;
}
