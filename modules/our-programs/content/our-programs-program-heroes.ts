/**
 * Internal Our Programs routes — full-bleed hero copy + image (`OurProgramsProgramHeroSection`).
 */

export type OurProgramsProgramHero = {
  imageSrc: string;
  heading: string;
  subheading: string;
};

export const marriageCounsellingProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/marriage-counselling-hero.png",
  heading: "Marriage Counselling",
  subheading:
    "Transition from a suffocating relationship to marital bliss. Whether you are navigating conflict or looking to enrich an already strong bond, we combine spiritual wisdom with practical tools for lasting transformation."
};

export const meditationProgramsProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/meditation-programs-hero.png",
  heading: "Meditation Programs",
  subheading:
    'Connect to the Divine within. While we all know the blessings of meditation, the "How" and the consistency make the difference. Discover the Art and Science of Meditation with Guru Ma Shubha Didi.'
};

export const spiritualRetreatsProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/spiritual-retreats-hero.png",
  heading: "Are You Ready for a Life-Changing Experience?",
  subheading:
    "Imagine feeling ecstatic, light, and blissful, fully recharged in mind, body, and spirit. This is exactly what our upcoming retreat offers."
};

export const personalCounsellingProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/personal-counselling-hero.png",
  heading: "Personal Counselling",
  subheading:
    "Personalised, Purposeful, Profound. In a world of complex relationships and shifting expectations, don't let negative perceptions become traps. Shift from \"fixing\" to \"healing\" with guidance that offers no judgment, only grace."
};

/** Placeholder hero until dedicated workshop art + copy are provided. */
export const transformationalWorkshopsProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/hero-bg.png",
  heading: "Transformational Workshops",
  subheading:
    "Move from insight to lived change through guided practices, community support, and practical tools you can carry into everyday life."
};
