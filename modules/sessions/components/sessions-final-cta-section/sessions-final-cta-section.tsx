"use client";

import Link from "next/link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Button, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  pageContainerMaxWidth,
  pageSectionGutterSx,
  sessionsFluidCtaLabel,
  sessionsSectionPySm
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

export function SessionsFinalCtaSection() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "#e8f4f8", py: sessionsSectionPySm }}>
      <Container maxWidth={pageContainerMaxWidth} sx={{ ...pageSectionGutterSx }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: unitScale(12), sm: 2 }} justifyContent="center" alignItems="center">
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ChevronRightRoundedIcon sx={{ fontSize: { xs: unitScale(20), sm: unitScale(22), md: unitScale(24) } }} />}
            sx={{
              bgcolor: "#031942",
              color: "#fff",
              px: { xs: unitScale(20), sm: 3 },
              py: { xs: unitScale(12), sm: unitScale(14), md: 1.75 },
              fontWeight: 700,
              fontSize: sessionsFluidCtaLabel,
              borderRadius: Number(theme.shape.borderRadius) * 1.5,
              "&:hover": { bgcolor: "#052a5c" }
            }}
          >
            Register for Next Session
          </Button>
          <Button
            component={Link}
            href="/sessions#session-format"
            variant="outlined"
            sx={{
              borderColor: "#031942",
              color: "#031942",
              px: { xs: unitScale(20), sm: 3 },
              py: { xs: unitScale(12), sm: unitScale(14), md: 1.75 },
              fontWeight: 700,
              fontSize: sessionsFluidCtaLabel,
              borderRadius: Number(theme.shape.borderRadius) * 1.5
            }}
          >
            View Session Format
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
