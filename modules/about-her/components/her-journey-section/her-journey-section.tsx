"use client";

import { Fragment } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Theme } from "@mui/material/styles";
import { alpha, useTheme } from "@mui/material/styles";
import {
  aboutHerJourneyBandGradient,
  aboutHerJourneyNavyCapsule,
  aboutHerJourneyPortraitSrc,
  aboutHerJourneySectionTitle,
  aboutHerJourneySteps
} from "@/modules/about-her/content/her-journey";
import { pxToRem } from "@/utils/px-to-rem";

const capsuleBarHeight = { xs: pxToRem(36), md: pxToRem(52) } as const;

const sectionEdgePadding = { xs: pxToRem(16), md: pxToRem(24) } as const;

const bandPadding = {
  pt: { xs: pxToRem(40), md: pxToRem(56) },
  pb: { xs: pxToRem(48), md: pxToRem(72) },
  px: sectionEdgePadding
} as const;

const headingFontSize = { xs: pxToRem(36), md: pxToRem(48) } as const;

const mobilePortraitMinHeight = pxToRem(360);
const desktopPortraitMinHeight = pxToRem(620);

const stepBadgeSize = pxToRem(48);
const stepBadgeFontSize = pxToRem(16);

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
  const connectorColor = alpha(g.aboutHerTeachingsAccent, 0.45);

  return (
    <Box
      component="section"
      aria-labelledby="about-her-journey-heading"
      sx={{
        position: "relative",
        pt: { xs: pxToRem(16), md: pxToRem(24) },
        pb: { xs: pxToRem(16), md: pxToRem(24) }
      }}
    >
      <Box
        sx={{
          position: "relative",
          background: aboutHerJourneyBandGradient,
          ...bandPadding
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            id="about-her-journey-heading"
            component="h2"
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: headingFontSize,
              color: g.aboutHerTeachingsTitle,
              mb: { xs: pxToRem(24), md: pxToRem(32) }
            }}
          >
            {aboutHerJourneySectionTitle}
          </Typography>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
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
                      width: stepBadgeSize,
                      height: stepBadgeSize,
                      borderRadius: "50%",
                      bgcolor: g.aboutHerTeachingsAccent,
                      color: theme.palette.common.white,
                      fontWeight: 700,
                      fontSize: stepBadgeFontSize,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      boxShadow: badgeShadow(theme)
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
                        fontSize: mobileStepTitleFontSize,
                        color: alpha(theme.palette.guru.ink, 0.92),
                        mb: pxToRem(8)
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
              gridTemplateColumns: `minmax(${pxToRem(260)}, ${pxToRem(380)}) ${pxToRem(72)} 1fr`,
              gridTemplateRows: "auto auto auto",
              columnGap: pxToRem(16),
              alignItems: "start"
            }}
          >
            <Box
              sx={{
                gridColumn: "1",
                gridRow: "1 / 4",
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

            {aboutHerJourneySteps.map((step, index) => (
              <Fragment key={step.num}>
                <Box
                  sx={{
                    gridColumn: "2",
                    gridRow: index + 1,
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    "&::after":
                      index < aboutHerJourneySteps.length - 1
                        ? {
                            content: '""',
                            position: "absolute",
                            top: stepBadgeSize,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: pxToRem(2),
                            height: { md: `calc(100% + ${pxToRem(24)})` },
                            bgcolor: connectorColor
                          }
                        : undefined
                  }}
                >
                  <Box
                    sx={{
                      width: stepBadgeSize,
                      height: stepBadgeSize,
                      borderRadius: "50%",
                      bgcolor: g.aboutHerTeachingsAccent,
                      color: theme.palette.common.white,
                      fontWeight: 700,
                      fontSize: stepBadgeFontSize,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      boxShadow: badgeShadow(theme),
                      zIndex: 1
                    }}
                  >
                    {step.num}
                  </Box>
                </Box>
                <Box
                  sx={{
                    gridColumn: "3",
                    gridRow: index + 1,
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
                      mb: pxToRem(8)
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
              </Fragment>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
