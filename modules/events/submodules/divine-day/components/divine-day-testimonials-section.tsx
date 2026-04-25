import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages } from "../content/divine-day-content";

export function DivineDayTestimonialsSection() {
  const videoThumbs = [
    { src: divineDayImages.comePeace, alt: "Session highlight" },
    { src: divineDayImages.whyEvent, alt: "Community gathering" },
    { src: divineDayImages.whoOverlap, alt: "Blessings" }
  ];

  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: unitScale(64), md: unitScale(84) } }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "#e8907d", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center", fontSize: { xs: unitScale(13), sm: unitScale(14.4), md: unitScale(15.2) }, mb: unitScale(16) }}>
          Experiences from Seekers
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: unitScale(16) }}>
          {videoThumbs.map((t) => (
            <Box key={t.src} sx={{ position: "relative", minHeight: { xs: unitScale(180), md: unitScale(200) }, borderRadius: unitScale(16), overflow: "hidden" }}>
              <Image src={t.src} alt={t.alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
