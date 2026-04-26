"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import { saptSadhanaIntroContent } from "@/modules/sapt-sadhana/content/sapt-sadhana-page-content";
import { pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

function SaptSadhanaIntroWaveDecoration() {
  const waveSrc = encodePublicPath("/images/Home Page Photos/sapt -sadhana-icon.svg");
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 3 }} aria-hidden>
      <Box
        sx={{
          position: "relative",
          width: { xs: unitScale(170), md: unitScale(210) },
          height: { xs: unitScale(52), md: unitScale(60) }
        }}
      >
        <Image src={waveSrc} alt="" fill sizes="210px" style={{ objectFit: "contain" }} />
      </Box>
    </Box>
  );
}

export function SaptSadhanaIntroSection() {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;
  const c = saptSadhanaIntroContent;
  const washTop = "#D1F1F5";
  const washMid = "#F1F1ED";
  const washBottom = "#FFFFFF";
  const curveFill = "#D1F1F5";

  return (
    <Box
      component="section"
      aria-labelledby="sapt-sadhana-intro-heading"
      sx={{
        background: `linear-gradient(180deg, ${washTop} 0%, ${washMid} 50%, ${washBottom} 100%)`,
        pt: { xs: unitScale(56), md: unitScale(80), lg: unitScale(20) },
        pb: { xs: unitScale(56), md: unitScale(100), lg: unitScale(180) },
        /** Horizontal rhythm: `pageSectionGutterSx` on `Container` only (avoids double gutters + keeps arcs full-bleed). */
        position: "relative"
      }}
    >
      <SectionTopArc surface={washTop} />
      <Container maxWidth="lg" sx={{ ...pageSectionGutterSx }}>
        <Typography
          id="sapt-sadhana-intro-heading"
          sx={{
            color: ink,
            fontSize: { xs: unitScale(30), md: unitScale(45) },
            fontWeight: 500,
            textAlign: "center",
            mb: 8,
            lineHeight: 1.2
          }}
        >
          <Box component="span" sx={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            {c.kickerLead}
          </Box>
          <Box component="span" sx={{ fontFamily: "var(--font-forum), serif" }}>
            {c.kickerAccent}
          </Box>
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: alpha(theme.palette.text.primary, 0.88),
            fontSize: { xs: unitScale(18), md: unitScale(24) },
            lineHeight: 1.45,
            fontStyle: "italic",
            maxWidth: { xs: "100%", md: "80%" },
            mx: "auto",
            mb: 8
          }}
        >
          <Box component="span" sx={{ fontWeight: 700 }}>
            {c.leadEmphasis}
          </Box>{" "}
          {c.leadRest}
        </Typography>

        <SaptSadhanaIntroWaveDecoration />

        <Typography
          sx={{
            textAlign: "center",
            color: alpha(theme.palette.text.primary, 0.78),
            fontSize: { xs: unitScale(17), md: unitScale(22) },
            lineHeight: 1.7,
            mt: 8,
            mb: 8,
            maxWidth: { xs: "100%", md: "80%" },
            mx: "auto",
          }}
        >
          {c.body}
        </Typography>

        <Typography
          sx={{
            fontFamily: "var(--font-forum), serif",
            textAlign: "center",
            color: ink,
            fontWeight: 600,
            fontSize: { xs: unitScale(24), md: unitScale(38) }
          }}
        >
          {c.closing}
        </Typography>
      </Container>
    </Box>
  );
}
