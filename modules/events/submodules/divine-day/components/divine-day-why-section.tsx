import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { SectionSoftWaveCap } from "@/component/section-top-curve";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages } from "../content/divine-day-content";

const headingSx = {
  fontFamily: "var(--font-forum), serif",
  color: "#e8907d",
  fontWeight: 600,
  fontSize: unitScale(35),
  lineHeight: 1.2,
  textTransform: "uppercase"
} as const;

const bodySx = {
  color: '#343434',
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontSize: unitScale(20),
} as const;

function ZigzagImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", md: unitScale(570) },
        maxWidth: "100%",
        height: unitScale(430),
        borderRadius: unitScale(22),
        overflow: "hidden",
        // bgcolor: "#0b0b0f",
        // boxShadow: `0 ${unitScale(18)} ${unitScale(44)} ${alpha("#000000", 0.35)}`
      }}
    >
      <Image src={src} alt={alt} fill unoptimized sizes="(max-width: 900px) 100vw, 570px" style={{ objectFit: "cover" }} />
    </Box>
  );
}

export function DivineDayWhySection() {
  const lotusSrc = encodePublicPath(divineDayImages.whyLotus);
  const topImgSrc = encodePublicPath(divineDayImages.whyImageTop);
  const bottomImgSrc = encodePublicPath(divineDayImages.whyImageBottom);

  return (
    <Box sx={{
      py: { xs: unitScale(56), md: unitScale(96) }, position: "relative", background: "linear-gradient(180deg, #D1F1F5 0%, #F3F3EF 100%)"
    }}>
      <SectionSoftWaveCap fill="#D1F1F5" height={unitScale(130)} />

      <Box aria-hidden sx={{ position: "absolute", left: { xs: "-120px", md: "-70px" }, top: { xs: unitScale(70), md: unitScale(110) }, width: unitScale(530), height: unitScale(600), opacity: 0.7, zIndex: 0 }}>
        <Image src={lotusSrc} alt="" fill sizes="530px" style={{ objectFit: "contain" }} />
      </Box>
      <Box aria-hidden sx={{ position: "absolute", right: { xs: "-150px", md: "-60px" }, top: { xs: unitScale(360), md: unitScale(390) }, width: unitScale(530), height: unitScale(600), opacity: 0.7, zIndex: 0 }}>
        <Image src={lotusSrc} alt="" fill sizes="530px" style={{ objectFit: "contain" }} />
      </Box>
      <Box aria-hidden sx={{ position: "absolute", left: { xs: "-150px", md: "-80px" }, bottom: { xs: "-180px", md: "-230px" }, width: unitScale(530), height: unitScale(600), opacity: 0.8, zIndex: 0 }}>
        <Image src={lotusSrc} alt="" fill sizes="530px" style={{ objectFit: "contain" }} />
      </Box>

      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx, position: "relative", zIndex: 1 }}>
        <Stack spacing={{ xs: unitScale(56), md: unitScale(84) }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: unitScale(28), md: unitScale(56) }, alignItems: "center" }}>
            <ZigzagImageCard src={topImgSrc} alt="Peaceful Divine Day gathering" />
            <Box>
              <Typography sx={headingSx}>Come Experience the Peace You Have Been Seeking</Typography>
              <Typography sx={{ ...bodySx, mt: unitScale(14) }}>
                On this day, hundreds and thousands gather - both in person and virtually - to celebrate. It is a day filled with divine joy,
                soulful connections, and spiritual awakening. A day that brings a radiant smile to your face, fills your mind with positivity,
                and energizes your soul to soar toward the infinite.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: unitScale(28), md: unitScale(56) }, alignItems: "center" }}>
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <Typography sx={headingSx}>Why This Event</Typography>
              <Typography sx={{ ...bodySx, mt: unitScale(14) }}>
                In the middle of deadlines, noise, emotional heaviness, and daily pressure, we often forget what peace feels like. This gathering
                is a sacred opportunity to pause, breathe, reflect, and reconnect with your inner self.
              </Typography>
              <Typography sx={{ ...bodySx, mt: unitScale(16) }}>
                Through meditation, spiritual wisdom, and the divine presence of Guru Maa Shubha Didi, this event is designed to leave you feeling
                lighter, calmer, and deeply enriched from within.
              </Typography>
            </Box>
            <Box sx={{ order: { xs: 1, md: 2 }, justifySelf: { xs: "stretch", md: "end" } }}>
              <ZigzagImageCard src={bottomImgSrc} alt="Guru Maa with seekers" />
            </Box>
          </Box>
        </Stack>
      </Container>
      <Box sx={{ position: "absolute", top: `110%`, left: 0, right: 0, zIndex: 1 }}>
        <SectionSoftWaveCap fill="#F3F3EF" height={unitScale(130)} mirror placement="bottom" />

      </Box>

    </Box>
  );
}
