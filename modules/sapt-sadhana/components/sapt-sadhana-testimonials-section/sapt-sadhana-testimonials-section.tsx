"use client";

import { Box, Card, Container, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { SectionTopArc } from "@/component/section-top-curve";
import { seekerTestimonialCornerIcon } from "@/modules/home/content/seeker-experiences";
import { saptSadhanaTestimonials, saptSadhanaTestimonialsBandContent } from "@/modules/sapt-sadhana/content/sapt-sadhana-page-content";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidBody,
  sessionsFluidSectionHeading,
  sessionsSectionPyLg
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

const SAPT_SADHANA_TESTIMONIALS_HEADING_ID = "sapt-sadhana-testimonials-heading";

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

export function SaptSadhanaTestimonialsSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      aria-labelledby={SAPT_SADHANA_TESTIMONIALS_HEADING_ID}
      sx={{
        position: "relative",
        overflow: "visible",
        bgcolor: "transparent",
        pt: { xs: 1.5, md: 2 },
        pb: 0
      }}
    >
      <SectionTopArc surface={"#FFFFFF"} />
      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx, py: sessionsSectionPyLg }}
      >

        <Typography
          id={SAPT_SADHANA_TESTIMONIALS_HEADING_ID}
          component="h2"
          sx={{
            fontFamily: "var(--font-forum), serif",
            fontSize: sessionsFluidSectionHeading,
            color: "#2a2a2a",
            textAlign: "center",
            mt: 0,
            mb: { xs: unitScale(24), sm: unitScale(28), md: 2 }
          }}
        >
          {saptSadhanaTestimonialsBandContent.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: sessionsFluidBody,
            color: "#555",
            lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 },
            mt: { xs: unitScale(8), sm: unitScale(10), md: 2 },
            mb: { xs: unitScale(8), sm: 5 }
          }}
        >
          {saptSadhanaTestimonialsBandContent.eyebrow}
        </Typography>

        <Box
          sx={{
            mt: { xs: 2, md: 3.5 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 2.2, md: 3 },
            overflow: "visible",
            pb: { xs: 4, md: 8 }
          }}
        >
          {saptSadhanaTestimonials.map((t) => (
            <Card
              key={t.name}
              sx={{
                borderRadius: unitScale(19.2),
                boxShadow: "none",
                border: `1px solid ${alpha(theme.palette.text.secondary, 0.15)}`,
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                position: "relative",
                overflow: "visible",
                minHeight: { xs: unitScale(200), md: unitScale(260) },
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
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: seekerTestimonialQuoteFontSize,
                    lineHeight: { xs: 1.6, md: 1.65 },
                    mt: 2,
                    mb: 2,
                    color: alpha(theme.palette.text.primary, 0.82)
                  }}
                >
                  {`"${t.quote}"`}
                </Typography>
                <Box
                  sx={{
                    mt: unitScale(20),
                    pt: unitScale(20.64),
                    borderTop: `1px solid ${alpha(theme.palette.text.secondary, 0.15)}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: seekerTestimonialAuthorFontSize,
                      lineHeight: 1.45,
                      color: theme.palette.text.secondary
                    }}
                  >
                    {t.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 400,
                      fontSize: seekerTestimonialLocationFontSize,
                      lineHeight: 1.5,
                      color: alpha(theme.palette.text.primary, 0.88)
                    }}
                  >
                    {t.place}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
