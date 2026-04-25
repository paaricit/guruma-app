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
      <Box sx={{ height: { xs: unitScale(44), md: unitScale(72) }, bgcolor: "#031942" }}>
        <Box
          aria-hidden
          sx={{
            height: 1,
            bgcolor: "#d8eef4",
            borderTopLeftRadius: "64% 100%",
            borderTopRightRadius: "36% 100%"
          }}
        />
      </Box>
      <DivineDayWhySection />
      {/* <DivineDayExperienceSection /> */}
      <DivineDayAboutSection />
      {/* <DivineDayEventHighlightSection /> */}
      <DivineDayPosterSection />
      <DivineDayWhoShouldAttendSection />
      <DivineDaySeekerExperiencesSection />
      <DivineDayProgramsSection />
      <DivineDayFaqSection />
    </Box>
  );
}
