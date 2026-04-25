import type SvgIcon from "@mui/icons-material/SvgIcon";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export const divineDayImages = {
  heroOverlap: "/images/Divine day page Photos/Divine day Banner Video Operlap.webp",
  comePeace: "/images/Divine day page Photos/Come Experience the Peace You Have Been Seeking.webp",
  givePause: "/images/Divine day page Photos/Give yourself this pause..webp",
  whyEvent: "/images/Divine day page Photos/Why this event.webp",
  whoOverlap: "/images/Divine day page Photos/Who should attend Overlap.webp",
  posterBand: "/images/Divine day page Photos/Group 1410521824.webp"
} as const;

export const whoShouldAttend = [
  "YOU FEEL MENTALLY OR EMOTIONALLY EXHAUSTED",
  "YOU HAVE BEEN LONGING FOR PEACE",
  "YOU WANT TO EXPERIENCE MEDITATION IN A WELCOMING SPACE",
  "YOU ARE SEEKING CLARITY, STRENGTH, OR INNER HEALING",
  "YOU SIMPLY WISH TO SPEND TIME IN A SPIRITUALLY UPLIFTING ENVIRONMENT"
] as const;

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
