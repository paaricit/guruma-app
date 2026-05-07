/**
 * Our Programs — seeker-style testimonial cards (same card pattern as `SessionsSeekerTestimonialsSection`).
 */
import { seekerTestimonials } from "@/modules/home/content/seeker-experiences";

export const ourProgramsTestimonialAvatarSrc = "/images/sessions/testimonial-avatar.svg" as const;

export const ourProgramsTestimonialSlides = seekerTestimonials.map((item) => ({
  quote: item.quote,
  name: item.name,
  place: item.location,
  avatarSrc: ourProgramsTestimonialAvatarSrc
}));

export const ourProgramsSeekerImpactStats = [
  ["5L+", "Lives Touched"],
  ["7+", "Countries"],
  ["1000+", "Sessions"]
] as const;
