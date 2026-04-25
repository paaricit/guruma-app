import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

export function DivineDayEventHighlightSection() {
  return (
    <Box sx={{ position: "relative", pt: { xs: unitScale(56), md: unitScale(72) }, pb: { xs: unitScale(84), md: unitScale(120) }, background: "linear-gradient(180deg, rgba(4,8,28,0.92) 0%, rgba(6,14,40,0.95) 100%)" }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: unitScale(16), md: unitScale(24) }} alignItems={{ xs: "stretch", md: "center" }} sx={{ mb: { xs: unitScale(32), md: unitScale(40) }, py: unitScale(16), px: { xs: unitScale(12), md: unitScale(16) }, borderRadius: unitScale(16), bgcolor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <Box><Typography sx={{ color: "#fff", fontWeight: 800, fontSize: { xs: unitScale(22), md: unitScale(26) } }}>1st MAY</Typography><Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: unitScale(13) }}>FRIDAY</Typography></Box>
          <Box><Typography sx={{ color: "#fff", fontWeight: 800, fontSize: { xs: unitScale(22), md: unitScale(26) } }}>4:15 PM</Typography><Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: unitScale(13) }}>ONWARDS</Typography></Box>
        </Stack>
        <Box sx={{ textAlign: "center", maxWidth: unitScale(900), mx: "auto" }}>
          <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: unitScale(42), md: unitScale(64) }, color: "#e8b4a8", fontWeight: 600, lineHeight: 1.05 }}>
            THE DIVINE DAY
          </Typography>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: unitScale(13), sm: unitScale(15), md: unitScale(17) }, mt: unitScale(16), textTransform: "uppercase" }}>
            The pathway to divinity goes through Gates of Wisdom!
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: unitScale(12), fontSize: { xs: unitScale(15), md: unitScale(17) } }}>WITH GURU MAA SHUBHA DIDI</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={unitScale(12)} justifyContent="center" sx={{ mt: unitScale(32) }}>
            <Button href="/contact" variant="contained" sx={{ minHeight: { xs: unitScale(44), md: unitScale(52) }, borderRadius: unitScale(12), bgcolor: "#0a1a32", color: "#fff", fontWeight: 700, px: { xs: unitScale(20), md: unitScale(24) }, fontSize: { xs: unitScale(16), md: unitScale(18) } }}>Register Now</Button>
            <Button href="/contact" variant="contained" sx={{ minHeight: { xs: unitScale(44), md: unitScale(52) }, borderRadius: unitScale(12), bgcolor: "#e9967b", color: "#fff", fontWeight: 700, px: { xs: unitScale(20), md: unitScale(24) }, fontSize: { xs: unitScale(16), md: unitScale(18) } }}>Special Guest</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
