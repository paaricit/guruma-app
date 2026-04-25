"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { unitScale } from "@/utils/unit-scale";
import { homeProgramRows, type HomeProgramRow } from "@/modules/home/content/home-programs";
import { encodePublicPath } from "@/utils/encode-public-path";

const sectionPb = {
  xs: unitScale(48),
  sm: unitScale(56),
  md: unitScale(64),
  lg: 0
} as const;

const sectionPt = {
  xs: unitScale(28),
  sm: unitScale(32),
  md: unitScale(64),
  lg: unitScale(80)
} as const;

const programRowMinHeight = {
  xs: "auto",
  md: unitScale(400),
  lg: unitScale(528)
} as const;

const programImageHeight = {
  xs: unitScale(176),
  sm: unitScale(208),
  md: "auto"
} as const;

const programCopyMinHeight = {
  md: unitScale(400),
  lg: unitScale(528)
} as const;

const programCopyPy = {
  xs: unitScale(38),
  sm: unitScale(32),
  md: unitScale(56),
  lg: unitScale(80)
} as const;

const programTitleFontSize = {
  xs: unitScale(36),
  md: unitScale(54)
} as const;

const programEyebrowFontSize = {
  xs: unitScale(14),
  md: unitScale(16)
} as const;

const programBodyFontSize = {
  xs: unitScale(18),
  md: unitScale(20)
} as const;

/** Vertical space between each full-bleed program row */
const programRowGap = unitScale(23);

/** Shared CTA sizing (module scope so `unitScale` resolves once; avoids stale HMR refs). */
const programCtaButtonSizing = {
  minHeight: { xs: unitScale(44), md: unitScale(48) },
  height: { xs: "auto" as const, md: unitScale(48) },
  px: { xs: 1, md: 3 },
  fontSize: { xs: unitScale(13), md: unitScale(16) },
  borderRadius: unitScale(8)
} as const;

export type HomeProgramsSectionProps = {
  programs?: readonly HomeProgramRow[];
};

export function HomeProgramsSection({ programs = homeProgramRows }: HomeProgramsSectionProps) {
  const theme = useTheme();
  const ink = theme.palette.guru.ink;
  const ctaBg = theme.palette.guru.ink;
  const borderHairline = alpha(theme.palette.common.white, 0.7);
  const subtitleMuted = alpha(theme.palette.text.primary, 0.45);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        pb: sectionPb
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ mx: "auto" }}>
        <Stack sx={{ gap: programRowGap }}>
          {programs.map((row) => (
            <Box
              key={row.title}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: programRowMinHeight,
                borderTop: `${unitScale(1)} solid ${borderHairline}`,
                borderBottom: `${unitScale(1)} solid ${borderHairline}`,
                overflow: "hidden"
              }}
            >
              {/* xs–sm: image on top; md+: full-bleed behind copy */}
              <Box
                sx={{
                  position: { xs: "relative", md: "absolute" },
                  inset: { md: 0 },
                  height: programImageHeight,
                  width: "100%",
                  flexShrink: 0,
                  /* Mobile crop matches desktop intent: imageLeft → anchor left, else right */
                  "& img": {
                    objectFit: "cover",
                    objectPosition: row.imageLeft ? "left center" : "right center",
                    [theme.breakpoints.up("md")]: {
                      objectPosition: "center center"
                    }
                  }
                }}
              >
                <Image
                  alt={row.title}
                  fill
                  sizes="(max-width: 899px) 100vw, (max-width: 1536px) 100vw, 90vw"
                  src={encodePublicPath(row.image)}
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { md: "center" },
                  minHeight: { xs: "auto", ...programCopyMinHeight },
                  bgcolor: { xs: theme.palette.background.paper, md: "transparent" },
                  py: programCopyPy,
                  px: { xs: 2, sm: 2.5, md: unitScale(48), lg: unitScale(67) },
                  maxWidth: { xs: "100%", md: unitScale(780) },
                  ...(row.imageLeft ? { ml: { md: "auto" } } : {})
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-forum), serif",
                    fontWeight: 400,
                    fontSize: programTitleFontSize,
                    lineHeight: 1.15,
                    color: 'black',
                    maxWidth: unitScale(550),
                    wordBreak: "break-word"
                  }}
                >
                  {row.title}
                </Typography>
                <Typography
                  sx={{
                    mt: { xs: 0.75, md: 1 },
                    fontSize: programEyebrowFontSize,
                    letterSpacing: { xs: "0.1em", md: "0.16em" },
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: ink,
                    wordBreak: "break-word"
                  }}
                >
                  {row.subtitle}
                </Typography>
                <Typography
                  sx={{
                    mt: { xs: 1.25, md: 1.6 },
                    pt: { xs: 0.25, md: 0.75 },
                    color: subtitleMuted,
                    fontSize: programBodyFontSize,
                    lineHeight: 1.5,
                    maxWidth: unitScale(550),
                    wordBreak: "break-word"
                  }}
                >
                  {row.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={0}
                  sx={{
                    mt: { xs: 1.75, md: 4 },
                    flexWrap: "wrap",
                    width: { xs: "100%", sm: "auto" },
                    alignItems: "center",
                    gap: { xs: 1, sm: 1.2 }
                  }}
                >
                  <Button
                    variant="contained"
                    href={row.primaryCtaHref}
                    sx={{
                      ...programCtaButtonSizing,
                      textTransform: "none",
                      bgcolor: ctaBg,
                      flex: { xs: "1 1 0%", sm: "0 1 auto" },
                      minWidth: { xs: 0, sm: "auto" },
                      width: { sm: "auto" },
                      whiteSpace: { xs: "normal", sm: "nowrap" },
                      textAlign: "center",
                      "&:hover": { bgcolor: alpha(ctaBg, 0.92) }
                    }}
                  >
                    {row.primaryCta}
                  </Button>
                  <Button
                    variant="outlined"
                    href={row.secondaryCtaHref}
                    sx={{
                      ...programCtaButtonSizing,
                      textTransform: "none",
                      color: ctaBg,
                      borderColor: ctaBg,
                      borderWidth: unitScale(1),
                      flex: { xs: "1 1 0%", sm: "0 1 auto" },
                      minWidth: { xs: 0, sm: "auto" },
                      width: { sm: "auto" },
                      whiteSpace: { xs: "normal", sm: "nowrap" },
                      textAlign: "center",
                      "&:hover": {
                        borderColor: ctaBg,
                        bgcolor: alpha(ctaBg, 0.06)
                      }
                    }}
                  >
                    {row.secondaryCta}
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
