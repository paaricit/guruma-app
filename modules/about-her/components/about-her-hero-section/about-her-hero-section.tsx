"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { aboutHerHeroBannerSrc, aboutHerHeroBody, aboutHerHeroTitle } from "@/modules/about-her/content/about-her-hero";
import {
  homeHeroImageLayerSx,
  homeHeroMobileGradientBackdropSx,
  pageSectionGutterSx
} from "@/theme/page-section";
import { pxToRem } from "@/utils/px-to-rem";

const heroMinHeight = { md: pxToRem(680) } as const;

const heroPaddingTop = { xs: "clamp(5rem, 12vw, 6.5rem)", md: pxToRem(96) } as const;

const titleFontSize = { xs: pxToRem(40), md: pxToRem(72) } as const;

const bodyFontSize = { xs: pxToRem(15), md: pxToRem(18) } as const;

const bodyMaxWidth = pxToRem(696);

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
        minHeight: { xs: "auto", ...heroMinHeight },
        bgcolor: { xs: "primary.dark", md: "transparent" },
        pt: heroPaddingTop,
        pb: { xs: pxToRem(40), md: 0 },
        justifyContent: { xs: "flex-start", md: "center" },
        overflow: "hidden"
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
      {/* Optional right portrait — enable when layout matches design. */}
      {/* <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { xs: "52%", md: "52%" },
          maxWidth: pxToRem(820),
          display: { xs: "none", sm: "block" }
        }}
      >
        <Image
          alt="Guru Maa Shubha Didi"
          fill
          priority
          sizes="(max-width: 600px) 0px, 52vw"
          src="/images/About Her Page Photos/ABOUT HER Overlap.webp"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </Box> */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: pxToRem(16), md: pxToRem(48) },
          ...pageSectionGutterSx
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "min(755px, 52%)" } }}>
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
              mt: { xs: pxToRem(16), md: pxToRem(20) },
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: bodyFontSize,
              lineHeight: 1.65,
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
