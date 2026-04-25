/**
 * Our Programs — seeker video strip + testimonials (data-only).
 * Edit here without touching home `modules/home/content/seeker-experiences.ts`.
 */

export type OurProgramsSeekerVideoItem = {
  name: string;
  image: string;
  embedSrc: string;
};

export type OurProgramsSeekerTestimonialItem = {
  quote: string;
  name: string;
  location: string;
};

export const ourProgramsSeekerExperiencesSectionBg =
  "/images/Home Page Photos/pink-background-with-white-background-word-love-it 2.png" as const;

export const ourProgramsSeekerTestimonialCornerIcon = "/images/Home Page Photos/icon-orange.png" as const;

const ourProgramsSeekerCarouselEmbedSrc = "https://www.youtube.com/embed/GErQ_J7GUEM?autoplay=1";

/** Default carousel — replace or extend for programme-specific stories. */
export const ourProgramsSeekerVideos: readonly OurProgramsSeekerVideoItem[] = [
  {
    name: "Priya Das",
    image: "/images/Home Page Photos/carousel-2.png",
    embedSrc: ourProgramsSeekerCarouselEmbedSrc
  },
  {
    name: "Neha Verma",
    image: "/images/Home Page Photos/carousel-3.png",
    embedSrc: ourProgramsSeekerCarouselEmbedSrc
  },
  {
    name: "Vikram Singh",
    image: "/images/Home Page Photos/carousel-4.png",
    embedSrc: ourProgramsSeekerCarouselEmbedSrc
  },
  {
    name: "Ananya Iyer",
    image: "/images/Home Page Photos/carousel-5.png",
    embedSrc: ourProgramsSeekerCarouselEmbedSrc
  },
  {
    name: "Priya Sharma",
    image: "/images/Home Page Photos/carousel-0.png",
    embedSrc: ourProgramsSeekerCarouselEmbedSrc
  },
  {
    name: "Karan Paul",
    image: "/images/Home Page Photos/carousel-1.png",
    embedSrc: ourProgramsSeekerCarouselEmbedSrc
  }
];

export const ourProgramsSeekerTestimonials: readonly OurProgramsSeekerTestimonialItem[] = [
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
