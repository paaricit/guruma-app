"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Theme } from "@mui/material/styles";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import {
  aboutHerJourneyBandGradient,
  aboutHerJourneyPortraitSrc,
  aboutHerJourneySectionTitle,
  aboutHerJourneySteps
} from "@/modules/about-her/content/her-journey";
import { pxToRem } from "@/utils/px-to-rem";

const sectionEdgePadding = { xs: pxToRem(16), md: pxToRem(24) } as const;

const bandPadding = {
  pt: { xs: pxToRem(20), md: pxToRem(28) },
  pb: { xs: pxToRem(48), md: pxToRem(72) },
  px: sectionEdgePadding
} as const;

const headingFontSize = { xs: pxToRem(36), md: pxToRem(48) } as const;

const mobilePortraitMinHeight = pxToRem(360);
const desktopPortraitMinHeight = pxToRem(620);

const stepMarkerWidth = pxToRem(52);
const stepMarkerHeight = pxToRem(116);
const stepBadgeFontSize = pxToRem(16);
const stepMarkerSrc = "/images/About Her Page Photos/her journey-icon.png" as const;
const stepRailSrc = "/images/About Her Page Photos/her-journey-icon.svg" as const;
const stepRailWidth = { md: pxToRem(150), lg: pxToRem(168) } as const;
const stepRailHeight = { md: pxToRem(420), lg: pxToRem(470) } as const;
const stepNumberBubbleSize = pxToRem(52);

const mobileStepTitleFontSize = pxToRem(17);
const mobileStepBodyFontSize = pxToRem(15);
const desktopStepTitleFontSize = pxToRem(22);
const desktopStepBodyFontSize = pxToRem(18);

const portraitRadiusMobile = pxToRem(20);
const portraitBrMobile = pxToRem(80);
const portraitRadiusDesktop = pxToRem(24);
const portraitBrDesktop = pxToRem(120);

const portraitShadow = (theme: Theme) =>
  `0 ${pxToRem(12)} ${pxToRem(36)} ${alpha(theme.palette.primary.dark, 0.12)}`;

const badgeShadow = (theme: Theme) =>
  `0 ${pxToRem(4)} ${pxToRem(14)} ${alpha(theme.palette.guru.aboutHerTeachingsAccent, 0.45)}`;

export function HerJourneySection() {
  const theme = useTheme();
  const g = theme.palette.guru;

  return (
    <Box
      component="section"
      aria-labelledby="about-her-journey-heading about-her-journey-heading-desktop"
      sx={{
        position: "relative",
      }}
    >
      <SectionTopArc surface="#D1F1F5" />
      <Box
        sx={{
          position: "relative",
          background: aboutHerJourneyBandGradient,
          ...bandPadding
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Typography
                id="about-her-journey-heading"
                component="h2"
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontSize: headingFontSize,
                  color: g.aboutHerTeachingsTitle,
                  mb: pxToRem(24),
                  textAlign: "start"
                }}
              >
                {aboutHerJourneySectionTitle}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: mobilePortraitMinHeight,
                  mb: pxToRem(24),
                  borderRadius: portraitRadiusMobile,
                  borderBottomRightRadius: portraitBrMobile,
                  overflow: "hidden",
                  boxShadow: portraitShadow(theme)
                }}
              >
                <Image
                  alt="Her journey — portrait"
                  fill
                  sizes="100vw"
                  src={aboutHerJourneyPortraitSrc}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </Box>
              {aboutHerJourneySteps.map((step) => (
                <Box key={step.num} sx={{ mb: pxToRem(24) }}>
                  <Box sx={{ display: "flex", gap: pxToRem(16), alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        width: stepMarkerWidth,
                        height: stepMarkerHeight,
                        position: "relative",
                        flexShrink: 0,
                        boxShadow: badgeShadow(theme)
                      }}
                    >
                      <Image alt="" fill sizes="52px" src={stepMarkerSrc} style={{ objectFit: "contain" }} />
                      <Typography
                        component="span"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "grid",
                          placeItems: "center",
                          color: theme.palette.common.white,
                          fontWeight: 700,
                          fontSize: stepBadgeFontSize,
                          lineHeight: 1,
                          pb: pxToRem(2)
                        }}
                      >
                        {step.num}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 700,
                          fontSize: mobileStepTitleFontSize,
                          color: alpha(theme.palette.guru.ink, 0.92),
                          mb: pxToRem(8),
                          whiteSpace: "pre-line"
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: mobileStepBodyFontSize,
                          lineHeight: 1.55,
                          color: alpha(theme.palette.guru.ink, 0.78)
                        }}
                      >
                        {step.body}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "grid" },
                gridTemplateColumns: `minmax(${pxToRem(260)}, ${pxToRem(380)}) minmax(${pxToRem(150)}, ${pxToRem(168)}) 1fr`,
                gridTemplateRows: "auto auto auto auto",
                columnGap: pxToRem(16),
                alignItems: "start"
              }}
            >
              <Box
                sx={{
                  gridColumn: "1",
                  gridRow: "1 / 5",
                  position: "relative",
                  minHeight: desktopPortraitMinHeight,
                  maxWidth: pxToRem(380),
                  width: "100%",
                  borderRadius: portraitRadiusDesktop,
                  borderBottomRightRadius: portraitBrDesktop,
                  overflow: "hidden",
                  boxShadow: portraitShadow(theme)
                }}
              >
                <Image
                  alt="Her journey — portrait"
                  fill
                  sizes="380px"
                  src={aboutHerJourneyPortraitSrc}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </Box>

              <Box
                sx={{
                  gridColumn: "2",
                  gridRow: "1 / 5",
                  position: "relative",
                  width: stepRailWidth,
                  height: stepRailHeight,
                  justifySelf: "center"
                }}
              >
                <Image alt="" fill sizes="(max-width: 1199px) 150px, 168px" src={stepRailSrc} style={{ objectFit: "contain" }} />
                {aboutHerJourneySteps.map((step, index) => (
                  <Box
                    key={`rail-${step.num}`}
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top:
                        index === 0 ? "16%" : index === 1 ? "50%" : "84%",
                      transform: "translate(-50%, -50%)",
                      width: stepNumberBubbleSize,
                      height: stepNumberBubbleSize,
                      borderRadius: "50%",
                      bgcolor: g.aboutHerTeachingsAccent,
                      color: theme.palette.common.white,
                      fontWeight: 700,
                      fontSize: stepBadgeFontSize,
                      lineHeight: 1,
                      display: "grid",
                      placeItems: "center",
                      boxShadow: badgeShadow(theme)
                    }}
                  >
                    {step.num}
                  </Box>
                ))}
              </Box>

              <Typography
                id="about-her-journey-heading-desktop"
                component="h2"
                sx={{
                  gridColumn: "3",
                  gridRow: 1,
                  pb: pxToRem(16),
                  fontFamily: "var(--font-forum), serif",
                  fontSize: headingFontSize,
                  color: g.aboutHerTeachingsTitle,
                  textAlign: "right"
                }}
              >
                {aboutHerJourneySectionTitle}
              </Typography>

              {aboutHerJourneySteps.map((step, index) => (
                <Box
                  key={step.num}
                  sx={{
                    gridColumn: "3",
                    gridRow: index + 2,
                    pb: index < aboutHerJourneySteps.length - 1 ? pxToRem(24) : 0
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: desktopStepTitleFontSize,
                      color: alpha(theme.palette.guru.ink, 0.92),
                      mb: pxToRem(8),
                      whiteSpace: "pre-line"
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: desktopStepBodyFontSize,
                      lineHeight: 1.55,
                      color: alpha(theme.palette.guru.ink, 0.78),
                      maxWidth: pxToRem(720)
                    }}
                  >
                    {step.body}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <SectionTopArc surface="#FFF" placement="bottom" />
    </Box>
  );
}
