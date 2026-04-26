"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { personalCounsellingPhotoGallerySlides } from "../../content/personal-counselling-photo-gallery-slides";
import { personalCounsellingProgramHero } from "../../content/our-programs-program-heroes";
import { PersonalCounsellingOverviewSection } from "./components";

export default function OurProgramsPersonalCounsellingPage() {
  return (
    <OurProgramsProgramPageShell
      hero={personalCounsellingProgramHero}
      photoGallerySlides={personalCounsellingPhotoGallerySlides}
    >
      <PersonalCounsellingOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
