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

/** Shared YouTube embed for all seeker carousel cards (thumbnails differ). */
const seekerCarouselEmbedSrc = "https://www.youtube.com/embed/GErQ_J7GUEM?autoplay=1";

/** Card opens in-app dialog; `embedSrc` is a YouTube embed iframe URL. */
export const seekerVideos: readonly SeekerVideoItem[] = [
  {
    name: "Priya Sharma",
    image: "/images/Home Page Photos/carousel-0.png",
    embedSrc: seekerCarouselEmbedSrc
  },
  {
    name: "Karan Paul",
    image: "/images/Home Page Photos/carousel-1.png",
    embedSrc: seekerCarouselEmbedSrc
  },
  {
    name: "Priya Das",
    image: "/images/Home Page Photos/carousel-2.png",
    embedSrc: seekerCarouselEmbedSrc
  },
  {
    name: "Neha Verma",
    image: "/images/Home Page Photos/carousel-3.png",
    embedSrc: seekerCarouselEmbedSrc
  },
  {
    name: "Vikram Singh",
    image: "/images/Home Page Photos/carousel-4.png",
    embedSrc: seekerCarouselEmbedSrc
  },
  {
    name: "Ananya Iyer",
    image: "/images/Home Page Photos/carousel-5.png",
    embedSrc: seekerCarouselEmbedSrc
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
