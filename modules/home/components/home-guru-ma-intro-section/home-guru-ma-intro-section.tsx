"use client";

import PlayArrow from "@mui/icons-material/PlayArrow";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import {
  fluidGuruIntroCta,
  guruIntroBodySx,
  guruIntroRoleLabelSx,
  guruIntroSectionBackgroundSx,
  guruIntroTaglineSx,
  guruIntroTitleSx,
  pageContainerMaxWidth,
  pageSectionGutterSx
} from "@/theme/page-section";
import { guruMaIntroContent } from "@/modules/home/content/guru-ma-intro";

export function HomeGuruMaIntroSection() {
  const theme = useTheme();
  const iconBox = theme.spacing(5);
  const mediaRadius = { xs: "1.5rem", md: "2rem" };

  return (
    <Box
      component="section"
      aria-labelledby="guru-ma-intro-heading"
      sx={{
        ...guruIntroSectionBackgroundSx(theme),
        position: "relative",
        zIndex: 2,
        overflow: "visible",
        pt: { xs: 1.5, md: 2 },
        pb: { xs: "clamp(3.75rem, 7vw, 5rem)", md: "clamp(5rem, 8vw, 6.25rem)" }
      }}
    >
      <SectionTopArc surface="primaryLight" />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx }}
      >
        <Box
          sx={{
            p: { xs: 2.5, md: 4 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 2fr) minmax(0, 3fr)",
              lg: "minmax(0, 0.42fr) minmax(0, 0.58fr)"
            },
            gap: { xs: 3, md: "clamp(2.25rem, 4.5vw, 5rem)" },
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: mediaRadius,
              overflow: "hidden",
              // border: (t) => `2px solid ${alpha(t.palette.common.white, 0.92)}`,
              // boxShadow: (t) => `0 1rem 2.5rem ${alpha(t.palette.primary.dark, 0.14)}`
            }}
          >
            <Box sx={{ position: "relative", width: "100%", aspectRatio: "1 / 1", minHeight: 0 }}>
              <Image
                alt={guruMaIntroContent.thumbnailAlt}
                fill
                sizes="(max-width: 899px) 100vw, 42vw"
                src={guruMaIntroContent.thumbnailSrc}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }}
            >
              {/* <Box
                sx={{
                  width: { xs: 44, sm: 48, md: 52 },
                  height: { xs: 44, sm: 48, md: 52 },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: alpha(theme.palette.common.white, 0.92),
                  color: "primary.main",
                  border: (t) => `2px solid ${alpha(t.palette.primary.main, 0.35)}`,
                  boxShadow: (t) => `0 4px 20px ${alpha(t.palette.primary.dark, 0.12)}`
                }}
              >
                <PlayArrow sx={{ fontSize: { xs: 28, md: 32 }, ml: 0.35 }} aria-hidden />
              </Box> */}
            </Box>
          </Box>

          <Box>
            <Typography id="guru-ma-intro-heading" component="h2" sx={guruIntroTitleSx(theme)}>
              {guruMaIntroContent.title}
            </Typography>
            <Typography component="p" sx={guruIntroTaglineSx(theme)}>
              {guruMaIntroContent.tagline}
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 1.5
              }}
            >
              {guruMaIntroContent.roles.map((item) => (
                <Box
                  key={item.label}
                  sx={{ display: "flex", alignItems: "center", gap: 1, color: "text.primary" , mb: 3}}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: iconBox,
                      height: iconBox,
                      flex: "0 0 auto"
                    }}
                  >
                    <Image alt="" fill src={item.iconSrc} style={{ objectFit: "contain" }} />
                  </Box>
                  <Typography component="span" sx={guruIntroRoleLabelSx(theme)}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography component="p" sx={guruIntroBodySx(theme)}>
              {guruMaIntroContent.body}
            </Typography>

            <Button
              component={Link}
              href={guruMaIntroContent.ctaHref}
              variant="contained"
              sx={{
                mt: 2.5,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: 42, md: 46 },
                width: { xs: "100%", sm: "auto" },
                minWidth: { sm: 220 },
                px: 3,
                py: 1,
                // borderRadius: 9999,
                bgcolor: "guru.ink",
                color: (t) => t.palette.primary.contrastText,
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                fontSize: fluidGuruIntroCta,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "primary.dark",
                  boxShadow: "none"
                }
              }}
            >
              {guruMaIntroContent.ctaLabel}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
