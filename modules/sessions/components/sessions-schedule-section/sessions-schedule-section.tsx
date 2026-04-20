"use client";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { SessionsScheduleCard } from "../sessions-schedule-card";
import { sessionsScheduleCopy } from "@/modules/sessions/content/sessions-schedule";
import { sessionsImages } from "@/modules/sessions/content/sessions-images";
import {
  pageContainerMaxWidth,
  sessionsFluidSectionHeading,
  sessionsFluidSectionSublead,
  sessionsScheduleSpiralDecorImage,
  sessionsScheduleSpiralDecorSx,
  sessionsScheduleSpiralWrapPx,
  sessionsSectionPyBand,
  sessionsSectionPyMd
} from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const SCHEDULE_HEADING_ID = "sessions-schedule-heading";

const calendarIconSx = {
  color: "primary.dark",
  fontSize: { xs: unitScale(26), sm: unitScale(28), md: unitScale(30) }
} as const;

export function SessionsScheduleSection() {
  const theme = useTheme();
  const g = theme.palette.guru;
  const spiral = sessionsScheduleSpiralDecorImage;

  return (
    <Box
      component="section"
      aria-labelledby={SCHEDULE_HEADING_ID}
      sx={{ bgcolor: '#fff', pt: sessionsSectionPyBand, pb: sessionsSectionPyMd }}
    >
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: { lg: `url(${spiral})`, xs: "none" },
          ...sessionsScheduleSpiralDecorSx,
          px: sessionsScheduleSpiralWrapPx
        }}
      >
        <Container maxWidth={pageContainerMaxWidth} disableGutters sx={{ mx: "auto" }}>
          <Typography
            id={SCHEDULE_HEADING_ID}
            component="h2"
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: sessionsFluidSectionHeading,
              color: g.pathwaySectionHeading,
              textAlign: "center"
            }}
          >
            {sessionsScheduleCopy.title}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: sessionsFluidSectionSublead,
              color: alpha(g.pathwayCardBody, 0.92),
              mt: { xs: unitScale(10), sm: unitScale(12), md: 1.5 },
              mb: { xs: unitScale(24), sm: unitScale(28), md: 4 },
              lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 }
            }}
          >
            {sessionsScheduleCopy.sublead}
          </Typography>
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: unitScale(520), md: unitScale(1280) },
              mx: { xs: "auto", sm: "auto", md: 0 },
              position: "relative",
              overflow: "hidden",
              borderRadius: { xs: unitScale(20), sm: unitScale(22), md: unitScale(24) },
              p: { xs: unitScale(16), sm: unitScale(20), md: unitScale(24) },
              backgroundImage: `url("${encodePublicPath(sessionsImages.scheduleCardsBackdrop)}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: "0 16px 40px rgba(3, 25, 66, 0.1)"
            }}
          >
            <Stack sx={{maxWidth: { xs: "100%", sm: unitScale(520), md: unitScale(520) }}} spacing={{ xs: unitScale(20), sm: unitScale(22), md: 3 }}>
              <SessionsScheduleCard
                badgePrefix="Available on YouTube "
                badgeHighlight="LIVE"
                title="Chennai Live Sessions ( OFFLINE )"
                rows={[
                  "Thursday : 7:00 PM IST",
                  "Sunday   : 11:30 AM to 12:30 PM, Followed by Divine Lunch / Prasad"
                ]}
                iconSlot={<CalendarMonthOutlinedIcon sx={calendarIconSx} />}
              />
              <SessionsScheduleCard
                badgePrefix="Available on "
                badgeHighlight="ZOOM"
                title="Zoom Live Sessions ( ONLINE )"
                rows={["Monday- Wednesday : 7:30 AM IST ", "Friday   : 7:30 AM IST"]}
                iconSlot={<CalendarMonthOutlinedIcon sx={calendarIconSx} />}
              />
            </Stack>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
