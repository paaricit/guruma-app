/**
 * Full-width decorative wave (SVG only) — sits between two sections, no clip-path.
 * `fill` should match the **filled** side of the band so the seam disappears.
 *
 * **Shape (from design ref):** one smooth cycle — not a literal `sin(x)`,
 * but reads like a sine wave: **left mid** → **crest ~25% width** → **trough ~75%** → **rises toward the right edge**.
 * Built from cubic Béziers in `viewBox` `0 0 1440 72` (`preserveAspectRatio="none"` stretches horizontally).
 *
 * - **`up`**: flat bottom, wavy top — fill below the curve (section **top**, overlaps band above).
 * - **`down`**: flat top, wavy bottom — mirror via transform (section **bottom**).
 */
export type SectionWaveOrientation = "up" | "down";

export type SectionWaveDividerProps = {
  fill: string;
  /** Optional height clamp for the wave band (CSS length). */
  height?: string;
  orientation?: SectionWaveOrientation;
};

/**
 * Top wave edge left → right (y increases downward). Flat base closes at y=72.
 * Stronger amplitude than v1 (crest ~y=15, trough ~y=63) so the divider reads more “wavey”.
 */
const WAVE_PATH =
  "M0,72 L0,52 C118,36 248,14 360,15 C528,18 912,64 1080,62 C1194,58 1308,36 1440,26 L1440,72 Z";

export function SectionWaveDivider({
  fill,
  /** Taller default so the wave reads clearly at large widths (scales with `vw`). */
  height = "clamp(56px, 10vw, 120px)",
  orientation = "up"
}: SectionWaveDividerProps) {
  const flipDown = orientation === "down";

  return (
    <svg
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      width="100%"
      aria-hidden
      style={{
        display: "block",
        width: "100%",
        height,
        verticalAlign: flipDown ? "top" : "bottom"
      }}
    >
      {flipDown ? (
        <g transform="translate(0,72) scale(1,-1)">
          <path fill={fill} d={WAVE_PATH} />
        </g>
      ) : (
        <path fill={fill} d={WAVE_PATH} />
      )}
    </svg>
  );
}
