"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { OurProgramsSeekerExperiencesSection } from "@/component/our-programs-seeker-experiences-section";
import type { OurProgramsProgramHero } from "../../content/our-programs-program-heroes";
import { OurProgramsPhotoGallerySection } from "../our-programs-photo-gallery-section";
import { OurProgramsProgramHeroSection } from "../our-programs-program-hero-section";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

export type OurProgramsProgramPageShellProps = {
  hero: OurProgramsProgramHero;
  children?: ReactNode;
  /** Optional overrides passed through to `OurProgramsSeekerExperiencesSection`. */
  seekerVideoStripHeading?: string;
  seekerTestimonialsHeading?: string;
  seekerTestimonialsDescription?: string;
  /** Optional image URLs for the Photo Gallery carousel (defaults in `our-programs-photo-gallery` content). */
  photoGallerySlides?: readonly string[];
  photoGalleryHeading?: string;
  positionY?: "top" | "bottom";
  /** When true, skips `OurProgramsPhotoGallerySection` (e.g. marriage counselling route). */
  omitPhotoGallery?: boolean;
  /** When true, hides “How to Enrol” in `OurProgramsSeekerExperiencesSection` (e.g. meditation route). */
  omitSeekerHowToEnrol?: boolean;
};

/**
 * Shared scaffold for internal Our Programs routes: full-bleed hero, optional custom section,
 * photo gallery, then `OurProgramsSeekerExperiencesSection`.
 */
export function OurProgramsProgramPageShell(props: OurProgramsProgramPageShellProps) {
  const {
    hero,
    children,
    seekerVideoStripHeading,
    seekerTestimonialsHeading,
    seekerTestimonialsDescription,
    photoGallerySlides,
    photoGalleryHeading,
    omitPhotoGallery = false,
    omitSeekerHowToEnrol = false
  } = props;

  return (
    <Box component="main" sx={{ bgcolor: "background.default" }}>
      <OurProgramsProgramHeroSection hero={hero} positionY={props.positionY} />

      {children ? (
        <Box sx={{ py: { xs: unitScale(24), md: unitScale(32) } }}>
          <Stack spacing={unitScale(10)}>{children}</Stack>

        </Box>
      ) : null}

      {!omitPhotoGallery ? (
        <OurProgramsPhotoGallerySection slides={photoGallerySlides} heading={photoGalleryHeading} />
      ) : null}

      <OurProgramsSeekerExperiencesSection
        videoStripHeading={seekerVideoStripHeading}
        testimonialsBlockHeading={seekerTestimonialsHeading}
        testimonialsDescription={seekerTestimonialsDescription}
        omitHowToEnrol={omitSeekerHowToEnrol}
      />
    </Box>
  );
}
