import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { faqItems } from "../content/divine-day-content";

export function DivineDayFaqSection() {
  return (
    <Box sx={{ bgcolor: "#faf8f5", py: { xs: unitScale(64), md: unitScale(96) } }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#e8907d", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center", fontSize: { xs: unitScale(13), sm: unitScale(14.4), md: unitScale(15.2) }, mb: unitScale(8) }}>
          Frequently Asked Questions
        </Typography>
        <Typography sx={{ textAlign: "center", color: "#666", fontSize: { xs: unitScale(15), md: unitScale(17) }, mb: unitScale(32) }}>
          Everything you need to know about joining our events.
        </Typography>
        {faqItems.map((item, i) => (
          <Accordion key={item.q} defaultExpanded={i === 0} disableGutters sx={{ mb: unitScale(12), borderRadius: `${unitScale(12)} !important`, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", bgcolor: "#fff", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ color: "#e8907d", fontSize: unitScale(26) }} />} sx={{ minHeight: unitScale(56) }}>
              <Typography sx={{ fontWeight: 600, color: "#1f2f52", fontSize: { xs: unitScale(15), md: unitScale(17) } }}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555", fontSize: { xs: unitScale(14), md: unitScale(15) }, lineHeight: 1.65 }}>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
