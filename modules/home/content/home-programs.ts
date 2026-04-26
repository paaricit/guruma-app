/**
 * Home — full-bleed program rows (data-only).
 */

export type HomeProgramRow = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  image: string;
  /** When true, text column aligns to the end on large screens (image visually on the left). */
  imageLeft: boolean;
  /** When set, primary CTA renders as a link (e.g. Divine Day register). */
  primaryCtaHref?: string;
  /** When set, secondary CTA renders as a link. */
  secondaryCtaHref?: string;
};

export const homeProgramRows: readonly HomeProgramRow[] = [
  {
    title: "Counselling & Healing Sessions",
    subtitle: "TRANSCENDENTAL HEALING TOUCH",
    description:
      "Struggling in your career, life choices, marriage, family or during pregnancy. Counselling offers a safe space to share and heal.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    secondaryCtaHref: "/our-programs/personal-counselling",
    image: "/images/Home Page Photos/Counselling & Healing Sessions BG.webp",
    imageLeft: false
  },
  {
    title: "Spiritual Retreats",
    subtitle: "A divine getaway for your Spiritual enlightenment",
    description:
      "Your path to fast-tracking your spiritual growth and being in Guru Maa Shubha Didi's divine presence.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    secondaryCtaHref: "/our-programs/spiritual-retreats",
    image: "/images/Home Page Photos/Spiritual Retreats BG (1).webp",
    imageLeft: true
  },
  {
    title: "Guided Meditation",
    subtitle: "THE ART & SCIENCE OF ETERNAL PEACE",
    description:
      "Move beyond just knowing about meditation to practicing it. Learn the art of meditation to purify karmic layers and unlock the eternal wealth of steadiness and intuitive wisdom.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    secondaryCtaHref: "/our-programs/meditation",
    image: "/images/Home Page Photos/Guided Meditation  BG.webp",
    imageLeft: false
  },
  {
    title: "ISHT GOLD Membership",
    subtitle: "AS THE COMPASS, SO THE COLOUR",
    description:
      "ISHT is a community of like-minded individuals, all focused on uplifting themselves and making a positive impact on those around them.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    image: "/images/Home Page Photos/IISHT GOLD Membership BG.webp",
    imageLeft: true
  },
  {
    title: "Sapt Sadhana",
    subtitle: "SELFLESS SERVICE TO SPREAD HAPPINESS",
    description:
      "Be a part of a mission that has fed over 10,000 people, funded several scholarships, and provided critical medical aid. Through Sapt Sadhana, we turn compassion into action.",
    primaryCta: "Support Our Mission",
    // secondaryCta: "Learn more",
    secondaryCtaHref: "/sapt-sadhana",
    image: "/images/Home Page Photos/Sapt Sadhana  BG.webp",
    imageLeft: false
  }
];
