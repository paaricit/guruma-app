"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { meditationPhotoGallerySlides } from "../../content/meditation-photo-gallery-slides";
import { meditationProgramsProgramHero } from "../../content/our-programs-program-heroes";
import { MeditationOverviewSection } from "./components";

export default function OurProgramsMeditationPage() {
  return (
    <OurProgramsProgramPageShell
      hero={meditationProgramsProgramHero}
      omitSeekerHowToEnrol
      photoGallerySlides={meditationPhotoGallerySlides}
    >
      <MeditationOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
