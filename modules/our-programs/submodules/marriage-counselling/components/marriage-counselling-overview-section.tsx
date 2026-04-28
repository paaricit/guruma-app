"use client";

import type { ReactNode } from "react";
import { OurProgramsMintOverviewSection } from "@/modules/our-programs/components/our-programs-mint-overview-section";
import { marriageCounsellingOverviewContent } from "@/modules/our-programs/content/marriage-counselling-overview";

export function MarriageCounsellingOverviewSection({ children }: { children?: ReactNode }) {
  return <OurProgramsMintOverviewSection content={marriageCounsellingOverviewContent}>{children}</OurProgramsMintOverviewSection>;
}
