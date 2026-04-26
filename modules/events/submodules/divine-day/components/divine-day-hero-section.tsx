"use client";

import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages, divineDayRegisterWhatsappHref } from "../content/divine-day-content";

const heroBackgroundFallbackSrc = "/images/footer-background.png";
const heroBackgroundVideoSrc = `/images/${encodeURIComponent("Blue Abstract Welcome Background Intro Video.mp4")}`;

export function DivineDayHeroSection() {
  const theme = useTheme();
  const ctaRadius = Number(theme.shape.borderRadius) * 1.45;

  return (
    <Box
      component="section"
      aria-labelledby="divine-day-hero-heading"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", lg: "120vh" },
        pt: { xs: unitScale(128), lg: unitScale(136) },
        pb: { xs: unitScale(48), lg: unitScale(64) },
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${heroBackgroundFallbackSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "none",
          "@media (prefers-reduced-motion: reduce)": {
            display: "block"
          }
        }}
      />
      <Box
        component="video"
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        poster={heroBackgroundFallbackSrc}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          "@media (prefers-reduced-motion: reduce)": {
            display: "none"
          }
        }}
      >
        <source src={heroBackgroundVideoSrc} type="video/mp4" />
      </Box>
      <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, ${alpha(theme.palette.primary.dark, 0.92)} 0%, ${alpha(theme.palette.primary.dark, 0.5)} 48%, ${alpha(theme.palette.primary.dark, 0.15)} 100%)` }} />
      <Box sx={{ position: "absolute", right: 0, top: 0, bottom: 0, width: { xs: "100%", lg: "50%" }, maxWidth: unitScale(820), opacity: { xs: 0.3, lg: 1 } }}>
        <Image alt="Guru Maa at Divine Day" fill priority src={divineDayImages.heroOverlap} sizes="(max-width: 1199px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
      </Box>
      <Container maxWidth={pageContainerMaxWidth} sx={{ position: "relative", zIndex: 1, py: { xs: unitScale(16), lg: unitScale(20) }, ...pageSectionGutterSx }}>
        <Box sx={{ maxWidth: { xs: "100%", lg: "70%" } }}>
          <Typography
            id="divine-day-hero-heading"
            component="h1"
            sx={{ fontFamily: "var(--font-forum), serif", textTransform: 'uppercase', fontSize: { xs: unitScale(30), sm: unitScale(38), lg: unitScale(48) }, lineHeight: 1.08, color: alpha(theme.palette.common.white, 0.95), mb: unitScale(20) }}
          >
            An Evening of Meditation, Wisdom, and Inner Calm with Guru Maa Shubha Didi
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={unitScale(12)} sx={{ mt: { xs: unitScale(24), lg: unitScale(40) } }}>
            <Button
              component="a"
              href={divineDayRegisterWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                minHeight: { xs: unitScale(44), lg: unitScale(52) },
                px: { xs: unitScale(20), lg: unitScale(28) },
                borderRadius: unitScale(ctaRadius),
                bgcolor: "#e9967b",
                color: "#1a120c",
                fontWeight: 700,
                fontSize: { xs: unitScale(16), lg: unitScale(18) },
                textTransform: "none"
              }}
            >
              Register Free
            </Button>
            {/* <Button href="/contact" variant="outlined" sx={{ minHeight: { xs: unitScale(44), lg: unitScale(52) }, px: { xs: unitScale(20), lg: unitScale(28) }, borderRadius: unitScale(ctaRadius), borderColor: alpha(theme.palette.common.white, 0.85), color: "#fff", fontWeight: 600, fontSize: { xs: unitScale(16), lg: unitScale(18) }, textTransform: "none" }}>Reserve My Spot</Button> */}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
