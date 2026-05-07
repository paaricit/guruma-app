/**
 * Sessions-only testimonial cards (avatars appear here, not on home `SeekerExperiencesSection`).
 * `avatarSrc` — circular image, bottom-right overlap on the card (shared placeholder art).
 */
import { seekerTestimonials } from "@/modules/home/content/seeker-experiences";

export const sessionsTestimonialAvatarSrc =
  "/images/sessions/testimonial-avatar.svg" as const;

export const testimonialSlides = seekerTestimonials.map((item) => ({
  quote: item.quote,
  name: item.name,
  place: item.location,
  avatarSrc: sessionsTestimonialAvatarSrc
}));
