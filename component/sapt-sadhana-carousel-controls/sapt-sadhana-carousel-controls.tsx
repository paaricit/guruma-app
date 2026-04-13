"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { alpha, useTheme } from "@mui/material/styles";

export type SaptSadhanaCarouselControlsProps = {
  slideCount: number;
  activeIndex: number;
  onStep: (delta: 1 | -1) => void;
  onSelectSlide: (index: number) => void;
  arrowLeftSrc: string;
  arrowRightSrc: string;
  /** Used in aria-labels, e.g. "Previous {scope} slide". */
  ariaLabelScope?: string;
};

/**
 * Prev/next arrows and dot indicators for the Sapt Sadhana stack carousel (or similar).
 */
export function SaptSadhanaCarouselControls({
  slideCount,
  activeIndex,
  onStep,
  onSelectSlide,
  arrowLeftSrc,
  arrowRightSrc,
  ariaLabelScope = "Sapt Sadhana"
}: SaptSadhanaCarouselControlsProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: { xs: 2, md: 2.5 },
        display: "grid",
        gridTemplateColumns: { xs: "minmax(44px,auto) 1fr minmax(44px,auto)", sm: "auto 1fr auto" },
        alignItems: "center",
        justifyItems: "center",
        columnGap: { xs: 1, sm: 2, md: 3 },
        rowGap: 1,
        maxWidth: { sm: 520 },
        mx: "auto",
        width: "100%"
      }}
    >
      <IconButton
        type="button"
        aria-label={`Previous ${ariaLabelScope} slide`}
        onClick={() => onStep(-1)}
        disableRipple
        sx={{
          justifySelf: "center",
          p: { xs: 0.5, md: 0.75 },
          borderRadius: "12px",
          "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.08) }
        }}
      >
        <Box sx={{ position: "relative", width: { xs: 30, sm: 36, md: 42 }, height: { xs: 30, sm: 36, md: 42 } }}>
          <Image alt="" fill src={arrowLeftSrc} sizes="42px" style={{ objectFit: "contain" }} />
        </Box>
      </IconButton>

      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1, md: 1.5 },
          flexWrap: "wrap",
          width: "100%"
        }}
      >
        {Array.from({ length: slideCount }, (_, dotIdx) => (
          <Box key={dotIdx} component="li" sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="button"
              type="button"
              aria-label={`Go to ${ariaLabelScope} slide ${dotIdx + 1}`}
              aria-current={dotIdx === activeIndex ? true : undefined}
              onClick={() => onSelectSlide(dotIdx)}
              sx={{
                width: { xs: 9, md: 10 },
                height: { xs: 9, md: 10 },
                borderRadius: "50%",
                border: "none",
                p: 0,
                cursor: "pointer",
                bgcolor:
                  dotIdx === activeIndex
                    ? theme.palette.guru.ink
                    : alpha(theme.palette.primary.main, 0.28),
                transition: theme.transitions.create(["background-color", "transform"], { duration: 220 }),
                transform: dotIdx === activeIndex ? "scale(1.15)" : "scale(1)",
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: 3
                }
              }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        type="button"
        aria-label={`Next ${ariaLabelScope} slide`}
        onClick={() => onStep(1)}
        disableRipple
        sx={{
          justifySelf: "center",
          p: { xs: 0.5, md: 0.75 },
          borderRadius: "12px",
          "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.08) }
        }}
      >
        <Box sx={{ position: "relative", width: { xs: 30, sm: 36, md: 42 }, height: { xs: 30, sm: 36, md: 42 } }}>
          <Image alt="" fill src={arrowRightSrc} sizes="42px" style={{ objectFit: "contain" }} />
        </Box>
      </IconButton>
    </Box>
  );
}
