import type { Metadata } from "next";
import OurProgramsMeditationPage from "@/modules/our-programs/submodules/meditation";
import { meditationProgramsProgramHero } from "@/modules/our-programs/content/our-programs-program-heroes";

export const metadata: Metadata = {
  title: `${meditationProgramsProgramHero.heading} | Our Programs`,
  description: meditationProgramsProgramHero.subheading.slice(0, 155)
};

/** Our Programs / Meditation route — thin page delegating to module UI. */
export default function OurProgramsMeditationRoutePage() {
  return <OurProgramsMeditationPage />;
}
