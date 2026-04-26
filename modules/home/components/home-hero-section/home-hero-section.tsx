"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { homeHeroContent } from "@/modules/home/content/home-hero";
import { unitScale } from "@/utils/unit-scale";
import {
  homeHeroDisplayOnDarkSx,
  homeHeroGradientWashSx,
  homeHeroImageLayerSx,
  homeHeroLeadOnDarkSx,
  homeHeroMobileGradientBackdropSx,
  pageContainerMaxWidth,
  pageSectionGutterSx
} from "@/theme/page-section";

export function HomeHeroSection() {
  const theme = useTheme();
  const ctaRadius = Number(theme.shape.borderRadius) * 1.45;
  const ink = theme.palette.primary.dark;
  const heroSurface = alpha(theme.palette.common.white, 0.97);
  const heroSurfaceHover = alpha(theme.palette.common.white, 0.9);
  const glassFill = alpha(theme.palette.common.white, 0.2);
  const glassFillHover = alpha(theme.palette.common.white, 0.26);
  const heroTextShadow = `0 ${unitScale(2)} ${unitScale(32)} ${alpha(theme.palette.common.black, 0.4)}`;

  return (
    <Box
      component="section"
      aria-labelledby="home-hero-heading"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "auto", md: "min(100dvh, 880px)", lg: "120vh" },
        bgcolor: { xs: "primary.dark", md: "transparent" },
        pt: { xs: unitScale(120), md: unitScale(80), lg: unitScale(128) },
        pb: { xs: 12, md: unitScale(48) },
        overflow: "hidden"
      }}
    >
      <Box sx={homeHeroMobileGradientBackdropSx(theme)} aria-hidden />
      <Box sx={homeHeroImageLayerSx(theme, homeHeroContent.bannerSrc)} aria-hidden />
      <Box sx={homeHeroGradientWashSx(theme)} display={{ xs: "none", md: "block" }} aria-hidden />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", md: "center" },
          minHeight: 0,
          ...pageSectionGutterSx
        }}
      >
        <Box
          sx={{
            display: "grid",
            /* One column: no right-column portrait yet; a 2-col grid reserved empty space on tablet. */
            gridTemplateColumns: "1fr",
            alignItems: { xs: "stretch", md: "center" },
            width: "100%",
            py: { xs: 1, md: 0 },
            pb: { xs: 1, md: 6, lg: 10 }
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: unitScale(560), lg: unitScale(640), xl: unitScale(720) },
              textAlign: "left",
              justifySelf: { md: "start" }
            }}
          >
            <Typography
              component="p"
              sx={{
                ...homeHeroLeadOnDarkSx(theme),
                fontSize: { xs: unitScale(30), md: unitScale(34), lg: unitScale(38) },
                maxWidth: { xs: "100%", sm: unitScale(540), md: unitScale(600) },
                letterSpacing: "0.01em",
                textShadow: heroTextShadow
              }}
            >
              {homeHeroContent.lead}
            </Typography>
            <Typography
              id="home-hero-heading"
              component="h1"
              sx={{
                mt: { xs: 1.5, md: 1.75 },
                ...homeHeroDisplayOnDarkSx(theme),
                lineHeight: { xs: 1.08, md: 1.04, lg: 1.02 },
                fontSize: { xs: unitScale(52), md: unitScale(76), lg: unitScale(95) },
                letterSpacing: { xs: "-0.02em", md: "-0.015em", lg: 0 },
                textWrap: { md: "balance" },
                textShadow: heroTextShadow
              }}
            >
              {homeHeroContent.displayLine1}
              <br />
              {homeHeroContent.displayLine2}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: { xs: 3.5, md: 6 }, width: "100%", alignItems: { xs: "stretch", sm: "center" } }}
            >
              <Button
                component={Link}
                href={homeHeroContent.primaryCta.href}
                variant="contained"
                sx={{
                  minHeight: { xs: unitScale(44), md: unitScale(52) },
                  px: { xs: 2.5, md: 3 },
                  borderRadius: unitScale(ctaRadius),
                  bgcolor: heroSurface,
                  color: ink,
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: unitScale(16), md: unitScale(18) },
                  textTransform: "none",
                  boxShadow: "none",
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  textAlign: "center",
                  "&:hover": {
                    bgcolor: heroSurfaceHover,
                    boxShadow: "none"
                  }
                }}
              >
                {homeHeroContent.primaryCta.label}
              </Button>
              {/* <Button
                component={Link}
                href={homeHeroContent.secondaryCta.href}
                variant="outlined"
                sx={{
                  minHeight: { xs: unitScale(44), md: unitScale(52) },
                  px: { xs: 2.5, md: 3 },
                  borderRadius: unitScale(ctaRadius),
                  borderColor: "transparent",
                  color: heroSurface,
                  bgcolor: glassFill,
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: unitScale(16), md: unitScale(18) },
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  textAlign: "center",
                  "&:hover": {
                    bgcolor: glassFillHover,
                    borderColor: "transparent"
                  }
                }}
              >
                {homeHeroContent.secondaryCta.label}
              </Button> */}
            </Stack>
          </Box>

          {/* <Box
            sx={{
              position: "relative",
              display: { xs: "none", md: "block" },
              width: "100%",
              height: { md: unitScale(520) },
              maxHeight: { md: "min(72vh, 640px)" },
              alignSelf: { md: "flex-end" },
              justifySelf: { md: "center" }
            }}
          >
            <Image
              alt="Guru Maa Shubha Didi"
              src={encodePublicPath(homeHeroContent.portraitSrc)}
              fill
              priority
              sizes="(max-width: 900px) 0px, 38vw"
              style={{ objectFit: "contain", objectPosition: "bottom center" }}
            />
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
}
