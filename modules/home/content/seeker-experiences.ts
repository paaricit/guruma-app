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
  },
  {
    name: "Priya Sharma",
    image: "/images/Home Page Photos/carousel-0.png",
    embedSrc: seekerCarouselEmbedSrc
  },
  {
    name: "Karan Paul",
    image: "/images/Home Page Photos/carousel-1.png",
    embedSrc: seekerCarouselEmbedSrc
  }
];

export const seekerTestimonials: readonly SeekerTestimonialItem[] = [
  {
    quote:
      "Sessions with Didi have helped me become more flexible and have increased my stress taking capacity. I'm now able to take each day as it comes and make the best out of it. I'm also able to confidently share my ideas with my colleagues and work in the most productive way which has only helped me thrive in the corporate world.",
    name: "Sayoni Mukherjee",
    location: "Bangalore"
  },
  {
    quote:
      "Guru Maa has not only gifted me mental stability but also the perfect balance of work and life. She has helped me channel my energies in the right and productive manner. Didi has truly brought about a lifestyle change showing me the best of both the spiritual and material world. All in all, giving my flight its perfect wings.",
    name: "Karan Paul",
    location: "Chennai"
  },
  {
    quote:
      "Mental health and inner peace play a pivotal role in ensuring that we are able to give our best at work. The workshops by Internal Insight have helped me maintain stability and harmony in an ever-changing work environment. I am now able to strike the perfect work-life balance. Shubha Didi's words have the power to mould the way you think towards a much more qualitative and productive direction.",
    name: "Mohit Sanwal",
    location: "Finland"
  }
];
