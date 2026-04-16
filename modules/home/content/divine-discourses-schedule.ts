/**
 * Home — Divine Discourses schedule (data-only).
 */

export type DivineDiscourseClosureIcon = {
  src: string;
  /** Figma frame width (px) */
  widthPx: number;
  /** Figma frame height (px) */
  heightPx: number;
};

/** “Divine closure” row — per-Figma intrinsic frame sizes */
export const divineDiscoursesIcons: readonly DivineDiscourseClosureIcon[] = [
  { src: "/images/Home Page Photos/icons-1.png", widthPx: 182.03, heightPx: 54.7 },
  { src: "/images/Home Page Photos/icons-2.png", widthPx: 146.57, heightPx: 89.85 },
  { src: "/images/Home Page Photos/icons-3.png", widthPx: 148.54, heightPx: 63.55 }
] as const;

export const divineDiscoursesAssets = {
  heroImage: "/images/Home Page Photos/Divine Discourses Schedule image.webp",
  profileIcon: "/images/Home Page Photos/Icon-profile.png",
  calendarIcon: "/images/Home Page Photos/icons-calendar.png"
} as const;

export const divineDiscoursesCopy = {
  title: "Divine Discourses Schedule",
  subtitle: "All are Welcome, Completely Free",
  /** Figma: “Available on YouTube ” + semibold “LIVE” + red dot */
  liveBadgePrefix: "Available on YouTube ",
  liveBadgeEmphasis: "LIVE",
  offline: {
    pill: "OFFLINE",
    heading: "Chennai Live Sessions:",
    slots: ["Thursday : 5:00–6:00 PM IST", "Sunday : 11:30 AM IST"],
    note: "Followed by Divya Prasad"
  },
  online: {
    pill: "ONLINE",
    heading: "Zoom Live Sessions:",
    slots: ["Mon, Tue, Wed, Fri", "7:30 – 8:30 AM IST"]
  },
  /** Figma 25:4787 — Inter regular body; only closing phrase semibold */
  calloutBody:
    "These Divine Transformative Sessions will be Interactive and Open to all Audiences. Join these sessions at No Additional Cost. ",
  calloutEmphasis: "All are Welcome",
  cta: "Reserve Your Spot"
} as const;
