"use client";

import Image from "next/image";
import Link from "next/link";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
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
    imgSrc: "/images/contact/whatsup.png",
    href: "https://wa.me/"
  },
  {
    title: "Telegram Channel",
    body: "Receive spiritual insights.",
    imgSrc: "/images/contact/telegram.png",
    href: "https://t.me/"
  },
  {
    title: "Email Newsletter",
    body: "Monthly spiritual teachings.",
    imgSrc: "/images/contact/email.png",
    href: "/contact"
  }
];

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
          pt: { xs: 13, md: 16 },
          pb: { xs: 10, md: 14 },
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
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr auto" }, gap: { xs: 4, sm: 5 }, alignItems: "start" }}>
                <Stack component="form" spacing={2.5} noValidate>
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

                <Box sx={{ minWidth: { sm: 200 }, mt: { xs: 0, sm: 6 } }}>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", mb: 1.5 }}>Contact</Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 16, mb: 1 }}>+91-9123-456-789</Typography>
                  <Typography sx={{ color: "#fff", fontSize: 15, mb: 2 }}>info@iishtgold.com</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", mb: 0.75 }}>Based in</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: 14, maxWidth: 220, mb: 3 }}>
                    4th floor, Abhinav centre, Chamiers Road, Chennai, Tamil Nadu
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    <Box
                      component={Link}
                      href="#"
                      aria-label="Facebook"
                      sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <Image src="/images/contact/Facebook - Negative.png" alt="Facebook" width={24} height={24} style={{ objectFit: "contain" }} />
                    </Box>
                    <Box
                      component={Link}
                      href="#"
                      aria-label="Instagram"
                      sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <Image src="/images/contact/Instagram - Negative.png" alt="Instagram" width={24} height={24} style={{ objectFit: "contain" }} />
                    </Box>
                    <Box
                      component={Link}
                      href="#"
                      aria-label="Twitter"
                      sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <Image src="/images/contact/Twitter - Negative.png" alt="Twitter" width={24} height={24} style={{ objectFit: "contain" }} />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", position: "relative", pt: { xs: 7, md: 9 }, px: { xs: 2, md: 3 } }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            top: -87,
            width: "100%",
            height: { xs: 200, md: 260 },
            backgroundImage: "url('/contact/contact-curve-divider.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            zIndex: 2
          }}
        />
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
            {communityCards.map(({ title, body, imgSrc, href }) => (
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
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Image src={imgSrc} alt={title} width={64} height={64} style={{ objectFit: "contain" }} />
                </Box>
                <Typography sx={{ fontWeight: 700, color: "#031942", fontSize: "1.05rem", mb: 0.75 }}>{title}</Typography>
                <Typography sx={{ color: "#555", fontSize: 14 }}>{body}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#d8eef4", pt: { xs: "48px", md: "64px" }, pb: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
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
                mb: 2,
                borderRadius: "14px !important",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                bgcolor: "#fff",
                "&:before": { display: "none" }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon sx={{ color: "#e8907d", fontSize: 28 }} />}
                sx={{ py: 1.5, px: 3 }}
              >
                <Typography sx={{ fontWeight: 600, color: "#1f2f52", fontSize: { xs: 15, md: 17 } }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 2.5 }}>
                <Typography sx={{ color: "#555", lineHeight: 1.75, fontSize: { xs: 14, md: 16 } }}>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

    </Box>
  );
}
