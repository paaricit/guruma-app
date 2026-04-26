"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import { sessionsImages, sessionsWhatHappensItemIcons } from "@/modules/sessions/content/sessions-images";
import { whatHappensItems } from "@/modules/sessions/content/sessions-what-happens";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidBody,
  sessionsFluidItemTitle,
  sessionsFluidSectionHeading,
  sessionsGridGapMd,
  sessionsMediaMinHeightSessionPhoto,
  sessionsSectionPyMd,
  sessionsSectionPyTight,
  sessionsWhatHappensArcSurface,
  sessionsWhatHappensBackgroundGradient
} from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const WHAT_HAPPENS_HEADING_ID = "sessions-what-happens-heading";

const whatHappensIconSize = unitScale(70);
const whatHappensIconInset = unitScale(12);
/** Reserve horizontal space so titles do not run under the icon. */
const whatHappensTitleIconGutter = `calc(${whatHappensIconSize} + ${whatHappensIconInset})`;

export function SessionsWhatHappensSection() {
  const theme = useTheme();
  const photoSrc = encodePublicPath(sessionsImages.whatHappens);
  const cardRadius = {
    xs: unitScale(18),
    sm: unitScale(20),
    md: unitScale(22)
  } as const;
  const cardBorder = alpha(theme.palette.primary.dark, 0.1);
  const cardShadow = alpha(theme.palette.primary.dark, 0.06);
  const bodyColor = alpha(theme.palette.text.primary, 0.72);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: sessionsWhatHappensBackgroundGradient,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        pb: sessionsSectionPyMd
      }}
    >
      <Box
        component="section"
        id="session-format"
        aria-labelledby={WHAT_HAPPENS_HEADING_ID}
        sx={{
          position: "relative",
          zIndex: 1,
          overflow: "visible",
          backgroundImage: { xs: "none", sm: `url("${photoSrc}")` },
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "auto",
            sm: "min(520px, 92vw) auto",
            md: "auto 100%"
          },
          backgroundPosition: {
            xs: "0 0",
            sm: "50% 100%",
            md: "100% 50%"
          },
          pt: { xs: 1.5, md: 2 }
        }}
      >
        <SectionTopArc surface={sessionsWhatHappensArcSurface} />

        <Container maxWidth={pageContainerMaxWidth} sx={{ position: "relative", zIndex: 2, ...pageSectionGutterSx, pt: sessionsSectionPyTight }}>
          <Typography
            id={WHAT_HAPPENS_HEADING_ID}
            component="h2"
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontWeight: 400,
              fontSize: sessionsFluidSectionHeading,
              lineHeight: { xs: 1.12, sm: 1.08, md: 1.05 },
              color: theme.palette.text.secondary,
              textAlign: "center",
              mb: { xs: unitScale(24), sm: unitScale(28), md: unitScale(72) }
            }}
          >
            What Happens in a Session
          </Typography>
          <Box
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: `calc((100% - ${sessionsGridGapMd.md}) / 1.5)`
              },
              pb: { xs: 0, sm: sessionsMediaMinHeightSessionPhoto.sm, md: 0 }
            }}
          >
            <Stack spacing={{ xs: unitScale(12), sm: unitScale(14), md: unitScale(16) }}>
              {whatHappensItems.map((item, index) => (
                <Box
                  key={item.title}
                  sx={{
                    position: "relative",
                    p: { xs: unitScale(16), sm: unitScale(18), md: unitScale(20) },
                    borderRadius: cardRadius,
                    bgcolor: theme.palette.background.paper,
                    border: `1px solid ${cardBorder}`,
                    boxShadow: `0 ${unitScale(6)} ${unitScale(20)} ${cardShadow}`
                  }}
                >
                  <Box
                    component="img"
                    src={encodePublicPath(sessionsWhatHappensItemIcons[index])}
                    alt=""
                    aria-hidden
                    sx={{
                      position: "absolute",
                      top: whatHappensIconInset,
                      right: whatHappensIconInset,
                      width: whatHappensIconSize,
                      height: whatHappensIconSize,
                      objectFit: "contain",
                      pointerEvents: "none"
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: sessionsFluidItemTitle,
                      color: theme.palette.primary.dark,
                      mb: { xs: unitScale(10), sm: unitScale(10), md: unitScale(12) },
                      pr: whatHappensTitleIconGutter
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: sessionsFluidBody,
                      lineHeight: { xs: 1.58, sm: 1.6, md: 1.62 },
                      color: bodyColor,
                      pr: whatHappensTitleIconGutter
                    }}
                  >
                    {item.body}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
