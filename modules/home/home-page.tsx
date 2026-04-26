import Box from "@mui/material/Box";
import { SaptSadhanaHomePromoSection } from "@/component/sapt-sadhana-home-promo";
import { HomeCallbackSection } from "@/components/site/home-callback-section";
import {
  DivineDiscoursesScheduleSection,
  HomeGuruMaIntroSection,
  HomeHeroSection,
  HomeImpactStatsSection,
  HomeProgramsSection,
  SeekerExperiencesSection,
  WisdomInActionSection
} from "@/modules/home/components";

export default function HomePage() {
  return (
    <Box sx={{ width: 1, maxWidth: "100%", mx: "auto" }}>
      <HomeHeroSection />
      <HomeGuruMaIntroSection />
      <HomeImpactStatsSection />
      <DivineDiscoursesScheduleSection />
      <HomeCallbackSection />
      <HomeProgramsSection />
      {/* <WisdomInActionSection /> */}
      <SeekerExperiencesSection />
      <SaptSadhanaHomePromoSection />
    </Box>
  );
}
