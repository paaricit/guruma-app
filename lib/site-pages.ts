export type SiteRoute =
  | "home"
  | "about-her"
  | "sessions"
  | "events"
  | "delhi"
  | "marriage-counselling"
  | "family-counselling"
  | "meditation-program"
  | "isht-gold"
  | "spiritual-retreats"
  | "wisdom-videos"
  | "wisdom-audios"
  | "wisdom-blogs"
  | "sapt-sadhana"
  | "contact"
  | "dedicated-spiritual-speaker-program"
  | "divine-day";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta: string;
  secondaryCta: string;
};

export type HighlightCard = {
  title: string;
  description: string;
};

export type SitePageContent = {
  route: SiteRoute;
  pageTitle: string;
  hero: HeroContent;
  sectionTitle: string;
  sectionDescription: string;
  highlights: HighlightCard[];
};

export const siteNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Her", href: "/about-her" },
  { label: "Sessions", href: "/sessions" },
  { label: "Events", href: "/events" },
  { label: "Divine Day", href: "/divine-day" },
  { label: "Delhi", href: "/delhi" },
  { label: "Programs", href: "/meditation-program" },
  { label: "Wisdom", href: "/wisdom-videos" },
  { label: "Sapt Sadhana", href: "/sapt-sadhana" },
  { label: "Contact", href: "/contact" }
];

export const sitePages: Record<SiteRoute, SitePageContent> = {
  home: {
    route: "home",
    pageTitle: "Home",
    hero: {
      eyebrow: "Guru Maa Shubha Didi",
      title: "Happiness, Freedom & Peace",
      description: "Join transformative discourses, spiritual guidance, and daily practices designed for modern seekers.",
      image: "/images/Home Page Photos/Home Page Banner.webp",
      primaryCta: "Join Divine Discourses",
      secondaryCta: "Explore Knowledge Shala"
    },
    sectionTitle: "Divine Discourses Schedule",
    sectionDescription: "Discover spiritual learning paths with structured sessions, practical teachings, and guided growth.",
    highlights: [
      {
        title: "Live Divine Discourses",
        description: "Attend regular sessions that combine timeless wisdom with practical life application."
      },
      {
        title: "Global Spiritual Community",
        description: "Connect with seekers from around the world in online and in-person satsang circles."
      },
      {
        title: "Structured Course Catalogue",
        description: "Follow curated beginner-to-advanced programs for meditation, healing, and self-discovery."
      }
    ]
  },
  "about-her": {
    route: "about-her",
    pageTitle: "About Her",
    hero: {
      eyebrow: "The Journey",
      title: "Who is Guru Maa Shubha Didi?",
      description: "Learn about her journey, lineage, and mission to guide seekers toward inner transformation.",
      image: "/images/About Her Page Photos/ABOUT HER Banner.webp",
      primaryCta: "Read Her Journey",
      secondaryCta: "Explore Lineage"
    },
    sectionTitle: "Pathways to Transformation",
    sectionDescription: "Her teachings blend devotion, discipline, and lived wisdom for seekers at every stage.",
    highlights: [
      {
        title: "Living Wisdom",
        description: "Grounded, practical teachings for emotional resilience and spiritual depth."
      },
      {
        title: "Service & Compassion",
        description: "Community-based initiatives rooted in care, seva, and inclusive spiritual growth."
      },
      {
        title: "Lineage & Integrity",
        description: "Guidance inspired by authentic spiritual traditions and disciplined practice."
      }
    ]
  },
  sessions: {
    route: "sessions",
    pageTitle: "Free Live Spiritual Sessions",
    hero: {
      eyebrow: "Free for All Seekers",
      title: "SESSIONS (FREE LIVE SPIRITUAL SESSIONS)",
      description: "All Are Welcome. Completely free live spiritual sessions online and offline.",
      image: "/images/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Photos/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Banner.webp",
      primaryCta: "Register for Next Session",
      secondaryCta: "View Session Format"
    },
    sectionTitle: "What Happens in a Session",
    sectionDescription: "Each session includes wisdom talks, guided practices, and Q&A for direct clarity.",
    highlights: [
      { title: "Enlightening Talk", description: "Core wisdom on happiness, freedom, and spiritual clarity." },
      { title: "Guided Meditation", description: "Practical inner practices to cultivate calm and awareness." },
      { title: "Interactive Q&A", description: "Real-life guidance for personal, family, and spiritual growth." }
    ]
  },
  events: {
    route: "events",
    pageTitle: "Events (Past & Upcoming)",
    hero: {
      eyebrow: "Community Gatherings",
      title: "Events (Upcoming & Past)",
      description: "Stay updated on retreats, satsangs, and special gatherings across locations.",
      image: "/images/EVENTS (PAST & UPCOMING) Photos/EVENTS (PAST & UPCOMING) Banner.webp",
      primaryCta: "Reserve Your Spot",
      secondaryCta: "Browse Past Events"
    },
    sectionTitle: "Featured Event Tracks",
    sectionDescription: "From city workshops to deep retreats, every event is designed for transformation.",
    highlights: [
      { title: "Upcoming Retreats", description: "Intensive immersive experiences for deep spiritual practice." },
      { title: "City Satsangs", description: "Short-format events for seekers balancing work and inner growth." },
      { title: "Archive of Past Events", description: "Review highlights and outcomes from previous gatherings." }
    ]
  },
  delhi: {
    route: "delhi",
    pageTitle: "Delhi",
    hero: {
      eyebrow: "Regional Programs",
      title: "Delhi Spiritual Community",
      description: "Dedicated sessions and gatherings curated for Delhi seekers and families.",
      image: "/images/Home Page Photos/Home Page Banner.webp",
      primaryCta: "Join Delhi Session",
      secondaryCta: "See Delhi Calendar"
    },
    sectionTitle: "Delhi Highlights",
    sectionDescription: "Blending local in-person gatherings with online continuity for sustained progress.",
    highlights: [
      { title: "Weekly Satsang", description: "Regular local meets focused on discussion and contemplation." },
      { title: "Family-Friendly Sessions", description: "Programs that support balanced living at home and work." },
      { title: "Guided Practices", description: "Meditation and reflection modules for daily consistency." }
    ]
  },
  "marriage-counselling": {
    route: "marriage-counselling",
    pageTitle: "Marriage Counselling",
    hero: {
      eyebrow: "Relationship Healing",
      title: "Marriage Counselling",
      description: "Support couples with mindful communication, emotional healing, and spiritual alignment.",
      image: "/images/Marriage Counselling Page Photos/Marriage Counselling Banner BG.webp",
      primaryCta: "Book Counselling",
      secondaryCta: "Learn Program Flow"
    },
    sectionTitle: "What You Will Work On",
    sectionDescription: "A structured counselling approach for trust, empathy, and long-term harmony.",
    highlights: [
      { title: "Conflict to Clarity", description: "Transform recurring conflict patterns into constructive dialogue." },
      { title: "Emotional Repair", description: "Address unresolved hurts and rebuild healthy trust." },
      { title: "Shared Direction", description: "Create aligned values and practical relationship commitments." }
    ]
  },
  "family-counselling": {
    route: "family-counselling",
    pageTitle: "Family Counselling",
    hero: {
      eyebrow: "Family Harmony",
      title: "Family Counselling",
      description: "Bring clarity, emotional safety, and shared understanding into the family system.",
      image: "/images/Personal Counselling Page Photos/Personal Counselling Banner BG.webp",
      primaryCta: "Start Family Guidance",
      secondaryCta: "Understand Benefits"
    },
    sectionTitle: "Family Support Framework",
    sectionDescription: "Address communication gaps, role stress, and intergenerational tension with care.",
    highlights: [
      { title: "Communication Reset", description: "Learn calmer and more respectful family communication habits." },
      { title: "Role Clarity", description: "Realign expectations and boundaries across family members." },
      { title: "Resilience Building", description: "Build practical coping and emotional regulation strategies." }
    ]
  },
  "isht-gold": {
    route: "isht-gold",
    pageTitle: "ISHT Gold Membership",
    hero: {
      eyebrow: "Membership",
      title: "ISHT Gold",
      description: "Yearly access to courses, live sessions, and a global community of seekers.",
      image: "/images/Home Page Photos/IISHT GOLD Membership BG.webp",
      primaryCta: "Register now",
      secondaryCta: "Contact us"
    },
    sectionTitle: "Member Benefits",
    sectionDescription: "Courses, retreats, workshops, and resources in one membership journey.",
    highlights: [
      { title: "All courses", description: "Structured learning paths for steady inner growth." },
      { title: "Live touchpoints", description: "Webinars and workshops reserved for members." },
      { title: "Community", description: "Practice alongside thousands of sincere seekers." }
    ]
  },
  "meditation-program": {
    route: "meditation-program",
    pageTitle: "Meditation Program",
    hero: {
      eyebrow: "Inner Practice",
      title: "Meditation Program",
      description: "A progressive practice system to strengthen awareness, steadiness, and inner peace.",
      image: "/images/Meditation Programs page Photos/Meditation Programs Banner BG.webp",
      primaryCta: "Join Program",
      secondaryCta: "View Curriculum"
    },
    sectionTitle: "Program Structure",
    sectionDescription: "Designed for both beginners and experienced practitioners with practical guidance.",
    highlights: [
      { title: "Foundation Practices", description: "Breath, posture, and attention anchors for daily meditation." },
      { title: "Deepening Modules", description: "Advance from concentration to subtle awareness practices." },
      { title: "Integration Support", description: "Apply meditative awareness in relationships and work-life." }
    ]
  },
  "spiritual-retreats": {
    route: "spiritual-retreats",
    pageTitle: "Spiritual Retreats",
    hero: {
      eyebrow: "Immersive Experiences",
      title: "Spiritual Retreats",
      description: "Step away from routine and enter transformative retreat spaces for inner renewal.",
      image: "/images/Retreats Page Photos/Spiritual Retreats Banner BG.webp",
      primaryCta: "Explore Retreats",
      secondaryCta: "Retreat Preparation Guide"
    },
    sectionTitle: "Retreat Experience",
    sectionDescription: "Curated schedules blend silence, study, seva, and guided introspection.",
    highlights: [
      { title: "Silence & Reflection", description: "Dedicated periods for self-observation and inner stillness." },
      { title: "Guided Teachings", description: "Daily wisdom sessions to deepen understanding and practice." },
      { title: "Community Practice", description: "Shared learning that supports discipline and accountability." }
    ]
  },
  "wisdom-videos": {
    route: "wisdom-videos",
    pageTitle: "Wisdom Videos",
    hero: {
      eyebrow: "Wisdom Library",
      title: "Wisdom Videos",
      description: "Explore visual teachings, discourse clips, and guided instructions by topic.",
      image: "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp",
      primaryCta: "Watch Now",
      secondaryCta: "Browse Categories"
    },
    sectionTitle: "Video Collections",
    sectionDescription: "Organized playlists for meditation, healing, relationships, and life guidance.",
    highlights: [
      { title: "Featured Discourses", description: "Core teaching videos for seekers at all levels." },
      { title: "Practice Tutorials", description: "Step-by-step guidance for daily sadhana routines." },
      { title: "Thematic Playlists", description: "Curated collections for specific life challenges." }
    ]
  },
  "wisdom-audios": {
    route: "wisdom-audios",
    pageTitle: "Wisdom Audios",
    hero: {
      eyebrow: "Listen & Absorb",
      title: "Wisdom Audios",
      description: "Carry spiritual guidance with you through curated audio wisdom and chants.",
      image: "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp",
      primaryCta: "Play Audios",
      secondaryCta: "Download Offline"
    },
    sectionTitle: "Audio Tracks",
    sectionDescription: "Short and long-form audio experiences for commute, reflection, and daily routine.",
    highlights: [
      { title: "Guided Reflections", description: "Compact tracks for emotional centering and clarity." },
      { title: "Chants & Devotion", description: "Sacred recitations and devotional soundscapes." },
      { title: "Discourse Audio", description: "Long-form teachings for deeper contemplation." }
    ]
  },
  "wisdom-blogs": {
    route: "wisdom-blogs",
    pageTitle: "Wisdom Blogs",
    hero: {
      eyebrow: "Read & Reflect",
      title: "Wisdom Blogs",
      description: "Read practical and contemplative articles for spiritual growth in everyday life.",
      image: "/images/WISDOM- Blogs Page Photos/Daily Life & Spirituality.webp",
      primaryCta: "Read Articles",
      secondaryCta: "View Popular Topics"
    },
    sectionTitle: "Blog Categories",
    sectionDescription: "A written knowledge space covering practices, reflections, and life transformation.",
    highlights: [
      { title: "Daily Wisdom", description: "Simple insights that can be applied immediately." },
      { title: "Guided Self-Inquiry", description: "Prompts and frameworks for inner work." },
      { title: "Seeker Stories", description: "Real transformation experiences from the community." }
    ]
  },
  "sapt-sadhana": {
    route: "sapt-sadhana",
    pageTitle: "Sapt Sadhana",
    hero: {
      eyebrow: "Serving Beyond Self",
      title: "Sapt Sadhana",
      description: "A holistic path that integrates discipline, devotion, service, and self-transformation.",
      image: "/images/Sapt Sadhana Page Photos/SAPT SADHANA Banner BG.webp",
      primaryCta: "Join Sapt Sadhana",
      secondaryCta: "Understand the 7 Steps"
    },
    sectionTitle: "Sevenfold Practice Path",
    sectionDescription: "A balanced structure to evolve awareness, action, and compassionate leadership.",
    highlights: [
      { title: "Daily Discipline", description: "Build a consistent sadhana rhythm with guided support." },
      { title: "Service Orientation", description: "Transform personal growth into contribution and seva." },
      { title: "Inner Transformation", description: "Move from reaction to conscious living step by step." }
    ]
  },
  contact: {
    route: "contact",
    pageTitle: "Contact",
    hero: {
      eyebrow: "Stay Connected",
      title: "Contact & Guidance",
      description: "Reach out for sessions, courses, retreats, and personalized spiritual guidance.",
      image: "/images/CONTACT Page Photo.webp",
      primaryCta: "Submit Enquiry",
      secondaryCta: "Talk to Support"
    },
    sectionTitle: "How We Can Help",
    sectionDescription: "Our team helps you choose the right path, schedule, and program format.",
    highlights: [
      { title: "Program Guidance", description: "Get help selecting sessions aligned to your current goals." },
      { title: "Enrollment Support", description: "Assistance for registrations, access, and scheduling." },
      { title: "Community Connect", description: "Join local and global circles of learning and practice." }
    ]
  },
  "divine-day": {
    route: "divine-day",
    pageTitle: "The Divine Day",
    hero: {
      eyebrow: "Annual gathering",
      title: "The Divine Day",
      description:
        "An evening of meditation, wisdom, and inner calm with Guru Maa Shubha Didi—free, open, and deeply restorative.",
      image: "/images/Divine day page Photos/Divine day Banner Video Operlap.webp",
      primaryCta: "Register Free",
      secondaryCta: "Reserve My Spot"
    },
    sectionTitle: "What you will experience",
    sectionDescription: "Meditation, spiritual talk, collective practice, and the calming presence of Guru Maa.",
    highlights: [
      { title: "Guided Meditation", description: "Stillness and inner silence through a guided session." },
      { title: "Spiritual Talk", description: "Wisdom that uplifts the heart and quiets the mind." },
      { title: "Sacred Community", description: "Share the space with seekers in a welcoming atmosphere." }
    ]
  },
  "dedicated-spiritual-speaker-program": {
    route: "dedicated-spiritual-speaker-program",
    pageTitle: "Dedicated Spiritual Speaker Program",
    hero: {
      eyebrow: "Leadership Through Wisdom",
      title: "Dedicated Spiritual Speaker Program",
      description: "A guided pathway for seekers called to serve as authentic spiritual communicators.",
      image: "/images/Dedicated spiritual seekers program Page Photos/Workshops.webp",
      primaryCta: "Apply to Program",
      secondaryCta: "Download Program Details"
    },
    sectionTitle: "Program Focus",
    sectionDescription: "Develop voice, clarity, depth, and responsibility in spiritual communication.",
    highlights: [
      { title: "Scriptural Grounding", description: "Learn to interpret and present wisdom with authenticity." },
      { title: "Communication Mastery", description: "Build speaking confidence, structure, and audience connection." },
      { title: "Service-Led Leadership", description: "Align communication with humility, integrity, and impact." }
    ]
  }
};

export const routeFromSlug = (slug?: string): SiteRoute | null => {
  const normalized = slug ?? "home";
  const routeKeys = new Set<SiteRoute>([
    "home",
    "about-her",
    "sessions",
    "events",
    "delhi",
    "marriage-counselling",
    "family-counselling",
    "meditation-program",
    "isht-gold",
    "spiritual-retreats",
    "wisdom-videos",
    "wisdom-audios",
    "wisdom-blogs",
    "sapt-sadhana",
    "contact",
    "dedicated-spiritual-speaker-program",
    "divine-day"
  ]);

  return routeKeys.has(normalized as SiteRoute) ? (normalized as SiteRoute) : null;
};
