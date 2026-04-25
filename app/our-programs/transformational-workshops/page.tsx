import type { Metadata } from "next";
import OurProgramsTransformationalWorkshopsPage from "@/modules/our-programs/submodules/transformational-workshops";
import { transformationalWorkshopsProgramHero } from "@/modules/our-programs/content/our-programs-program-heroes";

export const metadata: Metadata = {
  title: `${transformationalWorkshopsProgramHero.heading} | Our Programs`,
  description: transformationalWorkshopsProgramHero.subheading.slice(0, 155)
};

/** Our Programs / Transformational Workshops route — thin page delegating to module UI. */
export default function OurProgramsTransformationalWorkshopsRoutePage() {
  return <OurProgramsTransformationalWorkshopsPage />;
}
