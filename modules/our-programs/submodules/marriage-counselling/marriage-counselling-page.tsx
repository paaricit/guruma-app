"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { marriageCounsellingProgramHero } from "../../content/our-programs-program-heroes";
import { MarriageCounsellingOverviewSection } from "./components";

export default function OurProgramsMarriageCounsellingPage() {
  return (
    <OurProgramsProgramPageShell hero={marriageCounsellingProgramHero}>
      <MarriageCounsellingOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
