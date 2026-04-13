"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import { SaptSadhanaStackCarousel } from "@/components/site/sapt-sadhana-stack-carousel";
import {
  DivineDiscoursesScheduleSection,
  HomeGuruMaIntroSection,
  HomeHeroSection,
  HomeImpactStatsSection,
  HomeProgramsSection,
  SeekerExperiencesSection,
  WisdomInActionSection
} from "@/modules/home/components";

const callbackFieldSx = {
  "& .MuiInput-underline:before": { borderColor: "rgba(255,255,255,0.5)" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderColor: "rgba(255,255,255,0.8)" },
  "& .MuiInput-underline:after": { borderColor: "#fff" },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.85)" },
  "& .MuiInputBase-input": { color: "#fff" },
  "& .MuiInputBase-input::placeholder": { color: "rgba(255,255,255,0.55)", opacity: 1 }
};

const callbackFormFields = [
  { key: "name", label: "NAME", hint: "Enter your name", type: "text" as const },
  { key: "phone", label: "PHONE", hint: "Enter your phone number", type: "tel" as const },
  { key: "email", label: "EMAIL", hint: "Enter your Email ID", type: "email" as const },
  { key: "message", label: "MESSAGE", hint: "Give us a message", type: "text" as const }
];

const saptSadhanaCarouselSlides = [
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (1).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (2).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (3).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (4).webp"
] as const;

const saptCarouselArrowLeft = "/images/Home Page Photos/Arrow Left-poiint.png";
const saptCarouselArrowRight = "/images/Home Page Photos/Arrow Right-point.png";

type CallbackFormValues = Record<(typeof callbackFormFields)[number]["key"], string>;

const initialCallbackValues: CallbackFormValues = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export default function HomePage() {
  const theme = useTheme();

  const [callbackValues, setCallbackValues] = useState<CallbackFormValues>(initialCallbackValues);
  const [callbackStatus, setCallbackStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [callbackError, setCallbackError] = useState("");
  const [saptSlideIndex, setSaptSlideIndex] = useState(0);
  const saptSlideCount = saptSadhanaCarouselSlides.length;

  const saptOnStep = useCallback((delta: 1 | -1) => {
    setSaptSlideIndex((i) =>
      delta === 1 ? (i + 1) % saptSlideCount : (i - 1 + saptSlideCount) % saptSlideCount
    );
  }, [saptSlideCount]);

  async function handleCallbackSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCallbackStatus("loading");
    setCallbackError("");
    try {
      const res = await fetch("/api/callback-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(callbackValues)
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setCallbackStatus("success");
      setCallbackValues(initialCallbackValues);
    } catch (err) {
      setCallbackStatus("error");
      setCallbackError(err instanceof Error ? err.message : "Request failed");
    }
  }

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        // `overflow-x: hidden` forces `overflow-y: auto` in CSS and clips children that extend
        // upward (e.g. footer contact card). `clip` limits horizontal bleed without clipping Y.
        overflowX: "clip",
        overflowY: "visible"
      }}
    >
      {/* --- Section: Hero --- */}
      <HomeHeroSection />

      {/* --- Section: Guru Maa intro (video + roles) --- */}
      <HomeGuruMaIntroSection />

      {/* --- Section: Impact stats --- */}
      <HomeImpactStatsSection />

      <DivineDiscoursesScheduleSection />

      {/* --- Section: Callback request form --- */}
      <Stack
        component="form"
        onSubmit={handleCallbackSubmit}
        noValidate
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: "100%",
          gap: { xs: 1.8, md: 2.2 },
          alignItems: { xs: "center", md: "stretch" }
        }}
      >
        <Box
          sx={{
            flex: { md: 1 },
            width: "100%",
            minWidth: 0,
            alignSelf: { xs: "stretch", md: "auto" },
            bgcolor: "#091a43",
            backgroundImage: "linear-gradient(rgba(9,26,67,0.15), rgba(9,26,67,0.15)), url('/images/Home Page Photos/section-background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: 0,
            py: { xs: 2.2, md: 3 }
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))"
              },
              alignItems: "start",
              gap: { xs: 1.8, md: 2.2 },
              px: { xs: 2, md: 4 },
              height: "100%"
            }}
          >
            {callbackFormFields.map((field) => (
              <TextField
                key={field.key}
                name={field.key}
                variant="standard"
                type={field.type}
                label={field.label}
                placeholder={field.hint}
                value={callbackValues[field.key]}
                onChange={(ev) =>
                  setCallbackValues((prev) => ({
                    ...prev,
                    [field.key]: ev.target.value
                  }))
                }
                fullWidth
                sx={callbackFieldSx}
                slotProps={{
                  inputLabel: { shrink: true }
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            textAlign: { xs: "center", md: "left" },
            alignSelf: { xs: "center", md: "center" },
            px: { xs: 2, md: 4 },
            py: { xs: 0, md: 3 },
            maxWidth: { xs: 360, md: 280 }
          }}
        >
          <Button
            type="submit"
            disabled={callbackStatus === "loading"}
            sx={{
              textTransform: "none",
              p: 0,
              minWidth: 0,
              bgcolor: "transparent",
              color: "#031942",
              boxShadow: "none",
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
              "&:hover": { bgcolor: "transparent", boxShadow: "none", opacity: 0.85 },
              "&.Mui-disabled": { color: "rgba(3,25,66,0.45)" }
            }}
          >
            <Typography component="span" sx={{ fontWeight: 700, fontSize: { xs: "clamp(1.5rem, 6vw, 2rem)", md: 52 }, lineHeight: 0.95, textAlign: { xs: "center", md: "left" } }}>
              Get a
              <br />
              call back
            </Typography>
          </Button>
          {callbackStatus === "success" ? (
            <Alert severity="success" sx={{ mt: 1.5, textAlign: "left" }}>
              Thank you — we will reach out soon.
            </Alert>
          ) : null}
          {callbackStatus === "error" ? (
            <Alert severity="error" sx={{ mt: 1.5, textAlign: "left" }} onClose={() => setCallbackStatus("idle")}>
              {callbackError}
            </Alert>
          ) : null}
        </Box>
      </Stack>

      <HomeProgramsSection />

      <WisdomInActionSection />

      <SeekerExperiencesSection />

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
            <Typography sx={{ textAlign: "center", color: "#f4b497", fontSize: { xs: 32, md: 44 }, lineHeight: 1 }}>〰</Typography>
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
