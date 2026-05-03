"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { saptSadhanaImpactStats } from "@/modules/sapt-sadhana/content/sapt-sadhana-page-content";
import { impactStatLabelOnDarkSx, impactStatValueOnDarkSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

/** Match `HomeImpactStatsSection` — shared background art. */
const SECTION_BG = "/images/Home Page Photos/Section.png" as const;

export function SaptSadhanaImpactStatsSection() {
  const theme = useTheme();
  const overlay = alpha(theme.palette.common.black, 0.2);
  const ruleColor = alpha(theme.palette.common.white, 0.85);

  return (
    <Box
      component="section"
      aria-label="Sapt Sadhana impact statistics"
      sx={{
        position: "relative",
        pb: { xs: unitScale(76), md: unitScale(160) },
        pt: { xs: unitScale(64), md: unitScale(80) },
        overflow: "hidden"
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${SECTION_BG}')`,
          backgroundSize: { xs: "cover", lg: "contain" },
          backgroundPosition: "right"
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, px: { xs: 4, lg: 0 } }}>
        <Box
          sx={{
            display: "grid",
            pb: 6,
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))"
            },
            gap: { xs: 2.5, md: 3.5, lg: 4 }
          }}
        >
          {saptSadhanaImpactStats.map((s) => (
            <Box key={s.label} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  ...impactStatValueOnDarkSx(theme),
                  fontSize: { xs: unitScale(36), md: unitScale(54) }
                }}
              >
                {s.value}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: unitScale(180), md: unitScale(220) },
                  mx: "auto",
                  borderBottom: `1px solid ${ruleColor}`,
                  my: 1
                }}
              />
              <Typography
                sx={{
                  ...impactStatLabelOnDarkSx(theme),
                  fontSize: { xs: unitScale(22), md: unitScale(30) }
                }}
              >
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
