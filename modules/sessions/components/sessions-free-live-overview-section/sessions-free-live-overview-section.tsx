"use client";

import { Box, Container, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import {
  sessionsFreeLivePillars,
  sessionsFreeLiveOverviewTitle,
  type SessionsFreeLivePillarKey
} from "@/modules/sessions/content/sessions-free-live-overview";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidFreeLivePillarBody,
  sessionsFluidFreeLivePillarTitle,
  sessionsFluidFreeLiveSectionHeading,
  sessionsGridGapMd,
  sessionsSectionPyMd
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

import { SessionsFreeLivePillarsConnector } from "./sessions-free-live-pillars-connector";

const PILLAR_SVG_SRC: Record<SessionsFreeLivePillarKey, string> = {
  openToAll: "/images/sessions/pillars/open-to-all.svg",
  interactive: "/images/sessions/pillars/interactive.svg",
  onlineOffline: "/images/sessions/pillars/online-offline.svg"
};

/** Figma pillar art ~120×120; fluid via design-width scale. */
const pillarIconSize = unitScale(120);

/** Ribbon overlay nudge (was −20px / −4px at design scale). */
const freeLiveRibbonTop = `calc(0px - ${unitScale(20)})`;
const freeLiveRibbonLeft = `calc(0px - ${unitScale(4)})`;

/** First / last pillar icon horizontal nudge vs ribbon (design-scale 6). */
const pillarIconFirstLeft = `calc(0px - ${unitScale(6)})`;
const pillarIconLastLeft = unitScale(6);

export function SessionsFreeLiveOverviewSection() {
  const theme = useTheme();
  const pillarBodyColor = alpha(theme.palette.text.primary, 0.58);
  const connectorFill = theme.palette.guru.warm;

  return (
    <Box component="section" aria-labelledby="sessions-free-live-heading" sx={{ bgcolor: theme.palette.background.paper, py: sessionsSectionPyMd }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx, pb: 20 }}>
        <Typography
          id="sessions-free-live-heading"
          component="h2"
          sx={{
            fontFamily: "var(--font-forum), serif",
            fontWeight: 400,
            fontSize: sessionsFluidFreeLiveSectionHeading,
            lineHeight: { xs: 1.12, sm: 1.08, md: 1.05 },
            color: theme.palette.text.secondary,
            textAlign: "center",
            mb: { xs: unitScale(28), sm: unitScale(32), md: unitScale(40) },
            maxWidth: { xs: "100%", md: unitScale(1100) },
            mx: "auto"
          }}
        >
          {sessionsFreeLiveOverviewTitle}
        </Typography>

        <Box sx={{ position: "relative", width: 1 }}>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: { md: freeLiveRibbonTop },
              left: { md: freeLiveRibbonLeft },
              width: "100%",
              aspectRatio: "1232 / 153",
              zIndex: 0,
              pointerEvents: "none",
              overflow: "visible",
              transform: { md: "scale(0.95)" },
              transformOrigin: { md: "center center" }
            }}
          >
            <SessionsFreeLivePillarsConnector fill={connectorFill} />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" },
              gap: sessionsGridGapMd,
              alignItems: "start",
              position: "relative",
              zIndex: 1
            }}
          >
            {sessionsFreeLivePillars.map(({ key, title, body }) => (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: { xs: unitScale(8), sm: unitScale(12), md: unitScale(16) },
                  pt: { xs: unitScale(8), sm: unitScale(10), md: 0 }
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: { xs: unitScale(16), sm: unitScale(18), md: unitScale(20) },
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  <Box
                    component="img"
                    src={PILLAR_SVG_SRC[key]}
                    alt=""
                    aria-hidden
                    sx={{
                      width: pillarIconSize,
                      height: pillarIconSize,
                      objectFit: "contain",
                      flexShrink: 0,
                      display: "block",
                      position: "relative",
                      zIndex: 1,
                      ...(key === "openToAll" && { left: pillarIconFirstLeft }),
                      ...(key === "onlineOffline" && { left: pillarIconLastLeft })
                    }}
                  />
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: sessionsFluidFreeLivePillarTitle,
                    lineHeight: { xs: 1.35, sm: 1.38, md: 1.4 },
                    color: theme.palette.text.primary,
                    mb: { xs: unitScale(10), sm: unitScale(12), md: unitScale(14) },
                    maxWidth: unitScale(420)
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: sessionsFluidFreeLivePillarBody,
                    lineHeight: { xs: 1.52, sm: 1.54, md: 1.55 },
                    color: pillarBodyColor,
                    maxWidth: { xs: "100%", sm: unitScale(380), md: unitScale(400) },
                    m: 0
                  }}
                >
                  {body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
