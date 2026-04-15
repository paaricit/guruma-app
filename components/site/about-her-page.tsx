"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import { Box, Card, Container, Stack, Typography } from "@mui/material";

const IMG = {
  banner: "/images/About Her Page Photos/ABOUT HER Banner.webp",
  overlap: "/images/About Her Page Photos/ABOUT HER Overlap.webp",
  /** Filename contains U+2028 LINE SEPARATOR before `.webp` */
  herJourneyPortrait: "/images/About Her Page Photos/Her Journey\u2028.webp",
  vision: "/images/About Her Page Photos/Vision_.webp",
  mission: "/images/About Her Page Photos/Mission_.webp",
  teachings: "/images/About Her Page Photos/Her Teachings helps You In.webp"
} as const;

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

const teachingItems = [
  {
    title: "Your Career and Purpose in Life",
    body: "Finding dharma-aligned work, navigating office politics with awareness, building leadership through service",
    Icon: MenuBookOutlinedIcon
  },
  {
    title: "Your Family and Relationships",
    body: "Healing family wounds, conscious parenting, transforming conflicts through compassionate communication",
    Icon: PersonOutlineOutlinedIcon
  },
  {
    title: "Your Health and wellness",
    body: "Stress management, emotional healing, understanding psychosomatic patterns, yogic practices for vitality",
    Icon: FavoriteBorderOutlinedIcon
  },
  {
    title: "Managing your Emotions and Mind",
    body: "Managing anxiety and depression, breaking negative patterns, cultivating inner peace amid chaos",
    Icon: VisibilityOutlinedIcon
  }
];

const saptSlides = [
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self.webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (1).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (2).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (3).webp"
];

const journeySteps = [
  {
    num: "01",
    title: "The Innocent Seeker (Age 5-13):",
    body:
      "Even as a child, Didi was drawn to the sacred. From chanting 'Naam Jap' before preschool to questioning priests about seeing God, her early years were defined by an innate, unshakeable pull toward the Divine."
  },
  {
    num: "02",
    title: "Meeting the Guru (Age 13):",
    body:
      "The turning point. Didi met her Guru and learned that spirituality is not a standalone journey—it must be lived through Samsara (destiny). She mastered the art of balancing worldly excellence with inner transformation."
  },
  {
    num: "03",
    title: "Early life & turning points:",
    body:
      "Today, Didi leads a global mission. Through Nishkam Seva (Selfless Action), she has spent 40 years guiding students, professionals, and leaders across the UK, US, and beyond to live a life of purpose and 'Permanent Happiness.'"
  }
];

export default function AboutHerPage() {
  const [saptIndex, setSaptIndex] = useState(0);

  return (
    <Box sx={{ bgcolor: "#0a1628", overflowX: "hidden" }}>
      {/* --- Section: Hero --- */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 520, md: 680 },
          pt: { xs: 10, md: 12 },
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(-84deg, rgba(0,0,0,0) 47%, rgba(1,32,73,0.5) 76%), url('${IMG.banner}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        {/* <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: "52%", md: "52%" },
            maxWidth: 820,
            display: { xs: "none", sm: "block" }
          }}
        >
          <Image
            alt="Guru Maa Shubha Didi"
            fill
            priority
            sizes="(max-width: 600px) 0px, 52vw"
            src={IMG.overlap}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </Box> */}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 4, md: 6 } }}>
          <Box sx={{ maxWidth: { xs: "100%", md: "min(755px, 52%)" } }}>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: { xs: 40, md: 72 },
                lineHeight: { xs: 1.05, md: 0.95 },
                color: "#ecede5",
                fontWeight: 400
              }}
            >
              Guru Maa Shubha Didi
            </Typography>
            <Typography
              sx={{
                mt: { xs: 2, md: 2.5 },
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: { xs: 15, md: 18 },
                lineHeight: 1.65,
                color: "rgba(236,237,229,0.95)",
                maxWidth: 696
              }}
            >
              Guru Maa Shubha Didi is an experience of divine logic and limitless love. A rare blend of intense devotion and sharp intellect,
              she has spent over four decades acting as a practical torchbearer for holistic living. She doesn&apos;t just offer
              &quot;magic&quot;—she offers Divine Logic to help souls realise their infinite nature.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* --- Section: Her Journey (timeline + portrait) --- */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 2, md: 3 },
          pb: { xs: 2, md: 3 }
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: { xs: 36, md: 52 },
            bgcolor: "#0a1628",
            borderBottomLeftRadius: "50% 100%",
            borderBottomRightRadius: "50% 100%"
          }}
        />
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(180deg, #cfe8ef 0%, #e8f4f8 28%, #f7fbfc 65%, #ffffff 100%)",
            pt: { xs: 5, md: 7 },
            pb: { xs: 6, md: 9 },
            px: { xs: 2, md: 3 }
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                fontSize: { xs: 36, md: 48 },
                color: "#2a2a2a",
                mb: { xs: 3, md: 4 }
              }}
            >
              Her Journey
            </Typography>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: 360,
                  mb: 3,
                  borderRadius: "20px",
                  borderBottomRightRadius: "80px",
                  overflow: "hidden",
                  boxShadow: "0 12px 36px rgba(0,35,80,0.12)"
                }}
              >
                <Image
                  alt="Her journey — portrait"
                  fill
                  sizes="100vw"
                  src={IMG.herJourneyPortrait}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </Box>
              {journeySteps.map((step) => (
                <Box key={step.num} sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: "#f4b497",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 16,
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 14px rgba(244,180,151,0.45)"
                      }}
                    >
                      {step.num}
                    </Box>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 700,
                          fontSize: 17,
                          color: "#1e2936",
                          mb: 1
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: 15,
                          lineHeight: 1.55,
                          color: "#3a3a3a"
                        }}
                      >
                        {step.body}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "grid" },
                gridTemplateColumns: "minmax(260px, 380px) 72px 1fr",
                gridTemplateRows: "auto auto auto",
                columnGap: 2,
                alignItems: "start"
              }}
            >
              <Box
                sx={{
                  gridColumn: "1",
                  gridRow: "1 / 4",
                  position: "relative",
                  minHeight: 620,
                  borderRadius: "24px",
                  borderBottomRightRadius: "120px",
                  overflow: "hidden",
                  boxShadow: "0 12px 36px rgba(0,35,80,0.12)"
                }}
              >
                <Image
                  alt="Her journey — portrait"
                  fill
                  sizes="380px"
                  src={IMG.herJourneyPortrait}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </Box>

              {journeySteps.map((step, index) => (
                <Fragment key={step.num}>
                  <Box
                    sx={{
                      gridColumn: "2",
                      gridRow: index + 1,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      "&::after":
                        index < journeySteps.length - 1
                          ? {
                              content: '""',
                              position: "absolute",
                              top: 52,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 2,
                              height: { md: "calc(100% + 24px)" },
                              bgcolor: "rgba(244,180,151,0.45)"
                            }
                          : undefined
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: "#f4b497",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 16,
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 14px rgba(244,180,151,0.45)",
                        zIndex: 1
                      }}
                    >
                      {step.num}
                    </Box>
                  </Box>
                  <Box sx={{ gridColumn: "3", gridRow: index + 1, pb: index < journeySteps.length - 1 ? 3 : 0 }}>
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        color: "#1e2936",
                        mb: 1
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: 18,
                        lineHeight: 1.55,
                        color: "#3a3a3a",
                        maxWidth: 720
                      }}
                    >
                      {step.body}
                    </Typography>
                  </Box>
                </Fragment>
              ))}
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: { xs: 36, md: 52 },
            bgcolor: "#0a1628",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

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
      <Box sx={{ bgcolor: "#f9f9f7", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "start"
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-forum), serif",
                  fontSize: { xs: 32, md: 42 },
                  color: "#2a2a2a",
                  mb: { xs: 3, md: 4 }
                }}
              >
                Her Teachings helps You In
              </Typography>
              <Stack spacing={3}>
                {teachingItems.map(({ title, body, Icon }) => (
                  <Box key={title} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        bgcolor: "#f4b497",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0
                      }}
                    >
                      <Icon sx={{ fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 17, color: "#2a2a2a", mb: 0.75 }}>
                        {title}
                      </Typography>
                      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 15, lineHeight: 1.55, color: "#5c5c6f" }}>
                        {body}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                position: "relative",
                alignSelf: "stretch",
                minHeight: { xs: 380, md: 520 },
                p: { xs: 1.5, md: 2 },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 8,
                  bottom: 8,
                  width: "88%",
                  height: "88%",
                  borderLeft: "5px solid #2b46a1",
                  borderBottom: "5px solid #2b46a1",
                  borderBottomLeftRadius: 36,
                  pointerEvents: "none",
                  zIndex: 0
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  minHeight: { xs: 360, md: 480 },
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "linear-gradient(180deg, #e8f2f8 0%, #f5f9fc 100%)"
                }}
              >
                <Image
                  alt="Her teachings"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={IMG.teachings}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- Section: Impact stats --- */}
      <Box sx={{ position: "relative", py: { xs: 6, md: 8 }, color: "#fff", overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/images/Home Page Photos/Home Page Banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: { xs: 34, md: 52 },
            bgcolor: "#e8f5f3",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" },
              gap: { xs: 2.5, md: 3.5 }
            }}
          >
            {stats.map((stat) => (
              <Box key={stat.value} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: { xs: 42, md: "56px" },
                    fontWeight: 600,
                    lineHeight: 1.05
                  }}
                >
                  {stat.value}
                </Typography>
                <Box sx={{ width: "100%", maxWidth: 220, mx: "auto", borderBottom: "1px solid rgba(255,255,255,0.85)", my: 1 }} />
                <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: 18, md: 22 }, lineHeight: 1.2 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* --- Section: Sapt Sadhana promo --- */}
      <Box sx={{ bgcolor: "#e8f5f3", pt: { xs: 5, md: 7 }, pb: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ textAlign: "center", color: "#f4b497", fontSize: { xs: 28, md: 36 }, lineHeight: 1 }}>〰</Typography>
          <Typography
            sx={{
              mt: 0.5,
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 28, md: 40 },
              color: "#1f2f52"
            }}
          >
            SAPT SADHANA - Serving Beyond Self
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              mx: "auto",
              textAlign: "center",
              color: "rgba(20,20,20,0.82)",
              fontSize: { xs: 15, md: 18 },
              maxWidth: 960,
              lineHeight: 1.5
            }}
          >
            <b>Sapt Sadhana</b> is our commitment to selfless service (seva), transforming spiritual wisdom into compassionate action. Through
            various initiatives, we serve underprivileged communities, provide education,
          </Typography>

          <Box sx={{ mt: 4, position: "relative", minHeight: { xs: 220, md: 280 } }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: "2%", md: "6%" },
                top: { xs: 16, md: 24 },
                width: { xs: "30%", md: "26%" },
                height: { xs: 140, md: 200 },
                borderRadius: "20px",
                overflow: "hidden",
                opacity: 0.38
              }}
            >
              <Image
                alt=""
                fill
                src={saptSlides[(saptIndex + saptSlides.length - 1) % saptSlides.length]}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { xs: "2%", md: "6%" },
                top: { xs: 16, md: 24 },
                width: { xs: "30%", md: "26%" },
                height: { xs: 140, md: 200 },
                borderRadius: "20px",
                overflow: "hidden",
                opacity: 0.38
              }}
            >
              <Image alt="" fill src={saptSlides[(saptIndex + 1) % saptSlides.length]} style={{ objectFit: "cover" }} />
            </Box>
            <Box
              sx={{
                position: "relative",
                mx: "auto",
                width: { xs: "78%", md: "58%" },
                height: { xs: 200, md: 260 },
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)"
              }}
            >
              <Image alt="Sapt Sadhana" fill src={saptSlides[saptIndex]} style={{ objectFit: "cover" }} />
            </Box>
          </Box>

          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", alignItems: "center", gap: 1.5 }}>
            <Typography
              component="button"
              type="button"
              onClick={() => setSaptIndex((i) => (i - 1 + saptSlides.length) % saptSlides.length)}
              sx={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "rgba(35,55,92,0.72)",
                fontSize: 22,
                lineHeight: 1,
                p: 0.5
              }}
            >
              ‹
            </Typography>
            {saptSlides.map((_, i) => (
              <Box
                key={saptSlides[i]}
                onClick={() => setSaptIndex(i)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: i === saptIndex ? "#2b46a1" : "rgba(43,70,161,0.35)",
                  cursor: "pointer"
                }}
              />
            ))}
            <Typography
              component="button"
              type="button"
              onClick={() => setSaptIndex((i) => (i + 1) % saptSlides.length)}
              sx={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "rgba(35,55,92,0.72)",
                fontSize: 22,
                lineHeight: 1,
                p: 0.5
              }}
            >
              ›
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* --- Section: Site footer --- */}
    </Box>
  );
}
