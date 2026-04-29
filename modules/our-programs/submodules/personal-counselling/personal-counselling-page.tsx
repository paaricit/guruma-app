"use client";

import { OurProgramsProgramPageShell } from "../../components";
import { personalCounsellingPhotoGallerySlides } from "../../content/personal-counselling-photo-gallery-slides";
import { personalCounsellingProgramHero } from "../../content/our-programs-program-heroes";
import { PersonalCounsellingOverviewSection } from "./components";
import { MarriageCounsellingPlansSection } from "../marriage-counselling/components";
import type { PlanCard } from "../marriage-counselling/components/marriage-counselling-plans-section";

const personalCounsellingPlans: PlanCard[] = [
  {
    title: "7 Sessions",
    subtitle: "Personal Counselling Program",
    features: [
      "Online",
      "One-on-one sessions",
      "30 minutes per session",
      "Complete within 3 months"
    ]
  },
  {
    title: "10 Sessions",
    subtitle: "Personal Counselling Program",
    features: [
      "Online",
      "One-on-one sessions",
      "30 minutes per session",
      "Complete within 3 months"
    ],
    tag: "Most Popular",
    featured: true
  },
  {
    title: "Exclusive",
    subtitle: "Personal Counselling Program",
    features: [
      "Online / Offline flexibility",
      "Exclusive personal counselling",
      "3 sessions (1 hour each)",
      "Complete within 3 months"
    ],
    tag: "Premium Experience"
  }
];

export default function OurProgramsPersonalCounsellingPage() {
  return (
    <OurProgramsProgramPageShell
      hero={personalCounsellingProgramHero}
      photoGallerySlides={personalCounsellingPhotoGallerySlides}
      omitSeekerHowToEnrol
    >
      <PersonalCounsellingOverviewSection>
        <MarriageCounsellingPlansSection ariaLabel="Personal counselling plans" plans={personalCounsellingPlans} />
      </PersonalCounsellingOverviewSection>
    </OurProgramsProgramPageShell>
  );
}
