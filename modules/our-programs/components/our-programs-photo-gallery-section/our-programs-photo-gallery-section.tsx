"use client";

import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import { SaptSadhanaCarouselControls } from "@/component/sapt-sadhana-carousel-controls";
import { SaptSadhanaStackCarousel } from "@/components/site/sapt-sadhana-stack-carousel";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import {
  ourProgramsPhotoGalleryArrowLeft,
  ourProgramsPhotoGalleryArrowRight,
  ourProgramsPhotoGalleryDefaultSlides
} from "../../content/our-programs-photo-gallery";

const headingFontSize = {
  xs: unitScale(36),
  md: unitScale(66)
} as const;

export type OurProgramsPhotoGallerySectionProps = {
  slides?: readonly string[];
  /** Defaults to “Photo Gallery”. */
  heading?: string;
};

/**
 * Stack-style image carousel (same building blocks as home `SaptSadhanaHomePromoSection`),
 * with programme-specific defaults and a single display heading.
 */
export function OurProgramsPhotoGallerySection({
  slides = ourProgramsPhotoGalleryDefaultSlides,
  heading = "Photo Gallery"
}: OurProgramsPhotoGallerySectionProps) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;

  const onStep = useCallback(
    (delta: 1 | -1) => {
      setActiveIndex((i) =>
        delta === 1 ? (i + 1) % slideCount : (i - 1 + slideCount) % slideCount
      );
    },
    [slideCount]
  );

  const arcSurface = theme.palette.guru.surfaceWash;

  return (
    <Box
      component="section"
      aria-label={heading}
      sx={{
        position: "relative",
        overflow: "visible",
        background: (t) =>
          `linear-gradient(180deg, ${alpha(t.palette.guru.surfaceCream, 1)} 0%, ${alpha(t.palette.primary.light, 0.55)} 100%)`,
        py: { xs: 7, md: 8 }
      }}
    >

      <Container maxWidth={pageContainerMaxWidth} sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx }}>
        <Typography
          component="h2"
          sx={{
            mt: { xs: 1, md: 1.25 },
            textAlign: "center",
            fontFamily: "var(--font-forum), serif",
            fontWeight: 400,
            fontSize: headingFontSize,
            lineHeight: { xs: 1.1, md: 1.2 },
            color: (t) => alpha(t.palette.text.primary, 0.92)
          }}
        >
          {heading}
        </Typography>

        <Box sx={{ mt: 3.5 }}>
          <SaptSadhanaStackCarousel slides={slides} activeIndex={activeIndex} onStep={onStep} />
        </Box>

        <SaptSadhanaCarouselControls
          slideCount={slideCount}
          activeIndex={activeIndex}
          onStep={onStep}
          onSelectSlide={setActiveIndex}
          arrowLeftSrc={ourProgramsPhotoGalleryArrowLeft}
          arrowRightSrc={ourProgramsPhotoGalleryArrowRight}
          ariaLabelScope="Photo Gallery"
        />
      </Container>
    </Box>
  );
}
