import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages } from "../content/divine-day-content";

const peachTitleSx = {
  fontFamily: "var(--font-forum), serif",
  color: "#e8907d",
  fontWeight: 600,
  letterSpacing: "0.1em",
  fontSize: { xs: unitScale(13), sm: unitScale(14.4), md: unitScale(15.2) },
  lineHeight: 1.35,
  textTransform: "uppercase"
} as const;

function ZigzagImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: { xs: unitScale(220), sm: unitScale(260), md: unitScale(300) }, borderRadius: unitScale(24), overflow: "hidden", boxShadow: `0 ${unitScale(18)} ${unitScale(44)} rgba(3, 25, 66, 0.12)` }}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover" }} />
    </Box>
  );
}

export function DivineDayWhySection() {
  return (
    <Box sx={{ bgcolor: "#d8eef4", py: { xs: unitScale(56), md: unitScale(96) }, overflow: "hidden" }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Stack spacing={{ xs: unitScale(40), md: unitScale(56) }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: unitScale(24), md: unitScale(40) }, alignItems: "center" }}>
            <ZigzagImageCard src={divineDayImages.comePeace} alt="Seekers in a peaceful gathering" />
            <Box>
              <Typography sx={{ ...peachTitleSx, mb: unitScale(12) }}>Come experience the peace you have been seeking</Typography>
              <Typography sx={{ color: "#1a1a1a", fontSize: { xs: unitScale(15), md: unitScale(17) }, lineHeight: 1.75 }}>
                Join Guru Maa Shubha Didi for a free annual spiritual gathering filled with meditation, soulful guidance, and a deeply calming experience.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: unitScale(24), md: unitScale(40) }, alignItems: "center" }}>
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <Typography sx={{ ...peachTitleSx, mb: unitScale(12) }}>Why this event</Typography>
              <Typography sx={{ color: "#333", fontSize: { xs: unitScale(15), md: unitScale(17) }, lineHeight: 1.75 }}>
                This gathering is a sacred opportunity to pause, breathe, reflect, and reconnect with your inner self.
              </Typography>
            </Box>
            <Box sx={{ order: { xs: 1, md: 2 } }}>
              <ZigzagImageCard src={divineDayImages.whyEvent} alt="Guru Maa with seekers" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
