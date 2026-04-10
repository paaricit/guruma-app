"use client";

import Image from "next/image";
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Typography
} from "@mui/material";
import SharedFooter from "@/components/site/shared-footer";
import SharedHeader from "@/components/site/shared-header";
import { uiPresets } from "@/lib/ui-presets";

const stats = [
  { value: "30+", label: "Years Divine Connect & Guidance" },
  { value: "5L+", label: "Beautiful Lives Touched" },
  { value: "50+", label: "Countries, our Yogis Divine Abode" },
  { value: "10,000+", label: "Transformative Discourses & Workshops" }
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

const wisdomCards = [
  { title: "The art of letting go", badge: "The Most Rated", image: "/images/Home Page Photos/The art of letting go.webp" },
  { title: "Morning Meditation for Peace", badge: "The Most Watched", image: "/images/Home Page Photos/Morning Meditation for Peace.webp" },
  { title: "7 Steps to Inner Transformation", badge: "The Most Saved", image: "/images/Home Page Photos/7 Steps to Inner Transformation.webp" }
];

const seekerVideos = [
  { name: "Priya Sharma", image: "/images/Home Page Photos/Home page second section Video thumbnail.webp" },
  { name: "Karan Paul", image: "/images/Home Page Photos/Morning Meditation for Peace.webp" },
  { name: "Priya Das", image: "/images/Home Page Photos/7 Steps to Inner Transformation.webp" }
];

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

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "transparent", overflowX: "hidden" }}>
      <SharedHeader showProgramsMenu />

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
              alignItems: "end",
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
                    width: { xs: 260, sm: 252.9 },
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
                    width: { xs: 260, sm: 252.9 },
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
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: { xs: 42, md: 62 },
            bgcolor: "#bfe0e6",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

      <Box sx={{ bgcolor: "#c7e3e8", pt: { xs: 7, md: 9 }, pb: { xs: 8, md: 10 } }}>
        <Container>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: { xs: 4, md: "30px" },
              p: { xs: 2.5, md: 4 },
              boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "420px 1fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "center"
            }}
          >
            <Box sx={{ position: "relative", borderRadius: "22px", overflow: "hidden", border: "4px solid rgba(255,255,255,0.9)" }}>
              <Box sx={{ position: "relative", height: { xs: 360, md: 510 } }}>
                <Image alt="Guru Maa session" fill src="/images/Home Page Photos/Home page second section Video thumbnail.webp" style={{ objectFit: "cover" }} />
              </Box>
              <Box
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
              </Box>
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
            backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/Home Page Photos/Home Page Banner.webp')",
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
            bgcolor: "#f2f1ed",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
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

      <Box sx={{ bgcolor: "#f2f1ed", pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 9 }, position: "relative", overflow: "hidden" }}>
        <Container>
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
            {["/images/Home Page Photos/icons-3.png", "/images/Home Page Photos/icons-1.png", "/images/Home Page Photos/icons-2.png"].map((src) => (
              <Box key={src} sx={{ position: "relative", width: 46, height: 46, opacity: 0.9 }}>
                <Image alt="" fill src={src} style={{ objectFit: "contain" }} />
              </Box>
            ))}
          </Stack>

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
      <Box
        sx={{
          bgcolor: "#091a43",
          backgroundImage: "linear-gradient(rgba(9,26,67,0.15), rgba(9,26,67,0.15)), url('/images/Home Page Photos/Sapt Sadhana  BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0",
          px: { xs: 2, md: 4 },
          py: { xs: 2.2, md: 3 },
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr)) auto"
          },
          alignItems: "center",
          gap: { xs: 1.8, md: 2.2 }
        }}
      >
        {[
          { label: "NAME", hint: "Enter your name", iconSrc: "/images/Home Page Photos/Icon-profile.png" },
          { label: "PHONE", hint: "Enter your phone number", iconSrc: "/images/Home Page Photos/icons-2.png" },
          { label: "EMAIL", hint: "Enter your Email ID", iconSrc: "/images/Home Page Photos/icons-1.png" },
          { label: "MESSAGE", hint: "Give us a message", iconSrc: "/images/Home Page Photos/icons-3.png" }
        ].map((field) => (
          <Box key={field.label} sx={{ minWidth: 0 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Box sx={{ position: "relative", width: 20, height: 20, flex: "0 0 auto" }}>
                <Image alt="" fill src={field.iconSrc} style={{ objectFit: "contain" }} />
              </Box>
              <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: 14, md: 18 } }}>{field.label}</Typography>
            </Stack>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>{field.hint}</Typography>
            <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.6)", mt: 0.5 }} />
          </Box>
        ))}

        <Box sx={{ justifySelf: { xs: "center", sm: "start", md: "end" }, gridColumn: { xs: "1 / -1", sm: "1 / -1", md: "auto" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={{ color: "#f5f7ff", fontWeight: 700, fontSize: { xs: "clamp(1.5rem, 6vw, 2rem)", md: 52 }, lineHeight: 0.95 }}>
            Get a
            <br />
            call back
          </Typography>
        </Box>
      </Box>

      <Box sx={{ background: "linear-gradient(180deg, #f2f1ed 0%, #ffffff 52%, #d1f1f5 100%)", pb: { xs: 6, md: 8 }, pt: { xs: 2.2, md: 8 } }}>
        <Container>
          <Stack spacing={1.5}>
            {programRows.map((row) => (
              row.title === "Counselling & Healing Sessions" ? (
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
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(90deg, rgba(3,25,66,0.78) 0%, rgba(3,25,66,0.55) 35%, rgba(3,25,66,0.16) 68%, rgba(3,25,66,0.04) 100%)"
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      py: { xs: 3, md: 4 },
                      px: { xs: 2.5, md: 4.2 },
                      maxWidth: { xs: "100%", md: 780 },
                      color: "#fff"
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "var(--font-forum), serif",
                        fontSize: { xs: 34, md: "55.864px" },
                        lineHeight: 1.15,
                        letterSpacing: { md: "-1.1173px" }
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
                        color: "rgba(255,255,255,0.92)"
                      }}
                    >
                      {row.subtitle}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1.6,
                        color: "rgba(255,255,255,0.92)",
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
                          color: "#fff",
                          borderColor: "rgba(255,255,255,0.85)",
                          borderWidth: "0.998px"
                        }}
                      >
                        {row.secondaryCta}
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              ) : (
              <Box
                key={row.title}
                sx={{
                  bgcolor: "transparent",
                  borderTop: "1px solid rgba(255,255,255,0.7)",
                  borderBottom: "1px solid rgba(255,255,255,0.7)",
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  overflow: "hidden",
                  minHeight: { md: 529.54 }
                }}
              >
                <Box
                  sx={{
                    order: { xs: 2, md: row.imageLeft ? 1 : 2 },
                    position: "relative",
                    minHeight: { xs: 260, md: 529.54 },
                    // borderRight: { md: row.imageLeft ? "10px solid #f4b99a" : "none" },
                    // borderLeft: { md: row.imageLeft ? "none" : "10px solid #f4b99a" }
                  }}
                >
                  <Image alt={row.title} fill sizes="(max-width: 900px) 100vw, 50vw" src={row.image} />
                </Box>

                <Box
                  sx={{
                    order: { xs: 1, md: row.imageLeft ? 2 : 1 },
                    py: { xs: 3, md: 4 },
                    px: { xs: 2.5, md: 4.2 },
                    bgcolor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <Typography
                    sx={{
                      color: "#111125",
                      fontFamily: "var(--font-forum), serif",
                      fontSize: { xs: 34, md: "55.864px" },
                      lineHeight: 1.15,
                      letterSpacing: { md: "-1.1173px" }
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
                      color: "#111125",
                      textTransform: "uppercase"
                    }}
                  >
                    {row.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.6,
                      color: "#5c5c6f",
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
              )
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#f2f1ed", py: { xs: 7, md: 9 }, position: "relative", overflow: "hidden" }}>
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
                      <Typography sx={{ fontSize: 14, lineHeight: 1, color: "#000" }}>★</Typography>
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
                      <Box sx={{ width: "8.488px", height: "8.488px", borderRadius: "50%", bgcolor: "#2b46a1" }} />
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

      <Box sx={{ position: "relative", py: { xs: 6, md: 8 }, color: "#fff" }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(3,25,66,0.72), rgba(3,25,66,0.72)), url('/images/Home Page Photos/Spiritual Retreats BG (1).webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 34, md: "47.313px" },
              lineHeight: { md: "70.97px" },
              color: "#e7ebf8",
              mb: 2.2
            }}
          >
            Experiences from Seekers
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: { xs: 1.5, md: 2.2 }
            }}
          >
            {seekerVideos.map((video) => (
              <Box key={video.name} sx={{ position: "relative", borderRadius: "8px", overflow: "hidden", minHeight: { xs: 180, md: 210 } }}>
                <Image alt={video.name} fill src={video.image} style={{ objectFit: "cover" }} />
                <Typography sx={{ position: "absolute", top: 8, left: 10, color: "#f6f6f6", fontSize: 13 }}>{video.name}</Typography>
                <Box
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
            ))}
          </Box>

          <Box sx={{ mt: 2.6, display: "flex", justifyContent: "center", gap: 1 }}>
            <Box sx={{ width: 24, height: 24, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.95)", color: "#1e2f5a", textAlign: "center", lineHeight: "24px" }}>
              ‹
            </Box>
            <Box sx={{ width: 24, height: 24, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.95)", color: "#1e2f5a", textAlign: "center", lineHeight: "24px" }}>
              ›
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 6.5,
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 42, md: "50px" },
              lineHeight: { md: "76.608px" },
              color: "#e7ebf8"
            }}
          >
            Hear what our global community has to say
          </Typography>
          <Typography sx={{ mt: 0.7, textAlign: "center", color: "rgba(239,244,255,0.85)", fontSize: 14 }}>
            Hear from those whose lives have been transformed by these sessions
          </Typography>

          <Box
            sx={{
              mt: 2.4,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: { xs: 1.6, md: 2.3 }
            }}
          >
            {testimonials.map((item) => (
              <Card key={item.name} sx={{ borderRadius: "12px", boxShadow: "none", bgcolor: "#fff", color: "#1e2f54", position: "relative" }}>
                <Box sx={{ position: "absolute", top: -12, left: 14, width: 26, height: 26 }}>
                  <Image alt="" fill src="/images/Home Page Photos/icon-orange.png" style={{ objectFit: "contain" }} />
                </Box>
                <Box sx={{ p: 2.2, pt: 2.8 }}>
                  <Typography sx={{ color: "rgba(31,47,84,0.82)", fontSize: 13.5, lineHeight: 1.45 }}>{`"${item.quote}"`}</Typography>
                  <Typography sx={{ mt: 2.2, fontSize: 15, fontWeight: 700 }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: 12, color: "rgba(31,47,84,0.7)" }}>{item.location}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Container>


      </Box>

      <Box
        sx={{
          background: "linear-gradient(180deg, #F3F2EE 0%, #FFF 50%, #D1F1F5 100%)",
          pt: { xs: 6, md: 8 },
          pb: { xs: 7, md: 9 },
          position: "relative",
          overflow: "hidden",

        }}
      >
        
        <Container>
          <Typography sx={{ textAlign: "center", color: "#f4b497", fontSize: { xs: 32, md: 44 }, lineHeight: 1 }}>〰</Typography>
          <Typography sx={{ mt: 0.5, textAlign: "center", fontFamily: "var(--font-forum), serif", fontSize: { xs: 44, md: 56 }, color: "#1f2f52" }}>
            SAPT SADHANA - Serving Beyond Self
          </Typography>
          <Typography sx={{ mt: 1.2, mx: "auto", textAlign: "center", color: "rgba(20,20,20,0.8)", fontSize: { xs: 16, md: 22 }, maxWidth: 1040, lineHeight: 1.4 }}>
            <b>Sapt Sadhana</b> is our commitment to selfless service (seva), transforming spiritual wisdom into compassionate action. Through
            various initiatives, we serve underprivileged communities, provide education,
          </Typography>

          <Box sx={{ mt: 3.5, position: "relative", minHeight: { xs: 230, md: 320 } }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: "4%", md: "8%" },
                top: { xs: 25, md: 28 },
                width: { xs: "32%", md: "28%" },
                height: { xs: 170, md: 230 },
                borderRadius: "22px",
                overflow: "hidden",
                opacity: 0.35
              }}
            >
              <Image
                alt="Sapt service side"
                fill
                src="/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (1).webp"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { xs: "4%", md: "8%" },
                top: { xs: 25, md: 28 },
                width: { xs: "32%", md: "28%" },
                height: { xs: 170, md: 230 },
                borderRadius: "22px",
                overflow: "hidden",
                opacity: 0.35
              }}
            >
              <Image
                alt="Sapt service side"
                fill
                src="/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (3).webp"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                mx: "auto",
                width: { xs: "86%", md: "62%" },
                height: { xs: 190, md: 260 },
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 10px 22px rgba(0,0,0,0.18)"
              }}
            >
              <Image
                alt="Sapt Sadhana"
                fill
                src="/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (2).webp"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 1.4, display: "flex", justifyContent: "center", alignItems: "center", gap: 1.1 }}>
            <Typography sx={{ color: "rgba(35,55,92,0.72)", fontSize: 22, lineHeight: 1 }}>‹</Typography>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#2b46a1" }} />
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "rgba(43,70,161,0.38)" }} />
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "rgba(43,70,161,0.38)" }} />
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "rgba(43,70,161,0.38)" }} />
            <Typography sx={{ color: "rgba(35,55,92,0.72)", fontSize: 22, lineHeight: 1 }}>›</Typography>
          </Box>
        </Container>
      </Box>

      <SharedFooter />
    </Box>
  );
}
