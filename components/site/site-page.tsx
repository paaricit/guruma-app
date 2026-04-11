"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography
} from "@mui/material";
import type { SitePageContent } from "@/lib/site-pages";
import SharedHeader from "@/components/site/shared-header";
import { uiPresets } from "@/lib/ui-presets";

type SitePageProps = {
  content: SitePageContent;
};

export default function SitePage({ content }: SitePageProps) {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
      {/* --- Section: Site header --- */}
      <SharedHeader />

      {/* --- Section: Hero --- */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 10 },
          overflow: "hidden",
          width: "100%"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(90deg, rgba(3,25,66,0.88) 30%, rgba(3,25,66,0.4) 60%, rgba(3,25,66,0.2) 100%), url("${content.hero.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3 } }}>
          <Stack spacing={2} maxWidth={700}>
            <Typography sx={{ color: "#ffc19a", letterSpacing: 0.4, fontWeight: 600 }}>{content.hero.eyebrow}</Typography>
            <Typography variant="h1" sx={{ color: "white", fontSize: { xs: "2.2rem", md: "4rem" }, lineHeight: 1.05 }}>
              {content.hero.title}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.92)", fontSize: { xs: "1rem", md: "1.15rem" }, maxWidth: 620 }}>
              {content.hero.description}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} pt={1.5}>
              <Button size="large" variant="contained" sx={{ textTransform: "none", fontWeight: 600 }}>
                {content.hero.primaryCta}
              </Button>
              <Button
                size="large"
                variant="outlined"
                sx={{ textTransform: "none", borderColor: "white", color: "white", fontWeight: 600 }}
              >
                {content.hero.secondaryCta}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* --- Section: Content highlights --- */}
      <Container maxWidth="lg" sx={{ ...uiPresets.sectionContainer, pb: { xs: 9, md: 12 }, px: { xs: 2, sm: 3 } }}>
        <Stack spacing={1.5} mb={4}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.1rem" } }}>
            {content.sectionTitle}
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
            {content.sectionDescription}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 2.5
          }}
        >
          {content.highlights.map((item) => (
            <Card key={item.title} sx={{ height: "100%" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h3" sx={{ fontSize: "1.35rem", mb: 1.2 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {item.description}
                </Typography>
                <Button endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 1.5, textTransform: "none", px: 0 }}>
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
