import type { HomeProgramRow } from "@/modules/home/content/home-programs";
import { divineDayImages } from "./divine-day-content";

/** Single home-style program row for Divine Day (same shape as `homeProgramRows`). */
export const divineDayProgramRows: readonly HomeProgramRow[] = [
  {
    title: "Give yourself this pause.",
    subtitle: "DIVINE DAY WITH GURU MAA SHUBHA DIDI",
    description:
      "Come experience a space of meditation, wisdom, peace, and bliss with Guru Maa Shubha Didi. Entry is free, but the experience can stay with you for a lifetime.",
    primaryCta: "Register Free",
    secondaryCta: "Reserve My Spot",
    primaryCtaHref: "/contact",
    secondaryCtaHref: "/contact",
    image: divineDayImages.givePause,
    imageLeft: false
  }
];
