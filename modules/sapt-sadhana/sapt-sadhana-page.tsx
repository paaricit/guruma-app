import Box from "@mui/material/Box";
import { saptSadhanaTestimonialsBandGradient } from "@/theme/page-section";
import {
  SaptSadhanaCtaSection,
  SaptSadhanaFooterBridgeSection,
  SaptSadhanaHeroSection,
  SaptSadhanaImpactStatsSection,
  SaptSadhanaInitiativesSection,
  SaptSadhanaIntroSection,
  SaptSadhanaTestimonialsSection
} from "./components";

/**
 * Full marketing page for `/sapt-sadhana` — composed section components + typed content
 * under `content/` (same pattern as `modules/home/home-page.tsx`).
 */
export default function SaptSadhanaPage() {
  return (
    <Box sx={{ width: 1, maxWidth: "100%", mx: "auto", bgcolor: "background.default", overflowX: "hidden" }}>
      <SaptSadhanaHeroSection />
      <SaptSadhanaIntroSection />
      <SaptSadhanaInitiativesSection />
      <SaptSadhanaImpactStatsSection />
      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          width: 1,
          maxWidth: "100%",
          minWidth: 0,
          background: saptSadhanaTestimonialsBandGradient,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}
      >
        <SaptSadhanaTestimonialsSection />
        <SaptSadhanaCtaSection />

      </Box>
    </Box>
  );
}
