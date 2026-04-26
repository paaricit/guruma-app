import Box from "@mui/material/Box";
import { unitScale } from "@/utils/unit-scale";
import {
  DivineDayAboutSection,
  DivineDayEventHighlightSection,
  DivineDayExperienceSection,
  DivineDayFaqSection,
  DivineDayHeroSection,
  DivineDayPosterSection,
  DivineDayProgramsSection,
  DivineDaySeekerExperiencesSection,
  DivineDayWhoShouldAttendSection,
  DivineDayWhySection
} from "./components";

export default function DivineDayPage() {
  return (
    <Box sx={{ width: 1, maxWidth: "100%", mx: "auto" }}>
      <DivineDayHeroSection />

      <DivineDayWhySection />
      {/* <DivineDayExperienceSection /> */}
      <DivineDayAboutSection />
      {/* <DivineDayEventHighlightSection /> */}
      <DivineDayPosterSection />
      <DivineDayWhoShouldAttendSection />
      <DivineDaySeekerExperiencesSection />
      <DivineDayProgramsSection />
      {/* <DivineDayFaqSection /> */}
    </Box>
  );
}
