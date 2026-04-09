"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import SharedFooter from "@/components/site/shared-footer";
import SharedHeader from "@/components/site/shared-header";
import { uiPresets } from "@/lib/ui-presets";

const IMG = {
  heroOverlap: "/images/Divine day page Photos/Divine day Banner Video Operlap.webp",
  comePeace: "/images/Divine day page Photos/Come Experience the Peace You Have Been Seeking.webp",
  givePause: "/images/Divine day page Photos/Give yourself this pause..webp",
  whyEvent: "/images/Divine day page Photos/Why this event.webp",
  whoOverlap: "/images/Divine day page Photos/Who should attend Overlap.webp",
  posterBand: "/images/Divine day page Photos/Group 1410521824.webp"
} as const;

const peachTitle = {
  fontFamily: "var(--font-forum), serif",
  color: "#e8907d",
  fontWeight: 600,
  letterSpacing: "0.1em",
  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
  lineHeight: 1.35,
  textTransform: "uppercase" as const
};

const experiences: { title: string; body: string; Icon: typeof SelfImprovementOutlinedIcon }[] = [
  { title: "Guided Meditation", body: "Experience stillness and inner silence through a powerful meditation session.", Icon: SelfImprovementOutlinedIcon },
  { title: "Collective Spiritual Experience", body: "Meditate and connect in the presence of like-minded seekers.", Icon: GroupsOutlinedIcon },
  { title: "Spiritual Talk", body: "Step into an atmosphere that uplifts the heart and quiets the mind.", Icon: AutoAwesomeOutlinedIcon },
  { title: "Inner Reflection", body: "Take a pause from the outside world and listen to what your soul truly needs.", Icon: VisibilityOutlinedIcon },
  {
    title: "Calm & Blissful Energy",
    body: "Whether you are a beginner or a seasoned yogi, we have something to suit your needs.",
    Icon: LocalFloristOutlinedIcon
  },
  {
    title: "Divine Presence of Guru Maa Shubha Didi",
    body: "Experience guidance that brings peace, reassurance, and deeper awareness.",
    Icon: WbSunnyOutlinedIcon
  }
];

const whoShouldAttend = [
  "YOU FEEL MENTALLY OR EMOTIONALLY EXHAUSTED",
  "YOU HAVE BEEN LONGING FOR PEACE",
  "YOU WANT TO EXPERIENCE MEDITATION IN A WELCOMING SPACE",
  "YOU ARE SEEKING CLARITY, STRENGTH, OR INNER HEALING",
  "YOU SIMPLY WISH TO SPEND TIME IN A SPIRITUALLY UPLIFTING ENVIRONMENT"
] as const;

const faqItems: { q: string; a: string }[] = [
  { q: "Is the event free?", a: "Yes. Entry is free for this annual gathering." },
  {
    q: "Do I need prior meditation experience?",
    a: "No prior meditation experience is needed. All are welcome."
  },
  {
    q: "Is it open to all age groups?",
    a: "The event is family-friendly; children may attend with guardians—use your judgment for very young children and length of the program."
  },
  { q: "How do I register?", a: "Use Register Free or Reserve My Spot to reach our team and confirm your spot." },
  {
    q: "What should I carry?",
    a: "Bring a water bottle and anything you need to sit comfortably. Details are shared after you register."
  },
  {
    q: "How early should I arrive?",
    a: "Plan to arrive at least 15–20 minutes before the start time so you can settle in calmly."
  },
  { q: "Can I come with family?", a: "Yes. You are welcome to invite family members who wish to share the experience." }
];

const videoThumbs: { src: string; alt: string; tag?: string }[] = [
  { src: IMG.comePeace, alt: "Session highlight" },
  { src: IMG.whyEvent, alt: "Community gathering", tag: "Karan Paul" },
  { src: IMG.whoOverlap, alt: "Blessings" }
];

const quoteCards = [
  {
    quote: "These events transformed my spiritual journey. I leave every gathering lighter and more grounded.",
    name: "Priya Sharma",
    place: "Mumbai, India"
  },
  {
    quote: "I joined with no prior experience and felt welcomed from the first minute. The meditation was profound.",
    name: "David Choi",
    place: "Singapore"
  },
  {
    quote: "Guru Maa Shubha Didi's words gave me clarity when I needed it most. Grateful for this community.",
    name: "Sarah Mitchell",
    place: "London, UK"
  }
];

function LotusBackdrop() {
  return (
    <>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: -40, md: -60 },
          left: { xs: -80, md: -120 },
          width: { xs: 280, md: 420 },
          height: { xs: 280, md: 420 },
          opacity: 0.35,
          pointerEvents: "none",
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 18%, transparent 42%),
            radial-gradient(circle at 45% 55%, rgba(255,255,255,0.5) 0%, transparent 35%),
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.35) 0%, transparent 40%)`
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: { xs: -50, md: -80 },
          right: { xs: -100, md: -140 },
          width: { xs: 320, md: 480 },
          height: { xs: 320, md: 480 },
          opacity: 0.3,
          pointerEvents: "none",
          background: `radial-gradient(circle at 70% 70%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 20%, transparent 45%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 38%)`
        }}
      />
    </>
  );
}

function ZigzagImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: 220, sm: 260, md: 300 },
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 18px 44px rgba(3, 25, 66, 0.12)"
      }}
    >
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover" }} />
    </Box>
  );
}

export default function DivineDayPage() {
  const [vSlide, setVSlide] = useState(0);

  return (
    <Box sx={{ bgcolor: "#0a1628", overflowX: "hidden" }}>
      <SharedHeader />

      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 480, md: 560 },
          pt: { xs: 10, md: 12 },
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, rgba(3,25,66,0.92) 0%, rgba(3,25,66,0.5) 48%, rgba(3,25,66,0.15) 100%)"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: "100%", md: "50%" },
            maxWidth: 820,
            opacity: { xs: 0.3, md: 1 }
          }}
        >
          <Image
            alt="Guru Maa at Divine Day"
            fill
            priority
            src={IMG.heroOverlap}
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </Box>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 4, md: 5 } }}>
          <Box sx={{ maxWidth: { xs: "100%", md: "min(680px, 54%)" } }}>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: { xs: 30, md: 48 },
                lineHeight: 1.08,
                color: "#ecede5",
                fontWeight: 400,
                mb: 2.5
              }}
            >
              An Evening of Meditation, Wisdom, and Inner Calm with Guru Maa Shubha Didi
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  ...uiPresets.ctaButton,
                  bgcolor: "#e9967b",
                  color: "#1a120c",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#d8866f" }
                }}
              >
                Register Free
              </Button>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                sx={{
                  ...uiPresets.ctaButton,
                  borderColor: "rgba(255,255,255,0.85)",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.08)" }
                }}
              >
                Reserve My Spot
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0a1628", height: { xs: 32, md: 44 } }}>
        <Box
          sx={{
            height: "100%",
            bgcolor: "#d8eef4",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

      {/* Zigzag: Come experience + Why this event */}
      <Box sx={{ position: "relative", bgcolor: "#d8eef4", py: { xs: 6, md: 10 }, px: { xs: 2, md: 3 }, overflow: "hidden" }}>
        <LotusBackdrop />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={{ xs: 5, md: 7 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 3, md: 5 },
                alignItems: "center"
              }}
            >
              <ZigzagImageCard src={IMG.comePeace} alt="Seekers in a peaceful gathering" />
              <Box>
                <Typography sx={{ ...peachTitle, mb: 1.5 }}>Come experience the peace you have been seeking</Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#1a1a1a", fontSize: { xs: 15, md: 17 }, lineHeight: 1.75 }}>
                  Join Guru Maa Shubha Didi for a free annual spiritual gathering filled with meditation, soulful guidance, and a deeply calming
                  experience that helps you reconnect with yourself.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 3, md: 5 },
                alignItems: "center"
              }}
            >
              <Box sx={{ order: { xs: 2, md: 1 } }}>
                <Typography sx={{ ...peachTitle, mb: 1.5 }}>Why this event</Typography>
                <Stack spacing={2}>
                  <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#333", fontSize: { xs: 15, md: 17 }, lineHeight: 1.75 }}>
                    In the middle of deadlines, noise, emotional heaviness, and daily pressure, we often forget what peace feels like. This gathering
                    is a sacred opportunity to pause, breathe, reflect, and reconnect with your inner self.
                  </Typography>
                  <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#333", fontSize: { xs: 15, md: 17 }, lineHeight: 1.75 }}>
                    Through meditation, spiritual wisdom, and the divine presence of Guru Maa Shubha Didi, this event is designed to leave you feeling
                    lighter, calmer, and deeply nourished from within.
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{ order: { xs: 1, md: 2 } }}>
                <ZigzagImageCard src={IMG.whyEvent} alt="Guru Maa with seekers" />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Give yourself this pause — split + curved image */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(280px, 42%) 1fr" },
          minHeight: { xs: "auto", md: 420 },
          bgcolor: "#f0f9f8"
        }}
      >
        <Box sx={{ py: { xs: 5, md: 8 }, px: { xs: 2.5, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 28, md: 38 },
              color: "#1f2f52",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              mb: 2,
              lineHeight: 1.15
            }}
          >
            Give yourself this pause.
          </Typography>
          <Typography sx={{ color: "#5a5a5a", fontSize: { xs: 15, md: 16 }, lineHeight: 1.75, maxWidth: 520, mb: 3 }}>
            Come experience a space of meditation, silence, peace, and bliss with Guru Maa Shubha Didi. Entry is free, but the experience can stay
            with you for a lifetime.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              borderRadius: 999,
              px: 3.5,
              py: 1.25,
              textTransform: "none",
              fontWeight: 700,
              bgcolor: "#f29985",
              color: "#fff",
              boxShadow: "none",
              "&:hover": { bgcolor: "#e08874", boxShadow: "none" }
            }}
          >
            Register Now
          </Button>
          <Stack direction="row" spacing={3} sx={{ mt: 4, color: "#e5c090" }}>
            <LandscapeOutlinedIcon sx={{ fontSize: 32 }} />
            <FlightOutlinedIcon sx={{ fontSize: 32 }} />
            <WavesOutlinedIcon sx={{ fontSize: 32 }} />
          </Stack>
        </Box>
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 280, md: "auto" },
            order: { xs: -1, md: 0 }
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              clipPath: { xs: "none", md: "ellipse(90% 115% at 100% 50%)" },
              borderRadius: { xs: 0, md: 0 }
            }}
          >
            <Image src={IMG.givePause} alt="Meditation during Divine Day" fill sizes="(max-width: 900px) 100vw, 58vw" style={{ objectFit: "cover" }} />
          </Box>
        </Box>
      </Box>

      {/* What you will experience */}
      <Box sx={{ bgcolor: "#fdfcf8", py: { xs: 7, md: 11 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(260px, 38%) 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "start"
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: "100%", md: 420 },
                mx: { xs: "auto", md: 0 },
                minHeight: { xs: 360, md: 520 },
                borderRadius: "28px",
                borderTopRightRadius: { md: "80px" },
                borderBottomLeftRadius: { md: "80px" },
                overflow: "hidden",
                boxShadow: "0 14px 40px rgba(0,0,0,0.1)",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: { xs: "45%", md: "50%" },
                  height: { xs: "45%", md: "48%" },
                  borderLeft: "4px solid #2c7a7b",
                  borderBottom: "4px solid #2c7a7b",
                  borderBottomLeftRadius: { xs: "24px", md: "76px" },
                  pointerEvents: "none"
                }
              }}
            >
              <Image src={IMG.heroOverlap} alt="Guru Maa" fill sizes="(max-width: 900px) 100vw, 38vw" style={{ objectFit: "cover" }} />
            </Box>
            <Box>
              <Typography sx={{ ...peachTitle, mb: 3, fontSize: { xs: "0.78rem", md: "0.95rem" } }}>What you will experience</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                  gap: { xs: 2.5, md: 3 },
                  mb: 3
                }}
              >
                {experiences.map(({ title, body, Icon }) => (
                  <Box key={title}>
                    <Icon sx={{ color: "#e8907d", fontSize: 28, mb: 0.75 }} />
                    <Typography sx={{ fontWeight: 700, color: "#e8907d", fontSize: "0.95rem", mb: 0.5 }}>{title}</Typography>
                    <Typography sx={{ color: "#4a4a4a", fontSize: 14, lineHeight: 1.6 }}>{body}</Typography>
                  </Box>
                ))}
              </Box>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  ...uiPresets.ctaButton,
                  bgcolor: "#0a1a32",
                  color: "#fff",
                  fontWeight: 700,
                  px: 3,
                  py: 1.25,
                  "&:hover": { bgcolor: "#152a48" }
                }}
              >
                Register Free
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Guru Maa */}
      <Box sx={{ position: "relative", bgcolor: "#fdfcf8", py: { xs: 7, md: 10 }, px: { xs: 2, md: 3 }, overflow: "hidden" }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.45,
            backgroundImage: `repeating-linear-gradient(
              -5deg,
              transparent,
              transparent 18px,
              rgba(232, 144, 125, 0.12) 18px,
              rgba(232, 144, 125, 0.12) 19px
            )`,
            pointerEvents: "none"
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center"
            }}
          >
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <Typography sx={{ ...peachTitle, mb: 0.5, letterSpacing: "0.14em" }}>About Guru Maa</Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontSize: { xs: 34, md: 44 },
                  color: "#e8907d",
                  fontWeight: 600,
                  mb: 2.5,
                  lineHeight: 1.1
                }}
              >
                Shubha Didi
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#3d3d3d", fontSize: { xs: 15, md: 17 }, lineHeight: 1.85, mb: 2 }}>
                Guru Maa Shubha Didi is a spiritual guide, life coach, and compassionate mentor whose teachings have touched countless lives. Through
                her wisdom, healing presence, and practical spiritual guidance, she helps people move from confusion to clarity, from loneliness to
                peace, and from restlessness to inner stillness.
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#3d3d3d", fontSize: { xs: 15, md: 17 }, lineHeight: 1.85 }}>
                This annual gathering is an opportunity to experience her guidance live in a sacred and serene setting.
              </Typography>
            </Box>
            <Box
              sx={{
                order: { xs: 1, md: 2 },
                position: "relative",
                minHeight: { xs: 320, md: 440 },
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 16px 42px rgba(3,25,66,0.12)"
              }}
            >
              <Image src={IMG.posterBand} alt="Guru Maa teaching" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* THE DIVINE DAY — cosmic */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 6, md: 8 },
          pb: { xs: 14, md: 18 },
          px: { xs: 2, md: 3 },
          overflow: "hidden",
          backgroundImage: `linear-gradient(180deg, rgba(4,8,28,0.92) 0%, rgba(6,14,40,0.95) 100%), url('${IMG.posterBand}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 3 }}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="center"
            sx={{
              flexWrap: "wrap",
              mb: { xs: 4, md: 5 },
              py: 2,
              px: { xs: 1.5, md: 2 },
              borderRadius: "16px",
              bgcolor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)"
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: { xs: 22, md: 26 }, fontFamily: "var(--font-forum), serif" }}>1st MAY</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: 13, letterSpacing: "0.08em" }}>FRIDAY</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.25)", display: { xs: "none", md: "block" } }} />
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: { xs: 22, md: 26 }, fontFamily: "var(--font-forum), serif" }}>4:15 PM</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: 13, letterSpacing: "0.08em" }}>ONWARDS</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.25)", display: { xs: "none", md: "block" } }} />
            <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: 360 }}>
              <Typography sx={{ color: "#ffc19a", fontWeight: 700, fontSize: 14 }}>Entry: FREE</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12, mt: 0.5 }}>Entry by invite — register to receive details</Typography>
            </Box>
            <Box sx={{ flex: { md: 1 }, minWidth: { xs: "100%", md: 200 }, textAlign: { xs: "center", md: "right" } }}>
              <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: { xs: 11, md: 12 }, lineHeight: 1.5 }}>
                Sir Mutha Venkatasubba Rao Concert Hall, Lady Andal School campus, Chetpet, Chennai
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ textAlign: "center", maxWidth: 900, mx: "auto" }}>
            <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: 42, md: 64 }, color: "#e8b4a8", fontWeight: 600, lineHeight: 1.05 }}>
              THE DIVINE DAY
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: 13, sm: 15, md: 17 },
                letterSpacing: { xs: "0.04em", md: "0.08em" },
                mt: 2,
                lineHeight: 1.4,
                textTransform: "uppercase"
              }}
            >
              The pathway to divinity goes through Gates of Wisdom!
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, fontSize: { xs: 15, md: 17 } }}>WITH GURU MAA SHUBHA DIDI</Typography>
            <Typography sx={{ fontFamily: "var(--font-forum), serif", fontStyle: "italic", color: "rgba(255,255,255,0.9)", fontSize: { xs: 28, md: 40 }, mt: 2 }}>
              2026
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mt: 4 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{ ...uiPresets.ctaButton, bgcolor: "#0a1a32", color: "#fff", fontWeight: 700, px: 3, "&:hover": { bgcolor: "#152a48" } }}
              >
                Register Now
              </Button>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{ ...uiPresets.ctaButton, bgcolor: "#e9967b", color: "#fff", fontWeight: 700, px: 3, "&:hover": { bgcolor: "#d8866f" } }}
              >
                Special Guest
              </Button>
            </Stack>
          </Box>
        </Container>

        <Box
          sx={{
            position: "absolute",
            right: { xs: "50%", md: "4%" },
            bottom: { xs: -16, md: 8 },
            transform: { xs: "translateX(50%)", md: "none" },
            width: { xs: 200, sm: 240, md: 280 },
            height: { xs: 260, sm: 300, md: 360 },
            zIndex: 2
          }}
        >
          <Image src={IMG.heroOverlap} alt="Guru Maa Shubha Didi" fill sizes="280px" style={{ objectFit: "contain", objectPosition: "bottom center" }} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: { xs: 48, md: 72 },
            bgcolor: "#fff",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

      {/* Who should attend */}
      <Box sx={{ bgcolor: "#fff", pt: { xs: 5, md: 6 }, pb: { xs: 7, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" }, gap: { xs: 4, md: 5 } }}>
            <Box>
              <Typography sx={{ ...peachTitle, mb: 2, fontSize: { xs: "0.85rem", md: "0.95rem" } }}>Who should attend</Typography>
              <Typography sx={{ color: "#7a6a5a", fontSize: { xs: 14, md: 15 }, lineHeight: 1.7, mb: 3, maxWidth: 560 }}>
                This evening is for you if you are drawn to stillness, community, and gentle guidance—whether you are new to meditation or have
                practiced for years.
              </Typography>
              <Stack divider={<Divider flexItem sx={{ borderColor: "rgba(0,0,0,0.08)" }} />}>
                {whoShouldAttend.map((line) => (
                  <Typography key={line} sx={{ py: 2, fontWeight: 600, fontSize: { xs: 12, sm: 13 }, letterSpacing: "0.04em", color: "#1a1a1a" }}>
                    {line}
                  </Typography>
                ))}
              </Stack>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{ mt: 3, ...uiPresets.ctaButton, bgcolor: "#0a1a32", color: "#fff", fontWeight: 700, px: 3, py: 1.25, "&:hover": { bgcolor: "#152a48" } }}
              >
                Register Now
              </Button>
            </Box>
            <Stack spacing={2} sx={{ alignItems: { xs: "stretch", md: "flex-end" } }}>
              <Box sx={{ position: "relative", width: "100%", minHeight: { xs: 260, md: 320 }, borderRadius: "20px", overflow: "hidden", display: { xs: "block", md: "block" } }}>
                <Image src={IMG.whoOverlap} alt="Seekers at Divine Day" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </Box>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "12px",
                  border: "1px solid rgba(3,25,66,0.12)",
                  bgcolor: "#fafafa",
                  maxWidth: 400,
                  ml: { md: "auto" }
                }}
              >
                <Typography sx={{ fontStyle: "italic", color: "#555", fontSize: 14, lineHeight: 1.6 }}>
                  No prior meditation experience is needed. All are welcome.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Experiences from Seekers — video strip + quotes */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 7, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ ...peachTitle, textAlign: "center", display: "block", mb: 0.5, fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
            Experiences from Seekers
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2, mb: 2 }}>
            {videoThumbs.map((t, i) => (
              <Box
                key={t.src}
                onClick={() => setVSlide(i)}
                sx={{
                  position: "relative",
                  minHeight: { xs: 180, md: 200 },
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  outline: vSlide === i ? "3px solid #e8907d" : "none",
                  outlineOffset: 2
                }}
              >
                <Image src={t.src} alt={t.alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                {t.tag ? (
                  <Typography sx={{ position: "absolute", top: 10, left: 10, bgcolor: "rgba(0,0,0,0.5)", color: "#fff", px: 1, py: 0.5, borderRadius: 1, fontSize: 12 }}>
                    {t.tag}
                  </Typography>
                ) : null}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(0,0,0,0.2)"
                  }}
                >
                  <PlayArrowRoundedIcon sx={{ fontSize: 56, color: "#fff" }} />
                </Box>
              </Box>
            ))}
          </Box>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 6 }}>
            <IconButton
              aria-label="Previous video"
              onClick={() => setVSlide((vSlide + videoThumbs.length - 1) % videoThumbs.length)}
              sx={{ bgcolor: "#fde8e0", color: "#e8907d", "&:hover": { bgcolor: "#fcd5c8" } }}
            >
              ‹
            </IconButton>
            <IconButton
              aria-label="Next video"
              onClick={() => setVSlide((vSlide + 1) % videoThumbs.length)}
              sx={{ bgcolor: "#fde8e0", color: "#e8907d", "&:hover": { bgcolor: "#fcd5c8" } }}
            >
              ›
            </IconButton>
          </Stack>

          <Typography sx={{ ...peachTitle, textAlign: "center", display: "block", mb: 1 }}>Hear What Our Global Community Has To Say</Typography>
          <Typography sx={{ textAlign: "center", color: "#666", mb: 4, fontSize: 15 }}>
            Hear from those whose lives have been transformed by these sessions.
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5 }}>
            {quoteCards.map((c) => (
              <Box
                key={c.name}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  bgcolor: "#e8f4f8",
                  border: "1px solid rgba(43, 70, 161, 0.08)"
                }}
              >
                <Box sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#fde8e0", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                  <FavoriteBorderRoundedIcon sx={{ color: "#e8907d" }} />
                </Box>
                <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#2a2a2a", fontSize: 15, lineHeight: 1.65, mb: 2 }}>{c.quote}</Typography>
                <Divider sx={{ my: 1.5 }} />
                <Typography sx={{ fontWeight: 700, color: "#031942" }}>{c.name}</Typography>
                <Typography sx={{ fontSize: 13, color: "#666" }}>{c.place}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ position: "relative", bgcolor: "#faf8f5", py: { xs: 7, md: 10 }, px: { xs: 2, md: 3 }, overflow: "hidden" }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.5,
            backgroundImage: `repeating-linear-gradient(
              8deg,
              transparent,
              transparent 22px,
              rgba(232, 144, 125, 0.1) 22px,
              rgba(232, 144, 125, 0.1) 23px
            )`,
            pointerEvents: "none"
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{ ...peachTitle, textAlign: "center", display: "block", mb: 1, fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#666", mb: 4 }}>Everything you need to know about joining our events.</Typography>
          {faqItems.map((item, i) => (
            <Accordion
              key={item.q}
              defaultExpanded={i === 0}
              disableGutters
              sx={{
                mb: 1.5,
                borderRadius: "12px !important",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                bgcolor: "#fff",
                "&:before": { display: "none" }
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ color: "#e8907d" }} />}>
                <Typography sx={{ fontWeight: 600, color: "#1f2f52" }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#555", lineHeight: 1.65 }}>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <SharedFooter />
    </Box>
  );
}
