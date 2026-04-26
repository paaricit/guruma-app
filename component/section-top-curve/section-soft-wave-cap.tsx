"use client";

import Box from "@mui/material/Box";
import { unitScale } from "@/utils/unit-scale";

export type SectionSoftWaveCapProps = {
  fill?: string;
  height?: string;
  placement?: "top" | "bottom";
  /** Mirror the curve horizontally (left-right). */
  mirror?: boolean;
  bottom?: string;
};

/**
 * Soft, shallow full-width wave cap based on the provided `curve-2.svg`.
 * - `top`: anchors above section (`bottom: 100%`)
 * - `bottom`: anchors below and flips (`top: 100%`)
 */
export function SectionSoftWaveCap({
  fill = "#D1F1F5",
  height = unitScale(92),
  placement = "top",
  mirror = false,
  bottom = "98%"
}: SectionSoftWaveCapProps) {
  const isBottom = placement === "bottom";
  const transform = `translateX(-50%) ${isBottom ? "rotate(180deg) " : ""}${mirror ? "scaleX(-1)" : ""}`.trim();

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        left: "50%",
        transform,
        transformOrigin: isBottom ? "center top" : "center bottom",
        ...(isBottom ? { top: "100%" } : { bottom: bottom }),
        width: "100vw",
        lineHeight: 0,
        pointerEvents: "none",
        zIndex: 1
      }}
    >
      <svg
        viewBox="0 0 1528 242"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{
          display: "block",
          width: "100%",
          height
        }}
      >
        <path
          d="M1202.66 141.103C1381.62 137.02 1652.71 104.454 1652.71 104.454V241.331H-437.289V75.0241C-437.289 75.0241 -113.816 12.0637 109.589 1.72665C554.042 -18.8385 756.048 151.292 1202.66 141.103Z"
          fill={fill}
        />
      </svg>
    </Box>
  );
}
