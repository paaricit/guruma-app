"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { personalCounsellingProgramHero } from "../../content/our-programs-program-heroes";
import { PersonalCounsellingOverviewSection } from "./components";

export default function OurProgramsPersonalCounsellingPage() {
  return (
    <OurProgramsProgramPageShell hero={personalCounsellingProgramHero}>
      <PersonalCounsellingOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
