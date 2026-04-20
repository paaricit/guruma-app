export const sessionsImages = {
  banner: "/images/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Photos/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Banner.webp",
  videoThumb:
    "/images/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Photos/Divine Discourses Video thumbnail.webp",
  // Figma 230:1679 — `public/images/sessions/what-happens-session-right.webp` (overwrite after export if crop differs).
  whatHappens: "/images/sessions/what-happens-session-right.webp",
  /** Shared backdrop behind both schedule cards (Chennai / Zoom). */
  scheduleCardsBackdrop: "/images/sessions/chennai-live-sessions-offline.png",
  /** Milky-way starfield — same asset as `HomeImpactStatsSection`. */
  howToJoinSection: "/images/Home Page Photos/Section.png"
} as const;

/** “What happens” cards — top-right pictograms (`mm1`…`mm5`) in list order. */
export const sessionsWhatHappensItemIcons = [
  "/images/sessions/what-happens/mm1.svg",
  "/images/sessions/what-happens/mm2.svg",
  "/images/sessions/what-happens/mm3.svg",
  "/images/sessions/what-happens/mm4.svg",
  "/images/sessions/what-happens/mm5.svg"
] as const;
