import type { Metadata } from "next";
import OurProgramsMarriageCounsellingPage from "@/modules/our-programs/submodules/marriage-counselling";
import { marriageCounsellingProgramHero } from "@/modules/our-programs/content/our-programs-program-heroes";

export const metadata: Metadata = {
  title: `${marriageCounsellingProgramHero.heading} | Our Programs`,
  description: marriageCounsellingProgramHero.subheading.slice(0, 155)
};

export default function OurProgramsMarriageCounsellingRoutePage() {
  return <OurProgramsMarriageCounsellingPage />;
}