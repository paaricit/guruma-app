"use client";

import { Box, Card, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { SectionTopArc } from "@/component/section-top-curve";
import { seekerTestimonialCornerIcon } from "@/modules/home/content/seeker-experiences";
import {
  ourProgramsSeekerImpactStats,
  ourProgramsTestimonialSlides
} from "../../content/our-programs-seeker-testimonials";
import { encodePublicPath } from "@/utils/encode-public-path";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidBody,
  sessionsFluidSectionHeading,
  sessionsFluidStatValue,
  sessionsSectionPyLg
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

const OUR_PROGRAMS_SEEKER_TESTIMONIALS_HEADING_ID = "our-programs-seeker-testimonials-heading";

const seekerTestimonialQuoteFontSize = {
  xs: unitScale(16),
  md: unitScale(20)
} as const;

const seekerTestimonialAuthorFontSize = {
  xs: unitScale(17),
  md: unitScale(20)
} as const;

const seekerTestimonialLocationFontSize = {
  xs: unitScale(14),
  md: unitScale(16.8)
} as const;

export function OurProgramsSeekerTestimonialsSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      aria-labelledby={OUR_PROGRAMS_SEEKER_TESTIMONIALS_HEADING_ID}
      sx={{
        position: "relative",
        overflow: "visible",
        bgcolor: "transparent",
        pt: { xs: 1.5, md: 0 },
        pb: 0
      }}
    >
      <Box aria-hidden sx={{ display: { xs: "none", lg: "block" }, lineHeight: 0 }}>
        <SectionTopArc surface={theme.palette.primary.light} />
      </Box>
      <Container maxWidth={pageContainerMaxWidth} sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx, pb: 10 }}>
        <Typography
          id={OUR_PROGRAMS_SEEKER_TESTIMONIALS_HEADING_ID}
          component="h2"
          sx={{
            fontFamily: "var(--font-forum), serif",
            fontSize: sessionsFluidSectionHeading,
            color: "#2a2a2a",
            textAlign: "center",
            mt: { xs: unitScale(8), sm: unitScale(10), md: 0 }
          }}
        >
          Experiences from Seekers
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: sessionsFluidBody,
            color: "#555",
            mt: { xs: unitScale(8), sm: 1 },
            mb: { xs: unitScale(24), sm: unitScale(28), md: 4 },
            lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 }
          }}
        >
          Hear how meditation and workshops have supported clarity, resilience, and everyday peace.
        </Typography>

        <Box
          sx={{
            mt: { xs: 3, md: 3.5 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 2.2, md: 3 },
            overflow: "visible",
            pb: { xs: 6, md: 12 }
          }}
        >
          {ourProgramsTestimonialSlides.map((item) => {
            const avatarSrc = encodePublicPath(item.avatarSrc);
            return (
              <Card
                key={item.name}
                sx={{
                  borderRadius: unitScale(19.2),
                  boxShadow: "none",
                  border: `1px solid ${alpha(theme.palette.text.secondary, 0.15)}`,
                  bgcolor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  position: "relative",
                  overflow: "visible",
                  minHeight: { xs: unitScale(220), md: unitScale(340) },
                  mb: 3,
                  pt: 1.5
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: {
                      xs: `calc(-1 * (${unitScale(18)}))`,
                      md: `calc(-1 * (${unitScale(22)}))`
                    },
                    left: { xs: unitScale(18), md: unitScale(22) },
                    width: { xs: unitScale(44), md: unitScale(52) },
                    height: { xs: unitScale(44), md: unitScale(52) },
                    zIndex: 2,
                    pointerEvents: "none"
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image alt="" fill src={seekerTestimonialCornerIcon} sizes="52px" style={{ objectFit: "contain" }} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    px: { xs: 2.5, md: 3 },
                    pt: { xs: 3.2, md: 3.75 },
                    pb: { xs: 2.6, md: 3 }
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: seekerTestimonialQuoteFontSize,
                      lineHeight: { xs: 1.6, md: 1.65 },
                      mt: 2,
                      mb: 2,
                      color: alpha(theme.palette.text.primary, 0.82)
                    }}
                  >
                    {`"${item.quote}"`}
                  </Typography>
                  <Box
                    sx={{
                      mt: unitScale(29),
                      pt: unitScale(20.64),
                      borderTop: `1px solid ${alpha(theme.palette.text.secondary, 0.15)}`,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: seekerTestimonialAuthorFontSize,
                        lineHeight: 1.45,
                        color: theme.palette.text.secondary
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontWeight: 400,
                        fontSize: seekerTestimonialLocationFontSize,
                        lineHeight: 1.5,
                        color: alpha(theme.palette.text.primary, 0.88)
                      }}
                    >
                      {item.place}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: {
                      xs: `calc(-1 * (${unitScale(20)}))`,
                      md: `calc(-1 * (${unitScale(24)}))`
                    },
                    right: { xs: unitScale(16), md: unitScale(20) },
                    width: { xs: unitScale(72), md: unitScale(88) },
                    height: { xs: unitScale(72), md: unitScale(88) },
                    borderRadius: "50%",
                    overflow: "hidden",
                    zIndex: 2,
                    bgcolor: theme.palette.background.paper,
                    boxShadow: `0 0 0 ${unitScale(3)} ${theme.palette.background.paper}`,
                    border: `1px solid ${alpha(theme.palette.text.secondary, 0.12)}`
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      alt={`${item.name}`}
                      fill
                      src={avatarSrc}
                      sizes="(max-width: 900px) 72px, 88px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: sessionsFluidBody,
            color: "#555",
            mt: { xs: unitScale(24), sm: unitScale(28), md: 4 },
            mb: { xs: unitScale(12), sm: 2 },
            lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 }
          }}
        >
          Join thousands of seekers worldwide who have found clarity through these offerings.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={{ xs: unitScale(24), sm: 3, md: 4 }} flexWrap="wrap" useFlexGap>
          {ourProgramsSeekerImpactStats.map(([v, l]) => (
            <Box key={l} sx={{ textAlign: "center", minWidth: { xs: unitScale(88), sm: unitScale(100) } }}>
              <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: sessionsFluidStatValue, color: "#031942" }}>{v}</Typography>
              <Typography sx={{ color: "#666", fontSize: sessionsFluidBody, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>{l}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
