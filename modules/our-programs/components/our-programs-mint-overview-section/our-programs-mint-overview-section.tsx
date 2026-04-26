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
import type { ProgramMintOverviewContent } from "@/modules/our-programs/content/program-mint-overview-types";
import { pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const cardHeadingFontSize = unitScale(24);
const cardBodyFontSize = unitScale(20);

export type OurProgramsMintOverviewSectionProps = {
  content: ProgramMintOverviewContent;
};

/**
 * Mint gradient overview band (intro + image, What to Expect, Is This For You) — shared by
 * marriage and personal counselling internal pages; copy/media from `content/*-overview.ts`.
 */
export function OurProgramsMintOverviewSection({ content }: OurProgramsMintOverviewSectionProps) {
  const c = content;
  const lotusBg = encodePublicPath(c.lotusBg);
  const spiralBg = encodePublicPath(c.spiralBg);
  const smallLotusIcon = encodePublicPath(c.smallLotusIcon);
  const whatToExpectIcon = encodePublicPath(c.whatToExpectIcon);
  const sectionPhoto = encodePublicPath(c.sectionPhoto);

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
      <Box aria-hidden sx={{ display: { xs: "none", lg: "block" }, lineHeight: 0 }}>
        <SectionSoftWaveCap fill="#F3F3EF" height={unitScale(130)} bottom="100%" />
      </Box>

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
                src={sectionPhoto}
                alt={c.sectionPhotoAlt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 2.25, md: 3 },
                alignItems: "start",
                mt: { xs: unitScale(10), md: unitScale(28) }
              }}
              component={Container}
              maxWidth="lg"
              mx="auto !important"
            >
              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                  <Box sx={{ position: "relative", width: unitScale(24), height: unitScale(24) }}>
                    <Image src={whatToExpectIcon} alt="" fill sizes="24px" style={{ objectFit: "contain" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: cardHeadingFontSize,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontFamily: "var(--font-inter), system-ui, sans-serif"
                    }}
                  >
                    What to Expect
                  </Typography>
                </Box>

                {c.whatToExpectRows.map((row) => (
                  <Box key={row.title} sx={{ bgcolor: "background.paper", borderRadius: unitScale(12), p: { xs: 2, md: 2.4 } }}>
                    <Typography
                      sx={{
                        fontSize: cardBodyFontSize,
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        color: "text.primary",
                        lineHeight: 1.45
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 700 }}>
                        {row.title}
                      </Box>{" "}
                      {row.body}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: unitScale(12),
                  p: { xs: 2.2, md: 2.8 },
                  minWidth: 0,
                  boxShadow: (t) => `0 ${unitScale(6)} ${unitScale(24)} ${alpha(t.palette.primary.dark, 0.1)}`
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1 }}>
                  <Box sx={{ position: "relative", width: unitScale(24), height: unitScale(24) }}>
                    <Image src={whatToExpectIcon} alt="" fill sizes="24px" style={{ objectFit: "contain" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: cardHeadingFontSize,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontFamily: "var(--font-inter), system-ui, sans-serif"
                    }}
                  >
                    Is This For You?
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: cardBodyFontSize, color: "guru.coral", fontStyle: "italic", mb: 1.5 }}>
                  If you find yourself asking:
                </Typography>

                <Stack spacing={1.1} sx={{ mb: 2 }}>
                  {c.isThisForYouRows.map((row) => (
                    <Box key={row} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                      <CheckCircleOutlineRoundedIcon
                        sx={{ color: "text.primary", fontSize: unitScale(20), mt: unitScale(2) }}
                      />
                      <Typography sx={{ fontSize: cardBodyFontSize, lineHeight: 1.45, color: "text.primary" }}>
                        {row}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Typography sx={{ fontSize: cardBodyFontSize, fontStyle: "italic", mb: 2 }}>
                  {c.isThisForYouClosing}
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
                    "&:hover": { bgcolor: (t) => alpha(t.palette.primary.dark, 0.92) }
                  }}
                >
                  {c.secondaryCtaLabel}
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>

      <Box sx={{ position: "absolute", top: "108%", left: 0, right: 0, zIndex: 1, display: { xs: "none", lg: "block" } }}>
        <SectionSoftWaveCap fill="#D1F1F5" height={unitScale(130)} mirror placement="bottom" />
      </Box>
    </Box>
  );
}
