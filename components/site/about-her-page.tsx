"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import { Box, Card, Container, Stack, Typography, IconButton, useTheme } from "@mui/material";
import {
  HomeImpactStatsSection,
} from "@/modules/home/components";
import {
  AboutHerHeroSection,
  HerJourneySection,
  HerTeachingsSection
} from "@/modules/about-her/components";
import { SaptSadhanaStackCarousel } from "@/components/site/sapt-sadhana-stack-carousel";


const IMG = {
  vision: "/images/About Her Page Photos/Vision_.webp",
  mission: "/images/About Her Page Photos/Mission_.webp"
} as const;

const saptSadhanaCarouselSlides = [
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (1).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (2).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (3).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (4).webp"
] as const;

const saptCarouselArrowLeft = "/images/Home Page Photos/Arrow Left-poiint.png";
const saptCarouselArrowRight = "/images/Home Page Photos/Arrow Right-point.png";
const saptSadhanaWaveIcon = "/images/Home Page Photos/sapt -sadhana-icon.png";

const stats = [
  { value: "30+", label: "Years Divine Connect & Guidance" },
  { value: "5L+", label: "Beautiful Lives Touched" },
  { value: "50+", label: "Countries, our Yogis Divine Abode" },
  { value: "10,000+", label: "Transformative Discourses & Workshops" }
];

const pathways = [
  {
    title: "Love (Prem):",
    description: "Unconditional compassion as the soul's universal healing force.",
    Icon: FavoriteBorderOutlinedIcon
  },
  {
    title: "Wisdom (Gyan):",
    description: "Using logic and practical insight to strengthen the mind against flaws.",
    Icon: AutoAwesomeOutlinedIcon
  },
  {
    title: "Meditation (Dhyan):",
    description: "Guided soul-exploration to find stillness in a chaotic world.",
    Icon: NightlightRoundOutlinedIcon
  },
  {
    title: "Devotion (Bhakti):",
    description: "The path of surrender that allows the Divine to manifest through us.",
    Icon: WavesOutlinedIcon
  },
  {
    title: "Service (Sewa):",
    description: "Selfless contribution through the Sapthasadhana initiatives.",
    Icon: VolunteerActivismOutlinedIcon
  },
  {
    title: "Realisation (Atma Gyan):",
    description: "The ultimate spiritual awakening: 'We are Infinite, we are Limitless, we are One.'",
    Icon: SpaOutlinedIcon
  }
];

const saptSlides = [
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self.webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (1).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (2).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (3).webp"
];

export default function AboutHerPage() {
  const [saptIndex, setSaptIndex] = useState(0);
  const [saptSlideIndex, setSaptSlideIndex] = useState(0);
  const saptSlideCount = saptSadhanaCarouselSlides.length;
  const theme = useTheme();


  const saptOnStep = useCallback((delta: 1 | -1) => {
    setSaptSlideIndex((i) =>
      delta === 1 ? (i + 1) % saptSlideCount : (i - 1 + saptSlideCount) % saptSlideCount
    );
  }, [saptSlideCount]);

  return (
    <Box sx={{ bgcolor: "#0a1628", overflowX: "hidden" }}>
      {/* --- Section: Hero --- */}
      <AboutHerHeroSection />

      {/* --- Section: Her Journey (timeline + portrait) --- */}
      <HerJourneySection />

      {/* --- Section: Vision, Mission & Pathways --- */}
      <Box sx={{ position: "relative", bgcolor: "#ffffff", py: { xs: 6, md: 10 }, overflow: "hidden" }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: -60, md: -100 },
            left: { xs: -40, md: -80 },
            width: { xs: 220, md: 320 },
            height: { xs: 220, md: 320 },
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(244,180,151,0.2) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: { xs: "20%", md: "15%" },
            right: { xs: -60, md: -40 },
            width: { xs: 200, md: 280 },
            height: { xs: 200, md: 280 },
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(244,180,151,0.12) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 5 },
              alignItems: "center",
              mb: { xs: 6, md: 8 }
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontSize: { xs: 32, md: 40 },
                  color: "#2a2a2a",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Vision:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: { xs: 16, md: 20 },
                  lineHeight: 1.65,
                  color: "#3a3a3a",
                  maxWidth: 560
                }}
              >
                To awaken, connect, and unite every soul to its Pure Divine Essence through the sacred harmony of Wisdom (Gyan), Devotion
                (Bhakti), and Selfless Service (Sewa).
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 280, md: 360 },
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 32px rgba(0,35,80,0.1)"
              }}
            >
              <Image alt="Vision" fill sizes="(max-width: 900px) 100vw, 50vw" src={IMG.vision} style={{ objectFit: "cover" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 5 },
              alignItems: "center",
              mb: { xs: 6, md: 9 }
            }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 280, md: 360 },
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 32px rgba(0,35,80,0.1)",
                order: { xs: 1, md: 1 }
              }}
            >
              <Image alt="Mission" fill sizes="(max-width: 900px) 100vw, 50vw" src={IMG.mission} style={{ objectFit: "cover" }} />
            </Box>
            <Box sx={{ order: { xs: 2, md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontSize: { xs: 32, md: 40 },
                  color: "#2a2a2a",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Mission:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: { xs: 16, md: 20 },
                  lineHeight: 1.65,
                  color: "#3a3a3a",
                  maxWidth: 560
                }}
              >
                To dismantle the myth that spirituality is only for the &quot;troubled&quot; or the &quot;loser.&quot; Guru Ma Shubha
                Didi&apos;s mission is to prove that a prosperous, materialistic life is only complete when paired with deep internal insight.
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 34, md: 44 },
              color: "#1a1a1a",
              mb: { xs: 3, md: 4 }
            }}
          >
            Pathways to Transformation
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" },
              gap: { xs: 2, md: 2.5 }
            }}
          >
            {pathways.map(({ title, description, Icon }) => (
              <Card
                key={title}
                elevation={0}
                sx={{
                  borderRadius: "20px",
                  p: { xs: 2.5, md: 3 },
                  border: "1px solid rgba(244,180,151,0.25)",
                  boxShadow: "0 6px 24px rgba(0,35,80,0.06)"
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    bgcolor: "rgba(244,180,151,0.35)",
                    color: "#c45c3a",
                    display: "grid",
                    placeItems: "center",
                    mb: 2
                  }}
                >
                  <Icon sx={{ fontSize: 26 }} />
                </Box>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 17, color: "#1e2936", mb: 1 }}>
                  {title}
                </Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 15, lineHeight: 1.5, color: "#5c5c6f" }}>
                  {description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* --- Section: Her Teachings --- */}
      <HerTeachingsSection />

      <HomeImpactStatsSection />
      

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
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", lineHeight: 0 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 32, md: 44 },
                  aspectRatio: "288 / 89"
                }}
              >
                <Image
                  src={saptSadhanaWaveIcon}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 120px, 160px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
            <Typography sx={{ mt: 0.5, textAlign: "center", fontFamily: "var(--font-forum), serif", fontSize: { xs: 28, sm: 38, md: 48, lg: 56 }, color: "#1f2f52" }}>
              SAPT SADHANA - Serving Beyond Self
            </Typography>
            <Typography sx={{ mt: 1.2, mx: "auto", textAlign: "center", color: "rgba(20,20,20,0.8)", fontSize: { xs: 14, sm: 16, md: 18, lg: 22 }, maxWidth: 1040, lineHeight: 1.4 }}>
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
    </Box>
  );
}
