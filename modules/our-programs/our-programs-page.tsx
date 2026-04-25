import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsSeekerTestimonialsFaqBandGradient
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import { OurProgramsCardsSection, OurProgramsIntroSection, OurProgramsSeekerTestimonialsSection } from "./components";

export default function OurProgramsPage() {
  return (
    <Box component="main" sx={{ width: 1, maxWidth: "100%", mx: "auto" }}>
      <Box
        sx={{
          pt: { xs: unitScale(56), md: unitScale(88) },
          pb: { xs: unitScale(56), md: unitScale(220) },

          backgroundImage: "url('/images/our-programs/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
          <Stack spacing={{ xs: unitScale(28), md: unitScale(38) }}>
            <OurProgramsIntroSection />
            <OurProgramsCardsSection />
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          width: 1,
          maxWidth: "100%",
          background: sessionsSeekerTestimonialsFaqBandGradient,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}
      >
        <OurProgramsSeekerTestimonialsSection />
      </Box>
      <Box sx={{ py: { xs: unitScale(32), md: unitScale(56) }, bgcolor: "background.paper" }}>
        <Container maxWidth={"lg"} sx={{ ...pageSectionGutterSx }}>
          <Typography
            component="p"
            sx={{
              color: "#162B53",
              fontFamily: "var(--font-forum), serif",
              fontSize: { xs: unitScale(40), md: unitScale(70) },
              fontWeight: 400,
              lineHeight: { xs: 1.08, md: 1.05 },
              letterSpacing: { xs: "-0.02em", md: 0 }
            }}
          >
            Stay Connected
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
