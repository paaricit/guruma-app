import Box from "@mui/material/Box";
import { SaptSadhanaHomePromoSection } from "@/component/sapt-sadhana-home-promo";
import {
  AboutHerHeroSection,
  AboutHerVisionMissionPathwaysSection,
  HerJourneySection,
  HerTeachingsSection
} from "@/modules/about-her/components";
import { HomeImpactStatsSection } from "@/modules/home/components";

/** Placeholder layout — home blocks plus migrated About Her sections as they land. */
export default function AboutHerPage() {
  return (
    <Box sx={{ width: 1, maxWidth: "100%", mx: "auto" }}>
      <AboutHerHeroSection />
      <HerJourneySection />
      <AboutHerVisionMissionPathwaysSection />
      <HerTeachingsSection />
      <Box sx={{ pt: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
      <HomeImpactStatsSection />

      </Box>
      <SaptSadhanaHomePromoSection />
    </Box>
  );
}
