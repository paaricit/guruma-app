"use client";

import Image from "next/image";
import Link from "next/link";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography
} from "@mui/material";
import SharedFooter from "@/components/site/shared-footer";
import SharedHeader from "@/components/site/shared-header";
import { uiPresets } from "@/lib/ui-presets";

const gold = "#d4af37";
const goldDeep = "#b8941f";
const navy = "#031942";
const navyDark = "#050d1a";

const heroBg = "/images/Home Page Photos/IISHT GOLD Membership BG.webp";
const cosmic = "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp";
const learnImage = "/images/Home Page Photos/Guided Meditation  BG.webp";

const globalStats = [
  { value: "30+", label: "Years Divine Counsel & Guidance" },
  { value: "5L+", label: "Beautiful Lives Touched" },
  { value: "50+", label: "Countries, our Yogis Divine Abode" },
  { value: "10,000+", label: "Transformative Sessions & Workshops" }
] as const;

const benefitCards = [
  {
    title: "Mental Wellness Resources",
    body: "Curated practices and guidance to steady the mind and nurture emotional balance.",
    image: "/images/Dedicated spiritual seekers program Page Photos/Mental Wellness Resources.webp"
  },
  {
    title: "Retreats",
    body: "Immersive time away from noise to deepen practice and renewal.",
    image: "/images/Dedicated spiritual seekers program Page Photos/Retreats.webp"
  },
  {
    title: "Workshops",
    body: "Focused learning circles on themes that matter for daily spiritual living.",
    image: "/images/Dedicated spiritual seekers program Page Photos/Workshops.webp"
  },
  {
    title: "Meditation sessions",
    body: "Structured sittings—from foundation to depth—with community support.",
    image: "/images/Dedicated spiritual seekers program Page Photos/Meditation sessions.webp"
  },
  {
    title: "Psychological Help",
    body: "Referrals and resources that honour both clinical care and spiritual context.",
    image: "/images/Dedicated spiritual seekers program Page Photos/Meditation sessions (2).webp"
  },
  {
    title: "Applicable Wisdom",
    body: "Teachings you can apply at work, in family life, and in silent hours alike.",
    image: "/images/Dedicated spiritual seekers program Page Photos/Section Below Benifits.webp"
  }
] as const;

const learnItems = [
  { title: "Foundations of inner steadiness", body: "Breath, posture, and attention as anchors for everyday calm.", Icon: LocalFloristOutlinedIcon },
  { title: "Living ethics with heart", body: "Values that strengthen relationships, seva, and self-honesty.", Icon: PersonOutlineOutlinedIcon },
  { title: "Insight for real decisions", body: "Discernment tools for career, family, and spiritual priorities.", Icon: LightbulbOutlinedIcon }
] as const;

const pricingFeatures = [
  "Unlimited access to all courses",
  "Exclusive webinars and workshops",
  "Digital library subscription",
  "Recognition for learning milestones (CPD-style tracking)"
] as const;

const faqItems: { q: string; a: string }[] = [
  { q: "What is ISHT Gold?", a: "ISHT Gold is a yearly membership that bundles courses, live touchpoints, and community access for dedicated seekers." },
  { q: "Can I pay in instalments?", a: "Reach out through Contact Us—our team shares current enrollment and payment options." },
  { q: "Is content available on mobile?", a: "Yes. Access learning materials on phone, tablet, or desktop where supported." },
  { q: "Do I need prior experience?", a: "No. Paths include beginner-friendly modules alongside deeper electives." },
  { q: "How long is membership?", a: "Pricing shown is for one year of membership, inclusive of GST as applicable." },
  { q: "How do I register?", a: "Use Register now to submit your details; we confirm next steps by email or phone." }
];

export default function IshtGoldPage() {
  return (
    <Box sx={{ bgcolor: navyDark, overflowX: "hidden" }}>
      <SharedHeader />

      <Box
        sx={{
          position: "relative",
          pt: { xs: 14, md: 16 },
          pb: { xs: 6, md: 8 },
          textAlign: "center",
          backgroundImage: `linear-gradient(180deg, rgba(2,8,22,0.88) 0%, rgba(5,14,32,0.92) 100%), url('${heroBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: 42, md: 64 },
              fontWeight: 600,
              color: gold,
              letterSpacing: "0.06em",
              textShadow: "0 4px 24px rgba(0,0,0,0.45)"
            }}
          >
            ISHT GOLD
          </Typography>
          <Box
            sx={{
              mt: 3,
              mx: "auto",
              maxWidth: 900,
              px: { xs: 2, md: 3 },
              py: 2,
              borderRadius: "14px",
              bgcolor: "rgba(3,25,66,0.75)",
              border: `1px solid rgba(212,175,55,0.35)`,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2
            }}
          >
            <Typography sx={{ color: "#fff", fontSize: { xs: 15, md: 17 }, textAlign: { xs: "center", sm: "left" } }}>
              Access all courses for <strong>FREE</strong> with ISHT Gold Membership
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                ...uiPresets.ctaButton,
                bgcolor: gold,
                color: navyDark,
                fontWeight: 800,
                px: 3,
                flexShrink: 0,
                "&:hover": { bgcolor: goldDeep }
              }}
            >
              Register now
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#eceae4", pt: { xs: 8, md: 10 }, pb: { xs: 8, md: 11 }, px: { xs: 2, md: 3 }, position: "relative", overflow: "hidden" }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: "50%",
            top: 80,
            width: 600,
            height: 600,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            border: `1px solid rgba(212,175,55,0.12)`,
            pointerEvents: "none"
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: "50%",
            top: 100,
            width: 480,
            height: 480,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            border: `1px solid rgba(212,175,55,0.1)`,
            pointerEvents: "none"
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{ fontFamily: "var(--font-forum), serif", textAlign: "center", color: navy, fontSize: { xs: 26, md: 34 }, fontWeight: 600, mb: 2 }}>
            Introducing <Box component="span" sx={{ color: goldDeep }}>ISHT GOLD</Box> Membership
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mb: -2, position: "relative", zIndex: 2 }}>
            {[
              { v: "12+", l: "Courses" },
              { v: "18K+", l: "Live sessions" },
              { v: "30K+", l: "Community" }
            ].map((b) => (
              <Box
                key={b.l}
                sx={{
                  bgcolor: gold,
                  color: navyDark,
                  px: 2.5,
                  py: 1.5,
                  borderRadius: "12px",
                  fontWeight: 800,
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  minWidth: { sm: 140 }
                }}
              >
                <Typography sx={{ fontSize: 20, lineHeight: 1 }}>{b.v}</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 700 }}>{b.l}</Typography>
              </Box>
            ))}
          </Stack>
          <Box
            sx={{
              mt: 4,
              bgcolor: "#f7f6f3",
              borderRadius: "20px",
              border: `1px solid rgba(212,175,55,0.25)`,
              p: { xs: 3, md: 4 },
              boxShadow: "0 16px 40px rgba(0,0,0,0.06)"
            }}
          >
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
              <Box>
                <Typography sx={{ fontWeight: 800, color: navy, mb: 1.5, letterSpacing: "0.06em", fontSize: 13 }}>OUR MISSION</Typography>
                <Typography sx={{ color: "#444", lineHeight: 1.8, fontSize: 15 }}>
                  ISHT Gold exists to gather sincere seekers in one nourishing ecosystem—where courses, satsang, and seva reinforce each other, and
                  Guru Maa Shubha Didi’s guidance stays within reach through structured learning and community rhythm.
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 800, color: navy, mb: 1.5, letterSpacing: "0.06em", fontSize: 13 }}>OUR VISION</Typography>
                <Typography sx={{ color: "#444", lineHeight: 1.8, fontSize: 15 }}>
                  A worldwide circle of practitioners who lead with clarity, compassion, and courage—transforming their own lives and gently lifting
                  those around them through authentic spiritual practice.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 9 },
          px: { xs: 2, md: 3 },
          backgroundImage: `linear-gradient(180deg, rgba(3,10,28,0.94) 0%, rgba(5,16,36,0.96) 100%), url('${cosmic}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 2, md: 1 } }}>
            {globalStats.map((s) => (
              <Box key={s.label} sx={{ textAlign: "center", px: 1 }}>
                <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#fff", fontSize: { xs: 28, md: 36 }, fontWeight: 600 }}>{s.value}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.82)", fontSize: { xs: 12, md: 14 }, lineHeight: 1.45, mt: 0.5 }}>{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#f5f3ee", py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: navy, fontSize: { xs: 28, md: 36 }, fontWeight: 600, textAlign: "center" }}>
            Benefits
          </Typography>
          <Typography sx={{ textAlign: "center", color: goldDeep, mt: 0.5, mb: 4 }}>◇</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 2.5 }}>
            {benefitCards.map((c) => (
              <Box key={c.title} sx={{ bgcolor: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 28px rgba(0,0,0,0.07)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <Box sx={{ position: "relative", height: 160 }}>
                  <Image src={c.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  <ShareOutlinedIcon sx={{ position: "absolute", top: 10, right: 10, color: "#fff", bgcolor: "rgba(0,0,0,0.35)", borderRadius: "50%", p: 0.5, fontSize: 22 }} />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography sx={{ fontWeight: 700, color: navy, mb: 1 }}>{c.title}</Typography>
                  <Typography sx={{ color: "#555", fontSize: 14, lineHeight: 1.6 }}>{c.body}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#eceae4", py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 5 }, alignItems: "center" }}>
            <Box sx={{ position: "relative", minHeight: { xs: 360, md: 480 }, borderRadius: "20px", overflow: "hidden" }}>
              <Image src={learnImage} alt="Guided meditation practice" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
            </Box>
            <Box sx={{ bgcolor: "#fff", borderRadius: "18px", border: `2px solid rgba(212,175,55,0.35)`, p: { xs: 3, md: 4 } }}>
              <Typography sx={{ color: goldDeep, fontWeight: 800, letterSpacing: "0.12em", fontSize: 11, mb: 1 }}>WHAT WILL YOU LEARN</Typography>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", color: navy, fontSize: { xs: 22, md: 28 }, fontWeight: 600, lineHeight: 1.2, mb: 2 }}>
                A structured path from calm attention to wise action
              </Typography>
              <Typography sx={{ color: "#555", fontSize: 15, lineHeight: 1.75, mb: 3 }}>
                Modules blend guided practice, reflective inquiry, and community dialogue so learning lands in your schedule—not only in theory.
              </Typography>
              <Stack spacing={2}>
                {learnItems.map(({ title, body, Icon }) => (
                  <Stack direction="row" spacing={1.5} key={title} alignItems="flex-start">
                    <Box sx={{ color: goldDeep, mt: 0.25 }}>
                      <Icon sx={{ fontSize: 26 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: navy }}>{title}</Typography>
                      <Typography sx={{ color: "#666", fontSize: 14, lineHeight: 1.55 }}>{body}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 11 },
          px: { xs: 2, md: 3 },
          backgroundImage: `linear-gradient(90deg, rgba(5,12,28,0.98) 0%, rgba(5,12,28,0.92) 45%, rgba(8,20,44,0.85) 100%), url('${cosmic}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(280px, 400px) 1fr" }, gap: { xs: 4, md: 6 }, alignItems: "center" }}>
            <Box
              sx={{
                bgcolor: "rgba(3,18,42,0.85)",
                borderRadius: "20px",
                border: `1px solid rgba(212,175,55,0.4)`,
                p: { xs: 3, md: 3.5 },
                position: "relative",
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)"
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  bgcolor: gold,
                  color: navyDark,
                  fontSize: 11,
                  fontWeight: 800,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "8px"
                }}
              >
                Exclusive
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", color: gold, fontSize: 28, fontWeight: 600 }}>ISHT GOLD</Typography>
              <Typography sx={{ color: "#fff", fontSize: 32, fontWeight: 800, mt: 1 }}>₹35,000</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: 14, mb: 2 }}>+ 18% GST · Yearly membership</Typography>
              <Stack spacing={1.25} sx={{ mb: 3 }}>
                {pricingFeatures.map((line) => (
                  <Stack direction="row" spacing={1} key={line} alignItems="flex-start">
                    <CheckRoundedIcon sx={{ color: gold, fontSize: 22, flexShrink: 0 }} />
                    <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: 14 }}>{line}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button
                component={Link}
                href="/contact"
                fullWidth
                variant="contained"
                sx={{ ...uiPresets.ctaButton, bgcolor: gold, color: navyDark, fontWeight: 800, py: 1.25, "&:hover": { bgcolor: goldDeep } }}
              >
                Register now
              </Button>
            </Box>
            <Box>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#fff", fontSize: { xs: 28, md: 40 }, fontWeight: 600, lineHeight: 1.15 }}>
                Become a <Box component="span" sx={{ color: gold }}>GOLD MEMBER</Box> today and avail these offers
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)", mt: 2, fontSize: 16, lineHeight: 1.7, maxWidth: 520 }}>
                Step into a year of curated learning, live guidance, and a circle that keeps you accountable to your highest intentions.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="md">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: navy, fontSize: { xs: 26, md: 32 }, fontWeight: 600, textAlign: "center" }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#666", mt: 1, mb: 4 }}>Everything you need to know about ISHT Gold membership</Typography>
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
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ color: goldDeep }} />}>
                <Typography sx={{ fontWeight: 600, color: "#1f2f52" }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#555", lineHeight: 1.65 }}>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <Box sx={{ bgcolor: navyDark, height: { xs: 28, md: 40 } }}>
        <Box sx={{ height: "100%", bgcolor: "#b8dce8", borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%" }} />
      </Box>

      <SharedFooter />
    </Box>
  );
}
