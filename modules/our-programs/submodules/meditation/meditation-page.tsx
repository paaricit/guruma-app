"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { meditationPhotoGalleryMobileTabletSlides } from "../../content/meditation-photo-gallery-mobile-slides";
import { meditationPhotoGallerySlides } from "../../content/meditation-photo-gallery-slides";
import { meditationProgramsProgramHero } from "../../content/our-programs-program-heroes";
import { seekerVideos } from "@/modules/home/content/seeker-experiences";
import { MeditationOverviewSection } from "./components";

export default function OurProgramsMeditationPage() {
  return (
    <OurProgramsProgramPageShell
      hero={meditationProgramsProgramHero}
      omitSeekerHowToEnrol
      photoGallerySlides={meditationPhotoGallerySlides}
      photoGalleryMobileTabletSlides={meditationPhotoGalleryMobileTabletSlides}
      seekerVideos={seekerVideos}
    >
      <MeditationOverviewSection />
    </OurProgramsProgramPageShell>
  );
}
