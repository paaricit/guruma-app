"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import {
  aboutHerHeroBannerSrc,
  aboutHerHeroBody,
  aboutHerHeroPortraitSrc,
  aboutHerHeroTitle
} from "@/modules/about-her/content/about-her-hero";
import {
  homeHeroImageLayerSx,
  homeHeroMobileGradientBackdropSx,
  pageSectionGutterSx
} from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const heroMinHeight = {
  md: unitScale(760),
  lg: unitScale(840)
} as const;

const heroPaddingTop = {
  xs: unitScale(88),
  md: unitScale(96)
} as const;

const titleFontSize = {
  xs: unitScale(40),
  md: unitScale(72)
} as const;

const bodyFontSize = {
  xs: unitScale(15),
  md: unitScale(18)
} as const;

const bodyMaxWidth = unitScale(696);

export function AboutHerHeroSection() {
  const theme = useTheme();
  const overlayBlue = alpha(theme.palette.primary.dark, 0.5);
  const titleColor = "#ecede5";
  const bodyColor = alpha("#ecede5", 0.95);

  return (
    <Box
      component="section"
      aria-labelledby="about-her-hero-heading"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "50vh", md: "120vh" },
        bgcolor: { xs: "primary.dark", md: "transparent" },
        // pt: heroPaddingTop,
        pt: { xs: unitScale(80), md: 28},
        justifyContent: { xs: "flex-start", md: "flex-start" },
        overflow: "hidden",
        pb: { xs: unitScale(80), md: 0 }
      }}
    >
      <Box sx={homeHeroMobileGradientBackdropSx(theme)} aria-hidden />
      <Box sx={homeHeroImageLayerSx(theme, aboutHerHeroBannerSrc)} aria-hidden />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
          backgroundImage: `linear-gradient(-84deg, ${alpha(theme.palette.common.black, 0)} 47%, ${overlayBlue} 76%)`
        }}
      />
      {/* <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
          width: { xs: "48%", md: "52%" },
          maxWidth: { xs: unitScale(360), md: unitScale(820) },
          display: { xs: "none", md: "block" },
          pointerEvents: "none"
        }}
      >
        <Image
          alt=""
          src={encodePublicPath(aboutHerHeroPortraitSrc)}
          fill
          priority
          sizes="(max-width: 900px) 0px, 42vw"
          style={{ objectFit: "contain", objectPosition: "right bottom" }}
        />
      </Box> */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: unitScale(16), md: unitScale(48) },
          ...pageSectionGutterSx
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: `min(${unitScale(755)}, 52%)` } }}>
          <Typography
            id="about-her-hero-heading"
            component="h1"
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: titleFontSize,
              lineHeight: { xs: 1.05, md: 0.95 },
              color: titleColor,
              fontWeight: 400
            }}
          >
            {aboutHerHeroTitle}
          </Typography>
          <Typography
            sx={{
              mt: { xs: unitScale(16), md: unitScale(20) },
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: bodyFontSize,
              lineHeight: { xs: 1.62, md: 1.65 },
              color: bodyColor,
              maxWidth: bodyMaxWidth
            }}
          >
            {aboutHerHeroBody}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
