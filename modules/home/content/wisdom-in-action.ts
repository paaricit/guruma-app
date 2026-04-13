/**
 * Home — “Wisdom in Action” grid (data-only).
 */

export type WisdomCardItem = {
  title: string;
  badge: string;
  image: string;
  icon: string;
  /** Shown in the star pill (Figma uses 4.6 / 4.6 / 4.9). */
  rating: string;
  /** Secondary line under the title */
  subtitle: string;
};

export const wisdomSectionBackgroundImage = "/images/Home Page Photos/wisdom_action.png";

export const wisdomStarIcon = "/images/Home Page Photos/Star 6.png";

export const wisdomBadgeDotImage = "/images/Home Page Photos/Ellipse 176.png";

export const wisdomCards: readonly WisdomCardItem[] = [
  {
    title: "The art of letting go",
    badge: "The Most Rated",
    image: "/images/Home Page Photos/The art of letting go.webp",
    icon: "/images/Home Page Photos/wisdom_icon1.png",
    rating: "4.6",
    subtitle: "Lorem ipsum dolor"
  },
  {
    title: "Morning Meditation for Peace",
    badge: "The Most Rated",
    image: "/images/Home Page Photos/Morning Meditation for Peace.webp",
    icon: "/images/Home Page Photos/wisdom_icon2.png",
    rating: "4.6",
    subtitle: "Lorem ipsum dolor"
  },
  {
    title: "7 Steps to Inner Transformation",
    badge: "The Most Rated",
    image: "/images/Home Page Photos/7 Steps to Inner Transformation.webp",
    icon: "/images/Home Page Photos/wisdom_icon3.png",
    rating: "4.9",
    subtitle: "Lorem ipsum dolor"
  }
];
