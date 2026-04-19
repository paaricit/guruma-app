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
import { pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import {
  divineDiscoursesAssets,
  divineDiscoursesCopy,
  divineDiscoursesIcons
} from "@/modules/home/content/divine-discourses-schedule";
import { HomeCornerCurveDecor } from "@/modules/home/components/home-corner-curve-decor";
import { encodePublicPath } from "@/utils/encode-public-path";

/** Fluid type — `xs` / `md` only (sm/lg caps folded into `md`). */
const scheduleDisplayTitleFontSize = {
  xs: unitScale(30),
  md: unitScale(70)
} as const;

const scheduleEyebrowFontSize = {
  xs: unitScale(14),
  md: unitScale(24)
} as const;

/** Figma 25:4787 — session row title */
const scheduleHeadingFontSize = {
  xs: unitScale(16),
  md: unitScale(18)
} as const;

/** Slot lines */
const scheduleBodyFontSize = {
  xs: unitScale(14),
  md: unitScale(17)
} as const;

/** Live badge on hero image */
const scheduleLiveBadgeFontSize = {
  xs: unitScale(13),
  md: unitScale(17)
} as const;

/** Callout body */
const scheduleCalloutFontSize = {
  xs: unitScale(17),
  md: unitScale(23)
} as const;

const scheduleCtaFontSize = {
  xs: unitScale(16),
  md: unitScale(21)
} as const;

const heroImageMinHeight = {
  xs: unitScale(280),
  md: unitScale(420)
} as const;

const backdropBlurSchedule = `blur(${unitScale(36)})`;

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
        bgcolor: (t) => '#F3F2EE',
        color: (t) => 'black',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        fontSize: scheduleHeadingFontSize,
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
      <Box
        sx={{
          position: "relative",
          width: { xs: unitScale(Math.max(14, iconSize - 4)), md: unitScale(iconSize) },
          height: { xs: unitScale(Math.max(14, iconSize - 4)), md: unitScale(iconSize) },
          flex: "0 0 auto"
        }}
      >
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
        borderTop: (t) => `${unitScale(1)} solid ${t.palette.divider}`
      }}
    >
      <HomeCornerCurveDecor />

      <SectionTopArc surface="#F3F2EE" />

      <Container
        maxWidth={'lg'}
        sx={{ position: "relative", ...pageSectionGutterSx }}
      >
        <Box sx={{ position: "relative", zIndex: 3, mt: { xs: 0, md: -10 }, pt: { xs: 0.5, md: 0 }, pb: { xs: 2, md: 3 } }}>
          <Typography
            id="divine-discourses-heading"
            component="h2"
            sx={{
              fontFamily: 'var(--font-forum), serif',
              fontWeight: 400,
              fontSize: scheduleDisplayTitleFontSize,
              lineHeight: { xs: 1.1, md: 1.2 },
              color: theme.palette.guru.ink,
              textAlign: "center"
            }}
          >
            {copy.title}
          </Typography>
          <Typography
            component="p"
            sx={{
              mt: 0.4,
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: scheduleEyebrowFontSize,
              lineHeight: 1.35,
              letterSpacing: "0.02em",
              textTransform: "none",
              textAlign: "center",
              color: theme.palette.text.primary
            }}
          >
            {copy.subtitle}
          </Typography>

          <Stack direction="row" spacing={3} sx={{ mt: 2, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {divineDiscoursesIcons.map(({ src, widthPx, heightPx }) => (
              <Box
                key={src}
                sx={{
                  position: "relative",
                  width: {
                    xs: unitScale(Math.max(24, Math.round(widthPx * 0.82))),
                    md: unitScale(widthPx)
                  },
                  height: {
                    xs: unitScale(Math.max(24, Math.round(heightPx * 0.82))),
                    md: unitScale(heightPx)
                  },
                  flex: "0 0 auto"
                }}
              >
                <Image
                  alt=""
                  fill
                  src={encodePublicPath(src)}
                  sizes={`${Math.ceil(widthPx)}px`}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ))}
          </Stack>
        </Box>

        <Card
          sx={{
            mt: 4,
            borderRadius: unitScale(21.12),
            border: `${unitScale(1.3)} solid ${cardBorder}`,
            boxShadow: "none",
            p: { xs: 1.5, md: 2.25 },
            background: "linear-gradient(180deg, #D1F1F5 0%, #FCFCF6 100%)",
            overflow: "hidden",
            position: "relative",
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
                borderRadius: unitScale(10),
                overflow: "hidden",
                minHeight: heroImageMinHeight
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
                  top: unitScale(12),
                  left: unitScale(12),
                  maxWidth: `calc(100% - ${unitScale(24)})`,
                  px: 1.75,
                  py: 0.65,
                  borderRadius: "999px",
                  backdropFilter: backdropBlurSchedule,
                  bgcolor: (t) => alpha(t.palette.background.paper, 0.9),
                  border: (t) => `${unitScale(1)} solid ${alpha(t.palette.divider, 0.25)}`
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: { xs: unitScale(8), md: unitScale(10) },
                    height: { xs: unitScale(8), md: unitScale(10) },
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
                    fontSize: scheduleLiveBadgeFontSize,
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

            <Box sx={{ py: { xs: 0.5, md: 0.75 }, pl: { xs: 0, md: 4 }, minWidth: 0, width: {xs: "100%", lg: "90%"} }}>
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
                        fontSize: scheduleHeadingFontSize,
                        lineHeight: 1.45,
                        letterSpacing: "-0.015em",
                        color: scheduleHeadingColor
                      }}
                    >
                      {offline.heading}
                    </Typography>
                  </IconTextRow>
                  {/* One calendar icon for all offline slots; note sits under the times */}
                  <Stack direction="row" spacing={1} sx={{ alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: unitScale(20), md: unitScale(22) },
                        height: { xs: unitScale(20), md: unitScale(22) },
                        flexShrink: 0,
                        mt: unitScale(2)
                      }}
                    >
                      <Image alt="" fill src={assets.calendarIcon} sizes="22px" style={{ objectFit: "contain" }} />
                    </Box>
                    <Stack spacing={0.65} sx={{ minWidth: 0 }}>
                      {offline.slots.map((line) => (
                        <Typography
                          key={line}
                          sx={{
                            fontFamily: inter,
                            fontWeight: 400,
                            fontSize: scheduleBodyFontSize,
                            lineHeight: 1.6,
                            letterSpacing: "-0.01em",
                            color: scheduleMutedColor
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                      <Typography
                        sx={{
                          fontFamily: inter,
                          fontWeight: 400,
                          fontSize: scheduleBodyFontSize,
                          lineHeight: 1.6,
                          color: scheduleAccentColor,
                          mt: 0.35
                        }}
                      >
                        {offline.note}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack spacing={1.75}>
                  <SchedulePill label={online.pill} />
                  <IconTextRow iconSrc={assets.profileIcon} iconSize={22}>
                    <Typography
                      sx={{
                        fontFamily: inter,
                        fontWeight: 400,
                        fontSize: scheduleHeadingFontSize,
                        lineHeight: 1.45,
                        letterSpacing: "-0.015em",
                        color: scheduleHeadingColor
                      }}
                    >
                      {online.heading}
                    </Typography>
                  </IconTextRow>
                  {/* One calendar icon; weekdays line, then time line */}
                  <Stack direction="row" spacing={1} sx={{ alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: unitScale(20), md: unitScale(22) },
                        height: { xs: unitScale(20), md: unitScale(22) },
                        flexShrink: 0,
                        mt: unitScale(2)
                      }}
                    >
                      <Image alt="" fill src={assets.calendarIcon} sizes="22px" style={{ objectFit: "contain" }} />
                    </Box>
                    <Stack spacing={0.65} sx={{ minWidth: 0 }}>
                      {online.slots.map((line) => (
                        <Typography
                          key={line}
                          sx={{
                            fontFamily: inter,
                            fontWeight: 400,
                            fontSize: scheduleBodyFontSize,
                            lineHeight: 1.6,
                            letterSpacing: "-0.01em",
                            color: scheduleMutedColor
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </Box>

              <Box sx={{ mt: { xs: 2, md: 2.5 }, p: { xs: 1.75, md: 2 }, borderRadius: unitScale(10), bgcolor: '#FFFFFFB2' }}>
                <Typography
                  component="p"
                  sx={{
                    m: 0,
                    fontFamily: inter,
                    fontWeight: 400,
                    fontSize: scheduleCalloutFontSize,
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
                  minHeight: { xs: unitScale(52), md: unitScale(56) },
                  py: 1.25,
                  borderRadius: unitScale(11.36),
                  textTransform: "none",
                  fontFamily: inter,
                  fontWeight: 500,
                  fontSize: scheduleCtaFontSize,
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
