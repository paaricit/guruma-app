"use client";

/**
 * Figma: `1:7869` — How to Join (three steps, Register CTA, curved foot).
 * Background: `sessionsImages.howToJoinSection` (`public/images/Home Page Photos/Section.png`).
 * https://www.figma.com/design/PBbuPRB1M6hXrVa2BLIv0B/Guru-Ma-Approved-version--Copy-?node-id=1-7869
 */

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import {
  howToJoinCtaHref,
  howToJoinCtaLabel,
  howToJoinHeading,
  howToJoinHeadingId,
  howToJoinSteps,
  howToJoinSublead
} from "@/modules/sessions/content/sessions-how-to-join";
import { sessionsImages } from "@/modules/sessions/content/sessions-images";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidHowToJoinBody,
  sessionsFluidHowToJoinStepTitle,
  sessionsFluidHowToJoinSublead,
  sessionsFluidHowToJoinTitle,
  sessionsFluidStepNumber,
  sessionsHowToJoinGridGap,
  sessionsHowToJoinStepCircle
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

const stepNumberColor = "#e9967b";

/** Connector on dark starfield — white → peach (Figma `1:7869`). */
const howToJoinConnectorGradient = `linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.82) 40%, ${alpha(stepNumberColor, 0.92)} 78%, ${stepNumberColor} 100%)`;

export function SessionsHowToJoinSection() {
  const theme = useTheme();
  const bgOverlay = alpha(theme.palette.common.black, 0.28);

  /** Vertical center of step circles (half of Figma diameters @ sm/md). */
  const connectorTopSm = `calc(${unitScale(56)} - ${unitScale(1)})`;
  const connectorTopMd = `calc(${unitScale(62.858)} - ${unitScale(1)})`;

  return (
    <Box
      component="section"
      aria-labelledby={howToJoinHeadingId}
      sx={{
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
        bgcolor: "#050B1F",
        minHeight: { xs: 'auto', md: unitScale(1000) },
        pt: { xs: unitScale(32), sm: unitScale(40), md: unitScale(48) },
        px: 0,
        pb: { xs: unitScale(52), sm: unitScale(44), md: unitScale(80) }
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(${bgOverlay}, ${bgOverlay}), url('${sessionsImages.howToJoinSection}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <Container maxWidth={pageContainerMaxWidth} sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx, pb: 0 }}>
        <Typography
          id={howToJoinHeadingId}
          component="h2"
          sx={{
            fontFamily: "var(--font-forum), serif",
            fontWeight: 400,
            fontSize: sessionsFluidHowToJoinTitle,
            lineHeight: 1.08,
            color: "#fff",
            textAlign: "center",
            mb: { xs: unitScale(8), sm: unitScale(10), md: unitScale(10) },
            mt: { xs: unitScale(8), sm: unitScale(10), md: unitScale(12) }
          }}
        >
          {howToJoinHeading}
        </Typography>
        <Typography
          component="p"
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 400,
            fontSize: sessionsFluidHowToJoinSublead,
            color: alpha("#fff", 0.9),
            mb: { xs: unitScale(28), sm: unitScale(32), md: unitScale(36) },
            lineHeight: 1.5,
            maxWidth: unitScale(900),
            mx: "auto"
          }}
        >
          {howToJoinSublead}
        </Typography>
        <Box
          component="ol"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" },
            gap: sessionsHowToJoinGridGap,
            position: "relative",
            listStyle: "none",
            m: 0,
            p: 0
          }}
        >
          {/* Horizontal line between / behind circles (sm: first row only; md: all three). */}
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", sm: "block", md: "none" },
              position: "absolute",
              left: "25%",
              width: "50%",
              top: { sm: connectorTopSm },
              height: unitScale(2),
              borderRadius: 9999,
              zIndex: 0,
              pointerEvents: "none",
              background: howToJoinConnectorGradient,
              boxShadow: `0 0 ${unitScale(6)} rgba(255,255,255,0.25)`
            }}
          />
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              left: "calc(100% / 6)",
              width: "calc(100% * 2 / 3)",
              top: { md: connectorTopMd },
              height: unitScale(2),
              borderRadius: 9999,
              zIndex: 0,
              pointerEvents: "none",
              background: howToJoinConnectorGradient,
              boxShadow: `0 0 ${unitScale(8)} rgba(255,255,255,0.2)`
            }}
          />
          {howToJoinSteps.map((s) => (
            <Box
              component="li"
              key={s.title}
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                px: { xs: 0, sm: 1, md: 1 },
                gridColumn: { xs: "auto", sm: s.n === 3 ? "1 / -1" : "auto", md: "auto" },
                maxWidth: { sm: s.n === 3 ? unitScale(520) : "none", md: "none" },
                justifySelf: { sm: s.n === 3 ? "center" : "stretch", md: "stretch" },
                width: { sm: s.n === 3 ? "100%" : "auto", md: "auto" }
              }}
            >
              <Box
                sx={{
                  width: sessionsHowToJoinStepCircle,
                  height: sessionsHowToJoinStepCircle,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: { xs: unitScale(14), sm: unitScale(16), md: unitScale(18) },
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)"
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 600,
                    fontSize: sessionsFluidStepNumber,
                    lineHeight: 1.11,
                    color: stepNumberColor
                  }}
                >
                  {s.n}
                </Typography>
              </Box>
              <Typography
                component="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: sessionsFluidHowToJoinStepTitle,
                  lineHeight: 1.5,
                  color: "#fff",
                  mb: 1,
                  fontFamily: "var(--font-inter), system-ui, sans-serif"
                }}
              >
                {s.title}
              </Typography>
              <Typography
                sx={{
                  color: alpha("#fff", 0.9),
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontSize: sessionsFluidHowToJoinBody,
                  fontFamily: "var(--font-inter), system-ui, sans-serif"
                }}
              >
                {s.body}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: unitScale(48), sm: unitScale(40), md: 5 },
            mb: { xs: unitScale(20), sm: unitScale(12), md: 2 },
            width: 1,
            px: { xs: 1, sm: 0 }
          }}
        >
          <Button
            component={Link}
            href={howToJoinCtaHref}
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: theme.palette.primary.dark,
              textTransform: "none",
              fontWeight: 600,
              minHeight: { xs: unitScale(52), sm: unitScale(64), md: unitScale(77.263) },
              minWidth: { xs: "unset", sm: unitScale(220), md: unitScale(256.65) },
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: unitScale(340), sm: "none" },
              boxSizing: "border-box",
              px: { xs: unitScale(20), sm: unitScale(24), md: unitScale(28) },
              py: { xs: unitScale(14), sm: unitScale(16), md: unitScale(18) },
              borderRadius: unitScale(11.613),
              fontSize: sessionsFluidHowToJoinSublead,
              lineHeight: 1.5,
              boxShadow: `0 ${unitScale(13.095)} ${unitScale(19.643)} 0 rgba(0,0,0,0.1), 0 ${unitScale(5.238)} ${unitScale(7.857)} 0 rgba(0,0,0,0.1)`,
              "&:hover": { bgcolor: "#f0f4fa" }
            }}
          >
            {howToJoinCtaLabel}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
