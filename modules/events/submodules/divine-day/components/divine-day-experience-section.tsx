import { Box, Button, Container, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { experiences } from "../content/divine-day-content";

const peachTitleSx = {
  fontFamily: "var(--font-forum), serif",
  color: "#e8907d",
  fontWeight: 600,
  letterSpacing: "0.1em",
  fontSize: { xs: unitScale(13), sm: unitScale(14.4), md: unitScale(15.2) },
  lineHeight: 1.35,
  textTransform: "uppercase"
} as const;

export function DivineDayExperienceSection() {
  return (
    <Box sx={{ bgcolor: "#fdfcf8", py: { xs: unitScale(64), md: unitScale(104) } }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Typography sx={{ ...peachTitleSx, mb: unitScale(24) }}>What you will experience</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: { xs: unitScale(20), md: unitScale(24) }, mb: unitScale(24) }}>
          {experiences.map(({ title, body, Icon }) => (
            <Box key={title}>
              <Icon sx={{ color: "#e8907d", fontSize: unitScale(28), mb: unitScale(6) }} />
              <Typography sx={{ fontWeight: 700, color: "#e8907d", fontSize: { xs: unitScale(15.2), md: unitScale(17) }, mb: unitScale(4) }}>{title}</Typography>
              <Typography sx={{ color: "#4a4a4a", fontSize: { xs: unitScale(14), md: unitScale(15) }, lineHeight: 1.6 }}>{body}</Typography>
            </Box>
          ))}
        </Box>
        <Button href="/contact" variant="contained" sx={{ minHeight: { xs: unitScale(44), md: unitScale(52) }, borderRadius: unitScale(12), bgcolor: "#0a1a32", color: "#fff", fontWeight: 700, px: { xs: unitScale(20), md: unitScale(24) }, py: { xs: unitScale(10), md: unitScale(12) }, fontSize: { xs: unitScale(16), md: unitScale(18) } }}>
          Register Free
        </Button>
      </Container>
    </Box>
  );
}
