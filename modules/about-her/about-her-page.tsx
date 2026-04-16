import Box from "@mui/material/Box";
import { SaptSadhanaHomePromoSection } from "@/component/sapt-sadhana-home-promo";
import {
  AboutHerVisionMissionPathwaysSection,
  HerJourneySection,
  HerTeachingsSection
} from "@/modules/about-her/components";
import { HomeImpactStatsSection, HomeHeroSection } from "@/modules/home/components";

/** Placeholder layout — home blocks plus migrated About Her sections as they land. */
export default function AboutHerPage() {
  return (
    <Box sx={{ width: 1, maxWidth: "100%", mx: "auto" }}>
      <HomeHeroSection />
      <HerJourneySection />
      <AboutHerVisionMissionPathwaysSection />
      <HerTeachingsSection />
      <HomeImpactStatsSection />
      <SaptSadhanaHomePromoSection />
    </Box>
  );
}
