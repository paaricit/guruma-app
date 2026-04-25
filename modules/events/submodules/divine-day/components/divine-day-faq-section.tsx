"use client";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { faqItems } from "@/modules/sessions/content/sessions-faq";
import {
  pageSectionGutterSx,
  sessionsFaqAccordionGap,
  sessionsFaqAccordionRadius,
  sessionsFaqContainerMaxWidth,
  sessionsFaqDetailsPb,
  sessionsFaqDetailsPx,
  sessionsFaqExpandIconSize,
  sessionsFaqSectionPy,
  sessionsFaqSummaryPx,
  sessionsFaqSummaryPy,
  sessionsFluidFaqAnswer,
  sessionsFluidFaqQuestion,
  sessionsFluidSectionHeading,
  sessionsFluidSectionSublead
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

const FAQ_SECTION_HEADING_ID = "divine-day-faq-heading";

export function DivineDayFaqSection() {
  const theme = useTheme();
  const cardBorder = alpha(theme.palette.text.primary, 0.08);
  const qaRule = alpha(theme.palette.text.primary, 0.1);
  const subleadColor = alpha(theme.palette.text.primary, 0.72);
  const expandColor = theme.palette.primary.dark;

  return (
    <Box
      component="section"
      aria-labelledby={FAQ_SECTION_HEADING_ID}
      sx={{
        bgcolor: "transparent",
        pt: sessionsFaqSectionPy.pt,
        pb: unitScale(70)
      }}
    >
      <Container maxWidth={sessionsFaqContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Typography
          id={FAQ_SECTION_HEADING_ID}
          component="h2"
          sx={{
            fontFamily: "var(--font-forum), serif",
            fontWeight: 400,
            fontSize: unitScale(40),
            color: '#E9967B',
            textAlign: "center",
            mb: { xs: unitScale(8), sm: 1 }
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 400,
            fontSize: unitScale(16),
            lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 },
            color: subleadColor,
            mb: { xs: unitScale(24), sm: unitScale(28), md: 4 },
            maxWidth: { sm: "none", md: unitScale(720) },
            mx: "auto"
          }}
        >
          Everything you need to know about joining our free live sessions.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: sessionsFaqAccordionGap,
            width: 1
          }}
        >
          {faqItems.map((item, i) => (
            <Accordion
              key={item.q}
              defaultExpanded={i === 0}
              disableGutters
              elevation={0}
              sx={{
                m: 0,
                borderRadius: sessionsFaqAccordionRadius,
                overflow: "hidden",
                border: `1px solid ${cardBorder}`,
                bgcolor: "background.paper",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  m: 0,
                  bgcolor: alpha(theme.palette.primary.light, 0.22)
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreRoundedIcon
                    sx={{
                      color: expandColor,
                      fontSize: sessionsFaqExpandIconSize,
                      alignSelf: { xs: "flex-start", sm: "center" },
                      mt: { xs: 0.25, sm: 0 }
                    }}
                  />
                }
                sx={{
                  px: sessionsFaqSummaryPx,
                  py: sessionsFaqSummaryPy,
                  minHeight: { xs: unitScale(48), sm: "unset" },
                  alignItems: "flex-start",
                  "& .MuiAccordionSummary-content": {
                    my: 0,
                    mr: { xs: 1, sm: 1.5 },
                    overflow: "hidden"
                  },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    alignSelf: { xs: "flex-start", sm: "center" },
                    mt: { xs: 0.25, sm: 0 }
                  }
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 600,
                    color: expandColor,
                    fontSize: sessionsFluidFaqQuestion,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    lineHeight: { xs: 1.45, sm: 1.4, md: 1.38 }
                  }}
                >
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: sessionsFaqDetailsPx,
                  pt: 0,
                  pb: sessionsFaqDetailsPb,
                  borderTop: `1px solid ${qaRule}`
                }}
              >
                <Typography
                  sx={{
                    color: subleadColor,
                    lineHeight: { xs: 1.62, sm: 1.64, md: 1.65 },
                    fontSize: sessionsFluidFaqAnswer,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 400
                  }}
                >
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
