"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { homeHeroContent } from "@/modules/home/content/home-hero";
import {
  fluidHomeHeroCta,
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

  return (
    <Box
      component="section"
      aria-labelledby="home-hero-heading"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "auto", md: "110vh" },
        bgcolor: { xs: "primary.dark", md: "transparent" },
        pt: { xs: "clamp(6.5rem, 14vw, 8rem)", md: "clamp(7rem, 12vw, 8.5rem)" },
        pb: { xs: 12, md: "clamp(2rem, 4vw, 3rem)" },
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
            gridTemplateColumns: { xs: "1fr", md: "1fr 0.92fr" },
            alignItems: "center",
            width: "100%",
            py: { xs: 1, md: 0 },
            pb: { xs: 1, md: 10 }
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: "45rem" }, textAlign: "left" }}>
            <Typography component="p" sx={homeHeroLeadOnDarkSx(theme)}>
              {homeHeroContent.lead}
            </Typography>
            <Typography
              id="home-hero-heading"
              component="h1"
              sx={{
                mt: 1.5,
                ...homeHeroDisplayOnDarkSx(theme),
                lineHeight: 1.05
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
                  minHeight: { xs: 44, md: 52 },
                  px: { xs: 2.5, md: 3 },
                  borderRadius: `${ctaRadius}px`,
                  bgcolor: heroSurface,
                  color: ink,
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 500,
                  fontSize: fluidHomeHeroCta,
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
              <Button
                component={Link}
                href={homeHeroContent.secondaryCta.href}
                variant="outlined"
                sx={{
                  minHeight: { xs: 44, md: 52 },
                  px: { xs: 2.5, md: 3 },
                  borderRadius: `${ctaRadius}px`,
                  borderColor: "transparent",
                  color: heroSurface,
                  bgcolor: glassFill,
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 500,
                  fontSize: fluidHomeHeroCta,
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
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
