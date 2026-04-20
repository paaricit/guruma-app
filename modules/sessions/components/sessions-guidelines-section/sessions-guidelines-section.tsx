"use client";

import { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopUShapedArc, SECTION_TOP_ARC_HEIGHT } from "@/component/section-top-curve";
import type { SessionsGuidelinesModalVariant } from "@/modules/sessions/content/sessions-guidelines-modals";
import {
  pageSectionGutterSx,
  sessionsFluidBody,
  sessionsFluidSectionHeading,
  sessionsFluidSectionSublead,
  sessionsScheduleSpiralDecorImage,
  sessionsScheduleSpiralDecorSx,
  sessionsScheduleSpiralWrapPx,
  sessionsSectionPySm
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { SessionsGuidelinesModal } from "./sessions-guidelines-modal";

export function SessionsGuidelinesSection() {
  const theme = useTheme();
  const btnRadius = Number(theme.shape.borderRadius) * 1.25;
  const ink = theme.palette.primary.dark;

  /** Variant kept until dialog exit animation finishes (see modal `onExited`). */
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);
  const [guidelinesVariant, setGuidelinesVariant] = useState<SessionsGuidelinesModalVariant | null>(null);

  function openGuidelines(next: SessionsGuidelinesModalVariant) {
    setGuidelinesVariant(next);
    setGuidelinesOpen(true);
  }

  function closeGuidelines() {
    setGuidelinesOpen(false);
  }

  function clearGuidelinesVariant() {
    setGuidelinesVariant(null);
  }

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        /* Pull up so the U overlaps How to Join; transparent band is not painted white by a parent fill. */
        marginTop: `calc(0px - ${SECTION_TOP_ARC_HEIGHT})`,
        pt: SECTION_TOP_ARC_HEIGHT,
        bgcolor: "transparent",
        overflow: "visible"
      }}
    >
      {/* Valley: white only below curve; transparent above reveals starfield from `SessionsHowToJoinSection`. */}
      <SectionTopUShapedArc surface="#050B1F" cupFill="#ffffff" />
      <Box sx={{ position: "relative", bgcolor: "#ffffff" }}>
        {/* Same orange spiral decor layer as `SessionsScheduleSection`. */}
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            backgroundImage: { lg: `url(${sessionsScheduleSpiralDecorImage})`, xs: "none" },
            ...sessionsScheduleSpiralDecorSx,
            px: sessionsScheduleSpiralWrapPx,
            pb: {xs: unitScale(32), sm: unitScale(40), md: unitScale(240)}
          }}
        >
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, pt: sessionsSectionPySm, pb: { xs: unitScale(32), sm: unitScale(40), md: 6 }, ...pageSectionGutterSx }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: sessionsFluidSectionHeading,
                color: "#2a2a2a",
                textAlign: "center",
                mb: { xs: unitScale(10), sm: unitScale(12), md: 1.5 }
              }}
            >
              Guidelines for Participants
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: sessionsFluidSectionSublead,
                color: "#555",
                mb: { xs: unitScale(20), sm: unitScale(22), md: 3 },
                lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 }
              }}
            >
              To make the most of your session, we recommend the following:
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "relative",
                zIndex: 2,
                mb: { xs: unitScale(28), sm: unitScale(32), md: 5 }
              }}
            >
              <Button
                type="button"
                variant="contained"
                onClick={() => openGuidelines("online")}
                sx={{
                  bgcolor: ink,
                  color: theme.palette.common.white,
                  px: { xs: unitScale(24), sm: 3.5 },
                  py: { xs: unitScale(12), sm: 1.5 },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  fontSize: sessionsFluidBody,
                  borderRadius: btnRadius,
                  "&:hover": { bgcolor: alpha(ink, 0.88) }
                }}
              >
                ONLINE ZOOM
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={() => openGuidelines("offline")}
                sx={{
                  borderColor: ink,
                  color: ink,
                  px: { xs: unitScale(24), sm: 3.5 },
                  py: { xs: unitScale(12), sm: 1.5 },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  fontSize: sessionsFluidBody,
                  borderRadius: btnRadius,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: ink,
                    bgcolor: alpha(ink, 0.05)
                  }
                }}
              >
                OFFLINE SESSION
              </Button>
            </Stack>
            {/* <Stack spacing={{ xs: unitScale(10), sm: 1.375, md: 1.5 }}>
          {guidelineItems.map((line) => (
            <Box key={line} sx={{ display: "flex", gap: { xs: unitScale(10), sm: 1.5 }, alignItems: "flex-start" }}>
              <Box sx={{ width: { xs: unitScale(7), sm: 8 }, height: { xs: unitScale(7), sm: 8 }, borderRadius: "50%", bgcolor: "#e9967b", mt: { xs: unitScale(10), sm: 0.85 }, flexShrink: 0 }} />
              <Typography sx={{ color: "#444", lineHeight: { xs: 1.62, sm: 1.64, md: 1.65 }, fontSize: sessionsFluidBody, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                {line}
              </Typography>
            </Box>
          ))}
        </Stack> */}
          </Container>
        </Container>
      </Box>

      <SessionsGuidelinesModal
        open={guidelinesOpen}
        onClose={closeGuidelines}
        onExited={clearGuidelinesVariant}
        variant={guidelinesVariant}
      />
    </Box>
  );
}
