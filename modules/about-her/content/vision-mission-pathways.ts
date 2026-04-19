/** Vision / Mission photos — Figma refs `1:7208`, `1:7209` (exported to `public/`). */
export const aboutHerVisionMissionAssets = {
  vision: "/images/About Her Page Photos/Vision-img.png",
  mission: "/images/About Her Page Photos/Mission-figma-1-7209.png",
  /** Peach sun icon before Vision / Mission headings (40×40 artboard). */
  visionMissionHeadingIcon: "/images/About Her Page Photos/mission-heading-icon.png"
} as const;

export const aboutHerVisionCopy = {
  heading: "Vision:",
  body: "To awaken, connect, and unite every soul to its Pure Divine Essence through the sacred harmony of Wisdom (Gyan), Devotion (Bhakti), and Selfless Service (Sewa)."
} as const;

export const aboutHerMissionCopy = {
  heading: "Mission:",
  body: 'To dismantle the myth that spirituality is only for the "troubled" or the "loser." Guru Ma Shubha Didi\'s mission is to prove that a prosperous, materialistic life is only complete when paired with deep internal insight.'
} as const;

export const aboutHerPathwaysSectionTitle = "Pathways to Transformation" as const;

const pathwayAssetBase = "/images/About Her Page Photos/pathways" as const;

export type AboutHerPathwayIconKey =
  | "favorite"
  | "autoAwesome"
  | "nightlight"
  | "waves"
  | "volunteerActivism"
  | "spa";

export type AboutHerPathwayItem = {
  title: string;
  description: string;
  icon: AboutHerPathwayIconKey;
  /** Figma-exported icon (SVG) from node `1:7476`. */
  iconSrc: string;
  /** Asset includes its own tile/circle; omit default tinted icon background and inset scale. */
  iconFillsTile?: boolean;
};

export const aboutHerPathways: readonly AboutHerPathwayItem[] = [
  {
    title: "1. Love (Prem):",
    description: "Unconditional compassion as the soul's universal healing force.",
    icon: "favorite",
    iconSrc: `${pathwayAssetBase}/pathway-prem-heart.svg`,
    iconFillsTile: true
  },
  {
    title: "2. Wisdom (Gyan):",
    description: "Using logic and practical insight to strengthen the mind against flaws.",
    icon: "autoAwesome",
    iconSrc: `${pathwayAssetBase}/pathway-gyan-lamp.svg`,
    iconFillsTile: true
  },
  {
    title: "3. Meditation (Dhyan):",
    description: "Guided soul-exploration to find stillness in a chaotic world.",
    icon: "nightlight",
    iconSrc: `${pathwayAssetBase}/pathway-dhyan-tile.svg`,
    iconFillsTile: true
  },
  {
    title: "4. Devotion (Bhakti):",
    description: "The path of surrender that allows the Divine to manifest through us.",
    icon: "waves",
    iconSrc: `${pathwayAssetBase}/pathway-bhakti-718-1359.svg`,
    iconFillsTile: true
  },
  {
    title: "5. Service (Sewa):",
    description: "Selfless contribution through the Sapthasadhana initiatives.",
    icon: "volunteerActivism",
    iconSrc: `${pathwayAssetBase}/pathway-sewa-718-1398.svg`,
    iconFillsTile: true
  },
  {
    title: "6. Realisation (Atma Gyan):",
    description:
      'The ultimate spiritual awakening: "We are Infinite, we are Limitless, we are One."',
    icon: "spa",
    iconSrc: `${pathwayAssetBase}/pathway-atma-7673.svg`,
    iconFillsTile: true
  }
];
