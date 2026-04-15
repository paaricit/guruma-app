/**
 * Home — “Experiences from Seekers” video strip + testimonials (data-only).
 */

export type SeekerVideoItem = {
  name: string;
  image: string;
  /** YouTube embed URL with optional autoplay */
  embedSrc: string;
};

export type SeekerTestimonialItem = {
  quote: string;
  name: string;
  location: string;
};

/** Earth-at-night hero (portrait); served from `public/images/…`. */
export const seekerExperiencesSectionBg = "/images/Home Page Photos/pink-background-with-white-background-word-love-it 2.png";

export const seekerTestimonialCornerIcon = "/images/Home Page Photos/icon-orange.png";

/** Card opens in-app dialog; `embedSrc` is a YouTube embed iframe URL. */
export const seekerVideos: readonly SeekerVideoItem[] = [
  {
    name: "Priya Sharma",
    image: "/images/Home Page Photos/Home page second section Video thumbnail.webp",
    embedSrc: "https://www.youtube.com/embed/GErQ_J7GUEM?autoplay=1"
  },
  {
    name: "Karan Paul",
    image: "/images/Home Page Photos/Morning Meditation for Peace.webp",
    embedSrc: "https://www.youtube.com/embed/JBKC19rmG1M?autoplay=1"
  },
  {
    name: "Priya Das",
    image: "/images/Home Page Photos/7 Steps to Inner Transformation.webp",
    embedSrc: "https://www.youtube.com/embed/VdGV5qiFX44?autoplay=1"
  },
  {
    name: "Neha Verma",
    image: "/images/Home Page Photos/The art of letting go.webp",
    embedSrc: "https://www.youtube.com/embed/GIuMzYxKjX8?si=6JYuIxPQodEE3yuz&autoplay=1"
  }
];

export const seekerTestimonials: readonly SeekerTestimonialItem[] = [
  {
    quote: "These events transformed my spiritual journey. The guidance is profoundly yet accessible to everyone.",
    name: "Priya Sharma",
    location: "Mumbai India"
  },
  {
    quote: "I joined with no prior experience. The welcoming atmosphere and Guru Maa's wisdom have brought much peace into my life.",
    name: "David Chen",
    location: "Singapore"
  },
  {
    quote: "Guru Maa Shubha Didi's words gave me clarity at the right time. It was not just motivation, it was a deeply practical experience.",
    name: "Sarah Mitchell",
    location: "London, UK"
  }
];
