"use client";

import Link from "next/link";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { sessionsHeroContent } from "@/modules/sessions/content/sessions-hero";
import {
  homeHeroImageLayerSx,
  homeHeroMobileGradientBackdropSx,
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidHeroBadgeLabel,
  sessionsFluidHeroDisplay,
  sessionsFluidHeroLeadMaxWidth,
  sessionsFluidHeroSublead
} from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const bannerSrc = encodePublicPath(sessionsHeroContent.bannerSrc);

export function SessionsHeroSection() {
  const theme = useTheme();
  const ctaRadius = Number(theme.shape.borderRadius) * 1.45;
  const ink = theme.palette.primary.dark;
  const titleOnDark = alpha(theme.palette.common.white, 0.98);
  const bodyOnDark = alpha(theme.palette.common.white, 0.98);

  return (
    <Box
      component="section"
      aria-labelledby="sessions-hero-heading"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "auto", md: "120vh" },
        bgcolor: { xs: "primary.dark", md: "transparent" },
        pt: { xs: unitScale(128), md: unitScale(136) },
        pb: { xs: 12, md: unitScale(48) },
        overflow: "hidden"
      }}
    >
      <Box sx={homeHeroMobileGradientBackdropSx(theme)} aria-hidden />
      <Box sx={homeHeroImageLayerSx(theme, bannerSrc)} aria-hidden />
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
          mb: { xs: unitScale(50), md: unitScale(100) },
          ...pageSectionGutterSx
        }}
      >
        <Box
          sx={{
            width: "100%",
            py: { xs: 1, md: 0 },
            pb: { xs: 1, md: 4 }
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: unitScale(720) }, textAlign: "left" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: { xs: unitScale(10), sm: unitScale(12), md: unitScale(14) },
                px: { xs: unitScale(14), sm: unitScale(16), md: unitScale(20) },
                py: { xs: unitScale(8), sm: unitScale(9), md: unitScale(10) },
                mb: { xs: unitScale(14), sm: unitScale(16), md: unitScale(18) },
                bgcolor: alpha(theme.palette.common.white, 0.8),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                borderRadius: 9999,
                boxSizing: "border-box"
              }}
            >
              <AutoAwesomeOutlinedIcon
                sx={{
                  color: ink,
                  fontSize: { xs: unitScale(22), sm: unitScale(24), md: unitScale(26) },
                  flexShrink: 0
                }}
                aria-hidden
              />
              <Typography
                component="p"
                sx={{
                  color: ink,
                  fontWeight: 500,
                  fontSize: sessionsFluidHeroBadgeLabel,
                  lineHeight: 1.35,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  letterSpacing: { md: "-0.01em" },
                  m: 0
                }}
              >
                {sessionsHeroContent.badgeLabel}
              </Typography>
            </Box>

            <Typography
              id="sessions-hero-heading"
              component="h1"
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: sessionsFluidHeroDisplay,
                lineHeight: { xs: 1.05, sm: 1.02, md: 1.12 },
                color: titleOnDark,
                fontWeight: 400,
                m: 0
              }}
            >
              {sessionsHeroContent.title}
            </Typography>

            <Typography
              component="p"
              sx={{
                mt: { xs: unitScale(16), sm: unitScale(18), md: unitScale(20) },
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: sessionsFluidHeroSublead,
                lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 },
                color: bodyOnDark,
                maxWidth: sessionsFluidHeroLeadMaxWidth,
                whiteSpace: "pre-wrap",
                m: 0
              }}
            >
              {sessionsHeroContent.lead}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: { xs: 3.5, md: 6 }, width: "100%", alignItems: { xs: "stretch", sm: "center" } }}
            >
              <Button
                component={Link}
                href={sessionsHeroContent.primaryCta.href}
                variant="contained"
                disableElevation
                sx={{
                  minHeight: { xs: unitScale(44), md: unitScale(52) },
                  px: { xs: unitScale(24), md: unitScale(31) },
                  borderRadius: unitScale(ctaRadius),
                  bgcolor: sessionsHeroContent.ctaSurface,
                  color: sessionsHeroContent.ctaInk,
                  fontWeight: 500,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: { xs: unitScale(16), md: unitScale(18) },
                  letterSpacing: { md: "-0.012em" },
                  textTransform: "none",
                  boxShadow: "none",
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  textAlign: "center",
                  "&:hover": {
                    bgcolor: alpha(sessionsHeroContent.ctaSurface, 0.92),
                    color: sessionsHeroContent.ctaInk,
                    boxShadow: "none"
                  }
                }}
              >
                {sessionsHeroContent.primaryCta.label}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
