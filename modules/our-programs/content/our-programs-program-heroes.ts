/**
 * Internal Our Programs routes — full-bleed hero copy + image (`OurProgramsProgramHeroSection`).
 *
 * For viewports **≤767px**, optional `imageSrcMobile` is a full 550px-tall designed banner
 * (see `OurProgramsProgramHeroSection`). **≥768px** uses `imageSrc` with HTML headline/subhead.
 */

export type OurProgramsProgramHero = {
  imageSrc: string;
  /** Portrait banner for **max-width: 767px** (550px-tall block in the hero). */
  imageSrcMobile?: string;
  /**
   * When the mobile art already includes title + body, set true so the Forum/Inter block
   * and gradient are hidden for **≤767px** only.
   */
  mobileBannerIncludesCopy?: boolean;
  heading: string;
  subheading: string;
};

export const marriageCounsellingProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/marriage-counselling-hero.png",
  imageSrcMobile: "/images/our-programs/heroes/marriage-counselling-hero-mobile.png",
  mobileBannerIncludesCopy: true,
  heading: "Marriage Counselling",
  subheading:
    "Transition from a suffocating relationship to marital bliss. Whether you are navigating conflict or looking to enrich an already strong bond, we combine spiritual wisdom with practical tools for lasting transformation."
};

export const meditationProgramsProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/meditation-programs-hero.png",
  imageSrcMobile: "/images/our-programs/heroes/meditation-programs-hero-mobile.png",
  mobileBannerIncludesCopy: true,
  heading: "Meditation Programs",
  subheading:
    'Connect to the Divine within. While we all know the blessings of meditation, the "How" and the consistency make the difference. Discover the Art and Science of Meditation with Guru Ma Shubha Didi.'
};

export const spiritualRetreatsProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/spiritual-retreats-hero.png",
  imageSrcMobile: "/images/our-programs/heroes/spiritual-retreats-hero-mobile.png",
  mobileBannerIncludesCopy: true,
  heading: "Are You Ready for a Life-Changing Experience?",
  subheading:
    "Imagine feeling ecstatic, light, and blissful, fully recharged in mind, body, and spirit. This is exactly what our upcoming retreat offers."
};

export const personalCounsellingProgramHero: OurProgramsProgramHero = {
  imageSrc: "/images/our-programs/heroes/personal-counselling-hero.png",
  imageSrcMobile: "/images/our-programs/heroes/personal-counselling-hero-mobile.png",
  mobileBannerIncludesCopy: true,
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
