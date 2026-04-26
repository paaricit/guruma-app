"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { spiritualRetreatsPhotoGallerySlides } from "../../content/spiritual-retreats-photo-gallery-slides";
import { spiritualRetreatsProgramHero } from "../../content/our-programs-program-heroes";
import { SpiritualRetreatsOverviewSection } from "./components";

export default function OurProgramsSpiritualRetreatsPage() {
  return (
    <OurProgramsProgramPageShell
      hero={spiritualRetreatsProgramHero}
      positionY="top"
      omitSeekerHowToEnrol
      photoGallerySlides={spiritualRetreatsPhotoGallerySlides}
    >
      <SpiritualRetreatsOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
