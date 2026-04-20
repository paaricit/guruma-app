import { sessionsImages } from "./sessions-images";

/** Figma node `1:8378` — Sessions hero banner copy + asset. */
export const sessionsHeroContent = {
  bannerSrc: sessionsImages.banner,
  badgeLabel: "FREE for All Seekers",
  title: "Live Sessions",
  /** Two spaces after the period per approved frame. */
  lead: "All Are Welcome.  Completely Free!!!",
  primaryCta: {
    label: "Register for Next Session",
    href: "/contact" as const
  },
  /** Figma CTA fill / ink (cream surface, deep blue label). */
  ctaSurface: "#fffdfb",
  ctaInk: "#1a305b"
} as const;
