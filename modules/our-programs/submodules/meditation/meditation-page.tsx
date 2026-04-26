"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { meditationProgramsProgramHero } from "../../content/our-programs-program-heroes";
import { MeditationOverviewSection } from "./components";

export default function OurProgramsMeditationPage() {
  return (
    <OurProgramsProgramPageShell hero={meditationProgramsProgramHero}>
      <MeditationOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
