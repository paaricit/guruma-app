"use client";

import { Box } from "@mui/material";
import { HomeCallbackSection } from "@/components/site/home-callback-section";
import {
  DivineDiscoursesScheduleSection,
  HomeGuruMaIntroSection,
  HomeHeroSection,
  HomeImpactStatsSection,
  HomeProgramsSection,
  HomeSaptSadhanaPromoSection,
  SeekerExperiencesSection,
  WisdomInActionSection
} from "@/modules/home/components";

export default function HomePage() {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        // `overflow-x: hidden` forces `overflow-y: auto` in CSS and clips children that extend
        // upward (e.g. footer contact card). `clip` limits horizontal bleed without clipping Y.
        overflowX: "clip",
        overflowY: "visible"
      }}
    >
      {/* --- Section: Hero --- */}
      <HomeHeroSection />

      {/* --- Section: Guru Maa intro (video + roles) --- */}
      <HomeGuruMaIntroSection />

      {/* --- Section: Impact stats --- */}
      <HomeImpactStatsSection />

      <DivineDiscoursesScheduleSection />

      <HomeCallbackSection />

      <HomeProgramsSection />

      <WisdomInActionSection />

      <SeekerExperiencesSection />
      jj

      {/* --- Section: Sapt Sadhana promo (+ footer overlap; keep overflow visible) --- */}
      <HomeSaptSadhanaPromoSection />
    </Box>
  );
}
