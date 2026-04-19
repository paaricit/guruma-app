"use client";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { useEffect, useState } from "react";
import { pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import {
  seekerExperiencesSectionBg,
  seekerTestimonialCornerIcon,
  seekerTestimonials,
  seekerVideos,
  type SeekerTestimonialItem,
  type SeekerVideoItem
} from "@/modules/home/content/seeker-experiences";

/** 1580 tokens — `xs` / `md` only (fluid via `unitScale`). */
const seekerDisplayTitleFontSize = {
  xs: unitScale(32),
  md: unitScale(48)
} as const;

const seekerSubleadFontSize = {
  xs: unitScale(18),
  md: unitScale(22)
} as const;

const seekerTestimonialQuoteFontSize = {
  xs: unitScale(16),
  md: unitScale(20)
} as const;

const seekerTestimonialAuthorFontSize = {
  xs: unitScale(17),
  md: unitScale(20)
} as const;

const seekerTestimonialLocationFontSize = {
  xs: unitScale(14),
  md: unitScale(16.8)
} as const;

export type SeekerExperiencesSectionProps = {
  videos?: readonly SeekerVideoItem[];
  testimonials?: readonly SeekerTestimonialItem[];
};

export function SeekerExperiencesSection({
  videos = seekerVideos,
  testimonials = seekerTestimonials
}: SeekerExperiencesSectionProps) {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: false });
  const visibleCount = mdUp ? 3 : 1;
  const maxSlide = Math.max(0, videos.length - visibleCount);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeEmbedSrc, setActiveEmbedSrc] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex((i) => Math.min(i, maxSlide));
  }, [maxSlide]);

  function openVideo(embedSrc: string) {
    setActiveEmbedSrc(embedSrc);
    setDialogOpen(true);
  }

  function closeVideo() {
    setDialogOpen(false);
    setActiveEmbedSrc(null);
  }

  const onLight = alpha(theme.palette.common.white, 0.92);
  const onLightMuted = alpha(theme.palette.common.white, 0.9);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: unitScale(1440),
        py: { xs: 8, md: 10 },
        color: theme.palette.common.white,
        backgroundImage: `url('${seekerExperiencesSectionBg}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top"
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1, ...pageSectionGutterSx }} maxWidth={'lg'}>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'var(--font-forum), serif',
            fontWeight: 400,
            fontSize: seekerDisplayTitleFontSize,
            lineHeight: { xs: 1.1, md: 1.2 },
            color: alpha(theme.palette.common.white, 0.96),
            textAlign: "center",
            mb: { xs: 2.5, md: 3.5 }
          }}
        >
          Experiences from Seekers
        </Typography>

        <Box
          sx={{
            width: "100vw",
            maxWidth: "100vw",
            marginLeft: "calc(50% - 50vw)",
            boxSizing: "border-box"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              gap: { xs: 2, md: 2.5 },
              width: "100%",
              maxWidth: "100%"
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "100%", minWidth: 0, overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                width: `calc(100% * ${videos.length} / ${visibleCount})`,
                transform: `translateX(calc(-${slideIndex} * 100% / ${videos.length}))`,
                transition: theme.transitions.create("transform", { duration: 360, easing: theme.transitions.easing.easeOut }),
                alignItems: "stretch"
              }}
            >
              {videos.map((video) => (
                <Box
                  key={video.name}
                  sx={{
                    flex: `0 0 calc(100% / ${videos.length})`,
                    width: "100%",
                    maxWidth: "100%",
                    minWidth: 0,
                    px: { xs: 0.75, md: 1.1 },
                    boxSizing: "border-box"
                  }}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() => openVideo(video.embedSrc)}
                    aria-label={`Play video: ${video.name}`}
                    sx={{
                      position: "relative",
                      borderRadius: unitScale(8),
                      overflow: "hidden",
                      minHeight: { xs: unitScale(220), md: unitScale(300) },
                      width: "100%",
                      maxWidth: "100%",
                      height: "100%",
                      p: 0,
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "block",
                      "&:focus-visible": {
                        outline: `${unitScale(2)} solid ${theme.palette.common.white}`,
                        outlineOffset: unitScale(2)
                      }
                    }}
                  >
                    <Image
                      alt=""
                      fill
                      src={video.image}
                      sizes={mdUp ? "33vw" : "100vw"}
                      style={{ objectFit: "cover" }}
                      aria-hidden
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: (t) =>
                          `linear-gradient(180deg, ${alpha(t.palette.common.black, 0.35)} 0%, transparent 40%, ${alpha(t.palette.common.black, 0.45)} 100%)`,
                        pointerEvents: "none"
                      }}
                    />
                    {/* <Typography
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 10,
                        color: alpha(theme.palette.common.white, 0.96),
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: { xs: unitScale(13), md: unitScale(24) },
                        fontWeight: 600,
                        pointerEvents: "none"
                      }}
                    >
                      {video.name}
                    </Typography> */}
                    {/* <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                      }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          bgcolor: alpha(theme.palette.common.white, 0.88),
                          color: theme.palette.primary.main,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700
                        }}
                      >
                        ▶
                      </Box>
                    </Box> */}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
            sx={{ mt: { xs: 0.5, md: 0 }, width: "100%", maxWidth: "100%" }}
          >
            <IconButton
              type="button"
              aria-label="Previous seeker videos"
              onClick={() => setSlideIndex((i) => Math.max(0, i - 1))}
              disabled={slideIndex <= 0}
              sx={{
                color: onLight,
                border: `1px solid ${alpha(theme.palette.common.white, 0.35)}`,
                bgcolor: alpha(theme.palette.common.black, 0.2),
                width: { xs: unitScale(48), md: unitScale(52) },
                height: { xs: unitScale(48), md: unitScale(52) },
                "&:hover": { bgcolor: alpha(theme.palette.common.black, 0.35) },
                "&.Mui-disabled": {
                  color: alpha(theme.palette.common.white, 0.35),
                  borderColor: alpha(theme.palette.common.white, 0.12)
                }
              }}
            >
              <ChevronLeftRoundedIcon sx={{ fontSize: { xs: unitScale(28), md: unitScale(30) } }} />
            </IconButton>
            <IconButton
              type="button"
              aria-label="Next seeker videos"
              onClick={() => setSlideIndex((i) => Math.min(maxSlide, i + 1))}
              disabled={slideIndex >= maxSlide}
              sx={{
                color: onLight,
                border: `1px solid ${alpha(theme.palette.common.white, 0.35)}`,
                bgcolor: alpha(theme.palette.common.black, 0.2),
                width: { xs: unitScale(48), md: unitScale(52) },
                height: { xs: unitScale(48), md: unitScale(52) },
                "&:hover": { bgcolor: alpha(theme.palette.common.black, 0.35) },
                "&.Mui-disabled": {
                  color: alpha(theme.palette.common.white, 0.35),
                  borderColor: alpha(theme.palette.common.white, 0.12)
                }
              }}
            >
              <ChevronRightRoundedIcon sx={{ fontSize: { xs: unitScale(28), md: unitScale(30) } }} />
            </IconButton>
          </Stack>
          </Box>
        </Box>

        <Dialog
          open={dialogOpen}
          onClose={closeVideo}
          maxWidth="md"
          fullWidth
          aria-label="Seeker experience video"
          slotProps={{
            paper: {
              sx: { bgcolor: theme.palette.grey[900], maxHeight: "92vh" }
            }
          }}
        >
          <DialogContent sx={{ p: 0, position: "relative" }}>
            <IconButton
              type="button"
              aria-label="Close video"
              onClick={closeVideo}
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
            {activeEmbedSrc ? (
              <Box sx={{ position: "relative", width: "100%", pt: "56.25%" }}>
                <Box
                  component="iframe"
                  key={activeEmbedSrc}
                  title="YouTube video player"
                  src={activeEmbedSrc}
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

        <Typography
          component="h2"
          sx={{
            mt: { xs: 7, md: 8.5 },
            fontFamily: 'var(--font-forum), serif',
            fontWeight: 400,
            fontSize: seekerDisplayTitleFontSize,
            lineHeight: { xs: 1.1, md: 1.2 },
            color: alpha(theme.palette.common.white, 0.96),
            textAlign: "center"
          }}
        >
          Hear what our global community has to say
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
            fontSize: seekerSubleadFontSize,
            lineHeight: { xs: 1.5, md: 1.45 },
            textAlign: "center",
            color: onLightMuted,
            mx: "auto",
            mt: 2,
            mb: 4,
            pb: 4
          }}
        >
          Hear from those whose lives have been transformed by these sessions
        </Typography>

        <Box
          sx={{
            mt: { xs: 3, md: 3.5 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 2.2, md: 3 },
            overflow: "visible",
            pb: 12
          }}
        >
          {testimonials.map((item) => (
            <Card
              key={item.name}
              sx={{
                borderRadius: unitScale(19.2),
                boxShadow: "none",
                border: `1px solid ${alpha(theme.palette.text.secondary, 0.15)}`,
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                position: "relative",
                overflow: "visible",
                minHeight: { xs: unitScale(220), md: unitScale(340) },
                mb: 3,
                pt: 1.5
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: {
                    xs: `calc(-1 * (${unitScale(18)}))`,
                    md: `calc(-1 * (${unitScale(22)}))`
                  },
                  left: { xs: unitScale(18), md: unitScale(22) },
                  width: { xs: unitScale(44), md: unitScale(52) },
                  height: { xs: unitScale(44), md: unitScale(52) },
                  zIndex: 2,
                  pointerEvents: "none"
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image alt="" fill src={seekerTestimonialCornerIcon} sizes="52px" style={{ objectFit: "contain" }} />
                </Box>
              </Box>
              <Box
                sx={{
                  px: { xs: 2.5, md: 3 },
                  pt: { xs: 3.2, md: 3.75 },
                  pb: { xs: 2.6, md: 3 }
                }}
              >
                {/* Figma 525:6212 — Inter Italic / quote; spacing before divider ~29px */}
                <Typography
                  sx={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: seekerTestimonialQuoteFontSize,
                    lineHeight: { xs: 1.6, md: 1.65 },
                    mt: 2,
                    mb: 2,
                    color: alpha(theme.palette.text.primary, 0.82)
                  }}
                >
                  {`"${item.quote}"`}
                </Typography>
                <Box
                  sx={{
                    mt: unitScale(29),
                    pt: unitScale(20.64),
                    borderTop: `1px solid ${alpha(theme.palette.text.secondary, 0.15)}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: seekerTestimonialAuthorFontSize,
                      lineHeight: 1.45,
                      color: theme.palette.text.secondary
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 400,
                      fontSize: seekerTestimonialLocationFontSize,
                      lineHeight: 1.5,
                      color: alpha(theme.palette.text.primary, 0.88)
                    }}
                  >
                    {item.location}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
