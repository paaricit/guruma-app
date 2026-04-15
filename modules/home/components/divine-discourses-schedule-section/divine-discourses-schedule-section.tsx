"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import {
  fluidSectionBody,
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sectionDisplayTitleSx,
  sectionEyebrowSx
} from "@/theme/page-section";
import {
  divineDiscoursesAssets,
  divineDiscoursesCopy,
  divineDiscoursesIcons
} from "@/modules/home/content/divine-discourses-schedule";

/** Figma 25:4787 — session row title (~18px) */
const fluidScheduleHeading = "clamp(1rem, 0.38vw + 0.88rem, 1.125rem)";
/** Figma — callout (~22.76px), line ~32.8px */
const fluidCalloutBody = "clamp(1.0625rem, 0.75vw + 0.82rem, 1.422rem)";
/** Figma — CTA (~21px) */
const fluidScheduleCta = "clamp(1rem, 0.55vw + 0.85rem, 1.3125rem)";

/** Corner decor: `next/image` ×2 — top-right and bottom-left (same asset). */
const CURVE_DECOR_SRC = "/images/Home Page Photos/wisdom_action.png";

const curveDecorBoxSx = {
  position: "absolute" as const,
  zIndex: 0,
  pointerEvents: "none" as const,
  overflow: "hidden" as const,
  width: '30%',
  height: '50%'
};

function SchedulePill({ label }: { label: string }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2.25, md: 2.75 },
        py: { xs: 1, md: 1.1 },
        borderRadius: "999px",
        bgcolor: (t) => alpha(t.palette.guru.warm, 0.14),
        color: (t) => alpha(t.palette.guru.warm, 0.92),
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        fontSize: fluidScheduleHeading,
        fontWeight: 400,
        lineHeight: 1.45,
        letterSpacing: "-0.01em"
      }}
    >
      {label}
    </Box>
  );
}

function IconTextRow({
  iconSrc,
  children,
  iconSize = 16,
  gap = 1
}: {
  iconSrc: string;
  children: ReactNode;
  iconSize?: number;
  gap?: number;
}) {
  return (
    <Stack direction="row" spacing={gap} sx={{ alignItems: "center" }}>
      <Box sx={{ position: "relative", width: iconSize, height: iconSize, flex: "0 0 auto" }}>
        <Image alt="" fill src={iconSrc} sizes={`${iconSize}px`} style={{ objectFit: "contain" }} />
      </Box>
      {children}
    </Stack>
  );
}

export function DivineDiscoursesScheduleSection() {
  const theme = useTheme();
  const ink = theme.palette.guru.ink;
  const inter = 'var(--font-inter), system-ui, sans-serif';
  /** Figma #353535 */
  const scheduleHeadingColor = alpha(theme.palette.text.primary, 0.82);
  /** Figma #555 */
  const scheduleMutedColor = alpha(theme.palette.text.primary, 0.64);
  /** Figma #e9967b */
  const scheduleAccentColor = alpha(theme.palette.guru.warm, 0.95);
  const cardBorder = alpha(theme.palette.primary.main, 0.15);
  /** Figma rgba(255,237,226,0.5) */
  const calloutBg = alpha(theme.palette.guru.warm, 0.28);
  const { offline, online } = divineDiscoursesCopy;
  const assets = divineDiscoursesAssets;
  const copy = divineDiscoursesCopy;

  return (
    <Box
      component="section"
      aria-labelledby="divine-discourses-heading"
      sx={{
        position: "relative",
        zIndex: 2,
        isolation: "isolate",
        bgcolor: "#F3F2EE",
        mt: { xs: 1, md: 2 },
        pt: { xs: 2, md: 2.5 },
        pb: { xs: 8, md: 9 },
        overflow: "visible",
        borderTop: (t) => `1px solid ${t.palette.divider}`
      }}
    >
      <Box aria-hidden sx={{
        ...curveDecorBoxSx,
        top: '-10%',
        right: '-8%',
        zIndex: 11
        
      }}>
        <Image
          alt=""
          src={CURVE_DECOR_SRC}
          fill
          sizes="300px"
          style={{ objectFit: "cover", objectPosition: "right top" }}
        />
      </Box>
      <Box aria-hidden sx={{ ...curveDecorBoxSx,  bottom: '0%',
        left: '-8%', zIndex: 1 }}>
        <Image
          alt=""
          src={CURVE_DECOR_SRC}
          fill
          sizes="300px"
          style={{ objectFit: "cover", objectPosition: "left bottom", transform: "rotate(180deg)" }}
        />
      </Box>

      <SectionTopArc surface="#F3F2EE" />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{ position: "relative", ...pageSectionGutterSx }}
      >
        <Box sx={{ position: "relative", zIndex: 3, mt: { xs: 0, md: -10 }, pt: { xs: 0.5, md: 0 }, pb: { xs: 2, md: 3 } }}>
          <Typography id="divine-discourses-heading" component="h2" sx={sectionDisplayTitleSx(theme)}>
            {copy.title}
          </Typography>
          <Typography
            component="p"
            sx={{
              mt: 0.4,
              ...sectionEyebrowSx(theme, { uppercase: false, fontWeight: 700 })
            }}
          >
            {copy.subtitle}
          </Typography>

          <Stack direction="row" spacing={3} sx={{ mt: 2, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {divineDiscoursesIcons.map((src) => (
              <Box key={src} sx={{ position: "relative", width: 80, height: 40 }}>
                <Image alt="" fill src={src} sizes="80px" style={{ objectFit: "contain" }} />
              </Box>
            ))}
          </Stack>
        </Box>

        <Card
          sx={{
            mt: 4,
            borderRadius: "1.32rem",
            border: `1.3px solid ${cardBorder}`,
            boxShadow: "none",
            p: { xs: 1.5, md: 2.25 },
            bgcolor: (t) => t.palette.background.paper,
            overflow: "hidden",
            position: 'relative',
            zIndex: 39
          }}
        >
          <Box
            sx={{
              display: "grid",
              /* Figma 25:4787 — image ~40%, content ~60% */
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 40%) minmax(0, 60%)" },
              gap: { xs: 2, md: 3 },
              alignItems: "stretch"
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0.625rem",
                overflow: "hidden",
                minHeight: { xs: 280, md: 420 }
              }}
            >
              <Image
                alt="Divine discourse session preview"
                fill
                src={assets.heroImage}
                sizes="(max-width: 900px) 100vw, 38vw"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  maxWidth: "calc(100% - 1.5rem)",
                  px: 1.75,
                  py: 0.65,
                  borderRadius: "999px",
                  backdropFilter: "blur(36px)",
                  bgcolor: (t) => alpha(t.palette.background.paper, 0.9),
                  border: (t) => `1px solid ${alpha(t.palette.divider, 0.25)}`
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    flexShrink: 0,
                    bgcolor: (t) => t.palette.error.main
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontFamily: inter,
                    fontWeight: 400,
                    fontSize: "clamp(0.8125rem, 0.35vw + 0.72rem, 1.05rem)",
                    lineHeight: 1.2,
                    color: (t) => t.palette.text.primary
                  }}
                >
                  {copy.liveBadgePrefix}
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {copy.liveBadgeEmphasis}
                  </Box>
                </Typography>
              </Stack>
            </Box>

            <Box sx={{ py: { xs: 0.5, md: 0.75 }, minWidth: 0, width: {xs: "100%", lg: "90%"} }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                  gap: { xs: 2.5, md: 3 },
                  columnGap: { md: 4 }
                }}
              >
                <Stack spacing={1.75}>
                  <SchedulePill label={offline.pill} />
                  <IconTextRow iconSrc={assets.profileIcon} iconSize={22}>
                    <Typography
                      sx={{
                        fontFamily: inter,
                        fontWeight: 400,
                        fontSize: fluidScheduleHeading,
                        lineHeight: 1.45,
                        letterSpacing: "-0.015em",
                        color: scheduleHeadingColor
                      }}
                    >
                      {offline.heading}
                    </Typography>
                  </IconTextRow>
                  <Stack spacing={0.65}>
                    {offline.slots.map((line) => (
                      <IconTextRow key={line} iconSrc={assets.calendarIcon} iconSize={22}>
                        <Typography
                          sx={{
                            fontFamily: inter,
                            fontWeight: 400,
                            fontSize: fluidSectionBody,
                            lineHeight: 1.6,
                            letterSpacing: "-0.01em",
                            color: scheduleMutedColor
                          }}
                        >
                          {line}
                        </Typography>
                      </IconTextRow>
                    ))}
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: inter,
                      fontWeight: 400,
                      fontSize: fluidSectionBody,
                      lineHeight: 1.6,
                      color: scheduleAccentColor,
                      pl: { xs: 0, md: 0 },
                      mt: -0.25
                    }}
                  >
                    {offline.note}
                  </Typography>
                </Stack>

                <Stack spacing={1.75}>
                  <SchedulePill label={online.pill} />
                  <IconTextRow iconSrc={assets.profileIcon} iconSize={22}>
                    <Typography
                      sx={{
                        fontFamily: inter,
                        fontWeight: 400,
                        fontSize: fluidScheduleHeading,
                        lineHeight: 1.45,
                        letterSpacing: "-0.015em",
                        color: scheduleHeadingColor
                      }}
                    >
                      {online.heading}
                    </Typography>
                  </IconTextRow>
                  <Stack spacing={0.65}>
                    {online.slots.map((line) => (
                      <IconTextRow key={line} iconSrc={assets.calendarIcon} iconSize={22}>
                        <Typography
                          sx={{
                            fontFamily: inter,
                            fontWeight: 400,
                            fontSize: fluidSectionBody,
                            lineHeight: 1.6,
                            letterSpacing: "-0.01em",
                            color: scheduleMutedColor
                          }}
                        >
                          {line}
                        </Typography>
                      </IconTextRow>
                    ))}
                  </Stack>
                </Stack>
              </Box>

              <Box sx={{ mt: { xs: 2, md: 2.5 }, p: { xs: 1.75, md: 2 }, borderRadius: "10px", bgcolor: calloutBg }}>
                <Typography
                  component="p"
                  sx={{
                    m: 0,
                    fontFamily: inter,
                    fontWeight: 400,
                    fontSize: fluidCalloutBody,
                    lineHeight: 1.44,
                    letterSpacing: "-0.02em",
                    color: ink
                  }}
                >
                  {copy.calloutBody}
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    *{copy.calloutEmphasis}*
                  </Box>
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2.5,
                  minHeight: { xs: 52, md: 56 },
                  py: 1.25,
                  borderRadius: "0.71rem",
                  textTransform: "none",
                  fontFamily: inter,
                  fontWeight: 500,
                  fontSize: fluidScheduleCta,
                  letterSpacing: "-0.02em",
                  bgcolor: ink,
                  "&:hover": { bgcolor: alpha(ink, 0.92) }
                }}
              >
                {copy.cta}
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
