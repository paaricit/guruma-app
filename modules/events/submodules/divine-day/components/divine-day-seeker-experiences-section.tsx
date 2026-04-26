"use client";

import {
  SeekerExperiencesSection,
  type SeekerExperiencesSectionProps
} from "@/modules/home/components";

export type DivineDaySeekerExperiencesSectionProps = SeekerExperiencesSectionProps;

/** Divine Day — seeker experiences band on a light surface (no hero image). */
export function DivineDaySeekerExperiencesSection(props: DivineDaySeekerExperiencesSectionProps) {
  return (
    <SeekerExperiencesSection
      {...props}
      surface="plain"
      stackLayoutUntilLg={props.stackLayoutUntilLg ?? true}
    />
  );
}
