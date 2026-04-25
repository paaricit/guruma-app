import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages } from "../content/divine-day-content";

const peachTitleSx = {
  fontFamily: "var(--font-forum), serif",
  color: "#e8907d",
  fontWeight: 600,
  letterSpacing: "0.12em",
  fontSize: { xs: unitScale(13), sm: unitScale(14.4), md: unitScale(15.2) },
  textTransform: "uppercase"
} as const;

export function DivineDayAboutSection() {
  return (
    <Box sx={{ bgcolor: "#fdfcf8", py: { xs: unitScale(64), md: unitScale(96) } }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: unitScale(32), md: unitScale(48) }, alignItems: "center" }}>
          <Box>
            <Typography sx={{ ...peachTitleSx, mb: unitScale(4) }}>About Guru Maa</Typography>
            <Typography sx={{ fontFamily: "var(--font-forum), serif", fontSize: { xs: unitScale(34), md: unitScale(44) }, color: "#e8907d", fontWeight: 600, mb: unitScale(20) }}>
              Shubha Didi
            </Typography>
            <Typography sx={{ color: "#3d3d3d", fontSize: { xs: unitScale(15), md: unitScale(17) }, lineHeight: 1.8 }}>
              Guru Maa Shubha Didi is a spiritual guide and compassionate mentor whose teachings help people move from confusion to clarity and from restlessness to inner stillness.
            </Typography>
          </Box>
          <Box sx={{ position: "relative", minHeight: { xs: unitScale(320), md: unitScale(440) }, borderRadius: unitScale(24), overflow: "hidden", boxShadow: `0 ${unitScale(16)} ${unitScale(42)} rgba(3,25,66,0.12)` }}>
            <Image src={divineDayImages.posterBand} alt="Guru Maa teaching" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
