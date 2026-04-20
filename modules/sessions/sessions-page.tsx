import Box from "@mui/material/Box";
import {
  SessionsDivineDiscoursesSection,
  SessionsFaqSection,
  SessionsFinalCtaSection,
  SessionsFreeLiveOverviewSection,
  SessionsGuidelinesSection,
  SessionsHeroSection,
  SessionsHowToJoinSection,
  SessionsScheduleSection,
  SessionsSeekerTestimonialsSection,
  SessionsWhatHappensSection
} from "@/modules/sessions/components";
import { sessionsSeekerTestimonialsFaqBandGradient } from "@/theme/page-section";

export default function SessionsPage() {
  return (
    <Box sx={{ width: 1, maxWidth: "100%", mx: "auto", bgcolor: "primary.dark" }}>
      <SessionsHeroSection />
      <SessionsDivineDiscoursesSection />
      <SessionsFreeLiveOverviewSection />
      <SessionsWhatHappensSection />
      <SessionsScheduleSection />
      <SessionsHowToJoinSection />
      <SessionsGuidelinesSection />
      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          width: 1,
          maxWidth: "100%",
          background: sessionsSeekerTestimonialsFaqBandGradient,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}
      >
        <SessionsSeekerTestimonialsSection />
        <SessionsFaqSection />
      </Box>
      {/* <SessionsFinalCtaSection /> */}
    </Box>
  );
}
