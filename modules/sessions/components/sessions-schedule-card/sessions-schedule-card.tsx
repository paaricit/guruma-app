"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  sessionsFluidBadge,
  sessionsFluidBody,
  sessionsFluidCardTitle
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

export type SessionsScheduleCardProps = {
  badgePrefix: string;
  badgeHighlight: string;
  title: string;
  rows: string[];
  iconSlot: ReactNode;
};

export function SessionsScheduleCard({ badgePrefix, badgeHighlight, title, rows, iconSlot }: SessionsScheduleCardProps) {
  const theme = useTheme();
  const cardRadius = unitScale(19);
  const iconCircle = {
    xs: unitScale(48),
    sm: unitScale(52),
    md: unitScale(56)
  } as const;
  const rowIconSize = {
    xs: unitScale(20),
    sm: unitScale(21),
    md: unitScale(22)
  } as const;

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #d1f1f5 0%, #ffffff 100%)",
        border: "1px solid rgba(28, 57, 142, 0.15)",
        borderRadius: cardRadius,
        p: { xs: unitScale(18), sm: unitScale(20), md: 3 },
        boxShadow: "0 12px 32px rgba(3, 25, 66, 0.08)"
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: { xs: unitScale(14), sm: 2 } }}>
        <Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: { xs: unitScale(6), sm: 0.75 },
              px: { xs: unitScale(10), sm: 1.5 },
              py: { xs: unitScale(4), sm: 0.5 },
              borderRadius: 999,
              bgcolor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              mb: { xs: unitScale(8), sm: 0.75 }
            }}
          >
            <Box sx={{ width: { xs: unitScale(7), sm: 8 }, height: { xs: unitScale(7), sm: 8 }, borderRadius: "50%", bgcolor: "#e64c3c" }} />
            <Typography sx={{ fontSize: sessionsFluidBadge, color: "#474545", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
              {badgePrefix}
              <Box component="span" sx={{ fontWeight: 700 }}>
                {badgeHighlight}
              </Box>
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 600, fontSize: sessionsFluidCardTitle, color: "#031942", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            width: iconCircle,
            height: iconCircle,
            borderRadius: "50%",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 4px 14px rgba(0,0,0,0.06)"
          }}
        >
          {iconSlot}
        </Box>
      </Stack>
      <Stack spacing={{ xs: unitScale(10), sm: 1.125, md: 1.25 }} sx={{ mb: { xs: unitScale(18), sm: 2.25, md: 2.5 } }}>
        {rows.map((line) => (
          <Stack direction="row" spacing={1} key={line} alignItems="flex-start">
            <AccessTimeOutlinedIcon sx={{ fontSize: rowIconSize, color: "#5a6a7a", mt: 0.25 }} />
            <Typography sx={{ fontSize: sessionsFluidBody, color: "#474545", lineHeight: 1.5, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
              {line}
            </Typography>
          </Stack>
        ))}
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <LanguageOutlinedIcon sx={{ fontSize: rowIconSize, color: "#5a6a7a", mt: 0.25 }} />
          <Typography sx={{ fontSize: sessionsFluidBody, color: "#474545", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Hindi & English</Typography>
        </Stack>
      </Stack>
      <Button
        component={Link}
        href="/contact"
        variant="contained"
        sx={{
          bgcolor: "#031942",
          color: "#fffdfb",
          px: { xs: unitScale(20), sm: 3 },
          py: { xs: unitScale(10), sm: 1.125, md: 1.25 },
          fontWeight: 700,
          fontSize: sessionsFluidBody,
          borderRadius: Number(theme.shape.borderRadius) * 1.5,
          "&:hover": { bgcolor: "#052a5c" }
        }}
      >
        Connect with Us
      </Button>
    </Box>
  );
}
