"use client";

import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages } from "../content/divine-day-content";

export function DivineDayHeroSection() {
  const theme = useTheme();
  const ctaRadius = Number(theme.shape.borderRadius) * 1.45;

  return (
    <Box
      component="section"
      aria-labelledby="divine-day-hero-heading"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "120vh" },
        pt: { xs: unitScale(128), md: unitScale(136) },
        pb: { xs: unitScale(48), md: unitScale(64) },
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, ${alpha(theme.palette.primary.dark, 0.92)} 0%, ${alpha(theme.palette.primary.dark, 0.5)} 48%, ${alpha(theme.palette.primary.dark, 0.15)} 100%)` }} />
      <Box sx={{ position: "absolute", right: 0, top: 0, bottom: 0, width: { xs: "100%", md: "50%" }, maxWidth: unitScale(820), opacity: { xs: 0.3, md: 1 } }}>
        <Image alt="Guru Maa at Divine Day" fill priority src={divineDayImages.heroOverlap} sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
      </Box>
      <Container maxWidth={pageContainerMaxWidth} sx={{ position: "relative", zIndex: 1, py: { xs: unitScale(16), md: unitScale(20) }, ...pageSectionGutterSx }}>
        <Box sx={{ maxWidth: { xs: "100%", md: "min(54%, 680px)" } }}>
          <Typography
            id="divine-day-hero-heading"
            component="h1"
            sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: unitScale(30), sm: unitScale(38), md: unitScale(48) }, lineHeight: 1.08, color: alpha(theme.palette.common.white, 0.95), mb: unitScale(20) }}
          >
            An Evening of Meditation, Wisdom, and Inner Calm with Guru Maa Shubha Didi
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={unitScale(12)} sx={{ mt: { xs: unitScale(24), md: unitScale(40) } }}>
            <Button href="/contact" variant="contained" sx={{ minHeight: { xs: unitScale(44), md: unitScale(52) }, px: { xs: unitScale(20), md: unitScale(28) }, borderRadius: unitScale(ctaRadius), bgcolor: "#e9967b", color: "#1a120c", fontWeight: 700, fontSize: { xs: unitScale(16), md: unitScale(18) }, textTransform: "none" }}>Register Free</Button>
            <Button href="/contact" variant="outlined" sx={{ minHeight: { xs: unitScale(44), md: unitScale(52) }, px: { xs: unitScale(20), md: unitScale(28) }, borderRadius: unitScale(ctaRadius), borderColor: alpha(theme.palette.common.white, 0.85), color: "#fff", fontWeight: 600, fontSize: { xs: unitScale(16), md: unitScale(18) }, textTransform: "none" }}>Reserve My Spot</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
