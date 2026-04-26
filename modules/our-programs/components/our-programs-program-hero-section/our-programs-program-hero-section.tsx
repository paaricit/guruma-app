"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import type { OurProgramsProgramHero } from "../../content/our-programs-program-heroes";
import {
  ourProgramsProgramHeroOverlayGradient,
  pageContainerMaxWidth,
  pageSectionGutterSx
} from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const DIVIDER_BAR = "/images/our-programs/bar.svg";

/** Display cap @ 1580 reference — aligns with requested 75px headline. */
const heroHeadingFontSize = {
  xs: unitScale(40),
  md: unitScale(75)
} as const;

/** Display cap @ 1580 reference — aligns with requested 24px subhead. */
const heroSubheadingFontSize = {
  xs: unitScale(17),
  md: unitScale(24)
} as const;

export type OurProgramsProgramHeroSectionProps = {
  hero: OurProgramsProgramHero;
  positionY?: "top" | "bottom";
};

/**
 * Full-bleed programme hero: background image, Forum headline (~75px @ md+), `bar.svg` divider
 * (same asset as main Our Programs intro), then Inter subhead (~24px @ md+).
 */
export function OurProgramsProgramHeroSection({ hero, positionY }: OurProgramsProgramHeroSectionProps) {
  const theme = useTheme();
  const imageSrc = encodePublicPath(hero.imageSrc);
  const dividerSrc = encodePublicPath(DIVIDER_BAR);

  return (
    <Box
      sx={{
        position: "relative",
        width: 1,
        maxWidth: "100%",
        minHeight: unitScale(720),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <Image
        alt=""
        src={imageSrc}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: `center ${positionY ?? 'center'}` }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: ourProgramsProgramHeroOverlayGradient
        }}
      />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{
          position: "relative",
          zIndex: 1,
          ...pageSectionGutterSx,
          py: { xs: unitScale(48), md: unitScale(72) },
          textAlign: "center"
        }}
      >
        <Stack spacing={{ xs: unitScale(16), md: unitScale(20) }} sx={{ maxWidth: unitScale(920), mx: "auto" }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontWeight: 400,
              fontSize: heroHeadingFontSize,
              lineHeight: { xs: 1.1, md: 1.08 },
              color: theme.palette.common.white
            }}
          >
            {hero.heading}
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: unitScale(588),
              height: unitScale(35),
              mx: "auto !important"
            }}
          >
            <Image src={dividerSrc} alt="" fill sizes="588px" style={{ objectFit: "contain" }} />
          </Box>

          <Typography
            component="p"
            sx={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
              fontSize: heroSubheadingFontSize,
              lineHeight: { xs: 1.6, md: 1.65 },
              color: alpha(theme.palette.common.white, 0.95),
              maxWidth: unitScale(900),
              mx: "auto"
            }}
          >
            {hero.subheading}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
