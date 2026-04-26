"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { spiritualRetreatsProgramHero } from "../../content/our-programs-program-heroes";
import { SpiritualRetreatsOverviewSection } from "./components";

export default function OurProgramsSpiritualRetreatsPage() {
  return (
    <OurProgramsProgramPageShell hero={spiritualRetreatsProgramHero}>
      <SpiritualRetreatsOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
