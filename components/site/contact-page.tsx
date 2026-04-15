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
import { SectionTopArc } from "@/component/section-top-curve";

const heroBg = "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp";
const sideImage = "/images/contact/CONTACT Page Photo.webp";

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
    <Box sx={{ bgcolor: "#e8f6f8", overflowX: "clip", overflowY: "visible" }}>
      <Box
        sx={{
          position: "relative",
          pt: { xs: 10, md: 10 },
          pb: { xs: 14, md: 20 },
          backgroundImage: `linear-gradient(165deg, rgba(3,15,40,0.94) 0%, rgba(5,22,48,0.9) 55%, rgba(8,28,58,0.92) 100%), url('${heroBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            position: "relative",
            zIndex: 1,
            my: { xs: 5, md: 8 },
            px: { xs: 2.5, sm: 3, md: 4, lg: 6, xl: 7 },
            py: { xs: 3, md: 5 },
            width: "100%"
          }}
        >
          <Box
            component="section"
            aria-label="Contact hero"
            sx={{
              display: "grid",
              width: "100%",
              /* One horizontal row: image | Contact Us + form | address (stack on xs only) */
              gridTemplateColumns: {
                xs: "1fr",
                sm: "minmax(0, 0.9fr) minmax(0, 1.1fr) minmax(0, 0.95fr)"
              },
              columnGap: { xs: 0, sm: 2, md: "clamp(1.75rem, 4vw, 4rem)", lg: "clamp(2rem, 5vw, 5.5rem)" },
              rowGap: { xs: 6, sm: 0 },
              /* Stretch row height to match tallest column so details can sit on the bottom */
              alignItems: "stretch"
            }}
          >
            {/* Section 1 — Photo */}
            <Box
              component="section"
              aria-label="Contact imagery"
              sx={{
                position: "relative",
                width: "100%",
                minWidth: 0
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: "min(100%, 24.25rem)", sm: "100%" },
                  mx: { xs: "auto", sm: 0 },
                  aspectRatio: "387 / 619",
                  minHeight: { xs: 280, md: 0 },
                  borderRadius: "21.29px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  opacity: 1
                }}
              >
                <Image
                  src={sideImage}
                  alt="Meditation and stillness"
                  fill
                  sizes="(max-width: 900px) 100vw, (max-width: 1536px) 34vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>

            {/* Section 2 — Heading + form */}
            <Box
              component="section"
              aria-labelledby="contact-hero-heading"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 3, md: 4 },
                minWidth: 0,
                width: "100%",
                maxWidth: { xs: "100%", sm: "min(100%, 25rem)" },
                justifySelf: { sm: "start" },
                pt: { sm: 0.5 }
              }}
            >
              <Typography
                id="contact-hero-heading"
                component="h1"
                sx={{ fontFamily: "var(--font-forum), serif", color: "#fff", fontSize: { xs: 36, md: 72 }, fontWeight: 500, mb: 0 }}
              >
                Contact Us
              </Typography>
              <Stack component="form" spacing={3} noValidate sx={{ width: "100%", minWidth: 0 }}>
                <TextField label="Full Name" variant="standard" fullWidth sx={fieldSx} />
                <TextField label="E-mail" variant="standard" type="email" fullWidth sx={fieldSx} />
                <TextField label="Phone / WhatsApp Number" variant="standard" fullWidth sx={fieldSx} />
                <TextField label="Message" variant="standard" fullWidth multiline minRows={3} sx={fieldSx} />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    alignSelf: "flex-start",
                    bgcolor: "#fff",
                    color: "#031942",
                    fontWeight: 700,
                    px: 4,
                    py: 1.25,
                    mt: 10,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.92)" }
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>

            {/* Section 3 — Details + social (bottom-aligned in the hero row on sm+) */}
            <Box
              component="section"
              aria-label="Contact details"
              sx={{
                width: "100%",
                minWidth: { sm: 0 },
                maxWidth: { xs: "min(100%, 22rem)", sm: "100%" },
                mx: { xs: "auto", sm: 0 },
                pt: { xs: 1, sm: 0 },
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "flex-start", sm: "flex-end" },
                minHeight: { sm: "100%" }
              }}
            >
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", mb: 1.5 }}>
                Contact
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 16, mb: 1 }}>+91-9123-456-789</Typography>
              <Typography sx={{ color: "#fff", fontSize: 15, mb: 4 }}>info@iishtgold.com</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", mb: 0.75 }}>
                Based in
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: 14, mb: 10 }}>
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
        </Container>
      </Box>

      <Box
        component="section"
        aria-labelledby="contact-community-heading"
        sx={{
          bgcolor: "primary.light",
          position: "relative",
          zIndex: 2,
          overflow: "visible",
          pt: { xs: 2, md: 2.5 },
          pb: { xs: 7, md: 9 },
          px: { xs: 2, md: 3 }
        }}
      >
        <SectionTopArc surface="primaryLight" />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
          <Typography
            id="contact-community-heading"
            sx={{ fontFamily: "var(--font-forum), serif", color: "#031942", fontSize: { xs: 28, md: 36 }, fontWeight: 600, textAlign: "center" }}
          >
            Join the Community
          </Typography>
          <Box
            aria-hidden
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: 300, sm: 420, md: 520 },
              height: { xs: 16, md: 22 },
              mx: "auto",
              my: { xs: 1.25, md: 1.5 }
            }}
          >
            <Image
              src="/images/contact/join-community_icon.png"
              alt=""
              fill
              sizes="(max-width: 600px) 300px, (max-width: 900px) 420px, 520px"
              style={{ objectFit: "contain" }}
            />
          </Box>
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

      <Box sx={{ bgcolor: "primary.light", pt: { xs: "48px", md: "84px" }, pb: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
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
