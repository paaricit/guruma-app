"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { fluidProgramRowBody, fluidProgramRowEyebrow, fluidProgramRowTitle, pageSectionBleedGutterSx } from "@/theme/page-section";
import { homeProgramRows, type HomeProgramRow } from "@/modules/home/content/home-programs";

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
        pb: { xs: "clamp(3rem, 6vw, 5rem)", md: "clamp(4rem, 7vw, 5rem)", lg: 0 },
        pt: { xs: "clamp(1.5rem, 3vw, 2rem)", md: "clamp(4rem, 7vw, 5rem)" }
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ mx: "auto" }}>
        <Stack spacing={{ xs: 1.25, sm: 1.5 }}>
          {programs.map((row) => (
            <Box
              key={row.title}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: { xs: "auto", md: "clamp(22rem, 42vw, 33rem)", lg: "clamp(26rem, 36vw, 33rem)" },
                borderTop: `1px solid ${borderHairline}`,
                borderBottom: `1px solid ${borderHairline}`,
                overflow: "hidden"
              }}
            >
              {/* xs–sm: image on top; md+: full-bleed behind copy */}
              <Box
                sx={{
                  position: { xs: "relative", md: "absolute" },
                  inset: { md: 0 },
                  height: {
                    xs: "clamp(11rem, 56vw, 15rem)",
                    sm: "clamp(12rem, 48vw, 17rem)",
                    md: "auto"
                  },
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
                  src={row.image}
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
                  minHeight: { md: "clamp(22rem, 42vw, 33rem)", lg: "clamp(26rem, 36vw, 33rem)" },
                  bgcolor: { xs: theme.palette.background.paper, md: "transparent" },
                  py: {
                    xs: "clamp(1.75rem, 4vw, 2.5rem)",
                    sm: "clamp(2rem, 4vw, 2.75rem)",
                    md: "clamp(3rem, 6vw, 5rem)"
                  },
                  px: { xs: 2, sm: 2.5, md: "clamp(2rem, 4vw, 4.2rem)" },
                  maxWidth: { xs: "100%", md: "48.75rem" },
                  ...(row.imageLeft ? { ml: { md: "auto" } } : {})
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-forum), serif",
                    fontWeight: 400,
                    fontSize: fluidProgramRowTitle,
                    lineHeight: 1.15,
                    color: ink
                  }}
                >
                  {row.title}
                </Typography>
                <Typography
                  sx={{
                    mt: { xs: 0.75, md: 1 },
                    fontSize: fluidProgramRowEyebrow,
                    letterSpacing: { xs: "0.1em", sm: "0.12em", md: "0.16em" },
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
                    fontSize: fluidProgramRowBody,
                    lineHeight: 1.5,
                    maxWidth: "40rem",
                    wordBreak: "break-word"
                  }}
                >
                  {row.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={0}
                  sx={{
                    mt: { xs: 1.75, md: 2 },
                    flexWrap: "wrap",
                    width: { xs: "100%", sm: "auto" },
                    alignItems: "center",
                    gap: { xs: 1, sm: 1.2 }
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      minHeight: { xs: "2.75rem", md: "3rem" },
                      height: { xs: "auto", md: "3rem" },
                      px: { xs: 1, md: 3 },
                      fontSize: { xs: "0.8125rem", md: "1rem" },
                      borderRadius: "0.5rem",
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
                    sx={{
                      minHeight: { xs: "2.75rem", md: "3rem" },
                      height: { xs: "auto", md: "3rem" },
                      px: { xs: 1, md: 3 },
                      fontSize: { xs: "0.8125rem", md: "1rem" },
                      borderRadius: "0.5rem",
                      textTransform: "none",
                      color: ctaBg,
                      borderColor: ctaBg,
                      borderWidth: "1px",
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
