"use client";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { SectionSoftWaveCap } from "@/component/section-top-curve";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const sectionPhoto = "/images/our-programs/marriage-counselling-section/img-1.png";
const lotusBg = "/images/our-programs/marriage-counselling-section/lotus-bg.svg";
const spiralBg = "/images/our-programs/marriage-counselling-section/spriralbg.svg";
const smallLotusIcon = "/images/our-programs/marriage-counselling-section/small-lotus-icon.svg";
const whatToExpectIcon = "/images/our-programs/marriage-counselling-section/what-to-expect.svg";

const cardHeadingFontSize = unitScale(24);
const cardBodyFontSize = unitScale(20);

const whatToExpectRows = [
  {
    title: "Restore Balance:",
    body: "Realign your mental and spiritual match when life's pressure creates a mismatch."
  },
  {
    title: "Rekindle Happiness:",
    body: "Shift from unsettling disturbances to a space of joy and mutual respect."
  },
  {
    title: "Heal the Foundation:",
    body: "Stop encroaching on individuality and start respecting your partner's sacred space."
  },
  {
    title: "Falling in Love Again:",
    body: "Learn the secret to falling in love many times, always with the same person."
  }
] as const;

const isThisForYouRows = [
  '"How do I forge a stronger, long-lasting relationship?"',
  '"How can I ensure our problems don\'t break our home?"',
  '"How do we move from suffocation to bliss?"'
] as const;

export function MarriageCounsellingOverviewSection() {
  return (
    <Box
      component="section"
      aria-label="Marriage counselling overview"
      sx={{
        position: "relative",
        overflow: "visible",
        py: { xs: 5, md: 7 },
        background: "linear-gradient(180deg, #F3F3EF 0%, #D1F1F5 100%)"
      }}
    >
      <SectionSoftWaveCap fill="#F3F3EF" height={unitScale(130)} />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("${encodePublicPath(lotusBg)}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: { xs: "120% auto", md: "30% auto" },
          opacity: 0.35,
          pointerEvents: "none"
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: { xs: "-15%", md: "0%" },
          bottom: { xs: "-10%", md: "-12%" },
          width: { xs: "60%", md: "55%" },
          aspectRatio: "1",
          backgroundImage: `url("${encodePublicPath(spiralBg)}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.55,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: "-18%", md: "-6%" },
          bottom: { xs: "-12%", md: "-14%" },
          width: { xs: "58%", md: "36%" },
          aspectRatio: "1",
          backgroundImage: `url("${encodePublicPath(spiralBg)}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.38,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <Container maxWidth={false} sx={{ position: "relative", zIndex: 2, ...pageSectionGutterSx }}>
        <Stack spacing={{ xs: unitScale(18), md: unitScale(26) }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.4fr 0.4fr" },
              gap: { xs: 3, md: 4 },
              justifyContent: "space-between",
              alignItems: "center",
              mx: 'auto !important',
            }}
            component={Container}
            maxWidth={'lg'}
          >
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                <Box sx={{ position: "relative", width: unitScale(75), height: unitScale(55) }}>
                  <Image src={encodePublicPath(smallLotusIcon)} alt="" fill sizes="24px" style={{ objectFit: "contain" }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: unitScale(23),
                    textTransform: "uppercase"
                  }}
                >
                  How to Forge Better, Stronger and Long-Lasting Relationships
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  color: (t) => alpha(t.palette.common.black, 0.84),
                  lineHeight: 1.55,
                  fontSize: cardBodyFontSize
                }}
              >
                Marriage is the journey from being a carefree individual to a partner sharing vows, responsibilities, and promises. While the world teaches "give and take," Guru Maa Shubha Didi guides you toward the higher truth: Marriage is about the joy of giving. Through these sessions, we deep-dive internally to heal hearts and clear thoughts. We move away from the need to "own" or "control," restoring the foundational balance and enhancing the soul-level connection with your partner.

              </Typography>

              <Button
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  px: unitScale(28),
                  height: unitScale(55),
                  borderRadius: unitScale(12),
                  bgcolor: "primary.dark",
                  textTransform: "none",
                  fontWeight: 700,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  '&:hover': { bgcolor: (t) => alpha(t.palette.primary.dark, 0.92) }
                }}
              >
                Connect with Us
              </Button>
            </Stack>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: unitScale(500),
                minHeight: unitScale(550),
                borderRadius: unitScale(24),
                overflow: "hidden",
                boxShadow: (t) => `0 ${unitScale(12)} ${unitScale(34)} ${alpha(t.palette.primary.dark, 0.24)}`
              }}
            >
              <Image src={encodePublicPath(sectionPhoto)} alt="Marriage counselling session" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
            </Box>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 2.25, md: 3 },
                mt: { xs: unitScale(10), md: `${unitScale(200)} !important` }
              }}
              component={Container}
              maxWidth={'lg'}
              mx={'auto !important'}
            >
              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                  <Box sx={{ position: "relative", width: unitScale(24), height: unitScale(24) }}>
                    <Image src={encodePublicPath(whatToExpectIcon)} alt="" fill sizes="24px" style={{ objectFit: "contain" }} />
                  </Box>
                  <Typography sx={{ fontSize: cardHeadingFontSize, fontWeight: 700, textTransform: "uppercase", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                    What to Expect
                  </Typography>
                </Box>

                {whatToExpectRows.map((row) => (
                  <Box key={row.title} sx={{ bgcolor: "background.paper", borderRadius: unitScale(12), p: { xs: 2, md: 2.4 } }}>
                    <Typography sx={{ fontSize: cardBodyFontSize, fontFamily: "var(--font-inter), system-ui, sans-serif", color: "text.primary", lineHeight: 1.45 }}>
                      <Box component="span" sx={{ fontWeight: 700 }}>{row.title}</Box> {row.body}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box
                sx={{
                  background: "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: unitScale(12),
                  p: { xs: 2.2, md: 2.8 },
                  position: 'absolute',
                  right: 0,
                  top: '35%',
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1 }}>
                  <Box sx={{ position: "relative", width: unitScale(24), height: unitScale(24) }}>
                    <Image src={encodePublicPath(whatToExpectIcon)} alt="" fill sizes="24px" style={{ objectFit: "contain" }} />
                  </Box>
                  <Typography sx={{ fontSize: cardHeadingFontSize, fontWeight: 700, textTransform: "uppercase", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                    Is This For You?
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: cardBodyFontSize, color: "guru.coral", fontStyle: "italic", mb: 1.5 }}>
                  If you find yourself asking:
                </Typography>

                <Stack spacing={1.1} sx={{ mb: 2 }}>
                  {isThisForYouRows.map((row) => (
                    <Box key={row} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                      <CheckCircleOutlineRoundedIcon sx={{ color: "text.primary", fontSize: unitScale(20), mt: unitScale(2) }} />
                      <Typography sx={{ fontSize: cardBodyFontSize, lineHeight: 1.45, color: "text.primary" }}>{row}</Typography>
                    </Box>
                  ))}
                </Stack>

                <Typography sx={{ fontSize: cardBodyFontSize, fontStyle: "italic", mb: 2 }}>
                  Then a fruitful journey with Guru Maa Shubha Didi is your next step.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    px: unitScale(28),
                    height: unitScale(55),
                    borderRadius: unitScale(12),
                    bgcolor: "primary.dark",
                    textTransform: "none",
                    fontWeight: 700,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    '&:hover': { bgcolor: (t) => alpha(t.palette.primary.dark, 0.92) }
                  }}
                >
                  Begin Your Journey to Bliss
                </Button>
              </Box>
            </Box>
          </Box>

        </Stack>
      </Container>

      <Box sx={{ position: "absolute", top: `110%`, left: 0, right: 0, zIndex: 1 }}>
        <SectionSoftWaveCap fill="#D1F1F5" height={unitScale(130)} mirror placement="bottom" />
      </Box>
    </Box>
  );
}

