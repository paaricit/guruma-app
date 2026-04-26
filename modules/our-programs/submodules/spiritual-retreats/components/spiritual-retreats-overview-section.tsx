"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { SectionSoftWaveCap } from "@/component/section-top-curve";
import { spiritualRetreatsOverviewContent } from "@/modules/our-programs/content/spiritual-retreats-overview";
import { pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const cardHeadingFontSize = unitScale(24);
const cardBodyFontSize = unitScale(20);

export function SpiritualRetreatsOverviewSection() {
  const c = spiritualRetreatsOverviewContent;
  const lotusBg = encodePublicPath(c.lotusBg);
  const spiralBg = encodePublicPath(c.spiralBg);
  const smallLotusIcon = encodePublicPath(c.smallLotusIcon);
  const whatToExpectIcon = encodePublicPath(c.whatToExpectIcon);
  const sectionPhoto = encodePublicPath(c.sectionPhoto);
  const introPhoto = encodePublicPath("/images/our-programs/spiritual-retreats-journey.png");

  return (
    <Box
      component="section"
      aria-label={c.ariaLabel}
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
          backgroundImage: `url("${lotusBg}")`,
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
          backgroundImage: `url("${spiralBg}")`,
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
          backgroundImage: `url("${spiralBg}")`,
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
              mx: "auto !important"
            }}
            component={Container}
            maxWidth="lg"
          >
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
              <Image
                src={introPhoto}
                alt={c.sectionPhotoAlt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                <Box sx={{ position: "relative", width: unitScale(75), height: unitScale(55) }}>
                  <Image src={smallLotusIcon} alt="" fill sizes="75px" style={{ objectFit: "contain" }} />
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
                  {c.introHeading}
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
                {c.introBody}
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
                  "&:hover": { bgcolor: (t) => alpha(t.palette.primary.dark, 0.92) }
                }}
              >
                {c.primaryCtaLabel}
              </Button>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.45fr 0.45fr" },
                gap: { xs: 3, md: 4 },
                alignItems: "center",
                justifyContent: "space-between",
                mt: { xs: unitScale(10), md: `${unitScale(80)} !important` }
              }}
              component={Container}
              maxWidth="lg"
              mx="auto !important"
            >
              <Stack spacing={1.8}>
                <Typography
                  sx={{
                    fontSize: cardHeadingFontSize,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontFamily: "var(--font-inter), system-ui, sans-serif"
                  }}
                >
                  The Path to Abundance
                </Typography>

                {c.whatToExpectRows.map((row) => (
                  <Box key={row.title} sx={{ bgcolor: "background.paper", borderRadius: unitScale(12), p: { xs: 2, md: 2.3 } }}>
                    <Typography
                      sx={{
                        fontSize: cardBodyFontSize,
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        color: "text.primary",
                        lineHeight: 1.4
                      }}
                    >
                      <Box component="span" sx={{ color: "guru.coral", mr: 1.2 }}>
                        &#8226;
                      </Box>
                      <Box component="span" sx={{ fontWeight: 700 }}>
                        {row.title}
                      </Box>{" "}
                      <Box component="span" sx={{ fontStyle: "italic" }}>
                        {row.body}
                      </Box>
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: unitScale(550),
                  borderRadius: unitScale(22),
                  overflow: "hidden",
                  boxShadow: (t) => `0 ${unitScale(10)} ${unitScale(26)} ${alpha(t.palette.primary.dark, 0.22)}`
                }}
              >
                <Image
                  src={sectionPhoto}
                  alt={c.sectionPhotoAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>

      <Box sx={{ position: "absolute", top: "110%", left: 0, right: 0, zIndex: 1 }}>
        <SectionSoftWaveCap fill="#D1F1F5" height={unitScale(130)} mirror placement="bottom" />
      </Box>
    </Box>
  );
}
