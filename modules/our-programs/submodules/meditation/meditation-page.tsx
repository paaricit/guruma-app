"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

export default function OurProgramsMeditationPage() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default", py: { xs: unitScale(56), md: unitScale(88) } }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Stack spacing={unitScale(14)} sx={{ maxWidth: unitScale(860) }}>
          <Typography sx={{ fontFamily: "var(--font-forum), serif", color: "guru.coral", fontWeight: 600, fontSize: { xs: unitScale(32), md: unitScale(44) }, lineHeight: 1.12 }}>
            Meditation Program
          </Typography>
          <Typography sx={{ color: "text.primary", fontSize: { xs: unitScale(16), md: unitScale(18) }, lineHeight: 1.7 }}>
            This page is the internal route scaffold for the Meditation Program. You can now add dedicated sections, schedules, testimonials, and FAQs here.
          </Typography>
          <Box>
            <Button component={Link} href="/our-programs" variant="outlined" sx={{ textTransform: "none", fontWeight: 700 }}>
              Back to Our Programs
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
