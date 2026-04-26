"use client";

import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { AboutHerPathwaysToTransformation } from "./about-her-pathways-to-transformation";
import {
  aboutHerMissionCopy,
  aboutHerVisionCopy,
  aboutHerVisionMissionAssets
} from "@/modules/about-her/content/vision-mission-pathways";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import { SectionBottomArc } from "@/component/section-top-curve";


const blockHeadingFontSize = {
  xs: unitScale(32),
  md: unitScale(36),
  lg: unitScale(40)
} as const;

const blockBodyFontSize = {
  xs: unitScale(16),
  md: unitScale(18),
  lg: unitScale(20)
} as const;

const mediaRadius = unitScale(24);

/** Vision / Mission photo frame — max 500×550 (Figma intent). */
const visionMissionMediaMaxWidth = unitScale(500);
const visionMissionMediaMaxHeight = unitScale(550);

const bodyCopyMaxWidth = unitScale(560);

const visionMissionHeadingIconSize = unitScale(40);

/** Stacked breakpoints (`xs`–`lg`): match mobile-like centered band on tablet; `lg+` two-column uses start alignment. */
const visionMissionCopyPanelSx = {
  position: "relative" as const,
  p: { xs: 2, sm: 3, md: 3.5, lg: 4 },
  borderRadius: 6,
  minWidth: 0,
  zIndex: 11,
  width: "100%",
  maxWidth: { xs: "100%", md: unitScale(680), lg: "100%" },
  mx: { xs: 0, md: "auto", lg: 0 },
  textAlign: { xs: "left", md: "center", lg: "left" }
} as const;

/** Decorative SVG behind Vision / Mission copy (`public/.../mission-background.svg`). */
const visionMissionCopyPanelBgSvg = "/images/About Her Page Photos/mission-background.svg";

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

function VisionMissionCopyPanel({
  children,
  sx,
  isMission
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  isMission?: boolean;
}) {
  return (
    <Box sx={{ ...visionMissionCopyPanelSx, ...sx }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          borderRadius: "inherit",
          backgroundImage: `url("${visionMissionCopyPanelBgSvg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "min(160%, 520px) auto", md: "cover" },
          backgroundPosition: { xs: "right -12% top 20%", md: "right center" },
          opacity: { xs: 0.32, md: 1 },
          top: isMission ? 0 : "-100%",
          left: isMission ? '20%' : 0,
          width: unitScale(500),
          height: unitScale(500),
          display: {lg: 'block', xs: 'none'}

        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          borderRadius: "inherit",
          background: "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2 }}>{children}</Box>
    </Box>
  );
}

function VisionMissionHeadingWithIcon({
  heading,
  titleColor
}: {
  heading: string;
  titleColor: string;
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={{ xs: 1.25, md: 1.5 }}
      sx={{
        mb: 2,
        width: "100%",
        justifyContent: { xs: "flex-start", md: "center", lg: "flex-start" }
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "relative",
          width: visionMissionHeadingIconSize,
          height: visionMissionHeadingIconSize,
          flexShrink: 0
        }}
      >
        <Image
          alt=""
          src={encodePublicPath(aboutHerVisionMissionAssets.visionMissionHeadingIcon)}
          fill
          sizes="40px"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Typography
        component="h2"
        sx={{
          fontFamily: 'var(--font-forum), ui-serif, Georgia, serif',
          fontSize: blockHeadingFontSize,
          color: titleColor,
          fontWeight: 600,
          m: 0
        }}
      >
        {heading}
      </Typography>
    </Stack>
  );
}

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
        pt: { xs: 0, md: 10 },
        overflow: "hidden",
        background: 'linear-gradient(180deg, #D6F1F5 0%, #FFFFFF 100%)'

      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: `calc(0px - ${unitScale(60)})`, md: `calc(0px - ${unitScale(100)})` },
          left: { xs: `calc(0px - ${unitScale(40)})`, md: `calc(0px - ${unitScale(80)})` },
          width: { xs: unitScale(220), md: unitScale(320) },
          height: { xs: unitScale(220), md: unitScale(320) },
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
          right: { xs: `calc(0px - ${unitScale(60)})`, md: `calc(0px - ${unitScale(40)})` },
          width: { xs: unitScale(200), md: unitScale(280) },
          height: { xs: unitScale(200), md: unitScale(280) },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${warmOrbSoft} 0%, transparent 70%)`,
          pointerEvents: "none"
        }}
      />

      <Container maxWidth={false} sx={{ position: "relative", zIndex: 1, px: "0 !important" }}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 4,
              opacity: 0.9,
              display: {lg: 'block', xs: 'none'},
              pointerEvents: "none",
              backgroundImage: `url("${visionMissionCurveBackground}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 30%",
              backgroundSize: "100% auto"
            }}
          />
          <Box sx={{ position: "relative", zIndex: 10 }}>
            <Box
              sx={{
                // display: "grid",
                // gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1fr) minmax(0, 1fr)" },
                // gap: { xs: 3, md: 5 },
                // alignItems: "center",
                // mb: { xs: 6, md: 8 },
                // pb: { xs: 6, md: 8 },
                position: 'relative'
              }}
            >
              <Box sx={{ position: 'absolute', top: '-16%', left: '0', width: '100vw', height: '70%', background: '#fff' }}></Box>
              <Container
                maxWidth="lg"
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "minmax(0, 1fr)",
                    md: "minmax(0, 1fr)",
                    lg: "minmax(0, 1fr) minmax(0, 1fr)"
                  },
                  gap: { xs: 3, md: 4, lg: 5 },
                  alignItems: "center",
                  justifyItems: { xs: "stretch", md: "center", lg: "stretch" },
                  mb: { xs: 6, md: 8, lg: 8 },
                  pb: { xs: 6, md: 9, lg: 10 },
                  position: "relative"
                }}
              >
                <VisionMissionCopyPanel>
                  <VisionMissionHeadingWithIcon
                    heading={aboutHerVisionCopy.heading}
                    titleColor={alpha(ink, 0.92)}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: blockBodyFontSize,
                      lineHeight: { xs: 1.62, md: 1.65 },
                      color: bodyMuted,
                      maxWidth: bodyCopyMaxWidth,
                      mx: { xs: 0, md: "auto", lg: 0 },
                      textAlign: { xs: "left", md: "center", lg: "left" }
                    }}
                  >
                    {aboutHerVisionCopy.body}
                  </Typography>
                </VisionMissionCopyPanel>
                <Box
                  sx={{
                    ...visionMissionImageFrameSx,
                    zIndex: 6,
                    justifySelf: { xs: "center", md: "center", lg: "end" }
                  }}
                >
                  <Image
                    alt="Vision"
                    fill
                    sizes="(max-width: 1199px) 100vw, 50vw"
                    src={aboutHerVisionMissionAssets.vision}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Container>
              <Box sx={{ position: 'absolute', bottom: '17%', left: 0, width: '100%', display: { xs: 'none', lg: 'block' } }}>
                <SectionBottomArc surface="#fff" />

              </Box>

            </Box>

            <Box
              component={Container}
              maxWidth="lg"
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "minmax(0, 1fr)",
                  md: "minmax(0, 1fr)",
                  lg: "minmax(0, 1fr) minmax(0, 1fr)"
                },
                gap: { xs: 3, md: 4, lg: 5 },
                alignItems: "center",
                justifyItems: { xs: "stretch", md: "center", lg: "stretch" },
                pt: { xs: 0, md: 2, lg: 0 },
                pb: { xs: 5, md: 7, lg: 9 }
              }}
            >
              <Box
                sx={{
                  ...visionMissionImageFrameSx,
                  boxShadow: `0 ${unitScale(10)} ${unitScale(32)} ${mediaShadow}`,
                  order: { xs: 1, md: 1 },
                  justifySelf: { xs: "center", md: "center", lg: "start" }
                }}
              >
                <Image
                  alt="Mission"
                  fill
                    sizes="(max-width: 1199px) 100vw, 50vw"
                    src={aboutHerVisionMissionAssets.mission}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <VisionMissionCopyPanel sx={{ order: { xs: 2, md: 2 } }} isMission={true}>
                <VisionMissionHeadingWithIcon
                  heading={aboutHerMissionCopy.heading}
                  titleColor={alpha(ink, 0.92)}
                />
                <Typography
                  sx={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: blockBodyFontSize,
                    lineHeight: { xs: 1.62, md: 1.65 },
                    color: bodyMuted,
                    maxWidth: bodyCopyMaxWidth,
                    mx: { xs: 0, md: "auto", lg: 0 },
                    textAlign: { xs: "left", md: "center", lg: "left" }
                  }}
                >
                  {aboutHerMissionCopy.body}
                </Typography>
              </VisionMissionCopyPanel>
            </Box>
          </Box>
        </Box>

        <AboutHerPathwaysToTransformation />
      </Container>
    </Box>
  );
}
