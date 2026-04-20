/**
 * Figma — Sessions “What Are These FREE Live Sessions?” band:
 * - `224:1550` section title
 * - `224:1553` / `224:1564` / `224:1572` pillar copy (icons mapped in the section component).
 */
export const sessionsFreeLiveOverviewTitle = "What Are These FREE Live Sessions?" as const;

export type SessionsFreeLivePillarKey = "openToAll" | "interactive" | "onlineOffline";

export const sessionsFreeLivePillars: ReadonlyArray<{
  key: SessionsFreeLivePillarKey;
  title: string;
  body: string;
}> = [
  {
    key: "openToAll",
    title: "Open to All",
    body: "Join our Divine Discourses regardless of Age, Gender, Profession, Ethnicity or Background. Divine Wisdom Has No Bounds."
  },
  {
    key: "interactive",
    title: "Interactive",
    body: "Discourses encompass profound talks on Wisdom, Immersive Workshops, hands on practical examples, heartfelt sharing of personal experience and engaging Q&A Sessions"
  },
  {
    key: "onlineOffline",
    title: "Online & Offline Connect",
    body: "Enjoy these discourses in person at Chennai or Listen in Live streamed on Youtube"
  }
];
