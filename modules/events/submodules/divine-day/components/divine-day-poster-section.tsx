"use client";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages } from "../content/divine-day-content";
import { divineDayPosterSectionContent } from "../content/divine-day-poster-section";

const POSTER_HEADING_ID = "divine-day-poster-heading";

const metaPrimaryFont = {
  xs: unitScale(22),
  sm: unitScale(26),
  md: unitScale(30)
} as const;

const metaSecondaryFont = {
  xs: unitScale(12),
  sm: unitScale(13),
  md: unitScale(14)
} as const;

const titleFont = {
  xs: unitScale(28),
  sm: unitScale(36),
  md: unitScale(44)
} as const;

const taglineFont = {
  xs: unitScale(12),
  sm: unitScale(13),
  md: unitScale(15)
} as const;

const hostFont = {
  xs: unitScale(13),
  sm: unitScale(14),
  md: unitScale(16)
} as const;

export function DivineDayPosterSection() {
  const theme = useTheme();
  const c = divineDayPosterSectionContent;
  const white = theme.palette.common.white;
  const coral = theme.palette.guru.coral;
  const ink = theme.palette.primary.dark;
  const hairline = alpha(white, 0.42);
  const bgSrc = encodePublicPath(divineDayImages.posterSectionBg);
  const posterDesktopOverlaySrc = encodePublicPath("/images/Divine day page Photos/divine.svg");

  const metaCellSx = {
    p: { xs: unitScale(14), sm: unitScale(18), md: unitScale(22) },
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    gap: unitScale(6),
    minHeight: { xs: unitScale(88), sm: unitScale(96), md: unitScale(108) }
  };

  const pillSizing = {
    minHeight: { xs: unitScale(48), md: unitScale(52) },
    px: { xs: unitScale(20), md: unitScale(28) },
    py: { xs: unitScale(10), md: unitScale(12) },
    fontSize: { xs: unitScale(14), md: unitScale(16) },
    borderRadius: 9999,
    textTransform: "none" as const,
    fontWeight: 700
  };

  return (
    <Box
      component="section"
      aria-labelledby={POSTER_HEADING_ID}
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minHeight: { xs: "auto", md: unitScale(640), lg: unitScale(1140) },
        py: { xs: unitScale(40), md: unitScale(56) }
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            "& img": {
              objectFit: "cover",
              /* BG: art left, flat black right — keep left anchored so content sits on the dark side */
              objectPosition: { xs: "28% center", md: "left center" }
            }
          }}
        >
          <Image alt="" fill src={bgSrc} sizes="100vw" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(105deg, ${alpha(ink, 0.15)} 0%, ${alpha(ink, 0.35)} 45%, ${alpha(ink, 0.55)} 100%)`
          }}
        />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          ...pageSectionGutterSx,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: { xs: unitScale(420), md: unitScale(560) }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "flex-start", md: "flex-end" },
            alignItems: "stretch",
            gap: { xs: unitScale(28), md: unitScale(32) },
            width: "100%"
          }}
        >

          <Stack
            spacing={{ xs: unitScale(28), md: unitScale(36) }}
            sx={{
              minWidth: 0,
              width: "100%",
              maxWidth: { xs: "100%", md: unitScale(560) },
              ml: { md: "auto" },
              alignItems: { xs: "stretch", md: "flex-end" }
            }}
          >
            <Box
              sx={{
                display: { xs: "grid", md: "none" },
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                maxWidth: { xs: "100%", sm: unitScale(420), md: "100%" },
                border: `1px solid ${hairline}`,
                alignSelf: { xs: "center", md: "flex-end" }
              }}
            >
              <Box sx={{ ...metaCellSx, borderRight: `1px solid ${hairline}`, borderBottom: `1px solid ${hairline}` }}>
                <Typography sx={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 700, fontSize: metaPrimaryFont, color: white, lineHeight: 1.1, textTransform: "uppercase" }}>
                  {c.meta.dateLine}
                </Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 400, fontSize: metaSecondaryFont, color: alpha(white, 0.88), textTransform: "uppercase" }}>
                  {c.meta.dateSub}
                </Typography>
              </Box>
              <Box sx={{ ...metaCellSx, borderBottom: `1px solid ${hairline}` }}>
                <Typography sx={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 700, fontSize: metaPrimaryFont, color: white, lineHeight: 1.1, textTransform: "uppercase" }}>
                  {c.meta.timeLine}
                </Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 400, fontSize: metaSecondaryFont, color: alpha(white, 0.88), textTransform: "uppercase" }}>
                  {c.meta.timeSub}
                </Typography>
              </Box>
              <Box sx={{ ...metaCellSx, borderRight: `1px solid ${hairline}` }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <FavoriteRoundedIcon sx={{ fontSize: unitScale(20), color: white, mt: unitScale(2), flexShrink: 0 }} aria-hidden />
                  <Box>
                    <Typography sx={{ fontFamily: "var(--font-forum), serif", fontWeight: 600, fontSize: metaSecondaryFont, color: white, textTransform: "uppercase" }}>
                      {c.meta.entryPrimary}
                    </Typography>
                    <Typography sx={{ mt: unitScale(6), fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: metaSecondaryFont, color: alpha(white, 0.85), textTransform: "uppercase" }}>
                      {c.meta.entrySub}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ ...metaCellSx }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <PlaceRoundedIcon sx={{ fontSize: unitScale(20), color: white, mt: unitScale(2), flexShrink: 0 }} aria-hidden />
                  <Typography sx={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, fontSize: { xs: unitScale(11), sm: unitScale(12), md: unitScale(12) }, color: white, lineHeight: 1.45, textTransform: "uppercase" }}>
                    {c.meta.venue}
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <Stack spacing={{ xs: unitScale(12), md: unitScale(16) }} sx={{ display: { xs: "block", md: "none" }, textAlign: { xs: "center", md: "right" }, alignItems: { xs: "center", md: "flex-end" } }}>
              <Typography
                id={POSTER_HEADING_ID}
                component="h2"
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontWeight: 700,
                  fontSize: titleFont,
                  lineHeight: 1.08,
                  color: coral,
                  textTransform: "uppercase",
                  textShadow: `0 0 ${unitScale(18)} ${alpha(white, 0.55)}, 0 0 ${unitScale(42)} ${alpha(ink, 0.35)}`,
                  maxWidth: { md: unitScale(520) }
                }}
              >
                {c.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontWeight: 600,
                  fontSize: taglineFont,
                  lineHeight: 1.35,
                  color: white,
                  textTransform: "uppercase",
                  letterSpacing: { xs: "0.04em", md: "0.06em" },
                  maxWidth: { md: unitScale(520) }
                }}
              >
                {c.tagline}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: hostFont,
                  color: alpha(white, 0.92),
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  maxWidth: { md: unitScale(520) }
                }}
              >
                {c.host}
              </Typography>
            </Stack>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
                // width: "100%",
                width: { md: unitScale(700), lg: unitScale(780) },
                alignSelf: "flex-end"
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 4"
                }}
              >
                <Image
                  src={posterDesktopOverlaySrc}
                  alt="Divine Day event details"
                  fill
                  sizes="(max-width: 1199px) 56vw, 820px"
                  style={{ objectFit: "contain", objectPosition: "right center" }}
                />
              </Box>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={unitScale(12)}
                flexWrap="wrap"
                useFlexGap
                justifyContent={{ xs: "center", md: "flex-start" }}
                alignItems="stretch"
                sx={{ width: "100%" }}
              >
                <Button
                  component="a"
                  href={c.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    ...pillSizing,
                    bgcolor: white,
                    color: coral,
                    boxShadow: "none",
                    "&:hover": { bgcolor: alpha(white, 0.92), boxShadow: "none" }
                  }}
                >
                  {c.primaryCta.label}
                </Button>
                <Button
                  href={c.secondaryCta.href}
                  variant="contained"
                  sx={{
                    ...pillSizing,
                    bgcolor: coral,
                    color: white,
                    boxShadow: "none",
                    "&:hover": { bgcolor: alpha(coral, 0.9), boxShadow: "none" }
                  }}
                >
                  {c.secondaryCta.label}
                </Button>
              </Stack>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={unitScale(12)}
              flexWrap="wrap"
              useFlexGap
              justifyContent={{ xs: "center", md: "flex-end" }}
              alignItems="stretch"
              sx={{ width: "100%", display: { xs: "flex", md: "none" } }}
            >
              <Button
                component="a"
                href={c.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  ...pillSizing,
                  bgcolor: white,
                  color: coral,
                  boxShadow: "none",
                  "&:hover": { bgcolor: alpha(white, 0.92), boxShadow: "none" }
                }}
              >
                {c.primaryCta.label}
              </Button>
              <Button
                href={c.secondaryCta.href}
                variant="contained"
                sx={{
                  ...pillSizing,
                  bgcolor: coral,
                  color: white,
                  boxShadow: "none",
                  "&:hover": { bgcolor: alpha(coral, 0.9), boxShadow: "none" }
                }}
              >
                {c.secondaryCta.label}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
