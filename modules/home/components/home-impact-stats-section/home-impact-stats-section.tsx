"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import {
  impactStatLabelOnDarkSx,
  impactStatValueOnDarkSx,
  pageContainerMaxWidth,
  pageSectionGutterSx
} from "@/theme/page-section";
import { homeImpactStats } from "@/modules/home/content/home-impact-stats";

const SECTION_BG = "/images/Home Page Photos/Section.png" as const;

export function HomeImpactStatsSection() {
  const theme = useTheme();
  const overlay = alpha(theme.palette.common.black, 0.2);
  const ruleColor = alpha(theme.palette.common.white, 0.85);

  return (
    <Box
      component="section"
      aria-label="Impact at a glance"
      sx={{
        position: "relative",
        pb: {
          xs: "clamp(4.75rem, 5.5vw, 4rem)",
          md: 20
        },
        pt: {
          xs: "clamp(2.75rem, 5.5vw, 4rem)",
          md: 10
        },
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${SECTION_BG}')`,
          backgroundSize: "contain",
          backgroundPosition: "right"
        }}
      />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{ position: "relative", zIndex: 1, ...pageSectionGutterSx }}
      >
        <Box
          sx={{
            display: "grid",
            pb: 6,
            px: { xs: 0, lg: 4 },
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))"
            },
            gap: { xs: 2.5, md: 3.5, lg: 4 }
          }}
        >
          {homeImpactStats.map((stat) => (
            <Box key={stat.label} sx={{ textAlign: "center" }}>
              <Typography sx={impactStatValueOnDarkSx(theme)}>{stat.value}</Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 220,
                  mx: "auto",
                  borderBottom: `1px solid ${ruleColor}`,
                  my: 1
                }}
              />
              <Typography sx={impactStatLabelOnDarkSx(theme)}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
