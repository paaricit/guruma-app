"use client";

import Image from "next/image";
import { SectionWaveDivider } from "@/component/section-wave-divider";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages, divineDayWhoShouldAttendCopy } from "../content/divine-day-content";

const WHO_HEADING_ID = "divine-day-who-should-attend-heading";

export function DivineDayWhoShouldAttendSection() {
  const theme = useTheme();
  const copy = divineDayWhoShouldAttendCopy;
  const imgSrc = encodePublicPath(divineDayImages.whoOverlap);
  const lotusSrc = encodePublicPath(divineDayImages.whoSectionLotus);
  const surfaceCream = theme.palette.guru.surfaceCream;

  return (
    <Box
      component="section"
      aria-labelledby={WHO_HEADING_ID}
      sx={(t) => ({
        position: "relative",
        bgcolor: t.palette.guru.surfaceCream,
        pb: { xs: unitScale(56), lg: unitScale(88) }
      })}
    >
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", lg: "block" },
          width: "100vw",
          maxWidth: "100vw",
          ml: "calc(50% - 50vw)",
          lineHeight: 0,
          position: "absolute",
          bottom: "100%",
          left: 0,
          zIndex: 1
        }}
      >
        <SectionWaveDivider fill={surfaceCream} orientation="up" />
      </Box>
      <Box
        aria-hidden
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 48% 38% at 0% 100%, ${alpha(theme.palette.common.white, 0.35)} 0%, transparent 60%)`
        })}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          /* `unitScale` requires positive atDesign — use px for small negative offsets */
          left: { xs: "-8px", lg: unitScale(12) },
          bottom: { xs: "-12px", lg: unitScale(8) },
          width: { xs: unitScale(180), sm: unitScale(220), lg: unitScale(280) },
          height: { xs: unitScale(180), sm: unitScale(220), lg: unitScale(280) },
          zIndex: 0,
          opacity: { xs: 0.42, lg: 0.5 },
          pointerEvents: "none"
        }}
      >
        <Image alt="" src={lotusSrc} fill sizes="(max-width: 1199px) 200px, 280px" style={{ objectFit: "contain", objectPosition: "left bottom" }} />
      </Box>

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{
          position: "relative",
          zIndex: 1,
          ...pageSectionGutterSx,
          pt: { xs: unitScale(48), lg: unitScale(72) }
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.5fr) minmax(0, 0.5fr)" },
            gap: { xs: unitScale(28), lg: unitScale(48) },
            alignItems: "stretch"
          }}
        >
          <Stack spacing={{ xs: unitScale(20), lg: unitScale(24) }} sx={{ order: { xs: 2, lg: 1 }, minWidth: 0 }}>
            <Typography
              id={WHO_HEADING_ID}
              component="h2"
              sx={(theme) => ({
                fontFamily: "var(--font-forum), serif",
                fontWeight: 600,
                fontSize: { xs: unitScale(18), sm: unitScale(22), lg: unitScale(35) },
                lineHeight: 1.25,
                letterSpacing: { xs: "0.04em", lg: "0.06em" },
                textTransform: "uppercase",
                color: theme.palette.guru.aboutHerTeachingsAccent,
                // maxWidth: unitScale(640)
              })}
            >
              {copy.headline}
            </Typography>

            <Typography
              sx={(theme) => ({
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: { xs: unitScale(15), lg: unitScale(20) },
                lineHeight: 1.65,
                color: alpha(theme.palette.text.primary, 0.62),
                maxWidth: '80%'
              })}
            >
              {copy.bodyLead}
            </Typography>

            <Stack spacing={unitScale(8)}>
              {copy.bodyEmphasisLines.map((line) => (
                <Typography
                  key={line}
                  sx={(theme) => ({
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: { xs: unitScale(15), lg: unitScale(24) },
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: theme.palette.text.primary
                  })}
                >
                  {line}
                </Typography>
              ))}
            </Stack>

            <Box>
              <Button
                component="a"
                href={copy.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={(theme) => ({
                  mt: { xs: unitScale(4), lg: unitScale(8) },
                  minHeight: { xs: unitScale(48), lg: unitScale(52) },
                  px: { xs: unitScale(22), lg: unitScale(28) },
                  py: { xs: unitScale(10), lg: unitScale(12) },
                  borderRadius: unitScale(12),
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: { xs: unitScale(15), lg: unitScale(17) },
                  bgcolor: theme.palette.primary.dark,
                  color: theme.palette.common.white,
                  boxShadow: "none",
                  "&:hover": { bgcolor: alpha(theme.palette.primary.dark, 0.88), boxShadow: "none" }
                })}
              >
                {copy.ctaLabel}
              </Button>
            </Box>

            <Box
              sx={(theme) => ({
                mt: { xs: unitScale(8), lg: `${unitScale(46)} !important` },
                p: { xs: unitScale(16), lg: unitScale(20) },
                maxWidth: unitScale(520),
                borderRadius: unitScale(14),
                bgcolor: theme.palette.background.paper,
                boxShadow: `0 ${unitScale(4)} ${unitScale(24)} ${alpha(theme.palette.primary.dark, 0.08)}`,
                border: `1px solid ${alpha(theme.palette.text.primary, 0.06)}`
              })}
            >
              <Typography
                sx={(theme) => ({
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: unitScale(14), lg: unitScale(28) },
                  lineHeight: 1.5,
                  color: theme.palette.text.primary
                })}
              >
                {copy.note}
              </Typography>
            </Box>
          </Stack>


        </Box>
      </Container>
      <Box
        sx={{
          width: { xs: "100%", lg: unitScale(550) },
          minHeight: { xs: unitScale(280), lg: unitScale(420), xl: unitScale(800) },
          alignSelf: "stretch",
          display: "flex",
          /* Mobile / tablet: in-flow so the portrait does not overlap copy; lg+: overlay at right as before */
          position: { xs: "static", lg: "absolute" },
          right: { xs: "auto", lg: 0 },
          top: { xs: "auto", lg: "-50%" },
          justifyContent: { xs: "center", lg: "flex-end" },
          zIndex: { xs: 1, lg: 10 }
        }}
      >
        <Box
          sx={(theme) => ({
            position: "relative",
            width: "100%",
            maxWidth: { xs: unitScale(360), lg: "100%" },
            minHeight: { xs: unitScale(280), lg: unitScale(420), xl: unitScale(840) },
            borderTop: "none",
            borderRight: "none",
            p: { xs: unitScale(3), lg: unitScale(4) },
            boxSizing: "border-box"
          })}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: { xs: unitScale(260), lg: unitScale(400) },
              borderBottomLeftRadius: unitScale(64),
              overflow: "hidden",
            }}
          >
            <Image
              src={imgSrc}
              alt="Guru Maa Shubha Didi"
              fill
              sizes="(max-width: 1199px) 90vw, 42vw"
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
