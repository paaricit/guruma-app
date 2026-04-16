"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { AboutHerPathwaysToTransformation } from "./about-her-pathways-to-transformation";
import {
  aboutHerMissionCopy,
  aboutHerVisionCopy,
  aboutHerVisionMissionAssets
} from "@/modules/about-her/content/vision-mission-pathways";
import { pxToRem } from "@/utils/px-to-rem";

const blockHeadingFontSize = {
  xs: pxToRem(32),
  md: pxToRem(40)
} as const;

const blockBodyFontSize = {
  xs: pxToRem(16),
  md: pxToRem(20)
} as const;

const mediaRadius = pxToRem(24);

/** Vision / Mission photo frame — max 500×550 (Figma intent). */
const visionMissionMediaMaxWidth = pxToRem(500);
const visionMissionMediaMaxHeight = pxToRem(550);

const visionMissionImageFrameSx = {
  position: "relative" as const,
  width: "100%",
  maxWidth: visionMissionMediaMaxWidth,
  maxHeight: visionMissionMediaMaxHeight,
  aspectRatio: "500 / 550",
  borderRadius: mediaRadius,
  overflow: "hidden",
  minWidth: 0
};

/** Decorative curve over Vision/Mission band (`url(...)` quoted — path contains spaces). */
const visionMissionCurveBackground =
  "/images/About Her Page Photos/curve-mission.svg";

export function AboutHerVisionMissionPathwaysSection() {
  const theme = useTheme();
  const ink = theme.palette.guru.ink;
  const bodyMuted = alpha(ink, 0.78);
  const mediaShadow = alpha(theme.palette.primary.dark, 0.1);
  const warmOrb = alpha(theme.palette.guru.warm, 0.2);
  const warmOrbSoft = alpha(theme.palette.guru.warm, 0.12);

  return (
    <Box
      component="section"
      aria-labelledby="about-her-pathways-heading"
      sx={{
        position: "relative",
        bgcolor: '',
        pt: { xs: 6, md: 10 },
        overflow: "hidden",
        background: '#f2f1ed'

      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: pxToRem(-60), md: pxToRem(-100) },
          left: { xs: pxToRem(-40), md: pxToRem(-80) },
          width: { xs: pxToRem(220), md: pxToRem(320) },
          height: { xs: pxToRem(220), md: pxToRem(320) },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${warmOrb} 0%, transparent 70%)`,
          pointerEvents: "none"
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: { xs: "20%", md: "15%" },
          right: { xs: pxToRem(-60), md: pxToRem(-40) },
          width: { xs: pxToRem(200), md: pxToRem(280) },
          height: { xs: pxToRem(200), md: pxToRem(280) },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${warmOrbSoft} 0%, transparent 70%)`,
          pointerEvents: "none"
        }}
      />

      <Container maxWidth={false} sx={{ position: "relative", zIndex: 1, px: "0 !important" }}>
        <Box
          sx={{
            position: "relative",
            background: '#f2f1ed'
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              opacity: 0.9,
              pointerEvents: "none",
              backgroundImage: `url("${visionMissionCurveBackground}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              backgroundSize: "100% auto"
            }}
          />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1fr) minmax(0, 1fr)" },
                gap: { xs: 3, sm: 4, md: 5 },
                alignItems: "center",
                mb: { xs: 6, md: 8 }
              }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: 'var(--font-forum), ui-serif, Georgia, serif',
                    fontSize: blockHeadingFontSize,
                    color: alpha(ink, 0.92),
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {aboutHerVisionCopy.heading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: blockBodyFontSize,
                    lineHeight: 1.65,
                    color: bodyMuted,
                    maxWidth: pxToRem(560)
                  }}
                >
                  {aboutHerVisionCopy.body}
                </Typography>
              </Box>
              <Box
                sx={{
                  ...visionMissionImageFrameSx,
                  boxShadow: `0 ${pxToRem(10)} ${pxToRem(32)} ${mediaShadow}`,
                  justifySelf: { xs: "center", md: "end" }
                }}
              >
                <Image
                  alt="Vision"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={aboutHerVisionMissionAssets.vision}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1fr) minmax(0, 1fr)" },
                gap: { xs: 3, sm: 4, md: 5 },
                alignItems: "center",
                pb: { xs: 5, sm: 6, md: 9 }
              }}
            >
              <Box
                sx={{
                  ...visionMissionImageFrameSx,
                  boxShadow: `0 ${pxToRem(10)} ${pxToRem(32)} ${mediaShadow}`,
                  order: { xs: 1, md: 1 },
                  justifySelf: { xs: "center", md: "start" }
                }}
              >
                <Image
                  alt="Mission"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={aboutHerVisionMissionAssets.mission}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ order: { xs: 2, md: 2 }, minWidth: 0 }}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: 'var(--font-forum), ui-serif, Georgia, serif',
                    fontSize: blockHeadingFontSize,
                    color: alpha(ink, 0.92),
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {aboutHerMissionCopy.heading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: blockBodyFontSize,
                    lineHeight: 1.65,
                    color: bodyMuted,
                    maxWidth: pxToRem(560)
                  }}
                >
                  {aboutHerMissionCopy.body}
                </Typography>
              </Box>
            </Box>
            </Container>
          </Box>
        </Box>

        <AboutHerPathwaysToTransformation />
      </Container>
    </Box>
  );
}
