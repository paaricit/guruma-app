"use client";

import Image from "next/image";
import Box from "@mui/material/Box";

const CURVE_DECOR_SRC = "/images/Home Page Photos/wisdom_action.png";

const curveDecorBoxSx = {
  position: "absolute" as const,
  zIndex: 0,
  pointerEvents: "none" as const,
  overflow: "hidden" as const,
  width: "30%",
  height: "50%",
  display: { xs: "none", lg: "block" }
};

/**
 * Paired corner curve images (same asset, top-right + bottom-left). Visible from `lg` up only.
 */
export function HomeCornerCurveDecor() {
  return (
    <>
      <Box
        aria-hidden
        sx={{
          ...curveDecorBoxSx,
          top: "-0%",
          right: "-8%",
          zIndex: 11
        }}
      >
        <Image
          alt=""
          src={CURVE_DECOR_SRC}
          fill
          sizes="300px"
          style={{ objectFit: "cover", objectPosition: "right top" }}
        />
      </Box>
      <Box
        aria-hidden
        sx={{
          ...curveDecorBoxSx,
          bottom: "-8%",
          left: "-8%",
          zIndex: 1
        }}
      >
        <Image
          alt=""
          src={CURVE_DECOR_SRC}
          fill
          sizes="300px"
          style={{ objectFit: "cover", objectPosition: "left bottom", transform: "rotate(180deg)" }}
        />
      </Box>
    </>
  );
}
