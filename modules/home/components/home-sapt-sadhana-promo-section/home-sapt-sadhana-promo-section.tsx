"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Box, Container, IconButton, Typography, useTheme } from "@mui/material";
import { SaptSadhanaStackCarousel } from "@/components/site/sapt-sadhana-stack-carousel";
import { pxToRem } from "@/utils/px-to-rem";

const stayConnectedTitleFontSize = {
  xs: pxToRem(26.4),
  sm: pxToRem(36),
  md: pxToRem(52),
  lg: pxToRem(70.4)
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

/**
 * Home: Sapt Sadhana promo block — wave art, copy, stack carousel, controls, “Stay Connected” bridge.
 */
export function HomeSaptSadhanaPromoSection() {
  const theme = useTheme();
  const [saptSlideIndex, setSaptSlideIndex] = useState(0);
  const saptSlideCount = saptSadhanaCarouselSlides.length;

  const saptOnStep = useCallback(
    (delta: 1 | -1) => {
      setSaptSlideIndex((i) =>
        delta === 1 ? (i + 1) % saptSlideCount : (i - 1 + saptSlideCount) % saptSlideCount
      );
    },
    [saptSlideCount]
  );

  return (
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
          <Typography
            sx={{
              mt: 0.5,
              textAlign: "center",
              fontFamily: "var(--font-forum), serif",
              fontSize: pxToRem(40),
              color: "#1f2f52"
            }}
          >
            SAPT SADHANA - Serving Beyond Self
          </Typography>
          <Typography
            sx={{
              mt: 1.2,
              mx: "auto",
              textAlign: "center",
              color: "rgba(20,20,20,0.8)",
              fontSize: { xs: 14, sm: 16, md: 18, lg: 22 },
              maxWidth: 1040,
              lineHeight: 1.4
            }}
          >
            <b>Sapt Sadhana</b> is our commitment to selfless service (seva), transforming spiritual wisdom into compassionate action.
            Through various initiatives, we serve underprivileged communities, provide education,
          </Typography>

          <Box sx={{ mt: 3.5 }}>
            <SaptSadhanaStackCarousel slides={saptSadhanaCarouselSlides} activeIndex={saptSlideIndex} onStep={saptOnStep} />
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

          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              pt: { xs: 2, md: 3 },
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
                  fontSize: stayConnectedTitleFontSize,
                  lineHeight: 1.05,
                  letterSpacing: { xs: "-0.02em", md: 0 },
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden"
                }}
              >
                Stay Connected
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
