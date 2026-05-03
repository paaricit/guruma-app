"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { marriageCounsellingProgramHero } from "../../content/our-programs-program-heroes";
import { seekerVideos } from "@/modules/home/content/seeker-experiences";
import { MarriageCounsellingOverviewSection, MarriageCounsellingPlansSection } from "./components";

export default function OurProgramsMarriageCounsellingPage() {
  return (
    <OurProgramsProgramPageShell
      hero={marriageCounsellingProgramHero}
      omitPhotoGallery
      omitSeekerHowToEnrol
      seekerVideos={seekerVideos}
    >
      <MarriageCounsellingOverviewSection>
        <MarriageCounsellingPlansSection />
      </MarriageCounsellingOverviewSection>
    </OurProgramsProgramPageShell>
  );
}
