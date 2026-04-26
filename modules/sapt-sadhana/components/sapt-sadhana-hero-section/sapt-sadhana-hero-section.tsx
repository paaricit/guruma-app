"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { saptSadhanaHeroContent, saptSadhanaPageImages } from "@/modules/sapt-sadhana/content/sapt-sadhana-page-content";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

export function SaptSadhanaHeroSection() {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;
  const banner = encodePublicPath(saptSadhanaPageImages.banner);
  const c = saptSadhanaHeroContent;

  return (
    <Box
      component="section"
      aria-labelledby="sapt-sadhana-hero-heading"
      sx={{
        position: "relative",
        minHeight: { xs: unitScale(480), md: unitScale(680), lg: '110vh' },
        pt: { xs: unitScale(96), md: unitScale(112) },
        pb: { xs: unitScale(48), md: unitScale(64) },
        display: "flex",
        alignItems: "center"
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src={banner}
          alt="Sapt Sadhana community seva"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(180deg, ${alpha(ink, 0.45)} 0%, ${alpha(ink, 0.8)} 100%)`
        }}
        aria-hidden
      />
      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{ position: "relative", zIndex: 2, ...pageSectionGutterSx }}
      >
        <Box sx={{ maxWidth: { md: "min(720px, 85%)" } }}>
          <Typography
            id="sapt-sadhana-hero-heading"
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: theme.palette.common.white,
              fontSize: { xs: unitScale(46), md: unitScale(70) },
              fontWeight: 500,
              lineHeight: 1.05,
              mb: 1.5
            }}
          >
            {c.title}
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.common.white, 0.9),
              fontSize: { xs: unitScale(15), md: unitScale(17) },
              fontStyle: "italic",
              mb: 2
            }}
          >
            {c.tagline}
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.common.white, 0.95),
              fontSize: { xs: unitScale(18), md: unitScale(27) },
              lineHeight: 1.55,
              mb: 2.5
            }}
          >
            {c.body}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: theme.palette.common.white,
              fontSize: { xs: unitScale(18), md: unitScale(27) },
              fontStyle: "italic",
              textAlign: "right"
            }}
          >
            {c.attribution}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
