"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import SharedFooter from "@/components/site/shared-footer";
import SharedHeader from "@/components/site/shared-header";
import { SaptSadhanaStackCarousel } from "@/components/site/sapt-sadhana-stack-carousel";
import { uiPresets } from "@/lib/ui-presets";

const stats = [
  { value: "30+", label: "Years Divine Connect & Guidance" },
  { value: "5L+", label: "Beautiful Lives Touched" },
  { value: "50+", label: "Countries, our Yogis Divine Abode" },
  { value: "10,000+", label: "Transformative Discourses & Workshops" }
];

const callbackFieldSx = {
  "& .MuiInput-underline:before": { borderColor: "rgba(255,255,255,0.5)" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderColor: "rgba(255,255,255,0.8)" },
  "& .MuiInput-underline:after": { borderColor: "#fff" },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.85)" },
  "& .MuiInputBase-input": { color: "#fff" },
  "& .MuiInputBase-input::placeholder": { color: "rgba(255,255,255,0.55)", opacity: 1 }
};

const callbackFormFields = [
  { key: "name", label: "NAME", hint: "Enter your name", type: "text" as const },
  { key: "phone", label: "PHONE", hint: "Enter your phone number", type: "tel" as const },
  { key: "email", label: "EMAIL", hint: "Enter your Email ID", type: "email" as const },
  { key: "message", label: "MESSAGE", hint: "Give us a message", type: "text" as const }
];

const programRows = [
  {
    title: "Counselling & Healing Sessions",
    subtitle: "TRANSCENDENTAL HEALING TOUCH",
    description: "Struggling in your career, life choices, marriage, family or during pregnancy. Counselling offers a safe space to share and heal.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    image: "/images/Home Page Photos/Counselling & Healing Sessions BG.webp",
    imageLeft: false
  },
  {
    title: "Spiritual Retreats",
    subtitle: "A divine getaway for your Spiritual enlightenment",
    description: "Your path to fast-tracking your spiritual growth and being in Guru Maa Shubha Didi's divine presence.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    image: "/images/Home Page Photos/Spiritual Retreats BG (1).webp",
    imageLeft: true
  },
  {
    title: "Guided Meditation",
    subtitle: "THE ART & SCIENCE OF ETERNAL PEACE",
    description: "Move beyond just knowing about meditation to practicing it. Learn the art of meditation to purify karmic layers and unlock the eternal wealth of steadiness and intuitive wisdom.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    image: "/images/Home Page Photos/Guided Meditation  BG.webp",
    imageLeft: false
  },
  {
    title: "ISHT GOLD Membership",
    subtitle: "AS THE COMPASS, SO THE COLOUR",
    description: "ISHT is a community of like-minded individuals, all focused on uplifting themselves and making a positive impact on those around them.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
    image: "/images/Home Page Photos/IISHT GOLD Membership BG.webp",
    imageLeft: true
  },
  {
    title: "Sapt Sadhana",
    subtitle: "SELFLESS SERVICE TO SPREAD HAPPINESS",
    description: "Be a part of a mission that has fed over 10,000 people, funded several scholarships, and provided critical medical aid. Through Sapt Sadhana, we turn compassion into action.",
    primaryCta: "Support Our Mission",
    secondaryCta: "Learn more",
    image: "/images/Home Page Photos/Sapt Sadhana  BG.webp",
    imageLeft: false
  }
];

const wisdomStarIcon = "/images/Home Page Photos/Star 6.png";

const wisdomCards = [
  {
    title: "The art of letting go",
    badge: "The Most Rated",
    image: "/images/Home Page Photos/The art of letting go.webp",
    icon: "/images/Home Page Photos/wisdom_icon1.png"
  },
  {
    title: "Morning Meditation for Peace",
    badge: "The Most Rated",
    image: "/images/Home Page Photos/Morning Meditation for Peace.webp",
    icon: "/images/Home Page Photos/wisdom_icon2.png"
  },
  {
    title: "7 Steps to Inner Transformation",
    badge: "The Most Rated",
    image: "/images/Home Page Photos/7 Steps to Inner Transformation.webp",
    icon: "/images/Home Page Photos/wisdom_icon3.png"
  }
];

/** Card opens in-app dialog; `embedSrc` matches YouTube embed iframe URLs (see https://www.youtube.com/watch?v=… ). */
const seekerVideos = [
  {
    name: "Priya Sharma",
    image: "/images/Home Page Photos/Home page second section Video thumbnail.webp",
    embedSrc: "https://www.youtube.com/embed/GErQ_J7GUEM?autoplay=1"
  },
  {
    name: "Karan Paul",
    image: "/images/Home Page Photos/Morning Meditation for Peace.webp",
    embedSrc: "https://www.youtube.com/embed/JBKC19rmG1M?autoplay=1"
  },
  {
    name: "Priya Das",
    image: "/images/Home Page Photos/7 Steps to Inner Transformation.webp",
    embedSrc: "https://www.youtube.com/embed/VdGV5qiFX44?autoplay=1"
  },
  {
    name: "Neha Verma",
    image: "/images/Home Page Photos/The art of letting go.webp",
    embedSrc: "https://www.youtube.com/embed/GIuMzYxKjX8?si=6JYuIxPQodEE3yuz&autoplay=1"
  }
] as const;

const testimonials = [
  {
    quote: "These events transformed my spiritual journey. The guidance is profoundly yet accessible to everyone.",
    name: "Priya Sharma",
    location: "Mumbai India"
  },
  {
    quote: "I joined with no prior experience. The welcoming atmosphere and Guru Maa's wisdom have brought much peace into my life.",
    name: "David Chen",
    location: "Singapore"
  },
  {
    quote: "Guru Maa Shubha Didi's words gave me clarity at the right time. It was not just motivation, it was a deeply practical experience.",
    name: "Sarah Mitchell",
    location: "London, UK"
  }
];

const saptSadhanaCarouselSlides = [
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (1).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (2).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (3).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (4).webp"
] as const;

const saptCarouselArrowLeft = "/images/Home Page Photos/Arrow Left-poiint.png";
const saptCarouselArrowRight = "/images/Home Page Photos/Arrow Right-point.png";

type CallbackFormValues = Record<(typeof callbackFormFields)[number]["key"], string>;

const initialCallbackValues: CallbackFormValues = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export default function HomePage() {
  const theme = useTheme();
  const seekerMdUp = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: false });
  const seekerVisibleCount = seekerMdUp ? 3 : 1;
  const seekerMaxSlide = Math.max(0, seekerVideos.length - seekerVisibleCount);

  const [callbackValues, setCallbackValues] = useState<CallbackFormValues>(initialCallbackValues);
  const [callbackStatus, setCallbackStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [callbackError, setCallbackError] = useState("");
  const [seekerDialogOpen, setSeekerDialogOpen] = useState(false);
  const [activeSeekerEmbedSrc, setActiveSeekerEmbedSrc] = useState<string | null>(null);
  const [seekerSlideIndex, setSeekerSlideIndex] = useState(0);
  const [saptSlideIndex, setSaptSlideIndex] = useState(0);
  const saptSlideCount = saptSadhanaCarouselSlides.length;

  const saptOnStep = useCallback((delta: 1 | -1) => {
    setSaptSlideIndex((i) =>
      delta === 1 ? (i + 1) % saptSlideCount : (i - 1 + saptSlideCount) % saptSlideCount
    );
  }, [saptSlideCount]);

  useEffect(() => {
    setSeekerSlideIndex((i) => Math.min(i, seekerMaxSlide));
  }, [seekerMaxSlide]);

  function openSeekerVideo(embedSrc: string) {
    setActiveSeekerEmbedSrc(embedSrc);
    setSeekerDialogOpen(true);
  }

  function closeSeekerVideo() {
    setSeekerDialogOpen(false);
    setActiveSeekerEmbedSrc(null);
  }

  async function handleCallbackSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCallbackStatus("loading");
    setCallbackError("");
    try {
      const res = await fetch("/api/callback-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(callbackValues)
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setCallbackStatus("success");
      setCallbackValues(initialCallbackValues);
    } catch (err) {
      setCallbackStatus("error");
      setCallbackError(err instanceof Error ? err.message : "Request failed");
    }
  }

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        // `overflow-x: hidden` forces `overflow-y: auto` in CSS and clips children that extend
        // upward (e.g. footer contact card). `clip` limits horizontal bleed without clipping Y.
        overflowX: "clip",
        overflowY: "visible"
      }}
    >
      {/* --- Section: Site header --- */}
      <SharedHeader showProgramsMenu />

      {/* --- Section: Hero --- */}
      <Box
        sx={{
          minHeight: { xs: 700, md: 900 },
          // leave room for fixed header (Figma hero starts below nav)
          pt: { xs: 14, md: 16 },
          pb: { xs: 5, md: 0 },
          position: "relative"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 28.993%, #00224c 100%), url('/images/Home Page Photos/Home Page Banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 0.92fr" },
              alignItems: "center",
              minHeight: { xs: 620, md: 820 }
            }}
          >
            <Box sx={{ maxWidth: 720 }}>
              <Typography
                sx={{
                  color: "#ecede5",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: 24, md: 38.2 },
                  lineHeight: { xs: 1.25, md: "52.257px" },
                  maxWidth: 520
                }}
              >
                Happiness, Freedom & Peace Gets Unlocked with
              </Typography>
              <Typography
                sx={{
                  ...uiPresets.heroTitle,
                  mt: 1.5,
                  color: "#ecede5",
                  fontFamily: "var(--font-forum), serif",
                  fontSize: { xs: 56, md: 95.1 },
                  lineHeight: { xs: 0.9, md: 0.685 }
                }}
              >
                Guru Maa
                <br />
                Shubha Didi
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: { xs: 3.5, md: 6 } }}>
                <Button
                  variant="contained"
                  sx={{
                    ...uiPresets.ctaButton,
                    height: 52.1,
                    // width: { xs: 260, sm: 252.9 },
                    bgcolor: "#fffdfb",
                    color: "#1a305b",
                    borderRadius: "11.6px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: 18.24,
                    "&:hover": { bgcolor: "#f0efea" }
                  }}
                >
                  Join Divine Discourses
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    ...uiPresets.ctaButton,
                    height: 52.1,
                    // width: { xs: 260, sm: 252.9 },
                    borderColor: "rgba(255,255,255,0)",
                    color: "#fffdfb",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: "11.6px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: 18.24,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.26)", borderColor: "rgba(255,255,255,0)" }
                  }}
                >
                  Knowledge Shala : Explore
                </Button>
              </Stack>
            </Box>

          </Box>
        </Container>

      </Box>

      {/* --- Section: Guru Maa intro (video + roles) --- */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #D1F1F5 0%, #F2F2EE 50%, #FDFDF8 100%)",
          position: "relative",
          pt: { xs: 7, md: 9 },
          pb: { xs: 8, md: 10 }
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            transform: "translateY(-50%)",
            width: "100%",
            height: { xs: 72, md: 100 },
            zIndex: 2,
            pointerEvents: "none",
            // mixBlendMode: "screen"
          }}
        >
          <Image
            alt=""
            fill
            src="/images/Home Page Photos/curve.png"
            style={{ objectPosition: "center center" }}
          />
        </Box>
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              // bgcolor: "#fff",
              // borderRadius: { xs: 4, md: "30px" },
              p: { xs: 2.5, md: 4 },
              // boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "420px 1fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "center"
            }}
          >
            <Box sx={{ position: "relative", overflow: "hidden", }}>
              <Box sx={{ position: "relative", height: { xs: 360, md: 510 } }}>
                <Image alt="Guru Maa session" fill src="/images/Home Page Photos/Home page second section Video thumbnail.webp" style={{ objectFit: "cover" }} />
              </Box>
              {/* <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.9)",
                    color: "#2b46a1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700
                  }}
                >
                  ▶
                </Box>
              </Box> */}
            </Box>

            <Box>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: 38, md: 52 }, color: "#1c2842", lineHeight: 1.05 }}>
                Guru Maa Shubha Didi
              </Typography>
              <Typography sx={{ mt: 1, fontSize: 12, letterSpacing: 2.2, color: "#1d2e4f", fontWeight: 700 }}>
                – Beacon of Divine Wisdom
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 1.5
                }}
              >
                {[
                  { iconSrc: "/images/Home Page Photos/group2_icons.png", label: "A Divine Guru" },
                  { iconSrc: "/images/Home Page Photos/group2_icons1.png", label: "A Spiritual Guide" },
                  { iconSrc: "/images/Home Page Photos/group2_icons2.png", label: "A Life Coach" },
                  { iconSrc: "/images/Home Page Photos/group2_icons3.png", label: "A Visionary Leader" }
                ].map((item) => (
                  <Box key={item.label} sx={{ display: "flex", alignItems: "center", gap: 1, color: "#233250" }}>
                    <Box sx={{ position: "relative", width: 22, height: 22, flex: "0 0 auto" }}>
                      <Image alt="" fill src={item.iconSrc} style={{ objectFit: "contain" }} />
                    </Box>
                    <Typography sx={{ fontSize: { xs: 16, md: 22 } }}>{item.label}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography sx={{ mt: 2.3, color: "rgba(39,39,39,0.78)", fontSize: { xs: 15, md: 21 }, lineHeight: 1.45 }}>
                Guru Maa Shubha Didi is a Beacon (Torchbearer) of Love & Wisdom. Her Sacred Mission is to unlock the Secret Treasures of
                Infinite Happiness and spread Love, Peace and Joy through Internal Fulfilment.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  ...uiPresets.ctaButton,
                  mt: 2.8,
                  height: 46,
                  width: { xs: 210, md: 220 },
                  borderRadius: "10px",
                  bgcolor: "#031942",
                  fontSize: { xs: 16, md: 18 }
                }}
              >
                Know Her Journey
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- Section: Impact stats --- */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 6, md: 8 },
          color: "#fff",
          overflow: "hidden"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/Home Page Photos/section-background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={uiPresets.statsGrid}
          >
            {stats.map((stat) => (
              <Box key={stat.value} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: { xs: 46, md: "70.78px" },
                    fontWeight: 600,
                    lineHeight: { xs: 1.05, md: "84.936px" },
                    letterSpacing: { md: "0.9331px" }
                  }}
                >
                  {stat.value}
                </Typography>
                <Box sx={{ width: "100%", maxWidth: 220, mx: "auto", borderBottom: "1px solid rgba(255,255,255,0.85)", my: 1 }} />
                <Typography
                  sx={{
                    fontFamily: "var(--font-forum), serif",
                    fontSize: { xs: 24, md: "28.884px" },
                    lineHeight: { xs: 1.18, md: "34.823px" },
                    letterSpacing: { md: "-0.3103px" }
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* --- Section: Divine Discourses Schedule --- */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(243, 242, 238, 0) 0%, #F3F2EE 14%, #FFF 100%)",
          pb: { xs: 8, md: 9 },
          overflow: "visible"
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            top: -87,
            width: "100%",
            height: { xs: 200, md: 260 },
            backgroundImage: "url('/images/Home Page Photos/curve-disclosure.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            zIndex: 2
          }}
        />
        <Container sx={{ position: "relative", zIndex: 3 }}>
          <Box sx={{ pt: { xs: 1, md: 2 }, pb: { xs: 2, md: 3 } }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "var(--font-forum), serif",
                fontSize: { xs: 46, md: "73.943px" },
                lineHeight: { md: "94.228px" },
                color: "#031942"
              }}
            >
              Divine Discourses Schedule
            </Typography>
            <Typography
              sx={{
                mt: 0.4,
                textAlign: "center",
                fontSize: { xs: 15, md: 26 },
                letterSpacing: 2.5,
                fontWeight: 700,
                color: "#212121",
                textTransform: "none"
              }}
            >
              All are Welcome, Completely Free
            </Typography>

            <Stack direction="row" spacing={3} sx={{ mt: 2, justifyContent: "center", alignItems: "center" }}>
              {["/images/Home Page Photos/icons-1.png", "/images/Home Page Photos/icons-2.png", "/images/Home Page Photos/icons-3.png"].map((src) => (
                <Box key={src} sx={{ position: "relative", width: 80, height: 40, opacity: 1 }}>
                  <Image alt="" fill src={src} style={{}} />
                </Box>
              ))}
            </Stack>
          </Box>

          <Card
            sx={{
              mt: 4,
              borderRadius: "16px",
              border: "1px solid rgba(14,123,125,0.2)",
              boxShadow: "none",
              p: { xs: 1.2, md: 2 },
              bgcolor: "rgba(255,255,255,0.92)"
            }}
          >
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "390px 1fr" }, gap: { xs: 2, md: 3 } }}>
              <Box sx={{ position: "relative", borderRadius: "8px", overflow: "hidden", minHeight: { xs: 280, md: 420 } }}>
                <Image alt="Session preview" fill src="/images/Home Page Photos/Divine Discourses Schedule image.webp" style={{ objectFit: "cover" }} />
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    bgcolor: "rgba(255,255,255,0.92)",
                    borderRadius: "999px",
                    px: 1.2,
                    py: 0.5,
                    fontSize: 11,
                    color: "#1e1e1e"
                  }}
                >
                  Available on YouTube LIVE
                </Box>
              </Box>

              <Box sx={{ py: { xs: 0.5, md: 1 } }}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
                  <Box>
                    <Box sx={{ display: "inline-block", px: 2, py: 0.6, borderRadius: "999px", bgcolor: "#f2efed", color: "#d4998a", fontSize: 12 }}>
                      OFFLINE
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ mt: 1.4, alignItems: "center" }}>
                      <Box sx={{ position: "relative", width: 18, height: 18, flex: "0 0 auto" }}>
                        <Image alt="" fill src="/images/Home Page Photos/Icon-profile.png" style={{ objectFit: "contain" }} />
                      </Box>
                      <Typography sx={{ fontSize: 18, color: "#353535" }}>Chennai Live Sessions:</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: 0.8, alignItems: "center" }}>
                      <Box sx={{ position: "relative", width: 16, height: 16, flex: "0 0 auto" }}>
                        <Image alt="" fill src="/images/Home Page Photos/icons-calendar.png" style={{ objectFit: "contain" }} />
                      </Box>
                      <Typography sx={{ fontSize: 14, color: "#555" }}>Thursday : 5:00-6:00 PM IST</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: 0.5, alignItems: "center" }}>
                      {/* <Box sx={{ position: "relative", width: 16, height: 16, flex: "0 0 auto" }}>
                        <Image alt="" fill src="/images/Home Page Photos/icons-calendar.png" style={{ objectFit: "contain" }} />
                      </Box> */}
                      <Typography sx={{ fontSize: 14, color: "#555" }}>Sunday : 11:30 AM IST</Typography>
                    </Stack>
                    <Typography sx={{ fontSize: 14, color: "#e9967b" }}>Followed by Divya Prasad</Typography>
                  </Box>

                  <Box>
                    <Box sx={{ display: "inline-block", px: 2, py: 0.6, borderRadius: "999px", bgcolor: "#f2efed", color: "#d4998a", fontSize: 12 }}>
                      ONLINE
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ mt: 1.4, alignItems: "center" }}>
                      <Box sx={{ position: "relative", width: 18, height: 18, flex: "0 0 auto" }}>
                        <Image alt="" fill src="/images/Home Page Photos/Icon-profile.png" style={{ objectFit: "contain" }} />
                      </Box>
                      <Typography sx={{ fontSize: 18, color: "#353535" }}>Zoom Live Sessions:</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: 0.8, alignItems: "center" }}>
                      <Box sx={{ position: "relative", width: 16, height: 16, flex: "0 0 auto" }}>
                        <Image alt="" fill src="/images/Home Page Photos/icons-calendar.png" style={{ objectFit: "contain" }} />
                      </Box>
                      <Typography sx={{ fontSize: 14, color: "#555" }}>Mon, Tue, Wed, Fri</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: 0.5, alignItems: "center" }}>
                      {/* <Box sx={{ position: "relative", width: 16, height: 16, flex: "0 0 auto" }}>
                        <Image alt="" fill src="/images/Home Page Photos/icons-calendar.png" style={{ objectFit: "contain" }} />
                      </Box> */}
                      <Typography sx={{ fontSize: 14, color: "#555" }}>7:30 - 8:30 AM IST</Typography>
                    </Stack>
                  </Box>
                </Box>

                <Box sx={{ mt: 2, p: 1.6, borderRadius: "10px", bgcolor: "rgba(255,237,226,0.5)" }}>
                  <Typography sx={{ color: "#031942", fontSize: { xs: 18, md: 32 }, lineHeight: 1.2 }}>
                    These Divine Transformative Sessions will be Interactive and Open to all Audiences. Join these sessions at No Additional
                    Cost. <b>*All are Welcome*</b>
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    ...uiPresets.ctaButton,
                    mt: 1.6,
                    height: 48,
                    width: "100%",
                    bgcolor: "#031942"
                  }}
                >
                  Reserve Your Spot
                </Button>
              </Box>
            </Box>
          </Card>


        </Container>
      </Box>

      {/* --- Section: Callback request form --- */}
      <Stack
        component="form"
        onSubmit={handleCallbackSubmit}
        noValidate
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: "100%",
          gap: { xs: 1.8, md: 2.2 },
          alignItems: { xs: "center", md: "stretch" }
        }}
      >
        <Box
          sx={{
            flex: { md: 1 },
            width: "100%",
            minWidth: 0,
            alignSelf: { xs: "stretch", md: "auto" },
            bgcolor: "#091a43",
            backgroundImage: "linear-gradient(rgba(9,26,67,0.15), rgba(9,26,67,0.15)), url('/images/Home Page Photos/section-background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: 0,
            py: { xs: 2.2, md: 3 }
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))"
              },
              alignItems: "start",
              gap: { xs: 1.8, md: 2.2 },
              px: { xs: 2, md: 4 },
              height: "100%"
            }}
          >
            {callbackFormFields.map((field) => (
              <TextField
                key={field.key}
                name={field.key}
                variant="standard"
                type={field.type}
                label={field.label}
                placeholder={field.hint}
                value={callbackValues[field.key]}
                onChange={(ev) =>
                  setCallbackValues((prev) => ({
                    ...prev,
                    [field.key]: ev.target.value
                  }))
                }
                fullWidth
                sx={callbackFieldSx}
                slotProps={{
                  inputLabel: { shrink: true }
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            textAlign: { xs: "center", md: "left" },
            alignSelf: { xs: "center", md: "center" },
            px: { xs: 2, md: 4 },
            py: { xs: 0, md: 3 },
            maxWidth: { xs: 360, md: 280 }
          }}
        >
          <Button
            type="submit"
            disabled={callbackStatus === "loading"}
            sx={{
              ...uiPresets.ctaButton,
              textTransform: "none",
              p: 0,
              minWidth: 0,
              bgcolor: "transparent",
              color: "#031942",
              boxShadow: "none",
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
              "&:hover": { bgcolor: "transparent", boxShadow: "none", opacity: 0.85 },
              "&.Mui-disabled": { color: "rgba(3,25,66,0.45)" }
            }}
          >
            <Typography component="span" sx={{ fontWeight: 700, fontSize: { xs: "clamp(1.5rem, 6vw, 2rem)", md: 52 }, lineHeight: 0.95, textAlign: { xs: "center", md: "left" } }}>
              Get a
              <br />
              call back
            </Typography>
          </Button>
          {callbackStatus === "success" ? (
            <Alert severity="success" sx={{ mt: 1.5, textAlign: "left" }}>
              Thank you — we will reach out soon.
            </Alert>
          ) : null}
          {callbackStatus === "error" ? (
            <Alert severity="error" sx={{ mt: 1.5, textAlign: "left" }} onClose={() => setCallbackStatus("idle")}>
              {callbackError}
            </Alert>
          ) : null}
        </Box>
      </Stack>

      {/* --- Section: Programs (full-bleed cards) --- */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          // background: "linear-gradient(180deg, #f2f1ed 0%, #ffffff 52%, #d1f1f5 100%)",
          pb: { xs: 6, md: 8 },
          pt: { xs: 2.2, md: 8 }
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Stack spacing={1.5}>
            {programRows.map((row) => (
              <Box
                key={row.title}
                sx={{
                  position: "relative",
                  minHeight: { xs: 360, md: 529.54 },
                  borderTop: "1px solid rgba(255,255,255,0.7)",
                  borderBottom: "1px solid rgba(255,255,255,0.7)",
                  overflow: "hidden"
                }}
              >
                <Image alt={row.title} fill sizes="100vw" src={row.image} style={{ objectFit: "cover" }} />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    py: { xs: 3, md: 8 },
                    px: { xs: 2.5, md: 4.2 },
                    maxWidth: { xs: "100%", md: 780 },
                    ...(row.imageLeft ? { ml: { md: "auto" } } : {})
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-forum), serif",
                      fontSize: { xs: 34, md: "55.864px" },
                      lineHeight: 1.15,
                      letterSpacing: { md: "-1.1173px" },
                      color: "#111125"
                    }}
                  >
                    {row.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: { xs: 11, md: "15.961px" },
                      letterSpacing: { xs: 1.7, md: "2.5538px" },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#111125"
                    }}
                  >
                    {row.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.6,
                      pt: { xs: 0.5, md: 0.75 },
                      color: "#5C5C6F",
                      fontSize: { xs: 14, md: "20.903px" },
                      letterSpacing: { md: "-0.4181px" },
                      lineHeight: 1.5,
                      maxWidth: 640
                    }}
                  >
                    {row.description}
                  </Typography>

                  <Stack direction="row" spacing={1.2} sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        ...uiPresets.ctaButton,
                        height: "47.883px",
                        px: "23.942px",
                        fontSize: "15.961px",
                        borderRadius: "7.981px",
                        bgcolor: "#031942"
                      }}
                    >
                      {row.primaryCta}
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        ...uiPresets.ctaButton,
                        height: "47.883px",
                        px: "23.942px",
                        fontSize: "15.961px",
                        borderRadius: "7.981px",
                        color: "#031942",
                        borderColor: "#031942",
                        borderWidth: "0.998px"
                      }}
                    >
                      {row.secondaryCta}
                    </Button>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* --- Section: Wisdom in Action --- */}
      <Box sx={{ py: { xs: 7, md: 9 }, position: "relative", overflow: "hidden" }}>
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 46, md: "70.954px" },
              lineHeight: { md: "90.42px" },
              color: "#181818"
            }}
          >
            Wisdom in Action
          </Typography>
          <Typography
            sx={{
              mt: 0.7,
              textAlign: "center",
              color: "#0c0c0c",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: { xs: 13, md: "16.977px" },
              lineHeight: 1.3
            }}
          >
            We work hard to gain a trust of you.
          </Typography>

          <Box
            sx={{
              mt: 3.5,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" },
              gap: { xs: 2, md: 2.8 }
            }}
          >
            {wisdomCards.map((card) => (
              <Card
                key={card.title}
                sx={{
                  borderRadius: "42.441px",
                  boxShadow: "4.645px 4.645px 11.613px rgba(43,70,161,0.2)",
                  overflow: "hidden",
                  bgcolor: "#fff"
                }}
              >
                <Box sx={{ position: "relative", height: { xs: 280, md: 552.8 } }}>
                  <Image alt={card.title} fill sizes="(max-width: 900px) 100vw, 33vw" src={card.image} style={{ objectFit: "cover" }} />
                  <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.2)" }} />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: { xs: 20, md: 8 },
                      right: "0%",
                      transform: "translateX(-50%)",
                      width: { xs: 56, md: 41 },
                      height: { xs: 56, md: 72 },
                      pointerEvents: "none"
                    }}
                  >
                    <Image alt="" src={card.icon} fill sizes="72px" style={{ objectFit: "contain" }} />
                  </Box>

                  <Stack direction="row" spacing={1} sx={{ position: "absolute", top: 25.5, left: 25.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.7,
                        px: "8.488px",
                        py: "4.244px",
                        borderRadius: "64px",
                        bgcolor: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(31.831px)"
                      }}
                    >
                      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14.85px", lineHeight: 1.2, color: "#000" }}>
                        4.6
                      </Typography>
                      <Box sx={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
                        <Image alt="" src={wisdomStarIcon} fill sizes="18px" style={{ objectFit: "contain" }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8.488px",
                        height: "33.953px",
                        px: "12.732px",
                        py: "4.244px",
                        borderRadius: "64px",
                        bgcolor: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(31.831px)"
                      }}
                    >
                      <Box
                        aria-hidden
                        sx={{
                          position: "relative",
                          width: "8.488px",
                          height: "8.488px",
                          flexShrink: 0
                        }}
                      >
                        <Image
                          alt=""
                          src="/images/Home Page Photos/Ellipse 176.png"
                          fill
                          sizes="9px"
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14.85px", lineHeight: 1.2, color: "#000" }}>
                        {card.badge}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box sx={{ px: "24.4px", py: "24.4px" }}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "19.099px",
                      lineHeight: 1.2
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography sx={{ mt: 0.6, color: "#5c5c5c", fontFamily: "var(--font-inter), sans-serif", fontSize: "18px", lineHeight: 1.2 }}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* --- Section: Experiences from Seekers & testimonials --- */}
      <Box sx={{
        position: "relative",
        py: { xs: 8, md: 11 },
        pb: { xs: 9, md: 12 },
        color: "#fff",
        backgroundImage: " url('/images/Home Page Photos/Section-background-2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        {/* <Box
          sx={{
            position: "absolute",
            inset: 0,

          }}
        /> */}
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 34, md: "47.313px" },
              lineHeight: { md: "70.97px" },
              color: "#e7ebf8",
              mb: { xs: 2.5, md: 3.5 }
            }}
          >
            Experiences from Seekers
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: { xs: 2, md: 2.5 } }}>
            <Box sx={{ width: "100%", minWidth: 0, overflow: "hidden" }}>
              <Box
                sx={{
                  display: "flex",
                  width: `calc(100% * ${seekerVideos.length} / ${seekerVisibleCount})`,
                  transform: `translateX(calc(-${seekerSlideIndex} * 100% / ${seekerVideos.length}))`,
                  transition: theme.transitions.create("transform", { duration: 360, easing: theme.transitions.easing.easeOut }),
                  alignItems: "stretch"
                }}
              >
                {seekerVideos.map((video) => (
                  <Box
                    key={video.name}
                    sx={{
                      flex: `0 0 calc(100% / ${seekerVideos.length})`,
                      minWidth: 0,
                      px: { xs: 0.75, md: 1.1 },
                      boxSizing: "border-box"
                    }}
                  >
                    <Box
                      component="button"
                      type="button"
                      onClick={() => openSeekerVideo(video.embedSrc)}
                      aria-label={`Play video: ${video.name}`}
                      sx={{
                        position: "relative",
                        borderRadius: "8px",
                        overflow: "hidden",
                        minHeight: { xs: 220, md: 300 },
                        width: "100%",
                        height: "100%",
                        p: 0,
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "block",
                        "&:focus-visible": { outline: "2px solid #fff", outlineOffset: 2 }
                      }}
                    >
                      <Image
                        alt=""
                        fill
                        src={video.image}
                        sizes={seekerMdUp ? "(max-width: 1200px) 33vw, 28vw" : "90vw"}
                        style={{ objectFit: "cover" }}
                        aria-hidden
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 40%, rgba(0,0,0,0.45) 100%)",
                          pointerEvents: "none"
                        }}
                      />
                      <Typography sx={{ position: "absolute", top: 8, left: 10, color: "#f6f6f6", fontSize: 13, pointerEvents: "none" }}>
                        {video.name}
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pointerEvents: "none"
                        }}
                      >
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: "50%",
                            bgcolor: "rgba(255,255,255,0.88)",
                            color: "#2c4a9b",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700
                          }}
                        >
                          ▶
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Stack direction="row" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} sx={{ mt: { xs: 0.5, md: 0 } }}>
              <IconButton
                type="button"
                aria-label="Previous seeker videos"
                onClick={() => setSeekerSlideIndex((i) => Math.max(0, i - 1))}
                disabled={seekerSlideIndex <= 0}
                sx={{
                  color: "#e7ebf8",
                  border: "1px solid rgba(231,235,248,0.35)",
                  bgcolor: "rgba(0,0,0,0.2)",
                  width: { xs: 48, md: 52 },
                  height: { xs: 48, md: 52 },
                  "&:hover": { bgcolor: "rgba(0,0,0,0.35)" },
                  "&.Mui-disabled": { color: "rgba(231,235,248,0.35)", borderColor: "rgba(231,235,248,0.12)" }
                }}
              >
                <ChevronLeftRoundedIcon sx={{ fontSize: { xs: 28, md: 30 } }} />
              </IconButton>
              <IconButton
                type="button"
                aria-label="Next seeker videos"
                onClick={() => setSeekerSlideIndex((i) => Math.min(seekerMaxSlide, i + 1))}
                disabled={seekerSlideIndex >= seekerMaxSlide}
                sx={{
                  color: "#e7ebf8",
                  border: "1px solid rgba(231,235,248,0.35)",
                  bgcolor: "rgba(0,0,0,0.2)",
                  width: { xs: 48, md: 52 },
                  height: { xs: 48, md: 52 },
                  "&:hover": { bgcolor: "rgba(0,0,0,0.35)" },
                  "&.Mui-disabled": { color: "rgba(231,235,248,0.35)", borderColor: "rgba(231,235,248,0.12)" }
                }}
              >
                <ChevronRightRoundedIcon sx={{ fontSize: { xs: 28, md: 30 } }} />
              </IconButton>
            </Stack>
          </Box>

          <Dialog
            open={seekerDialogOpen}
            onClose={closeSeekerVideo}
            maxWidth="md"
            fullWidth
            aria-label="Seeker experience video"
            slotProps={{
              paper: {
                sx: { bgcolor: "#0a0a0a", maxHeight: "92vh" }
              }
            }}
          >
            <DialogContent sx={{ p: 0, position: "relative" }}>
              <IconButton
                type="button"
                aria-label="Close video"
                onClick={closeSeekerVideo}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 2,
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.5)",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
              {activeSeekerEmbedSrc ? (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    pt: "56.25%"
                  }}
                >
                  <Box
                    component="iframe"
                    key={activeSeekerEmbedSrc}
                    title="YouTube video player"
                    src={activeSeekerEmbedSrc}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none"
                    }}
                  />
                </Box>
              ) : null}
            </DialogContent>
          </Dialog>

          <Typography
            sx={{
              mt: { xs: 7, md: 8.5 },
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 46, md: 58 },
              lineHeight: { xs: 1.15, md: 1.12 },
              color: "#e7ebf8"
            }}
          >
            Hear what our global community has to say
          </Typography>
          <Typography
            sx={{
              mt: 1.2,
              textAlign: "center",
              color: "rgba(239,244,255,0.9)",
              fontSize: { xs: 15, md: 18 },
              lineHeight: 1.45,
              maxWidth: 720,
              mx: "auto"
            }}
          >
            Hear from those whose lives have been transformed by these sessions
          </Typography>

          <Box
            sx={{
              mt: { xs: 3, md: 3.5 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: { xs: 2.2, md: 3 },
              overflow: "visible"
            }}
          >
            {testimonials.map((item) => (
              <Card
                key={item.name}
                sx={{
                  borderRadius: "16px",
                  boxShadow: "none",
                  bgcolor: "#fff",
                  color: "#1e2f54",
                  position: "relative",
                  overflow: "visible",
                  minHeight: { xs: 220, md: 260 },
                  pt: 1.5
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: -18, md: -22 },
                    left: { xs: 18, md: 22 },
                    width: { xs: 44, md: 52 },
                    height: { xs: 44, md: 52 },
                    zIndex: 2,
                    pointerEvents: "none"
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      alt=""
                      fill
                      src="/images/Home Page Photos/icon-orange.png"
                      sizes="52px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
                <Box sx={{ p: { xs: 2.6, md: 3.2 }, pt: { xs: 3.2, md: 3.8 } }}>
                  <Typography sx={{ color: "rgba(31,47,84,0.82)", fontSize: { xs: 15, md: 16.5 }, lineHeight: 1.5 }}>{`"${item.quote}"`}</Typography>
                  <Typography sx={{ mt: { xs: 2.4, md: 2.8 }, fontSize: { xs: 16, md: 17.5 }, fontWeight: 700 }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "rgba(31,47,84,0.7)" }}>{item.location}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Container>


      </Box>

      {/* --- Section: Sapt Sadhana promo (+ footer overlap; keep overflow visible) --- */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(243, 242, 238, 0) 0%, #F3F2EE 14%, #FFF 50%, #D1F1F5 100%)",
          pb: { xs: 7, md: 6 },
          overflow: "visible"
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            top: -87,
            width: "100%",
            height: { xs: 200, md: 260 },
            backgroundImage: "url('/images/Home Page Photos/curve-disclosure.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            zIndex: 2
          }}
        />
        <Container sx={{ position: "relative", zIndex: 3 }}>
          <Box sx={{ pt: { xs: 6, md: 8 } }}>
            <Typography sx={{ textAlign: "center", color: "#f4b497", fontSize: { xs: 32, md: 44 }, lineHeight: 1 }}>〰</Typography>
            <Typography sx={{ mt: 0.5, textAlign: "center", fontFamily: "var(--font-forum), serif", fontSize: { xs: 44, md: 56 }, color: "#1f2f52" }}>
              SAPT SADHANA - Serving Beyond Self
            </Typography>
            <Typography sx={{ mt: 1.2, mx: "auto", textAlign: "center", color: "rgba(20,20,20,0.8)", fontSize: { xs: 16, md: 22 }, maxWidth: 1040, lineHeight: 1.4 }}>
              <b>Sapt Sadhana</b> is our commitment to selfless service (seva), transforming spiritual wisdom into compassionate action. Through
              various initiatives, we serve underprivileged communities, provide education,
            </Typography>

            <Box sx={{ mt: 3.5 }}>
              <SaptSadhanaStackCarousel
                slides={saptSadhanaCarouselSlides}
                activeIndex={saptSlideIndex}
                onStep={saptOnStep}
              />
            </Box>

            <Box
              sx={{
                mt: { xs: 2, md: 2.5 },
                display: "grid",
                gridTemplateColumns: { xs: "minmax(44px,auto) 1fr minmax(44px,auto)", sm: "auto 1fr auto" },
                alignItems: "center",
                justifyItems: "center",
                columnGap: { xs: 1, sm: 2, md: 3 },
                rowGap: 1,
                maxWidth: { sm: 520 },
                mx: "auto",
                width: "100%"
              }}
            >
              <IconButton
                type="button"
                aria-label="Previous Sapt Sadhana slide"
                onClick={() => saptOnStep(-1)}
                disableRipple
                sx={{
                  justifySelf: "center",
                  p: { xs: 0.5, md: 0.75 },
                  borderRadius: "12px",
                  "&:hover": { bgcolor: "rgba(43,70,161,0.08)" }
                }}
              >
                <Box sx={{ position: "relative", width: { xs: 30, sm: 36, md: 42 }, height: { xs: 30, sm: 36, md: 42 } }}>
                  <Image alt="" fill src={saptCarouselArrowLeft} sizes="42px" style={{ objectFit: "contain" }} />
                </Box>
              </IconButton>

              <Box
                component="ul"
                sx={{
                  m: 0,
                  p: 0,
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: 1, md: 1.5 },
                  flexWrap: "wrap",
                  width: "100%"
                }}
              >
                {saptSadhanaCarouselSlides.map((_, dotIdx) => (
                  <Box key={dotIdx} component="li" sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="button"
                      type="button"
                      aria-label={`Go to Sapt Sadhana slide ${dotIdx + 1}`}
                      aria-current={dotIdx === saptSlideIndex ? true : undefined}
                      onClick={() => setSaptSlideIndex(dotIdx)}
                      sx={{
                        width: { xs: 9, md: 10 },
                        height: { xs: 9, md: 10 },
                        borderRadius: "50%",
                        border: "none",
                        p: 0,
                        cursor: "pointer",
                        bgcolor: dotIdx === saptSlideIndex ? "#1e2f54" : "rgba(180,188,204,0.75)",
                        transition: theme.transitions.create(["background-color", "transform"], { duration: 220 }),
                        transform: dotIdx === saptSlideIndex ? "scale(1.15)" : "scale(1)",
                        "&:focus-visible": { outline: "2px solid #2b46a1", outlineOffset: 3 }
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <IconButton
                type="button"
                aria-label="Next Sapt Sadhana slide"
                onClick={() => saptOnStep(1)}
                disableRipple
                sx={{
                  justifySelf: "center",
                  p: { xs: 0.5, md: 0.75 },
                  borderRadius: "12px",
                  "&:hover": { bgcolor: "rgba(43,70,161,0.08)" }
                }}
              >
                <Box sx={{ position: "relative", width: { xs: 30, sm: 36, md: 42 }, height: { xs: 30, sm: 36, md: 42 } }}>
                  <Image alt="" fill src={saptCarouselArrowRight} sizes="42px" style={{ objectFit: "contain" }} />
                </Box>
              </IconButton>
            </Box>

            {/* Bridge above site footer: headline + dots + art in one responsive row */}
            <Box
              sx={{
                mt: { xs: 4, md: 6 },
                pt: { xs: 2, md: 3 },
                // pb: { xs: 1, md: 1.5 },
                position: "relative",
                zIndex: 1,
                width: "100%",
                minWidth: 0
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: { xs: 0.75, sm: 1.25, md: 2 },
                  flexWrap: "nowrap",
                  width: "100%",
                  minWidth: 0
                }}
              >
                <Typography
                  sx={{
                    flex: "0 1 auto",
                    minWidth: 0,
                    color: "#162b53",
                    fontFamily: "var(--font-forum), serif",
                    fontSize: { xs: "clamp(1.05rem, 3.8vw, 1.65rem)", sm: "clamp(1.5rem, 2.8vw, 2.25rem)", md: "clamp(2rem, 3.5vw, 4.4rem)" },
                    lineHeight: 1.05,
                    letterSpacing: { xs: "-0.02em", md: 0 },
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                  }}
                >
                  Stay Connected
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    flex: "1 1 0%",
                    minWidth: { xs: 72, sm: 100, md: 140 },
                    height: { xs: 28, sm: 36, md: 48 },
                    minHeight: { xs: 28, sm: 36, md: 48 },
                    maxWidth: { xs: "48%", sm: "52%", md: "58%" },
                    ml: { xs: 0.25, sm: 0.5 }
                  }}
                >
                  <Image
                    alt=""
                    src="/images/footer-above-icon.png"
                    fill
                    sizes="(max-width: 600px) 50vw, 520px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- Section: Site footer --- */}
      <SharedFooter showStayConnectedBanner={false} />
    </Box>
  );
}
