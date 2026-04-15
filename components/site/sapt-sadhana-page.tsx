"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";

const IMG = {
  banner: "/images/Sapt Sadhana Page Photos/SAPT SADHANA Banner BG.webp",
  cosmic: "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp"
} as const;

const peach = "#e8907d";
const navy = "#031942";

const initiatives = [
  {
    n: "01",
    title: "Food for the Needy",
    body: "Providing nutritious meals to the needy and the underprivileged. Our volunteers diligently pack food and distribute it to the needy with a Smile.",
    image: "/images/Sapt Sadhana Page Photos/Food for the Needy.png",
    imageFirst: false
  },
  {
    n: "02",
    title: "Disability Support",
    body: "Apart from providing care and professional helps, We provide Orthopedic Splits, We assist them to make, train, hand-hold, and make them independent.",
    image: "/images/Sapt Sadhana Page Photos/Disability Support.webp",
    imageFirst: true
  },
  {
    n: "03",
    title: "Education Sponsorships",
    body: "Education is a worthy investment, When it comes to our children. This is a mission close to Didi's heart. She personally speaks and guides to programs who provide scholarships and opportunities.",
    image: "/images/Sapt Sadhana Page Photos/Education Sponsorships.webp",
    imageFirst: false
  },
  {
    n: "04",
    title: "Elderly Care",
    body: "Reach Out, Root Comfort, Medicines, Qualities, Love Sharing, Sharing Session like TV, Arts and crafts, and more with Love and Respect that they deserve.",
    image: "/images/Sapt Sadhana Page Photos/Elderly Care.webp",
    imageFirst: true
  },
  {
    n: "05",
    title: "Women Welfare",
    body: "To empower and progress for Women means there is more nurtured upcoming generation. Support our women through collective responsibility for creating a better family and better families.",
    image: "/images/Sapt Sadhana Page Photos/Women Welfare.webp",
    imageFirst: false
  },
  {
    n: "06",
    title: "Medical Care for Children",
    body: "Our Surgeries for resources helps us heal they're not easy. This leads to ease the bright and beautiful even themselves.",
    image: "/images/Sapt Sadhana Page Photos/Medical Care for Children.webp",
    imageFirst: true
  },
  {
    n: "07",
    title: "Environment & Sustainability",
    body: "Trees Plantation, Green Initiatives, Swach Desh etc. our best vision and compassionate initiatives. Not only in the beauty the trees to better shape than what we freely take.",
    image: "/images/Sapt Sadhana Page Photos/Environment & Sustainability.webp",
    imageFirst: false
  }
] as const;

const impactStats = [
  { value: "20+", label: "Women Empowered" },
  { value: "100+", label: "Students have received Scholarship" },
  { value: "150+", label: "Have Received Disability Support" },
  { value: "10,000+", label: "Feeding the Needy" }
] as const;

const testimonials = [
  { quote: "This website is submitted to Gurumaksha for Gurumaksha for Gurumaksha", name: "Priya Sharma", place: "Mumbai, India" },
  { quote: "I prayed with my and appealed for better care and prayer and received all that and more and they have better and more positive answers", name: "Credit Over", place: "Chennai, India" },
  { quote: "This experience is precious too and learning key experience about their growth and how they are better and more valuable and more.", name: "Zanir Afrool", place: "Coimbatore, India" }
] as const;

function WaveDecoration() {
  return (
    <Box sx={{ textAlign: "center", my: 3 }}>
      <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 36 C30 10, 50 10, 70 28 C90 46, 110 46, 130 28 C150 10, 165 18, 175 28" stroke="#e8907d" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M20 40 C40 18, 55 20, 75 34 C95 48, 112 44, 135 30 C155 16, 162 22, 172 32" stroke="#e8907d" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    </Box>
  );
}

function InitiativeBlock({
  n,
  title,
  body,
  image,
  imageFirst
}: {
  n: string;
  title: string;
  body: string;
  image: string;
  imageFirst: boolean;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: { xs: 2, md: 3 }, mb: { xs: 3, md: 4 } }}>
      {/* Number badge + vertical line */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, pt: 0.5 }}>
        <Box
          sx={{
            width: { xs: 40, md: 52 },
            height: { xs: 40, md: 52 },
            borderRadius: "50%",
            bgcolor: peach,
            color: "#fff",
            fontWeight: 800,
            fontSize: { xs: 13, md: 15 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}
        >
          {n}
        </Box>
        <Box sx={{ width: 2, flex: 1, minHeight: 60, bgcolor: "rgba(232,144,125,0.35)", mt: 1 }} />
      </Box>

      {/* Card */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          borderRadius: "12px",
          border: "1px solid rgba(0,0,0,0.08)",
          overflow: "hidden",
          bgcolor: "#fff",
          boxShadow: "0 4px 20px rgba(3,25,66,0.06)"
        }}
      >
        {/* Text side */}
        <Box
          sx={{
            order: { xs: 2, md: imageFirst ? 2 : 1 },
            p: { xs: 2.5, md: 3.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontWeight: 700,
              color: navy,
              fontSize: { xs: "1.15rem", md: "1.3rem" },
              mb: 1.5
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: "#555", fontSize: 14, lineHeight: 1.75, mb: 2.5 }}>{body}</Typography>
          <Button
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
            sx={{
              color: "#2b46a1",
              fontWeight: 600,
              textTransform: "none",
              p: 0,
              minWidth: 0,
              alignSelf: "flex-start",
              fontSize: 14,
              "&:hover": { bgcolor: "transparent", textDecoration: "underline" }
            }}
          >
            Know More
          </Button>
        </Box>

        {/* Image side */}
        <Box
          sx={{
            order: { xs: 1, md: imageFirst ? 1 : 2 },
            position: "relative",
            minHeight: { xs: 200, md: 260 }
          }}
        >
          <Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default function SaptSadhanaPage() {
  return (
    <Box sx={{ bgcolor: "#fff", overflowX: "hidden" }}>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 480, md: 580 },
          pt: { xs: 12, md: 14 },
          pb: { xs: 6, md: 8 },
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src={IMG.banner} alt="Sapt Sadhana community seva" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(180deg, rgba(3,25,66,0.45) 0%, rgba(3,25,66,0.80) 100%)"
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: { md: "min(720px, 85%)" } }}>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                color: "#fff",
                fontSize: { xs: 42, md: 58 },
                fontWeight: 500,
                lineHeight: 1.05,
                mb: 1.5
              }}
            >
              SAPT SADHANA
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: 15, md: 17 },
                fontStyle: "italic",
                mb: 2
              }}
            >
              it is not just an initiative, it&apos;s a way of life!!!
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.88)",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.8,
                mb: 2.5
              }}
            >
              While our minds evolve, we mature spiritually, our physical actions should leave our mind, body and soul feeling good, happy, elevated and cleansed.
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                color: "#ffc19a",
                fontSize: { xs: 15, md: 16 },
                fontStyle: "italic"
              }}
            >
              -Guru Maa Subha Didi
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* What is Sapt Sadhana */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #d8eef4 0%, #eef7f4 60%, #f5f0ea 100%)",
          py: { xs: 7, md: 10 },
          px: { xs: 2, md: 3 },
          position: "relative"
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              color: navy,
              fontSize: { xs: 26, md: 34 },
              fontWeight: 500,
              textAlign: "center",
              mb: 2,
              lineHeight: 1.2
            }}
          >
            <Box component="span" sx={{ fontFamily: "var(--font-inter), sans-serif" }}>What is </Box>
            <Box component="span" sx={{ fontFamily: "var(--font-forum), serif" }}>Sapt Sadhana?</Box>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#2a2a2a",
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.8,
              fontStyle: "italic",
              mb: 0
            }}
          >
            <Box component="span" sx={{ fontWeight: 700 }}>Is Our Commitment to Service (Sewa),</Box>
            {" "}it&apos;s the Heartbeat of our Being, it&apos;s our Endeavour to bring a Sustainable Shift in our Community, transforming lives anywhere and everywhere
          </Typography>

          <WaveDecoration />

          <Typography
            sx={{
              textAlign: "center",
              color: "#444",
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.85,
              mb: 3
            }}
          >
            We all know that life, at times, can get challenging, and when it does, it really does. And a challenging life sometimes comes in the way of our mental and spiritual growth. As each life is precious, Didi is unlocking every opportunity to be useful to society at large by helping and nurturing the Under Privileged. Giving back to society is a Divine Blessing.
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              textAlign: "center",
              color: navy,
              fontWeight: 600,
              fontSize: { xs: 16, md: 18 }
            }}
          >
            Let us understand deeper!
          </Typography>
        </Container>

        {/* Curved bottom divider */}
        <Box
          sx={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            height: { xs: 48, md: 72 },
            bgcolor: "#faf8f5",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%"
          }}
        />
      </Box>

      {/* Our Key Seva Initiatives */}
      <Box sx={{ bgcolor: "#faf8f5", pt: { xs: 6, md: 9 }, pb: { xs: 4, md: 6 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: navy,
              fontSize: { xs: 26, md: 36 },
              fontWeight: 600,
              textAlign: "center",
              mb: 4
            }}
          >
            Our Key Seva Initiatives
          </Typography>
          {initiatives.map((row) => (
            <InitiativeBlock key={row.title} {...row} />
          ))}
        </Container>
      </Box>

      {/* Impact stats */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 7, md: 10 },
          px: { xs: 2, md: 3 },
          backgroundImage: `linear-gradient(180deg, rgba(3,12,32,0.93) 0%, rgba(5,18,40,0.96) 100%), url('${IMG.cosmic}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
              gap: { xs: 3, md: 2 }
            }}
          >
            {impactStats.map((s) => (
              <Box key={s.label} sx={{ textAlign: "center", px: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-forum), serif",
                    color: "#fff",
                    fontSize: { xs: 34, md: 44 },
                    fontWeight: 600,
                    lineHeight: 1
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: { xs: 13, md: 14 },
                    lineHeight: 1.5,
                    mt: 1
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Experiences from Seekers */}
      <Box sx={{ bgcolor: "#d8eef4", py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: "#555",
              fontSize: { xs: 13, md: 14 },
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "center",
              mb: 0.5
            }}
          >
            Hear Their Finest Stories Gurumai at Saket transforming these seekers
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: navy,
              fontSize: { xs: 24, md: 30 },
              fontWeight: 600,
              textAlign: "center",
              mb: 3
            }}
          >
            Experiences from Seekers
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2.5
            }}
          >
            {testimonials.map((t) => (
              <Box
                key={t.name}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "18px",
                  p: 3,
                  boxShadow: "0 10px 30px rgba(3,25,66,0.08)"
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    bgcolor: "#fde8e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2
                  }}
                >
                  <FavoriteBorderRoundedIcon sx={{ color: peach }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "var(--font-forum), serif",
                    color: "#2a2a2a",
                    fontSize: 15,
                    lineHeight: 1.65,
                    textAlign: "center",
                    mb: 2
                  }}
                >
                  {t.quote}
                </Typography>
                <Divider />
                <Typography sx={{ fontWeight: 700, color: navy, textAlign: "center", mt: 1.5 }}>{t.name}</Typography>
                <Typography sx={{ fontSize: 13, color: "#666", textAlign: "center" }}>{t.place}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Be the Change CTA */}
      <Box sx={{ bgcolor: "#faf8f5", py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: navy,
              fontSize: { xs: 28, md: 36 },
              fontWeight: 600,
              mb: 2
            }}
          >
            Be the Change You Wish to See
          </Typography>
          <Typography sx={{ color: "#555", fontSize: { xs: 15, md: 16 }, lineHeight: 1.8, mb: 3, maxWidth: 560, mx: "auto" }}>
            This is not about charity, it is about a change that will bring a shift in the mind. Come and be a part of it.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                bgcolor: navy,
                color: "#fff",
                fontWeight: 700,
                px: 3,
                py: 1.25,
                "&:hover": { bgcolor: "#152a48" }
              }}
            >
              Contribute Now
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              sx={{
                borderColor: navy,
                color: navy,
                fontWeight: 700,
                px: 3,
                py: 1.25,
                "&:hover": { borderColor: navy, bgcolor: "rgba(3,25,66,0.06)" }
              }}
            >
              Become a Volunteer
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Curve divider */}
      <Box sx={{ bgcolor: "#0a1628", height: { xs: 28, md: 40 } }}>
        <Box sx={{ height: "100%", bgcolor: "#b8dce8", borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%" }} />
      </Box>

      {/* Footer */}
    </Box>
  );
}
