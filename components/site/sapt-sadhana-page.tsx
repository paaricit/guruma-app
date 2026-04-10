"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import SharedFooter from "@/components/site/shared-footer";
import SharedHeader from "@/components/site/shared-header";
import { uiPresets } from "@/lib/ui-presets";

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
    body: "Nutritious meals and dignified distribution for families and children who need steady support.",
    image: "/images/Sapt Sadhana Page Photos/Food for the Needy.png",
    imageFirst: false
  },
  {
    n: "02",
    title: "Disability Support",
    body: "Mobility aids, guidance, and care that help individuals participate more fully in daily life.",
    image: "/images/Sapt Sadhana Page Photos/Disability Support.webp",
    imageFirst: true
  },
  {
    n: "03",
    title: "Education Sponsorships",
    body: "Scholarships and learning resources so young minds can continue school with hope and stability.",
    image: "/images/Sapt Sadhana Page Photos/Education Sponsorships.webp",
    imageFirst: false
  },
  {
    n: "04",
    title: "Elderly Care",
    body: "Companionship, essentials, and respectful attention for elders who deserve warmth and reliability.",
    image: "/images/Sapt Sadhana Page Photos/Elderly Care.webp",
    imageFirst: true
  },
  {
    n: "05",
    title: "Women Welfare",
    body: "Programs that nurture safety, skill-building, and confidence for women in the community.",
    image: "/images/Sapt Sadhana Page Photos/Women Welfare.webp",
    imageFirst: false
  },
  {
    n: "06",
    title: "Medical Care for Children",
    body: "Support for treatment and healing journeys so children can grow without preventable suffering.",
    image: "/images/Sapt Sadhana Page Photos/Medical Care for Children.webp",
    imageFirst: true
  },
  {
    n: "07",
    title: "Environment & Sustainability",
    body: "Tree planting, awareness, and mindful action to protect the planet we all share.",
    image: "/images/Sapt Sadhana Page Photos/Environment & Sustainability.webp",
    imageFirst: false
  }
] as const;

const impactStats = [
  { value: "20+", label: "Women empowered through welfare initiatives" },
  { value: "100+", label: "Students have received financial scholarships" },
  { value: "150+", label: "Have received mobility support" },
  { value: "10,000+", label: "Meals and essentials shared with the needy" }
] as const;

const testimonials = [
  { quote: "Volunteering with Sapt Sadhana showed me how small, consistent seva changes many lives at once.", name: "Priya Sharma", place: "Mumbai, India" },
  { quote: "Our family contributes monthly knowing every rupee feeds real people—not abstract causes.", name: "Rahul Mehta", place: "Chennai, India" },
  { quote: "The scholarship support for my daughter kept her in school during our hardest year. Grateful beyond words.", name: "Lakshmi N.", place: "Coimbatore, India" }
] as const;

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
  const textCol = (
    <Box sx={{ order: { xs: 2, md: imageFirst ? 2 : 1 } }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: peach,
            color: "#fff",
            fontWeight: 800,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {n}
        </Box>
        <Typography sx={{ fontFamily: "var(--font-forum), serif", fontWeight: 700, color: navy, fontSize: { xs: "1.25rem", md: "1.45rem" } }}>{title}</Typography>
      </Stack>
      <Typography sx={{ color: "#444", fontSize: 15, lineHeight: 1.75, mb: 2 }}>{body}</Typography>
      <Button
        component={Link}
        href="/contact"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{ color: "#2b46a1", fontWeight: 700, textTransform: "none", p: 0, minWidth: 0, "&:hover": { bgcolor: "transparent", textDecoration: "underline" } }}
      >
        Know More
      </Button>
    </Box>
  );

  const imgCol = (
    <Box
      sx={{
        order: { xs: 1, md: imageFirst ? 1 : 2 },
        position: "relative",
        minHeight: { xs: 220, md: 280 },
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 14px 36px rgba(3,25,66,0.1)"
      }}
    >
      <Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
    </Box>
  );

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 2.5, md: 4 },
        alignItems: "center",
        py: { xs: 3, md: 4 },
        borderBottom: "1px solid rgba(0,0,0,0.06)"
      }}
    >
      {imageFirst ? (
        <>
          {imgCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imgCol}
        </>
      )}
    </Box>
  );
}

export default function SaptSadhanaPage() {
  return (
    <Box sx={{ bgcolor: "#fff", overflowX: "hidden" }}>
      <SharedHeader />

      <Box sx={{ position: "relative", minHeight: { xs: 480, md: 580 }, pt: { xs: 12, md: 14 }, pb: { xs: 6, md: 8 }, display: "flex", alignItems: "flex-end" }}>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src={IMG.banner} alt="Sapt Sadhana community seva" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(180deg, rgba(3,25,66,0.5) 0%, rgba(3,25,66,0.82) 100%)"
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: { md: "min(720px, 85%)" } }}>
            <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#fff", fontSize: { xs: 40, md: 56 }, fontWeight: 500, lineHeight: 1.05, mb: 2 }}>
              SAPT SADHANA
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.92)", fontSize: { xs: 16, md: 18 }, lineHeight: 1.75, mb: 2 }}>
              It is not just an initiative—it is a way of life. Sapt Sadhana turns compassion into action: feeding the hungry, educating children,
              supporting dignity, and caring for our planet—one sincere step at a time.
            </Typography>
            <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#ffc19a", fontSize: { xs: 15, md: 17 }, fontStyle: "italic", lineHeight: 1.6 }}>
              “When the heart chooses seva, the world becomes a little lighter.”
              <Box component="span" sx={{ display: "block", mt: 1, color: "rgba(255,255,255,0.85)", fontStyle: "normal", fontSize: 15 }}>
                — Guru Maa Shubha Didi
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", py: { xs: 7, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="md">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: navy, fontSize: { xs: 28, md: 36 }, fontWeight: 600, textAlign: "center", mb: 2 }}>
            What is Sapt Sadhana?
          </Typography>
          <Box sx={{ width: 72, height: 4, borderRadius: 2, bgcolor: peach, mx: "auto", mb: 2 }} />
          <Typography sx={{ textAlign: "center", color: "#333", fontSize: { xs: 16, md: 17 }, lineHeight: 1.85 }}>
            <Box component="span" sx={{ fontStyle: "italic", color: "#2a2a2a" }}>
              Sapt Sadhana is the sevenfold path of selfless service
            </Box>{" "}
            woven into daily living—where discipline, devotion, and generosity meet on the ground. It is how we practice spirituality with our hands and
            hearts, not only in prayer.
          </Typography>
          <Typography sx={{ textAlign: "center", color: navy, fontWeight: 700, mt: 3, fontSize: "1rem" }}>Let us understand deeper!</Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#faf8f5", py: { xs: 6, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              color: navy,
              fontSize: { xs: 26, md: 34 },
              fontWeight: 600,
              textAlign: "center",
              mb: 1,
              letterSpacing: "0.04em",
              textTransform: "uppercase"
            }}
          >
            Our Key Seva Initiatives
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#666", maxWidth: 640, mx: "auto", mb: 4, fontSize: 15 }}>
            Each initiative is a doorway to participate—through time, resources, or prayerful support.
          </Typography>
          {initiatives.map((row) => (
            <InitiativeBlock key={row.title} {...row} />
          ))}
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          py: { xs: 7, md: 10 },
          px: { xs: 2, md: 3 },
          backgroundImage: `linear-gradient(180deg, rgba(3,12,32,0.92) 0%, rgba(5,18,40,0.95) 100%), url('${IMG.cosmic}')`,
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
                <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#fff", fontSize: { xs: 32, md: 40 }, fontWeight: 600 }}>{s.value}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.82)", fontSize: { xs: 13, md: 14 }, lineHeight: 1.5, mt: 1 }}>{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: peach, fontSize: { xs: 13, md: 14 }, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", mb: 1 }}>
            Experiences from Seekers
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5 }}>
            {testimonials.map((t) => (
              <Box key={t.name} sx={{ bgcolor: "#fff", borderRadius: "18px", p: 3, boxShadow: "0 10px 30px rgba(3,25,66,0.08)" }}>
                <Box sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "#fde8e0", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2 }}>
                  <FavoriteBorderRoundedIcon sx={{ color: peach }} />
                </Box>
                <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#2a2a2a", fontSize: 15, lineHeight: 1.65, textAlign: "center", mb: 2 }}>{t.quote}</Typography>
                <Divider />
                <Typography sx={{ fontWeight: 700, color: navy, textAlign: "center", mt: 1.5 }}>{t.name}</Typography>
                <Typography sx={{ fontSize: 13, color: "#666", textAlign: "center" }}>{t.place}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#faf8f5", py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: navy, fontSize: { xs: 30, md: 38 }, fontWeight: 600, mb: 2 }}>
            Be the Change You Wish to See
          </Typography>
          <Typography sx={{ color: "#555", fontSize: 16, lineHeight: 1.75, mb: 3 }}>
            Whether you donate, volunteer, or simply spread the word—your intention adds strength to this collective seva.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={Link} href="/contact" variant="contained" sx={{ ...uiPresets.ctaButton, bgcolor: navy, color: "#fff", fontWeight: 700, px: 3, py: 1.25, "&:hover": { bgcolor: "#152a48" } }}>
              Contribute Now
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              sx={{ ...uiPresets.ctaButton, borderColor: navy, color: navy, fontWeight: 700, px: 3, py: 1.25, "&:hover": { borderColor: navy, bgcolor: "rgba(3,25,66,0.06)" } }}
            >
              Become a Volunteer
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0a1628", height: { xs: 28, md: 40 } }}>
        <Box sx={{ height: "100%", bgcolor: "#b8dce8", borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%" }} />
      </Box>

      <SharedFooter />
    </Box>
  );
}
