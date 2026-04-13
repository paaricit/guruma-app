"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography
} from "@mui/material";

const IMG = {
  banner: "/images/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Photos/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Banner.webp",
  videoThumb: "/images/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Photos/Divine Discourses Video thumbnail.webp",
  whatHappens: "/images/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Photos/What Happens in a Session.webp",
  scheduleBg: "/images/SESSIONS (FREE LIVE SPIRITUAL SESSIONS) Photos/Session Schedule BG image.webp"
} as const;

const whatHappensItems = [
  {
    title: "Enlightening Talk on Wisdom",
    body: "Guru Maa shares profound spiritual wisdom through discourses that make timeless principles practical for everyday life."
  },
  {
    title: "Guided Meditation Sessions",
    body: "Experience transformative guided meditation sessions designed to quiet the mind and deepen inner stillness."
  },
  {
    title: "Workshops, Q & A",
    body: "Submit your questions and receive personalized guidance in a supportive, structured Q&A segment."
  },
  {
    title: "Sharing of Resolutions & Sharing of Personal Experience",
    body: "Participants share intentions and lived insights, building collective learning and gentle accountability."
  },
  {
    title: "Bhajan / Soulful Music",
    body: "Heart-opening devotional music and bhajans to soften the heart and uplift the spirit before and after teachings."
  }
] as const;

const freeSessionPillars = [
  {
    title: "Open to All",
    body: "Anyone can join, from complete beginners to experienced practitioners—bring curiosity and an open heart.",
    Icon: PublicOutlinedIcon
  },
  {
    title: "Interactive",
    body: "No prior spiritual background required. Sessions are welcoming, dialogic, and grounded in real-life questions.",
    Icon: TouchAppOutlinedIcon
  },
  {
    title: "Online & Offline Connect",
    body: "Join seekers worldwide on Zoom while Chennai gatherings nurture in-person sangha and community energy.",
    Icon: LanguageOutlinedIcon
  }
] as const;

const howToJoinSteps = [
  {
    n: 1,
    title: "Register",
    body: "Fill out our Simple Registration Form With your Name, Mobile # and Email ID. Will take Less than a Minute"
  },
  {
    n: 2,
    title: "Connect",
    body: "We will add you to our Whatsapp Community Group. You will receive regular communication including – Schedules, Venue, Links and other relevant information"
  },
  {
    n: 3,
    title: "Join",
    body: "Immerse yourself for a Qualitative Live Offline / Online Experience"
  }
] as const;

const guidelineItems = [
  "Settle into a quiet space a few minutes early; test your device, audio, and video for online sessions.",
  "Keep a notebook nearby if you wish to capture practices or reflections shared during the session.",
  "Follow facilitator prompts for mute, breaks, and Q&A so everyone can hear clearly and feel respected.",
  "Approach the gathering with openness—questions and sincere sharing enrich the collective experience.",
  "For in-person sessions, arrive on time, dress modestly, and honour the sanctity of the space."
] as const;

const faqItems: { q: string; a: string }[] = [
  {
    q: "Is it really free?",
    a: "Yes. These live spiritual sessions are offered without a participation fee so seekers everywhere can learn and practise together."
  },
  {
    q: "Can I join from outside India?",
    a: "Absolutely. Zoom sessions are scheduled in IST; you can convert to your local time and join from any country."
  },
  {
    q: "Will the recordings be available?",
    a: "Live participation is encouraged for the fullest experience. Any replay or excerpt policy will be communicated in the community group when applicable."
  },
  {
    q: "What if I am new to spirituality?",
    a: "Sessions are crafted for newcomers and long-time seekers alike—no jargon gatekeeping, only clear guidance and compassion."
  },
  {
    q: "Do I need any special equipment?",
    a: "For online sessions, a phone, tablet, or laptop with stable internet is enough. A quiet corner and headphones help."
  },
  {
    q: "Can I ask questions during the session?",
    a: "Yes. Structured Q&A segments and workshops are part of the format; facilitators will invite questions at the right moments."
  }
];

const testimonialSlides = [
  {
    quote:
      "These sessions transformed my spiritual journey. The clarity I received continues to guide me every day.",
    name: "Priya Sharma",
    place: "Mumbai, India"
  },
  {
    quote: "The blend of meditation, music, and honest dialogue helped me return to calm during a difficult season.",
    name: "Rahul Mehta",
    place: "Bengaluru, India"
  },
  {
    quote: "Joining from overseas still felt intimate—the community support after each discourse is precious.",
    name: "Ananya Iyer",
    place: "Singapore"
  }
] as const;

function ScheduleCard({
  badgePrefix,
  badgeHighlight,
  title,
  rows,
  iconSlot
}: {
  badgePrefix: string;
  badgeHighlight: string;
  title: string;
  rows: string[];
  iconSlot: ReactNode;
}) {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #d1f1f5 0%, #ffffff 100%)",
        border: "1px solid rgba(28, 57, 142, 0.15)",
        borderRadius: "19px",
        p: { xs: 2.5, md: 3 },
        boxShadow: "0 12px 32px rgba(3, 25, 66, 0.08)"
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{ mb: 2 }}>
        <Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              px: 1.5,
              py: 0.5,
              borderRadius: 999,
              bgcolor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              mb: 0.75
            }}
          >
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#e64c3c" }} />
            <Typography sx={{ fontSize: 14, color: "#474545" }}>
              {badgePrefix}
              <Box component="span" sx={{ fontWeight: 700 }}>
                {badgeHighlight}
              </Box>
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: "1.1rem", md: "1.35rem" }, color: "#031942" }}>{title}</Typography>
        </Box>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 4px 14px rgba(0,0,0,0.06)"
          }}
        >
          {iconSlot}
        </Box>
      </Stack>
      <Stack spacing={1.25} sx={{ mb: 2.5 }}>
        {rows.map((line) => (
          <Stack direction="row" spacing={1} key={line} alignItems="flex-start">
            <AccessTimeOutlinedIcon sx={{ fontSize: 22, color: "#5a6a7a", mt: 0.25 }} />
            <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: "#474545", lineHeight: 1.5 }}>{line}</Typography>
          </Stack>
        ))}
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <LanguageOutlinedIcon sx={{ fontSize: 22, color: "#5a6a7a", mt: 0.25 }} />
          <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: "#474545" }}>Hindi & English</Typography>
        </Stack>
      </Stack>
      <Button
        component={Link}
        href="/contact"
        variant="contained"
        sx={{
          bgcolor: "#031942",
          color: "#fffdfb",
          px: 3,
          py: 1.25,
          fontWeight: 700,
          "&:hover": { bgcolor: "#052a5c" }
        }}
      >
        Connect with Us
      </Button>
    </Box>
  );
}

export default function SessionsPage() {
  const [tIndex, setTIndex] = useState(0);

  return (
    <Box sx={{ bgcolor: "#0a1628", overflowX: "hidden" }}>
      {/* --- Section: Hero --- */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 520, md: 640 },
          pt: { xs: 10, md: 12 },
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(100deg, rgba(3,25,66,0.9) 22%, rgba(3,25,66,0.55) 55%, rgba(3,25,66,0.25) 100%), url('${IMG.banner}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 4, md: 6 } }}>
          <Box sx={{ maxWidth: { xs: "100%", md: 560 } }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <VideoLibraryOutlinedIcon sx={{ color: "#ffc19a", fontSize: 22 }} />
              <Typography sx={{ color: "#ffc19a", fontWeight: 600, letterSpacing: 0.4 }}>FREE for All Seekers</Typography>
            </Stack>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: { xs: 44, md: 72 },
                lineHeight: { xs: 1.05, md: 0.95 },
                color: "#ecede5",
                fontWeight: 400
              }}
            >
              Live Sessions
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: 15, md: 18 },
                lineHeight: 1.65,
                color: "rgba(236,237,229,0.95)",
                maxWidth: 620
              }}
            >
              Join Guru Maa Shubha Didi and a global community of seekers for live spiritual learning—open to all, completely
              free, online and offline.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#e9967b",
                  color: "#1a120c",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#d8866f" }
                }}
              >
                Register for Next Session
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* --- Section: Curve into light band --- */}
      <Box sx={{ position: "relative", bgcolor: "#0a1628", height: { xs: 40, md: 52 } }}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            bgcolor: "#e8f4f8",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

      {/* --- Section: Divine Discourses --- */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #e8f4f8 0%, #f7fbfc 35%, #ffffff 100%)",
          px: { xs: 2, md: 3 },
          pb: { xs: 6, md: 9 },
          pt: { xs: 2, md: 3 }
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center"
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontSize: { xs: 36, md: 48 },
                  color: "#2a2a2a",
                  mb: 2
                }}
              >
                Divine Discourses
              </Typography>
              <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: "#444", lineHeight: 1.7, mb: 3 }}>
                Join Guru Maa Shubha Didi and a Global Community of Seekers for a transformative Experience. Listen, Absorb
                and Learn to become better than before. Join these sessions to get a personalized experience to Happiness and
                Joy. Open to All. Completely Free.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  bgcolor: "#031942",
                  color: "#fff",
                  fontWeight: 600,
                  px: 3,
                  "&:hover": { bgcolor: "#052a5c" }
                }}
              >
                Connect with Us
              </Button>
            </Box>
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                minHeight: { xs: 280, md: 380 },
                boxShadow: "0 16px 48px rgba(3, 25, 66, 0.12)"
              }}
            >
              <Image src={IMG.videoThumb} alt="Divine Discourses preview" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)"
                }}
              >
                <IconButton
                  aria-label="Play video"
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "rgba(255,255,255,0.95)",
                    color: "#031942",
                    "&:hover": { bgcolor: "#fff" }
                  }}
                >
                  <PlayArrowRoundedIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- Section: What are these free live sessions --- */}
      <Box sx={{ bgcolor: "#ffffff", py: { xs: 6, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 32, md: 48 },
              color: "#2c4a4a",
              textAlign: "center",
              mb: 1
            }}
          >
            What Are These FREE Live Sessions?
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#555", maxWidth: 760, mx: "auto", mb: 5 }}>
            A welcoming rhythm of teaching, practice, and community—designed for modern life.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: 3
            }}
          >
            {freeSessionPillars.map(({ Icon, title, body }) => (
              <Box
                key={title}
                sx={{
                  textAlign: "center",
                  px: { xs: 1, md: 2 },
                  pt: 2
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Icon sx={{ fontSize: 48, color: "#e9967b" }} />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "#2c4a4a", mb: 1 }}>{title}</Typography>
                <Typography sx={{ color: "#555", lineHeight: 1.65, fontSize: 15 }}>{body}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* --- Section: What happens in a session --- */}
      <Box id="session-format" sx={{ bgcolor: "#f3fafc", py: { xs: 6, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 32, md: 48 },
              color: "#2a2a2a",
              textAlign: "center",
              mb: 4
            }}
          >
            What Happens in a Session
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "start"
            }}
          >
            <Stack spacing={2}>
              {whatHappensItems.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    p: 2.5,
                    borderRadius: "14px",
                    bgcolor: "#fff",
                    border: "1px solid rgba(28, 57, 142, 0.1)",
                    boxShadow: "0 6px 20px rgba(3, 25, 66, 0.04)"
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#031942", mb: 0.75 }}>{item.title}</Typography>
                  <Typography sx={{ color: "#555", lineHeight: 1.65, fontSize: 15 }}>{item.body}</Typography>
                </Box>
              ))}
            </Stack>
            <Box
              sx={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                minHeight: { xs: 320, md: 520 },
                display: { xs: "none", md: "block" },
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)"
              }}
            >
              <Image src={IMG.whatHappens} alt="Participants in a spiritual session" fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: "cover" }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- Section: Session schedule intro --- */}
      <Box sx={{ bgcolor: "#ffffff", pt: { xs: 6, md: 8 }, pb: 0, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: 32, md: 48 }, color: "#2a2a2a", textAlign: "center" }}>
            Session Schedule
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#555", mt: 1.5, mb: 4, fontSize: { xs: 15, md: 18 } }}>
            Join us weekly for transformative sessions across Chennai and our global Zoom community.
          </Typography>
        </Container>
      </Box>

      {/* --- Section: Schedule cards on art + How to join --- */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `linear-gradient(180deg, rgba(5, 20, 45, 0.82) 0%, rgba(5, 20, 45, 0.75) 40%, rgba(5, 20, 45, 0.88) 100%), url('${IMG.scheduleBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 3 }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 520, mx: { xs: "auto", md: 0 } }}>
            <Stack spacing={3}>
              <ScheduleCard
                badgePrefix="Available on YouTube "
                badgeHighlight="LIVE"
                title="Chennai Live Sessions ( OFFLINE )"
                rows={["Thursday : 7:00 PM IST", "Sunday   : 11:30 AM to 12:30 PM, Followed by Divine Lunch / Prasad"]}
                iconSlot={<CalendarMonthOutlinedIcon sx={{ color: "#031942" }} />}
              />
              <ScheduleCard
                badgePrefix="Available on "
                badgeHighlight="ZOOM"
                title="Zoom Live Sessions ( ONLINE )"
                rows={["Monday- Wednesday : 7:30 AM IST ", "Friday   : 7:30 AM IST"]}
                iconSlot={<CalendarMonthOutlinedIcon sx={{ color: "#031942" }} />}
              />
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* --- Section: How to join --- */}
      <Box
        sx={{
          position: "relative",
          background: "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(54, 120, 230, 0.35) 0%, transparent 55%), linear-gradient(180deg, #050c1f 0%, #0a1833 45%, #060d22 100%)",
          pt: { xs: 7, md: 10 },
          px: { xs: 2, md: 3 },
          pb: 0
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 36, md: 56 },
              color: "#fff",
              textAlign: "center",
              mb: 1
            }}
          >
            How to Join
          </Typography>
          <Typography sx={{ textAlign: "center", color: "rgba(255,255,255,0.85)", fontSize: { xs: 15, md: 18 }, mb: 5 }}>
            Simple Steps to Register and Start this Journey
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: { xs: 4, md: 3 },
              position: "relative"
            }}
          >
            {howToJoinSteps.map((s) => (
              <Box key={s.title} sx={{ textAlign: "center", px: { md: 1 } }}>
                <Box
                  sx={{
                    width: { xs: 100, md: 120 },
                    height: { xs: 100, md: 120 },
                    borderRadius: "50%",
                    bgcolor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)"
                  }}
                >
                  <Typography sx={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600, fontSize: { xs: 42, md: 48 }, color: "#e9967b" }}>
                    {s.n}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "#fff", mb: 1 }}>{s.title}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.65, fontSize: 15 }}>{s.body}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "#031942",
                textTransform: "none",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                fontSize: 18,
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                "&:hover": { bgcolor: "#f0f4fa" }
              }}
            >
              Register Now
            </Button>
          </Box>
        </Container>
        <Box
          sx={{
            height: { xs: 44, md: 56 },
            mt: { xs: 5, md: 6 },
            bgcolor: "#ffffff",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

      {/* --- Section: Guidelines --- */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#ffffff",
          px: { xs: 2, md: 3 },
          pt: { xs: 2, md: 3 },
          pb: 0,
          overflow: "hidden"
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "repeating-radial-gradient(circle at 50% 38%, transparent 0, transparent 32px, rgba(233, 150, 123, 0.07) 32px, rgba(233, 150, 123, 0.07) 33px), repeating-radial-gradient(circle at 50% 38%, transparent 0, transparent 48px, rgba(233, 150, 123, 0.04) 48px, rgba(233, 150, 123, 0.04) 49px)"
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, pb: { xs: 5, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 32, md: 48 },
              color: "#2a2a2a",
              textAlign: "center",
              mb: 1.5
            }}
          >
            Guidelines for Participants
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#555", fontSize: { xs: 15, md: 18 }, mb: 3 }}>
            To make the most of your session, we recommend the following:
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 5 }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                bgcolor: "#031942",
                color: "#fff",
                px: 3.5,
                py: 1.5,
                fontWeight: 700,
                letterSpacing: "0.06em",
                fontSize: 14,
                borderRadius: "10px",
                "&:hover": { bgcolor: "#052a5c" }
              }}
            >
              ONLINE ZOOM
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              sx={{
                borderColor: "#031942",
                color: "#031942",
                px: 3.5,
                py: 1.5,
                fontWeight: 700,
                letterSpacing: "0.06em",
                fontSize: 14,
                borderRadius: "10px",
                borderWidth: 2,
                "&:hover": { borderWidth: 2, borderColor: "#031942", bgcolor: "rgba(3,25,66,0.04)" }
              }}
            >
              OFFLINE SESSION
            </Button>
          </Stack>
          <Stack spacing={1.5}>
            {guidelineItems.map((line) => (
              <Box key={line} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#e9967b", mt: 0.85, flexShrink: 0 }} />
                <Typography sx={{ color: "#444", lineHeight: 1.65 }}>{line}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
        <Box
          sx={{
            height: { xs: 40, md: 52 },
            bgcolor: "#f7fbfc",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%",
            position: "relative",
            zIndex: 1
          }}
        />
      </Box>

      {/* --- Section: Testimonials --- */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 7, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: 32, md: 48 }, color: "#2a2a2a", textAlign: "center" }}>
            Experiences from Seekers
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#555", mt: 1, mb: 4 }}>
            Hear from those whose lives have been transformed through regular participation.
          </Typography>
          <Box
            sx={{
              maxWidth: 720,
              mx: "auto",
              minHeight: 200,
              p: { xs: 3, md: 4 },
              borderRadius: "20px",
              bgcolor: "#f3fafc",
              border: "1px solid rgba(28, 57, 142, 0.08)",
              position: "relative"
            }}
          >
            <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: "#333", lineHeight: 1.7, fontStyle: "italic", mb: 2 }}>
              {testimonialSlides[tIndex].quote}
            </Typography>
            <Typography sx={{ fontWeight: 700, color: "#031942" }}>{testimonialSlides[tIndex].name}</Typography>
            <Typography sx={{ color: "#666", fontSize: 14 }}>{testimonialSlides[tIndex].place}</Typography>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
              <IconButton aria-label="Previous testimonial" onClick={() => setTIndex((tIndex + testimonialSlides.length - 1) % testimonialSlides.length)}>
                <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              {testimonialSlides.map((_, j) => (
                <Box
                  key={j}
                  onClick={() => setTIndex(j)}
                  sx={{
                    width: j === tIndex ? 14 : 10,
                    height: j === tIndex ? 14 : 10,
                    borderRadius: "50%",
                    bgcolor: j === tIndex ? "#031942" : "rgba(3,25,66,0.25)",
                    cursor: "pointer"
                  }}
                />
              ))}
              <IconButton aria-label="Next testimonial" onClick={() => setTIndex((tIndex + 1) % testimonialSlides.length)}>
                <ArrowForwardIosRoundedIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Box>
          <Typography sx={{ textAlign: "center", color: "#555", mt: 4, mb: 2 }}>
            Join thousands of seekers worldwide who have found clarity through these gatherings.
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={4} flexWrap="wrap" useFlexGap>
            {[
              ["5L+", "Lives Touched"],
              ["50+", "Countries"],
              ["1000+", "Sessions"]
            ].map(([v, l]) => (
              <Box key={l} sx={{ textAlign: "center", minWidth: 100 }}>
                <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: 36, md: 44 }, color: "#031942" }}>{v}</Typography>
                <Typography sx={{ color: "#666", fontSize: 15 }}>{l}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* --- Section: FAQ --- */}
      <Box sx={{ bgcolor: "#f7fbfc", pt: { xs: 4, md: 5 }, pb: { xs: 7, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="md">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: 32, md: 48 }, color: "#2a2a2a", textAlign: "center", mb: 1 }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#555", mb: 4 }}>
            Everything you need to know about joining our free live sessions.
          </Typography>
          {faqItems.map((item, i) => (
            <Accordion key={item.q} defaultExpanded={i === 0} disableGutters sx={{ mb: 1.5, borderRadius: "12px !important", overflow: "hidden", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ color: "#031942" }} />}>
                <Typography sx={{ fontWeight: 600, color: "#031942" }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#555", lineHeight: 1.65 }}>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* --- Section: Final CTA --- */}
      <Box sx={{ bgcolor: "#e8f4f8", py: { xs: 5, md: 6 }, px: 2 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center">
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ChevronRightRoundedIcon />}
              sx={{
                bgcolor: "#031942",
                color: "#fff",
                px: 3,
                py: 1.75,
                fontWeight: 700,
                "&:hover": { bgcolor: "#052a5c" }
              }}
            >
              Register for Next Session
            </Button>
            <Button
              component={Link}
              href="/sessions#session-format"
              variant="outlined"
              sx={{
                borderColor: "#031942",
                color: "#031942",
                px: 3,
                py: 1.75,
                fontWeight: 700
              }}
            >
              View Session Format
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* --- Section: Site footer --- */}
    </Box>
  );
}
