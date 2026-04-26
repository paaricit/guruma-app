export type SaptSadhanaInitiative = {
  n: string;
  title: string;
  body: string;
  image: string;
  imageFirst: boolean;
};

export type SaptSadhanaStat = {
  value: string;
  label: string;
};

export type SaptSadhanaTestimonial = {
  quote: string;
  name: string;
  place: string;
};

export const saptSadhanaPageImages = {
  banner: "/images/Sapt Sadhana Page Photos/SAPT SADHANA Banner BG.webp",
  cosmic: "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp"
} as const;

export const saptSadhanaInitiatives: readonly SaptSadhanaInitiative[] = [
  {
    n: "01",
    title: "Food for the Needy",
    body: "Providing nutritious meals to the needy and the underprivileged. Our volunteers diligently pack food and distribute it to the needy with a Smile.",
    image: "/images/Sapt Sadhana Page Photos/Food for the Needy.png",
    imageFirst: false
  },
  {
    n: "02",
    title: "Disability Support",
    body: "Apart from providing care and professional helps, We provide Orthopedic Splits, We assist them to make, train, hand-hold, and make them independent.",
    image: "/images/Sapt Sadhana Page Photos/Disability Support.webp",
    imageFirst: true
  },
  {
    n: "03",
    title: "Education Sponsorships",
    body: "Education is a worthy investment, When it comes to our children. This is a mission close to Didi's heart. She personally speaks and guides to programs who provide scholarships and opportunities.",
    image: "/images/Sapt Sadhana Page Photos/Education Sponsorships.webp",
    imageFirst: false
  },
  {
    n: "04",
    title: "Elderly Care",
    body: "Reach Out, Root Comfort, Medicines, Qualities, Love Sharing, Sharing Session like TV, Arts and crafts, and more with Love and Respect that they deserve.",
    image: "/images/Sapt Sadhana Page Photos/Elderly Care.webp",
    imageFirst: true
  },
  {
    n: "05",
    title: "Women Welfare",
    body: "To empower and progress for Women means there is more nurtured upcoming generation. Support our women through collective responsibility for creating a better family and better families.",
    image: "/images/Sapt Sadhana Page Photos/Women Welfare.webp",
    imageFirst: false
  },
  {
    n: "06",
    title: "Medical Care for Children",
    body: "Our Surgeries for resources helps us heal they're not easy. This leads to ease the bright and beautiful even themselves.",
    image: "/images/Sapt Sadhana Page Photos/Medical Care for Children.webp",
    imageFirst: true
  },
  {
    n: "07",
    title: "Environment & Sustainability",
    body: "Trees Plantation, Green Initiatives, Swach Desh etc. our best vision and compassionate initiatives. Not only in the beauty the trees to better shape than what we freely take.",
    image: "/images/Sapt Sadhana Page Photos/Environment & Sustainability.webp",
    imageFirst: false
  }
] as const;

export const saptSadhanaImpactStats: readonly SaptSadhanaStat[] = [
  { value: "20+", label: "Women Empowered" },
  { value: "100+", label: "Students have received Scholarship" },
  { value: "150+", label: "Have Received Disability Support" },
  { value: "10,000+", label: "Feeding the Needy" }
] as const;

export const saptSadhanaTestimonials: readonly SaptSadhanaTestimonial[] = [
  {
    quote:
      "Sessions with Didi have helped me become more flexible and have increased my stress taking capacity. I'm now able to take each day as it comes and make the best out of it. I'm also able to confidently share my ideas with my colleagues and work in the most productive way which has only helped me thrive in the corporate world.",
    name: "Sayoni Mukherjee",
    place: "Bangalore"
  },
  {
    quote:
      "Guru Maa has not only gifted me mental stability but also the perfect balance of work and life. She has helped me channel my energies in the right and productive manner. Didi has truly brought about a lifestyle change showing me the best of both the spiritual and material world. All in all, giving my flight its perfect wings.",
    name: "Karan Paul",
    place: "Chennai"
  },
  {
    quote:
      "Mental health and inner peace play a pivotal role in ensuring that we are able to give our best at work. The workshops by Internal Insight have helped me maintain stability and harmony in an ever-changing work environment. I am now able to strike the perfect work-life balance. Shubha Didi's words have the power to mould the way you think towards a much more qualitative and productive direction.",
    name: "Mohit Sanwal",
    place: "Finland"
  }
] as const;

export const saptSadhanaIntroContent = {
  kickerLead: "What is ",
  kickerAccent: "Sapt Sadhana?",
  leadEmphasis: "Is Our Commitment to Service (Sewa),",
  leadRest:
    "it's the Heartbeat of our Being, it's our Endeavour to bring a Sustainable Shift in our Community, transforming lives anywhere and everywhere",
  body:
    "We all know that life, at times, can get challenging, and when it does, it really does. And a challenging life sometimes comes in the way of our mental and spiritual growth. As each life is precious, Didi is unlocking every opportunity to be useful to society at large by helping and nurturing the Under Privileged. Giving back to society is a Divine Blessing.",
  closing: "Let us understand deeper!"
} as const;

export const saptSadhanaHeroContent = {
  title: "SAPT SADHANA",
  tagline: "it is not just an initiative, it's a way of life!!!",
  body:
    "While our minds evolve, we mature spiritually, our physical actions should leave our mind, body and soul feeling good, happy, elevated and cleansed.",
  attribution: "-Guru Maa Subha Didi"
} as const;

export const saptSadhanaTestimonialsBandContent = {
  eyebrow: "Hear Their Finest Stories Gurumai at Saket transforming these seekers",
  title: "Experiences from Seekers"
} as const;

export const saptSadhanaCtaContent = {
  title: "Be the Change You Wish to See",
  body: "Every act of kindness creates ripples of transformation. Join us in creating a more compassionate world, one seva at a time.",
  primaryLabel: "Contribute Now",
  secondaryLabel: "Become a Volunteer",
  href: "/contact"
} as const;
