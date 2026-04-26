/**
 * Home — Guru Maa intro band (video thumbnail + roles + CTA). Data-only.
 */

export type GuruMaIntroRole = {
  iconSrc: string;
  label: string;
};

export const guruMaIntroContent = {
  title: "Guru Maa Shubha Didi",
  tagline: "— Beacon of Divine Wisdom",
  body:
    "Guru Maa Shubha Didi is a Beacon (Torchbearer) of Love & Wisdom. Her Sacred Mission is to unlock the Secret Treasures of Infinite Happiness and spread Love, Peace and Joy through Internal Fulfilment.",
  ctaLabel: "Know Her Journey",
  ctaHref: "/about-her",
  thumbnailSrc: "/images/Home Page Photos/Home page second section Video thumbnail-1.svg",
  thumbnailAlt: "Guru Maa session",
  /** YouTube embed opened when the thumbnail is clicked */
  introVideoEmbedSrc:
    "https://www.youtube.com/embed/nrI3FKfI6Yw?si=uYvw8Ezbvxg_O2dr&autoplay=1",
  roles: [
    { iconSrc: "/images/Home Page Photos/group2_icons.png", label: "A Divine Guru" },
    { iconSrc: "/images/Home Page Photos/group2_icons1.png", label: "A Spiritual Guide" },
    { iconSrc: "/images/Home Page Photos/group2_icons2.png", label: "A Life Coach" },
    { iconSrc: "/images/Home Page Photos/group2_icons3.png", label: "A Visionary Leader" }
  ] as const satisfies readonly GuruMaIntroRole[]
} as const;
