/**
 * Our Programs — seeker-style testimonial cards (same card pattern as `SessionsSeekerTestimonialsSection`).
 */
export const ourProgramsTestimonialAvatarSrc = "/images/sessions/testimonial-avatar.svg" as const;

export const ourProgramsTestimonialSlides = [
  {
    quote:
      "The meditation program gave me structure I could keep—small daily steps that actually changed how I respond to stress.",
    name: "Priya Sharma",
    place: "Mumbai, India",
    avatarSrc: ourProgramsTestimonialAvatarSrc
  },
  {
    quote: "Workshops met me where I was. Honest facilitation and practical tools I still use months later.",
    name: "Rahul Mehta",
    place: "Bengaluru, India",
    avatarSrc: ourProgramsTestimonialAvatarSrc
  },
  {
    quote: "Joining from overseas never felt distant—the depth of teaching and community care came through clearly.",
    name: "Ananya Iyer",
    place: "Singapore",
    avatarSrc: ourProgramsTestimonialAvatarSrc
  }
] as const;

export const ourProgramsSeekerImpactStats = [
  ["5L+", "Lives Touched"],
  ["7+", "Countries"],
  ["1000+", "Sessions"]
] as const;
