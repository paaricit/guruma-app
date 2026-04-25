import type { Metadata } from "next";
import OurProgramsPersonalCounsellingPage from "@/modules/our-programs/submodules/personal-counselling";
import { personalCounsellingProgramHero } from "@/modules/our-programs/content/our-programs-program-heroes";

export const metadata: Metadata = {
  title: `${personalCounsellingProgramHero.heading} | Our Programs`,
  description: personalCounsellingProgramHero.subheading.slice(0, 155)
};

export default function OurProgramsPersonalCounsellingRoutePage() {
  return <OurProgramsPersonalCounsellingPage />;
}