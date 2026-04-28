"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { personalCounsellingPhotoGallerySlides } from "../../content/personal-counselling-photo-gallery-slides";
import { personalCounsellingProgramHero } from "../../content/our-programs-program-heroes";
import { PersonalCounsellingOverviewSection } from "./components";
import { MarriageCounsellingPlansSection } from "../marriage-counselling/components";

export default function OurProgramsPersonalCounsellingPage() {
  return (
    <OurProgramsProgramPageShell
      hero={personalCounsellingProgramHero}
      photoGallerySlides={personalCounsellingPhotoGallerySlides}
      omitSeekerHowToEnrol
    >
      <PersonalCounsellingOverviewSection>
        <MarriageCounsellingPlansSection />
      </PersonalCounsellingOverviewSection>
    </OurProgramsProgramPageShell>
  );
}
