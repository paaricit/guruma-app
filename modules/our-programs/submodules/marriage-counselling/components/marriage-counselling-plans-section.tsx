"use client";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

export type PlanCard = {
  title: string;
  subtitle: string;
  features: string[];
  tag?: string;
  featured?: boolean;
};

const defaultPlans: PlanCard[] = [
  {
    title: "3 Months",
    subtitle: "Marriage Mentoring Program",
    features: [
      "6 exclusive sessions with Guru Maa Shubha Didi as a couple (60 minutes per session)",
      "3 exclusive sessions with Guru Maa Shubha Didi for each individual (30 minutes per session)"
    ]
  },
  {
    title: "6 Months",
    subtitle: "Marriage Mentoring Program",
    features: [
      "12 exclusive sessions with Guru Maa Shubha Didi as a couple (60 minutes per session)",
      "6 exclusive sessions with Guru Maa Shubha Didi for each individual (30 minutes per session)"
    ],
    tag: "Most Popular",
    featured: true
  },
  {
    title: "1 Year",
    subtitle: "Marriage Mentoring Program",
    features: [
      "24 exclusive sessions with Guru Maa Shubha Didi as a couple (60 minutes per session)",
      "12 exclusive sessions with Guru Maa Shubha Didi for each individual (30 minutes per session)"
    ],
    tag: "Premium Experience"
  }
];

type MarriageCounsellingPlansSectionProps = {
  plans?: PlanCard[];
  ariaLabel?: string;
};

export function MarriageCounsellingPlansSection({
  plans = defaultPlans,
  ariaLabel = "Marriage mentoring plans"
}: MarriageCounsellingPlansSectionProps) {
  return (
    <Box
      component="section"
      aria-label={ariaLabel}
      sx={{
        py: { xs: unitScale(24), sm: unitScale(32), md: unitScale(44) }
      }}
    >
      <Container maxWidth={pageContainerMaxWidth} sx={pageSectionGutterSx}>
        <Typography
          variant="h2"
          sx={{
            mb: { xs: unitScale(18), md: unitScale(48) },
            fontSize: { xs: unitScale(36), md: unitScale(65) },
            lineHeight: 1,
            color: "#1F2328",
            textAlign: "center"
          }}
        >
          Choose Your Journey
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: unitScale(16), sm: unitScale(18), md: unitScale(22) }
          }}
        >
          {plans.map((plan) => (
            <Box
              key={plan.title}
              sx={{
                position: "relative",
                borderRadius: unitScale(22),
                bgcolor: plan.featured ? "#D1F1F5" : "#F3F3F3",
                p: { xs: unitScale(20), sm: unitScale(22), md: unitScale(26) },
                minHeight: { lg: unitScale(450) },
                display: "flex",
                flexDirection: "column",
                mb: { xs: unitScale(26), md: 0 },
                boxShadow: (t) => `0 ${unitScale(6)} ${unitScale(24)} ${alpha(t.palette.primary.dark, 0.1)}`
              }}
            >
              {plan.tag ? (
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: '-3%', md: '-3%' },
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: 999,
                    px: { xs: unitScale(10), md: unitScale(16) },
                    py: { xs: unitScale(4), md: unitScale(6) },
                    mb: { xs: unitScale(26), md: 0 },
                    bgcolor: plan.featured ? "#E89A83" : "#E6E0D9"
                  }}
                >
                  <Typography sx={{ fontSize: { xs: unitScale(12), md: unitScale(14) }, color: alpha("#000", 0.6), fontWeight: 500 }}>
                    {plan.tag}
                  </Typography>
                </Box>
              ) : null}

              <Typography sx={{ fontSize: { xs: unitScale(34), sm: unitScale(39), md: unitScale(44) }, fontWeight: 700, color: "#1F2328" }}>
                {plan.title}
              </Typography>
              <Typography
                sx={{
                  mt: 0.5,
                  mb: 1.7,
                  fontSize: { xs: unitScale(16), sm: unitScale(18), md: unitScale(21) },
                  color: alpha("#1F2328", 0.72)
                }}
              >
                {plan.subtitle}
              </Typography>
              <Box sx={{ borderTop: `1px solid ${alpha("#1F2328", 0.24)}`, mb: 2.2 }} />

              <Stack spacing={2.2} sx={{ mb: 4 }}>
                {plan.features.map((feature) => (
                  <Stack key={feature} direction="row" spacing={1.3} alignItems="flex-start" sx={{ mb: unitScale(8) }}>
                    <Box
                      sx={{
                        width: unitScale(22),
                        height: unitScale(22),
                        borderRadius: "50%",
                        bgcolor: plan.featured ? "#E89A83" : "#E5E1DB",
                        display: "grid",
                        placeItems: "center",
                        mt: 0.5,
                        flexShrink: 0
                      }}
                    >
                      <CheckRoundedIcon sx={{ fontSize: unitScale(14), color: alpha("#000", 0.55) }} />
                    </Box>
                    <Typography sx={{ fontSize: { xs: unitScale(16), sm: unitScale(18), md: unitScale(20) }, lineHeight: 1.45, color: "#5A5048" }}>
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                sx={{
                  mt: "auto",
                  height: { xs: unitScale(44), md: unitScale(57) },
                  borderRadius: { xs: unitScale(12), md: unitScale(16) },
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: { xs: unitScale(17), md: unitScale(21) },
                  bgcolor: plan.featured ? "transparent" : "#F0EBE3",
                  background: plan.featured
                    ? "radial-gradient(50% 50% at 50% 50%, #2B46A1 0%, #101A3B 100%)"
                    : undefined,
                  color: plan.featured ? "#fff" : alpha("#1F2328", 0.85),
                  boxShadow: plan.featured ? `0 ${unitScale(8)} ${unitScale(28)} ${alpha("#294AAD", 0.4)}` : "none",
                  "&:hover": {
                    bgcolor: plan.featured ? "transparent" : "#E6E0D7",
                    background: plan.featured
                      ? "radial-gradient(50% 50% at 50% 50%, #3559C3 0%, #101A3B 100%)"
                      : undefined,
                    boxShadow: plan.featured ? `0 ${unitScale(8)} ${unitScale(28)} ${alpha("#294AAD", 0.46)}` : "none"
                  }
                }}
              >
                Register Now
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
