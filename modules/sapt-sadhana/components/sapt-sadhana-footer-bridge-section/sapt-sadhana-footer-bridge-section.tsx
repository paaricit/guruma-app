"use client";

import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import { unitScale } from "@/utils/unit-scale";

/** Shallow curve between CTA band and global site footer (matches legacy Sapt page). */
export function SaptSadhanaFooterBridgeSection() {
  const theme = useTheme();
  const deep = alpha(theme.palette.primary.dark, 0.92);
  const soft = alpha(theme.palette.primary.light, 0.55);

  return (
    <Box
      component="aside"
      aria-hidden
      sx={{ bgcolor: deep, height: { xs: unitScale(28), md: unitScale(40) } }}
    >
      <Box
        sx={{
          height: "100%",
          bgcolor: soft,
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%"
        }}
      />
    </Box>
  );
}
