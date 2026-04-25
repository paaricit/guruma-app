"use client";

import { HomeProgramsSection } from "@/modules/home/components";
import { divineDayProgramRows } from "../content/divine-day-programs";

/** Same layout and behavior as the home programs band, with one program row for Divine Day. */
export function DivineDayProgramsSection() {
  return <HomeProgramsSection programs={divineDayProgramRows} />;
}
