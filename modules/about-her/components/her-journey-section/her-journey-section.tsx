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
import { unitScale } from "@/utils/unit-scale";

const sectionEdgePadding = { xs: unitScale(16), sm: unitScale(24) } as const;

const bandPadding = {
  pt: { xs: unitScale(20), sm: unitScale(28) },
  pb: { xs: unitScale(48), sm: unitScale(72) },
  px: sectionEdgePadding
} as const;

const headingFontSize = { xs: unitScale(36), sm: unitScale(48) } as const;

const mobilePortraitMinHeight = { xs: unitScale(320), sm: unitScale(360) } as const;
const desktopPortraitMinHeight = unitScale(620);

const stepMarkerWidth = { xs: unitScale(48), sm: unitScale(52) } as const;
const stepMarkerHeight = { xs: unitScale(104), sm: unitScale(116) } as const;
const stepBadgeFontSize = { xs: unitScale(14), sm: unitScale(16) } as const;
const stepMarkerSrc = "/images/About Her Page Photos/her journey-icon.png" as const;
const stepRailSrc = "/images/About Her Page Photos/her-journey-icon.svg" as const;
const stepRailWidth = { md: unitScale(140), lg: unitScale(140) } as const;
const stepRailHeight = { md: unitScale(420), lg: unitScale(470) } as const;
const stepNumberBubbleSize = unitScale(52);

const mobileStepTitleFontSize = { xs: unitScale(16), sm: unitScale(17) } as const;
const mobileStepBodyFontSize = { xs: unitScale(14), sm: unitScale(15) } as const;
const desktopStepTitleFontSize = unitScale(22);
const desktopStepBodyFontSize = unitScale(18);

const portraitRadiusMobile = { xs: unitScale(18), sm: unitScale(20) } as const;
const portraitBrMobile = { xs: unitScale(72), sm: unitScale(80) } as const;
const portraitRadiusDesktop = unitScale(24);
const portraitBrDesktop = unitScale(120);

const portraitShadow = (theme: Theme) =>
  `0 ${unitScale(12)} ${unitScale(36)} ${alpha(theme.palette.primary.dark, 0.12)}`;

const badgeShadow = (theme: Theme) =>
  `0 ${unitScale(4)} ${unitScale(14)} ${alpha(theme.palette.guru.aboutHerTeachingsAccent, 0.45)}`;

export function HerJourneySection() {
  const theme = useTheme();
  const g = theme.palette.guru;

  const desktopGridColumns = `minmax(${unitScale(260)}, ${unitScale(380)}) minmax(${unitScale(150)}, ${unitScale(168)}) 1fr`;

  return (
    <Box
      component="section"
      aria-labelledby="about-her-journey-heading about-her-journey-heading-desktop"
      sx={{
        position: "relative",
        zIndex: 111
      }}
    >
      <SectionTopArc surface="#D1F1F5" />
      <Box
        sx={{
          position: "relative",
          zIndex: 111,
          background: aboutHerJourneyBandGradient,
          ...bandPadding
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Typography
              id="about-her-journey-heading"
              component="h2"
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: headingFontSize,
                color: g.aboutHerTeachingsTitle,
                mb: unitScale(24),
                textAlign: { xs: "center", md: "left" }
              }}
            >
              {aboutHerJourneySectionTitle}
            </Typography>

            {aboutHerJourneySteps.map((step) => (
              <Box key={step.num} sx={{ mb: unitScale(24) }}>
                <Box sx={{ display: "flex", gap: unitScale(16), alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      width: stepMarkerWidth,
                      height: stepMarkerHeight,
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
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
                    boxShadow: badgeShadow(theme),
                    mr: unitScale(60)
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
                        mb: unitScale(8),
                        whiteSpace: "pre-line"
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: mobileStepBodyFontSize,
                        lineHeight: { xs: 1.52, sm: 1.55 },
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
              gridTemplateColumns: desktopGridColumns,
              gridTemplateRows: "auto auto auto auto",
              columnGap: unitScale(16),
              alignItems: "start"
            }}
          >
            <Box
              sx={{
                gridColumn: "1",
                gridRow: "1 / 5",
                position: "absolute",
                top: '-40%',
                minHeight: desktopPortraitMinHeight,
                maxWidth: unitScale(380),
                left: '-2%',
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



            <Typography
              id="about-her-journey-heading-desktop"
              component="h2"
              sx={{
                gridColumn: "3",
                gridRow: 1,
                pb: unitScale(16),
                fontFamily: "var(--font-forum), serif",
                fontSize: headingFontSize,
                color: g.aboutHerTeachingsTitle,
                textAlign: "left",
                ml: unitScale(130)
              }}
            >
              {aboutHerJourneySectionTitle}
            </Typography>

            {aboutHerJourneySteps.map((step, index) => (
              <Box
                key={step.num}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: unitScale(16),
                  gridColumn: "3",
                  gridRow: index + 2,
                  position: "relative",
                  pb: index < aboutHerJourneySteps.length - 1 ? unitScale(24) : 0
                }}
              >
                {/* {index === 0 && <Box
                  sx={{
                    position: "absolute",
                    left: '0%',
                    top: '0%',
                    width: stepRailWidth,
                    height: stepRailHeight,
                    justifySelf: "center"
                  }}
                >
                  <Image alt="" fill sizes="(max-width: 1199px) 150px, 168px" src={stepRailSrc} style={{ objectFit: "contain" }} />

                </Box>} */}
                <Box
                  key={`rail-${step.num}`}
                  sx={{
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
                    boxShadow: badgeShadow(theme),
                    mr: unitScale(60)
                  }}
                >
                  {step.num}
                </Box>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: desktopStepTitleFontSize,
                      color: alpha(theme.palette.guru.ink, 0.92),
                      mb: unitScale(8),
                      whiteSpace: "pre-line"
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: desktopStepBodyFontSize,
                      lineHeight: { xs: 1.52, sm: 1.55 },
                      color: alpha(theme.palette.guru.ink, 0.78),
                      maxWidth: unitScale(720)
                    }}
                  >
                    {step.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
