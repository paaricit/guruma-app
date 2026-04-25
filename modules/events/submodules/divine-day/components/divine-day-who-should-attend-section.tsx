import Image from "next/image";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages, whoShouldAttend } from "../content/divine-day-content";

export function DivineDayWhoShouldAttendSection() {
  return (
    <Box sx={{ bgcolor: "#fff", pt: { xs: unitScale(40), md: unitScale(48) }, pb: { xs: unitScale(64), md: unitScale(96) } }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" }, gap: { xs: unitScale(32), md: unitScale(40) } }}>
          <Box>
            <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#e8907d", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: { xs: unitScale(13), sm: unitScale(14.4), md: unitScale(15.2) }, mb: unitScale(16) }}>Who should attend</Typography>
            <Stack divider={<Divider flexItem sx={{ borderColor: "rgba(0,0,0,0.08)" }} />}>
              {whoShouldAttend.map((line) => (
                <Typography key={line} sx={{ py: unitScale(16), fontWeight: 600, fontSize: { xs: unitScale(12), sm: unitScale(13) }, letterSpacing: "0.04em", color: "#1a1a1a" }}>
                  {line}
                </Typography>
              ))}
            </Stack>
            <Button href="/contact" variant="contained" sx={{ mt: unitScale(24), minHeight: { xs: unitScale(44), md: unitScale(52) }, borderRadius: unitScale(12), bgcolor: "#0a1a32", color: "#fff", fontWeight: 700, px: { xs: unitScale(20), md: unitScale(24) }, py: { xs: unitScale(10), md: unitScale(12) }, fontSize: { xs: unitScale(16), md: unitScale(18) } }}>
              Register Now
            </Button>
          </Box>
          <Box sx={{ position: "relative", width: "100%", minHeight: { xs: unitScale(260), md: unitScale(320) }, borderRadius: unitScale(20), overflow: "hidden" }}>
            <Image src={divineDayImages.whoOverlap} alt="Seekers at Divine Day" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
