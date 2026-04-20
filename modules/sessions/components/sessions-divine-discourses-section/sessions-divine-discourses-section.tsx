"use client";

import Image from "next/image";
import Link from "next/link";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import { sessionsDivineDiscoursesContent } from "@/modules/sessions/content/sessions-divine-discourses";
import { sessionsImages } from "@/modules/sessions/content/sessions-images";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidCtaLabel,
  sessionsFluidDivineDiscoursesBody,
  sessionsFluidDivineDiscoursesTitle,
  sessionsFluidPlayButton,
  sessionsFluidPlayIcon,
  sessionsGridGapMd,
  sessionsMediaMinHeightVideo,
  sessionsSectionPySm,
  sessionsSectionPyTight
} from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

/** Figma ~50px corner radius on video tile. */
const divineVideoRadius = {
  xs: unitScale(24),
  sm: unitScale(32),
  md: unitScale(50)
} as const;

export function SessionsDivineDiscoursesSection() {
  const theme = useTheme();
  const thumbSrc = encodePublicPath(sessionsImages.videoThumb);
  const ctaRadius = Number(theme.shape.borderRadius) * 1.45;
  const bandTop = theme.palette.primary.light;
  const bodyInk = alpha(theme.palette.text.primary, 0.82);
  const cardShadow = alpha(theme.palette.primary.dark, 0.12);

  return (
    <Box
      component="section"
      aria-labelledby="sessions-divine-discourses-heading"
      sx={{
        position: "relative",
        zIndex: 2,
        overflow: "visible",
        background: 'linear-gradient(180deg, #D1F1F5 0%, #FFF 100%)',
        pt: { xs: 1.5, md: 2 },
        pb: sessionsSectionPySm
      }}
    >
      <SectionTopArc surface="primaryLight" />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx, pt: sessionsSectionPyTight }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "minmax(0, 1.05fr) minmax(0, 0.95fr)" },
            gap: sessionsGridGapMd,
            alignItems: "center"
          }}
        >
          <Box>
            <Typography
              id="sessions-divine-discourses-heading"
              component="h2"
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontWeight: 400,
                fontSize: sessionsFluidDivineDiscoursesTitle,
                lineHeight: { xs: 1.12, sm: 1.1, md: 1.05 },
                color: theme.palette.text.secondary,
                mb: { xs: unitScale(14), sm: unitScale(16), md: unitScale(18) }
              }}
            >
              {sessionsDivineDiscoursesContent.heading}
            </Typography>
            <Typography
              component="p"
              sx={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 400,
                fontSize: sessionsFluidDivineDiscoursesBody,
                lineHeight: { xs: 1.52, sm: 1.54, md: 1.55 },
                color: bodyInk,
                maxWidth: { md: unitScale(540) },
                mb: { xs: unitScale(22), sm: unitScale(24), md: unitScale(28) },
                m: 0
              }}
            >
              {sessionsDivineDiscoursesContent.body}
            </Typography>
            <Button
              component={Link}
              href={sessionsDivineDiscoursesContent.primaryCta.href}
              variant="contained"
              disableElevation
              sx={{
                minHeight: { xs: unitScale(44), md: unitScale(48) },
                px: { xs: unitScale(24), md: unitScale(31) },
                py: { xs: unitScale(10), sm: 1.125 },
                borderRadius: unitScale(ctaRadius),
                bgcolor: theme.palette.primary.dark,
                color: alpha(theme.palette.common.white, 0.98),
                fontWeight: 700,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: sessionsFluidCtaLabel,
                textTransform: "none",
                boxShadow: "none",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.dark, 0.92),
                  color: alpha(theme.palette.common.white, 0.98),
                  boxShadow: "none"
                }
              }}
            >
              {sessionsDivineDiscoursesContent.primaryCta.label}
            </Button>
          </Box>

          <Box
            sx={{
              position: "relative",
              borderRadius: divineVideoRadius,
              overflow: "hidden",
              minHeight: sessionsMediaMinHeightVideo,
              width: "100%",
              maxWidth: { xs: "100%", md: unitScale(534) },
              mx: { xs: "auto", md: 0 },
              boxShadow: `0 ${unitScale(16)} ${unitScale(48)} ${cardShadow}`
            }}
          >
            <Image
              src={thumbSrc}
              alt="Divine Discourses preview"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(180deg, ${alpha(theme.palette.common.black, 0.08)} 0%, ${alpha(theme.palette.common.black, 0.28)} 100%)`
              }}
            >
              <IconButton
                aria-label="Play video"
                sx={{
                  width: sessionsFluidPlayButton,
                  height: sessionsFluidPlayButton,
                  bgcolor: alpha(theme.palette.common.white, 0.9),
                  color: theme.palette.primary.dark,
                  borderRadius: "50%",
                  "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.98) }
                }}
              >
                <PlayArrowRoundedIcon sx={{ fontSize: sessionsFluidPlayIcon }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
