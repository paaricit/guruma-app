export type HerTeachingIconKey = "menuBook" | "person" | "favorite" | "visibility";

export const herTeachingsImageSrc =
  "/images/About Her Page Photos/Her Teachings helps You In.webp" as const;

export const herTeachingsSectionTitle = "Her Teachings helps You In" as const;

export const herTeachingsItems = [
  {
    title: "Your Career and Purpose in Life",
    body: "Finding dharma-aligned work, navigating office politics with awareness, building leadership through service",
    icon: "menuBook" as const
  },
  {
    title: "Your Family and Relationships",
    body: "Healing family wounds, conscious parenting, transforming conflicts through compassionate communication",
    icon: "person" as const
  },
  {
    title: "Your Health and wellness",
    body: "Stress management, emotional healing, understanding psychosomatic patterns, yogic practices for vitality",
    icon: "favorite" as const
  },
  {
    title: "Managing your Emotions and Mind",
    body: "Managing anxiety and depression, breaking negative patterns, cultivating inner peace amid chaos",
    icon: "visibility" as const
  }
] as const;
