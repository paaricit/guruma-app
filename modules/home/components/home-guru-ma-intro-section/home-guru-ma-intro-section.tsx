"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useCallback, useState } from "react";
import { SectionTopArc } from "@/component/section-top-curve";
import {
  guruIntroBodySx,
  guruIntroRoleLabelSx,
  guruIntroSectionBackgroundSx,
  guruIntroTaglineSx,
  guruIntroTitleSx,
  pageContainerMaxWidth,
  pageSectionGutterSx
} from "@/theme/page-section";
import { guruMaIntroContent } from "@/modules/home/content/guru-ma-intro";
import { unitScale } from "@/utils/unit-scale";

function GuruMaIntroVideoDialog({
  open,
  embedSrc,
  onClose
}: {
  open: boolean;
  embedSrc: string | null;
  onClose: () => void;
}) {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      aria-label="Guru Maa introduction video"
      slotProps={{
        paper: {
          sx: { bgcolor: theme.palette.grey[900], maxHeight: "92vh" }
        },
        backdrop: {
          sx: {
            bgcolor: alpha(theme.palette.common.black, 0.78)
          }
        }
      }}
    >
      <DialogContent sx={{ p: 0, position: "relative" }}>
        <IconButton
          type="button"
          aria-label="Close video"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: unitScale(8),
            right: unitScale(8),
            zIndex: 2,
            color: theme.palette.common.white,
            bgcolor: alpha(theme.palette.common.black, 0.5),
            "&:hover": { bgcolor: alpha(theme.palette.common.black, 0.7) }
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
        {embedSrc ? (
          <Box sx={{ position: "relative", width: "100%", pt: "56.25%" }}>
            <Box
              component="iframe"
              key={embedSrc}
              title="YouTube video player"
              src={embedSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none"
              }}
            />
          </Box>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export function HomeGuruMaIntroSection() {
  const theme = useTheme();
  const mediaRadius = { xs: unitScale(24), md: unitScale(32) };
  const [videoOpen, setVideoOpen] = useState(false);
  const [embedSrc, setEmbedSrc] = useState<string | null>(null);

  const openVideo = useCallback(() => {
    setEmbedSrc(guruMaIntroContent.introVideoEmbedSrc);
    setVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setVideoOpen(false);
    setEmbedSrc(null);
  }, []);

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
        pb: { xs: unitScale(80), md: unitScale(100) }
      }}
    >
      <SectionTopArc surface="primaryLight" />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx }}
      >
        <Box
          sx={{
            py: { xs: 2.5, md: 4 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 2fr) minmax(0, 3fr)",
              lg: "minmax(0, 0.42fr) minmax(0, 0.58fr)"
            },
            gap: { xs: 3, md: unitScale(80) },
            alignItems: "center"
          }}
        >
          <Box
            component="button"
            type="button"
            onClick={openVideo}
            aria-label="Play Guru Maa introduction video"
            sx={{
              position: "relative",
              borderRadius: mediaRadius,
              overflow: "hidden",
              cursor: "pointer",
              border: "none",
              p: 0,
              m: 0,
              width: "100%",
              bgcolor: "transparent",
              textAlign: "left",
              font: "inherit",
              color: "inherit",
              "&:focus-visible": {
                outline: `3px solid ${alpha(theme.palette.primary.main, 0.85)}`,
                outlineOffset: unitScale(4)
              }
            }}
          >
            <Box sx={{ position: "relative", width: "100%", aspectRatio: "1 / 1", minHeight: 0 }}>
              <Image
                alt={guruMaIntroContent.thumbnailAlt}
                fill
                sizes="(max-width: 767px) 100vw, 42vw"
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
            <Typography
              id="guru-ma-intro-heading"
              component="h2"
              sx={{
                ...guruIntroTitleSx(theme),
                fontSize: { xs: unitScale(42), md: unitScale(52) }
              }}
            >
              {guruMaIntroContent.title}
            </Typography>
            <Typography
              component="p"
              sx={{
                ...guruIntroTaglineSx(theme),
                fontSize: { xs: unitScale(14), md: unitScale(16) }
              }}
            >
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
                      width: { xs: unitScale(36), md: unitScale(40) },
                      height: { xs: unitScale(36), md: unitScale(40) },
                      flex: "0 0 auto"
                    }}
                  >
                    <Image alt="" fill src={item.iconSrc} style={{ objectFit: "contain" }} />
                  </Box>
                  <Typography
                    component="span"
                    sx={{
                      ...guruIntroRoleLabelSx(theme),
                      fontSize: { xs: unitScale(18), md: unitScale(22) }
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography
              component="p"
              sx={{
                ...guruIntroBodySx(theme),
                fontSize: { xs: unitScale(17), md: unitScale(21) }
              }}
            >
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
                minHeight: { xs: unitScale(42), md: unitScale(46) },
                width: { xs: "100%", sm: "auto" },
                minWidth: { sm: unitScale(220) },
                px: 3,
                py: 1,
                // borderRadius: 9999,
                bgcolor: "guru.ink",
                color: (t) => t.palette.primary.contrastText,
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                fontSize: { xs: unitScale(16), md: unitScale(17) },
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

        <GuruMaIntroVideoDialog open={videoOpen} embedSrc={embedSrc} onClose={closeVideo} />
      </Container>
    </Box>
  );
}
