"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import type { SaptSadhanaInitiative } from "@/modules/sapt-sadhana/content/sapt-sadhana-page-content";
import { saptSadhanaInitiatives } from "@/modules/sapt-sadhana/content/sapt-sadhana-page-content";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

function SaptSadhanaInitiativeRow({
  row,
  numberRailSide
}: {
  row: SaptSadhanaInitiative;
  numberRailSide: "left" | "right";
}) {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;
  const img = encodePublicPath(row.image);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: numberRailSide === "right" ? "row-reverse" : "row" },
        alignItems: "flex-start",
        gap: { xs: 2, md: 3 },
        mb: { xs: unitScale(32), md: unitScale(100) }
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, pt: 0.5 }} aria-hidden>
        <Box
          sx={{
            width: { xs: unitScale(52), md: unitScale(90) },
            height: { xs: unitScale(52), md: unitScale(90) },
            borderRadius: "50%",
            bgcolor: "#FFC19A",
            color: theme.palette.common.white,
            fontWeight: 800,
            fontSize: { xs: unitScale(16), md: unitScale(24) },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}
        >
          {row.n}
        </Box>
        <Box
          sx={{
            width: 2,
            flex: 1,
            minHeight: unitScale(60),
            bgcolor: alpha("#FFC19A", 0.5),
            mt: 1
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          borderRadius: unitScale(12),
          border: `1px solid ${alpha(theme.palette.common.black, 0.08)}`,
          overflow: "hidden",
          bgcolor: theme.palette.background.paper,
          boxShadow: `0 ${unitScale(4)} ${unitScale(20)} ${alpha(ink, 0.06)}`
        }}
      >
        <Box
          sx={{
            order: { xs: 2, md: row.imageFirst ? 2 : 1 },
            p: { xs: 2.5, md: 3.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontWeight: 700,
              color: ink,
              fontSize: { xs: unitScale(22), md: unitScale(28) },
              mb: 1.5
            }}
          >
            {row.title}
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.text.primary, 0.72),
              fontSize: { xs: unitScale(17), md: unitScale(21) },
              lineHeight: 1.75,
              mb: 2.5
            }}
          >
            {row.body}
          </Typography>
          <Button
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: unitScale(18) }} />}
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              textTransform: "none",
              p: 0,
              minWidth: 0,
              alignSelf: "flex-start",
              fontSize: { xs: unitScale(16), md: unitScale(18) },
              "&:hover": { bgcolor: "transparent", textDecoration: "underline" }
            }}
          >
            Know More
          </Button>
        </Box>

        <Box
          sx={{
            order: { xs: 1, md: row.imageFirst ? 1 : 2 },
            position: "relative",
            width: "100%",
            minHeight: { xs: unitScale(220), md: unitScale(290) }
          }}
        >
          <Image src={img} alt={row.title} fill sizes="(max-width: 900px) 100vw, 620px" style={{ objectFit: "cover" }} />
        </Box>
      </Box>
    </Box>
  );
}

export function SaptSadhanaInitiativesSection() {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;
  const surface = theme.palette.common.white;

  return (
    <Box
      component="section"
      aria-labelledby="sapt-sadhana-initiatives-heading"
      sx={{
        bgcolor: surface,
        pt: { xs: unitScale(48), md: unitScale(72), lg: 3 },
        pb: { xs: unitScale(32), md: unitScale(48) },
        position: "relative"
      }}
    >
      <SectionTopArc surface={surface} />
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Typography
          id="sapt-sadhana-initiatives-heading"
          sx={{
            fontFamily: "var(--font-forum), serif",
            color: ink,
            fontSize: { xs: unitScale(42), md: unitScale(70) },
            fontWeight: 600,
            textAlign: "center",
            mb: 4
          }}
        >
          Our Key Seva Initiatives
        </Typography>
        {saptSadhanaInitiatives.map((row, idx) => (
          <SaptSadhanaInitiativeRow
            key={row.title}
            row={row}
            numberRailSide={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </Container>
    </Box>
  );
}
