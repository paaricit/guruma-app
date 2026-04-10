"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import SharedFooter from "@/components/site/shared-footer";
import SharedHeader from "@/components/site/shared-header";
import { uiPresets } from "@/lib/ui-presets";

const IMG = {
  banner: "/images/Marriage Counselling Page Photos/Marriage Counselling Banner BG.webp",
  forgeCouple: "/images/Marriage Counselling Page Photos/How to forge Better.webp",
  cosmicBg: "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp"
} as const;

const peachAccent = "#e8907d";
const navy = "#031942";
const navyDeep = "#0a1628";

const whatToExpect = [
  {
    title: "Restore Balance",
    body: "Learn to step out of reactive cycles and return to calm, respectful dialogue that honours both partners."
  },
  {
    title: "Rekindle Happiness",
    body: "Reconnect with appreciation, warmth, and the friendship that first brought you together."
  },
  {
    title: "Heal with Wisdom",
    body: "Integrate spiritual perspective with practical tools so challenges become opportunities for growth."
  },
  {
    title: "Build Lasting Trust",
    body: "Rebuild safety through honesty, boundaries, and consistent care—aligned with your shared values."
  }
] as const;

const isForYouItems = [
  "We keep having the same fights and nothing seems to change.",
  "We feel distant even when we are in the same room.",
  "We want to save our marriage but don’t know where to start."
] as const;

const enrolSteps = [
  {
    n: 1,
    title: "Choose Your Program",
    body: "Select marriage counselling and share a brief note on what you hope to work on together."
  },
  {
    n: 2,
    title: "Submit Your Enquiry",
    body: "Our team will reach out with timings, format (online or in person), and anything to prepare."
  },
  {
    n: 3,
    title: "Begin Your Journey",
    body: "Meet in a confidential, compassionate space guided by principles shared by Guru Maa Shubha Didi."
  }
] as const;

const videoThumbs: { src: string; alt: string }[] = [
  { src: "/images/Home Page Photos/Home page second section Video thumbnail.webp", alt: "Seeker sharing their experience" },
  { src: "/images/Home Page Photos/Morning Meditation for Peace.webp", alt: "Couple and community" },
  { src: "/images/WISDOM- Blogs Page Photos/Relationships & Communication.webp", alt: "Relationships and communication" }
];

function LotusWatermark() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: 0.45,
        background: `radial-gradient(ellipse 80% 50% at 20% 30%, rgba(232,144,125,0.14) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 85% 70%, rgba(3,25,66,0.06) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 0%, transparent 55%)`
      }}
    />
  );
}

export default function MarriageCounsellingPage() {
  const [vSlide, setVSlide] = useState(0);

  return (
    <Box sx={{ bgcolor: "#fff", overflowX: "hidden" }}>
      <SharedHeader />

      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 520, md: 640 },
          pt: { xs: 12, md: 14 },
          pb: { xs: 8, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(3,25,66,0.78) 0%, rgba(3,25,66,0.55) 45%, rgba(3,25,66,0.75) 100%)",
            zIndex: 1
          }}
        />
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src={IMG.banner}
            alt="Marriage counselling session"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, px: 2 }}>
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 36, sm: 44, md: 56 },
              color: "#fff",
              fontWeight: 500,
              lineHeight: 1.1,
              mb: 2.5
            }}
          >
            Marriage Counselling
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "rgba(255,255,255,0.92)",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.75,
              maxWidth: 720,
              mx: "auto"
            }}
          >
            Move from patterns that feel heavy or confusing toward clarity, forgiveness, and warmth—with spiritual wisdom and practical tools offered
            in a safe, confidential space with Guru Maa Shubha Didi’s guidance.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mt: 3.5 }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                ...uiPresets.ctaButton,
                bgcolor: peachAccent,
                color: "#fff",
                fontWeight: 700,
                px: 3,
                "&:hover": { bgcolor: "#d67a68" }
              }}
            >
              Connect with Us
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              sx={{
                ...uiPresets.ctaButton,
                borderColor: "rgba(255,255,255,0.9)",
                color: "#fff",
                fontWeight: 600,
                "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.08)" }
              }}
            >
              Book a Session
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Philosophy — forge better relationships */}
      <Box sx={{ position: "relative", bgcolor: "#faf8f5", py: { xs: 7, md: 10 }, px: { xs: 2, md: 3 } }}>
        <LotusWatermark />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center"
            }}
          >
            <Box>
              <LocalFloristOutlinedIcon sx={{ color: peachAccent, fontSize: 36, mb: 1.5 }} />
              <Typography
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  color: navy,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  lineHeight: 1.35,
                  textTransform: "uppercase",
                  mb: 2
                }}
              >
                How to forge better, stronger and long-lasting relationships
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#3d3d3d", fontSize: { xs: 15, md: 16 }, lineHeight: 1.8, mb: 2 }}>
                Marriage is a living journey—beautiful, demanding, and deeply sacred. When misunderstanding grows faster than compassion, even strong
                couples can feel lost. Counselling offers a steady space to slow down, listen, and remember what you are building together.
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", color: "#3d3d3d", fontSize: { xs: 15, md: 16 }, lineHeight: 1.8, mb: 3 }}>
                With Guru Maa Shubha Didi’s teachings as a foundation, you receive both timeless perspective and grounded skills for communication,
                repair, and renewed closeness.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  ...uiPresets.ctaButton,
                  bgcolor: navy,
                  color: "#fff",
                  fontWeight: 700,
                  px: 3,
                  py: 1.25,
                  "&:hover": { bgcolor: "#152a48" }
                }}
              >
                Connect with Us
              </Button>
            </Box>
            <Box
              sx={{
                position: "relative",
                borderRadius: { xs: "20px", md: "28px" },
                overflow: "hidden",
                minHeight: { xs: 280, md: 400 },
                boxShadow: "0 20px 48px rgba(3,25,66,0.12)"
              }}
            >
              <Image src={IMG.forgeCouple} alt="Couple at a counselling session" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* What to expect + Is this for you */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#d8eef4",
          py: { xs: 7, md: 11 },
          px: { xs: 2, md: 3 },
          overflow: "hidden",
          backgroundImage: `repeating-radial-gradient(circle at 0 0, transparent 0, transparent 14px, rgba(255,255,255,0.35) 14px, rgba(255,255,255,0.35) 15px)`
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
              gap: { xs: 4, md: 5 },
              alignItems: "start"
            }}
          >
            <Box>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.5 }}>
                <WbSunnyOutlinedIcon sx={{ color: peachAccent, fontSize: 32 }} />
                <Typography
                  sx={{
                    fontFamily: "var(--font-forum), serif",
                    color: navy,
                    fontWeight: 600,
                    fontSize: { xs: "1.15rem", md: "1.35rem" }
                  }}
                >
                  What to Expect
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {whatToExpect.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "16px",
                      p: 2.5,
                      boxShadow: "0 8px 28px rgba(3,25,66,0.08)",
                      border: "1px solid rgba(255,255,255,0.9)"
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: navy, fontSize: "1rem", mb: 0.75 }}>{item.title}</Typography>
                    <Typography sx={{ color: "#555", fontSize: 14, lineHeight: 1.65 }}>{item.body}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: "20px",
                p: { xs: 2.5, md: 3.5 },
                boxShadow: "0 14px 40px rgba(3,25,66,0.1)",
                border: "1px solid rgba(3,70,161,0.06)"
              }}
            >
              <Typography sx={{ color: peachAccent, fontWeight: 700, fontSize: "0.95rem", mb: 2 }}>If you find yourself asking:</Typography>
              <Stack spacing={2} sx={{ mb: 3 }}>
                {isForYouItems.map((line) => (
                  <Stack direction="row" spacing={1.5} key={line} alignItems="flex-start">
                    <CheckRoundedIcon sx={{ color: peachAccent, fontSize: 22, mt: 0.2 }} />
                    <Typography sx={{ color: "#333", fontSize: 15, lineHeight: 1.6 }}>{line}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                fullWidth
                sx={{
                  ...uiPresets.ctaButton,
                  bgcolor: navy,
                  color: "#fff",
                  fontWeight: 700,
                  py: 1.35,
                  "&:hover": { bgcolor: "#152a48" }
                }}
              >
                Begin Your Journey to Bliss
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* How to Enrol */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 11 },
          px: { xs: 2, md: 3 },
          overflow: "hidden",
          backgroundImage: `linear-gradient(180deg, rgba(4,12,32,0.94) 0%, rgba(6,18,42,0.96) 100%), url('${IMG.cosmicBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 4, md: 6 } }}>
            <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#fff", fontSize: { xs: 34, md: 44 }, fontWeight: 600 }}>
              How to Enrol
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.82)", mt: 1.5, fontSize: { xs: 15, md: 17 }, lineHeight: 1.6 }}>
              Begin your transformation journey in three simple steps.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: { xs: 2.5, md: 3 }
            }}
          >
            {enrolSteps.map((step) => (
              <Box
                key={step.n}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "20px",
                  p: { xs: 2.5, md: 3 },
                  textAlign: "center",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.18)"
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    bgcolor: peachAccent,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2
                  }}
                >
                  {step.n}
                </Box>
                <Typography sx={{ fontFamily: "var(--font-forum), serif", fontWeight: 700, color: navy, fontSize: "1.05rem", mb: 1 }}>{step.title}</Typography>
                <Typography sx={{ color: "#555", fontSize: 14, lineHeight: 1.65 }}>{step.body}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Experiences from Seekers */}
      <Box sx={{ bgcolor: navyDeep, py: { xs: 7, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: "#e8b4a8",
              fontSize: { xs: 28, md: 36 },
              fontWeight: 600,
              textAlign: "center",
              mb: 1
            }}
          >
            Experiences from Seekers
          </Typography>
          <Typography sx={{ textAlign: "center", color: "rgba(255,255,255,0.75)", fontSize: 15, mb: 4, maxWidth: 560, mx: "auto" }}>
            Stories from those who found calmer communication and renewed hope in their relationships.
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2 }}>
            {videoThumbs.map((t, i) => (
              <Box
                key={t.src}
                onClick={() => setVSlide(i)}
                sx={{
                  position: "relative",
                  minHeight: { xs: 200, md: 220 },
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  outline: vSlide === i ? `3px solid ${peachAccent}` : "none",
                  outlineOffset: 2
                }}
              >
                <Image src={t.src} alt={t.alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(0,0,0,0.28)"
                  }}
                >
                  <PlayArrowRoundedIcon sx={{ fontSize: 56, color: "#fff" }} />
                </Box>
              </Box>
            ))}
          </Box>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
            <IconButton
              aria-label="Previous"
              onClick={() => setVSlide((vSlide + videoThumbs.length - 1) % videoThumbs.length)}
              sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.25)" } }}
            >
              <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              aria-label="Next"
              onClick={() => setVSlide((vSlide + 1) % videoThumbs.length)}
              sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.25)" } }}
            >
              <ArrowForwardIosRoundedIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      {/* Wave into footer */}
      <Box sx={{ bgcolor: navyDeep, height: { xs: 28, md: 40 } }}>
        <Box
          sx={{
            height: "100%",
            bgcolor: "#b8dce8",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

      <SharedFooter />
    </Box>
  );
}
