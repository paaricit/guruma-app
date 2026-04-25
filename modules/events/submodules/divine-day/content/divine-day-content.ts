import type SvgIcon from "@mui/material/SvgIcon";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export const divineDayImages = {
  /** Poster band BG: pathway / 2026 (left), solid black panel (right) — `divine-day-poster-section-bg.png`. */
  posterSectionBg: "/images/Divine day page Photos/DD-section-BG.webp",
  heroOverlap: "/images/Divine day page Photos/Divine day Banner Video Operlap.webp",
  comePeace: "/images/Divine day page Photos/Come Experience the Peace You Have Been Seeking.webp",
  givePause: "/images/Divine day page Photos/Give yourself this pause..webp",
  whyEvent: "/images/Divine day page Photos/Why this event.webp",
  whoOverlap: "/images/Divine day page Photos/Who should attend Overlap.webp",
  /** Lotus watermark for “Who should attend” cream band. */
  whoSectionLotus: "/images/Divine day page Photos/divine-day-who-section-lotus.png",
  posterBand: "/images/Divine day page Photos/Group 1410521824.webp",
  experienceSpiralBg: "/images/Divine day page Photos/exp.svg",
  experienceTopPortrait: "/images/Divine day page Photos/img1.svg",
  experienceBottomPortrait: "/images/Divine day page Photos/img2.svg",
  whyLotus: "/images/Divine day page Photos/why-lotus.svg",
  whyImageTop: "/images/Divine day page Photos/why-img-1.svg",
  whyImageBottom: "/images/Divine day page Photos/why-img-2.svg"
} as const;

/** Legacy list — superseded on the module page by `divineDayWhoShouldAttendCopy`; kept for reuse / migration. */
export const whoShouldAttend = [
  "YOU FEEL MENTALLY OR EMOTIONALLY EXHAUSTED",
  "YOU HAVE BEEN LONGING FOR PEACE",
  "YOU WANT TO EXPERIENCE MEDITATION IN A WELCOMING SPACE",
  "YOU ARE SEEKING CLARITY, STRENGTH, OR INNER HEALING",
  "YOU SIMPLY WISH TO SPEND TIME IN A SPIRITUALLY UPLIFTING ENVIRONMENT"
] as const;

/** “Who should attend” band — headline, body, CTA, note (matches Figma-style layout). */
export const divineDayWhoShouldAttendCopy = {
  headline: "DIVINE DAY IS MORE THAN AN EVENT—IT IS AN EXPERIENCE, A REVELATION, A SACRED HOMECOMING.",
  bodyLead:
    "It is a doorway to infinite love. It is a glimpse into the transformation that awaits. It is a trailer to the unlimited happiness that life has in store for you.",
  bodyEmphasisLines: [
    "Come, immerse yourself in this ocean of Divine Grace.",
    "Come, celebrate, elevate, and experience the joy of being truly alive.",
    "Join us and let your soul shine!"
  ],
  note: "No prior meditation experience is needed. All are welcome.",
  ctaLabel: "Register Free",
  ctaHref: "/contact"
} as const;

export const faqItems = [
  { q: "Is the event free?", a: "Yes. Entry is free for this annual gathering." },
  { q: "Do I need prior meditation experience?", a: "No prior meditation experience is needed. All are welcome." },
  { q: "Is it open to all age groups?", a: "Yes. The event is family-friendly and open to all age groups." },
  { q: "How do I register?", a: "Use Register Free or Reserve My Spot to reach our team and confirm your spot." }
] as const;

type ExperienceItem = { title: string; body: string; Icon: typeof SvgIcon };
export const experiences: ExperienceItem[] = [
  { title: "Guided Meditation", body: "Experience stillness and inner silence through a powerful meditation session.", Icon: SelfImprovementOutlinedIcon },
  { title: "Collective Spiritual Experience", body: "Meditate and connect in the presence of like-minded seekers.", Icon: GroupsOutlinedIcon },
  { title: "Spiritual Talk", body: "Step into an atmosphere that uplifts the heart and quiets the mind.", Icon: AutoAwesomeOutlinedIcon },
  { title: "Inner Reflection", body: "Take a pause from the outside world and listen to what your soul truly needs.", Icon: VisibilityOutlinedIcon },
  { title: "Calm & Blissful Energy", body: "Whether you are a beginner or a seasoned yogi, we have something to suit your needs.", Icon: LocalFloristOutlinedIcon },
  { title: "Divine Presence of Guru Maa Shubha Didi", body: "Experience guidance that brings peace, reassurance, and deeper awareness.", Icon: WbSunnyOutlinedIcon }
];
