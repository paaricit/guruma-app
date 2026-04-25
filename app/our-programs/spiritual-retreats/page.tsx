import type { Metadata } from "next";
import OurProgramsSpiritualRetreatsPage from "@/modules/our-programs/submodules/spiritual-retreats";
import { spiritualRetreatsProgramHero } from "@/modules/our-programs/content/our-programs-program-heroes";

export const metadata: Metadata = {
  title: `${spiritualRetreatsProgramHero.heading} | Our Programs`,
  description: spiritualRetreatsProgramHero.subheading.slice(0, 155)
};

export default function OurProgramsSpiritualRetreatsRoutePage() {
  return <OurProgramsSpiritualRetreatsPage />;
}