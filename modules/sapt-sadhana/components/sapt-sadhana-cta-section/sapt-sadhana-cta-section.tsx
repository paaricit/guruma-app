"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { saptSadhanaCtaContent } from "@/modules/sapt-sadhana/content/sapt-sadhana-page-content";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

const ctaButtonSx = {
  minHeight: unitScale(60),
  fontSize: unitScale(18),
  px: 3,
  py: 0,
  textTransform: "none" as const
};
const stayConnectedHeadingFontSize = {
  xs: unitScale(36),
  md: unitScale(70)
} as const;

export function SaptSadhanaCtaSection() {
  const theme = useTheme();
  const ink = theme.palette.primary.dark;
  const c = saptSadhanaCtaContent;
  const buttonRadius = unitScale(Number(theme.shape.borderRadius) * 1.5);

  return (
    <Box
      component="section"
      aria-labelledby="sapt-sadhana-cta-heading"
      sx={{ py: { xs: unitScale(64), md: unitScale(80) } }}
    >
      <Container maxWidth={pageContainerMaxWidth} sx={{ textAlign: "center", ...pageSectionGutterSx }}>
        <Typography
          id="sapt-sadhana-cta-heading"
          sx={{
            fontFamily: "var(--font-forum), serif",
            color: ink,
            fontSize: { xs: unitScale(32), md: unitScale(45) },
            fontWeight: 400,
            lineHeight: { xs: 1.15, md: 1.2 },
            mb: 2
          }}
        >
          {c.title}
        </Typography>
        <Typography
          sx={{
            color: alpha(theme.palette.text.primary, 0.78),
            fontSize: { xs: unitScale(17), md: unitScale(20) },
            lineHeight: 1.65,
            mb: 3,
            maxWidth: { xs: '100%', md: '70%' },
            mx: "auto"
          }}
        >
          {c.body}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center">
          <Button
            component={Link}
            href={c.href}
            variant="contained"
            sx={{
              ...ctaButtonSx,
              borderRadius: buttonRadius,
              bgcolor: ink,
              color: theme.palette.common.white,
              fontWeight: 600,
              "&:hover": { bgcolor: alpha(ink, 0.88) }
            }}
          >
            {c.primaryLabel}
          </Button>
          <Button
            component={Link}
            href={c.href}
            variant="outlined"
            sx={{
              ...ctaButtonSx,
              borderRadius: buttonRadius,
              borderColor: ink,
              color: ink,
              fontWeight: 600,
              "&:hover": { borderColor: ink, bgcolor: alpha(ink, 0.06) }
            }}
          >
            {c.secondaryLabel}
          </Button>
        </Stack>
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 2, md: 3 },
            position: "relative",
            zIndex: 1,
            width: "100%",
            minWidth: 0
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 0.75, md: 2 },
              flexWrap: "nowrap",
              width: "100%",
              minWidth: 0
            }}
          >
            <Typography
              component="p"
              sx={{
                flex: "0 1 auto",
                minWidth: 0,
                color: (t) => '#162B53',
                fontFamily: "var(--font-forum), serif",
                fontSize: stayConnectedHeadingFontSize,
                fontWeight: 400,
                lineHeight: { xs: 1.08, md: 1.05 },
                letterSpacing: { xs: "-0.02em", md: 0 },
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden"
              }}
            >
              Stay Connected
            </Typography>

            {/* <Box
              sx={{
                position: "relative",
                flex: "1 1 0%",
                minWidth: bridgeArt.minWidth,
                height: bridgeArt.height,
                minHeight: bridgeArt.height,
                maxWidth: { xs: "48%", sm: "52%", md: "58%" },
                ml: { xs: 0.25, sm: 0.5 }
              }}
            >
              <Image
                alt=""
                src={STAY_CONNECTED_ART}
                fill
                sizes="(max-width: 600px) 50vw, 520px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
