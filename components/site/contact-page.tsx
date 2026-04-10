"use client";

import Image from "next/image";
import Link from "next/link";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import SharedFooter from "@/components/site/shared-footer";
import SharedHeader from "@/components/site/shared-header";
import { uiPresets } from "@/lib/ui-presets";

const heroBg = "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp";
const sideImage = "/images/CONTACT Page Photo.webp";

const faqItems: { q: string; a: string }[] = [
  { q: "Is it really free?", a: "Yes. Our live spiritual sessions are offered without a participation fee so seekers everywhere can join." },
  { q: "Can I join from outside India?", a: "Absolutely. Online sessions welcome global participants; timings are shared in IST with local-time guidance." },
  { q: "Will the recordings be available?", a: "Live attendance is encouraged. Any replay policy is announced in the community channels when applicable." },
  { q: "What if I am new to spirituality?", a: "You are welcome as you are—sessions are structured to include newcomers and long-time seekers alike." },
  { q: "Do I need any special equipment?", a: "A phone, tablet, or laptop with stable internet is enough. Headphones and a quiet space help." },
  { q: "Can I ask questions during the session?", a: "Yes. Facilitators invite questions during designated Q&A segments." }
];

const communityCards = [
  {
    title: "WhatsApp Group",
    body: "Join our daily wisdom community.",
    Icon: ChatBubbleOutlineRoundedIcon,
    href: "https://wa.me/"
  },
  {
    title: "Telegram Channel",
    body: "Receive spiritual insights.",
    Icon: TelegramIcon,
    href: "https://t.me/"
  },
  {
    title: "Email Newsletter",
    body: "Monthly spiritual teachings.",
    Icon: EmailOutlinedIcon,
    href: "/contact"
  }
] as const;

const fieldSx = {
  "& .MuiInput-underline:before": { borderColor: "rgba(255,255,255,0.5)" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderColor: "rgba(255,255,255,0.8)" },
  "& .MuiInput-underline:after": { borderColor: "#fff" },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.85)" },
  "& .MuiInputBase-input": { color: "#fff" }
};

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "#e8f6f8", overflowX: "hidden" }}>
      <SharedHeader />

      <Box
        sx={{
          position: "relative",
          pt: { xs: 11, md: 12 },
          pb: { xs: 6, md: 8 },
          px: { xs: 2, md: 3 },
          backgroundImage: `linear-gradient(165deg, rgba(3,15,40,0.94) 0%, rgba(5,22,48,0.9) 55%, rgba(8,28,58,0.92) 100%), url('${heroBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(260px, 38%) 1fr" },
              gap: { xs: 4, md: 5 },
              alignItems: "start"
            }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 320, md: 520 },
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.35)"
              }}
            >
              <Image src={sideImage} alt="Meditation and stillness" fill sizes="(max-width: 900px) 100vw, 38vw" style={{ objectFit: "cover" }} />
            </Box>

            <Box>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#fff", fontSize: { xs: 36, md: 48 }, fontWeight: 500, mb: 3 }}>
                Contact Us
              </Typography>
              <Stack component="form" spacing={2.5} sx={{ maxWidth: 480 }} noValidate>
                <TextField label="Full Name" variant="standard" fullWidth sx={fieldSx} />
                <TextField label="E-mail" variant="standard" type="email" fullWidth sx={fieldSx} />
                <TextField label="Phone / WhatsApp Number" variant="standard" fullWidth sx={fieldSx} />
                <TextField label="Message" variant="standard" fullWidth multiline minRows={3} sx={fieldSx} />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ...uiPresets.ctaButton,
                    alignSelf: "flex-start",
                    bgcolor: "#fff",
                    color: "#031942",
                    fontWeight: 700,
                    px: 4,
                    py: 1.25,
                    mt: 1,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.92)" }
                  }}
                >
                  Contact Us
                </Button>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={4} sx={{ mt: 5, flexWrap: "wrap" }} alignItems={{ sm: "flex-start" }} justifyContent="space-between">
                <Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", mb: 1 }}>Contact</Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>+91-9123-456-789</Typography>
                  <Typography sx={{ color: "#fff", fontSize: 15, mt: 0.5 }}>info@iishtgold.com</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", mt: 2, mb: 0.5 }}>Based in</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: 14, maxWidth: 280 }}>
                    4th floor, Abhinav centre, Chamiers Road, Chennai, Tamil Nadu
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1.5} sx={{ alignSelf: { xs: "flex-start", sm: "flex-end" } }}>
                  <Box
                    component={Link}
                    href="#"
                    aria-label="Facebook"
                    sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}
                  >
                    <FacebookRoundedIcon />
                  </Box>
                  <Box
                    component={Link}
                    href="#"
                    aria-label="Instagram"
                    sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}
                  >
                    <InstagramIcon />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", pt: { xs: 1, md: 0 } }}>
        <Box sx={{ height: { xs: 36, md: 48 }, bgcolor: "#0a1628", borderBottomLeftRadius: "50% 100%", borderBottomRightRadius: "50% 100%" }} />
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", py: { xs: 7, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#031942", fontSize: { xs: 28, md: 36 }, fontWeight: 600, textAlign: "center" }}>
            Join the Community
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={0.5} sx={{ my: 1.5, color: "#e8907d" }}>
            <Typography sx={{ fontSize: 10 }}>◇</Typography>
            <Typography sx={{ fontSize: 10 }}>◇</Typography>
            <Typography sx={{ fontSize: 10 }}>◇</Typography>
          </Stack>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5, mt: 2 }}>
            {communityCards.map(({ title, body, Icon, href }) => (
              <Box
                key={title}
                component={Link}
                href={href}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "18px",
                  p: 3,
                  textAlign: "center",
                  textDecoration: "none",
                  boxShadow: "0 10px 32px rgba(3,25,66,0.08)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" }
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    bgcolor: "#e8907d",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2
                  }}
                >
                  <Icon sx={{ fontSize: 28 }} />
                </Box>
                <Typography sx={{ fontWeight: 700, color: "#031942", fontSize: "1.05rem", mb: 0.75 }}>{title}</Typography>
                <Typography sx={{ color: "#555", fontSize: 14 }}>{body}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", pb: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="md">
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#031942", fontSize: { xs: 26, md: 32 }, fontWeight: 600, textAlign: "center" }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#666", mt: 1, mb: 4 }}>Everything you need to know about joining our free live sessions</Typography>
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
