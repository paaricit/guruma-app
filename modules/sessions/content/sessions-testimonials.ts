/**
 * Sessions-only testimonial cards (avatars appear here, not on home `SeekerExperiencesSection`).
 * `avatarSrc` — circular image, bottom-right overlap on the card (shared placeholder art).
 */
export const sessionsTestimonialAvatarSrc =
  "/images/sessions/testimonial-avatar.svg" as const;

export const testimonialSlides = [
  {
    quote:
      "These sessions transformed my spiritual journey. The clarity I received continues to guide me every day.",
    name: "Priya Sharma",
    place: "Mumbai, India",
    avatarSrc: sessionsTestimonialAvatarSrc
  },
  {
    quote: "The blend of meditation, music, and honest dialogue helped me return to calm during a difficult season.",
    name: "Rahul Mehta",
    place: "Bengaluru, India",
    avatarSrc: sessionsTestimonialAvatarSrc
  },
  {
    quote: "Joining from overseas still felt intimate—the community support after each discourse is precious.",
    name: "Ananya Iyer",
    place: "Singapore",
    avatarSrc: sessionsTestimonialAvatarSrc
  }
] as const;
