"use client";

/**
 * Our Programs–specific seeker band (video carousel + testimonials).
 * Home continues to use `@/component/seeker-experiences-section`; edit copy/media in
 * `modules/our-programs/content/our-programs-seeker-experiences.ts`.
 */

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
import { alpha, useTheme, type SxProps, type Theme } from "@mui/material/styles";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { SECTION_TOP_ARC_HEIGHT, SectionTopArc } from "@/component/section-top-curve";
import {
  ourProgramsSeekerExperiencesSectionBg,
  ourProgramsSeekerTestimonialCornerIcon,
  ourProgramsSeekerVideos,
  type OurProgramsSeekerTestimonialItem,
  type OurProgramsSeekerVideoItem
} from "@/modules/our-programs/content/our-programs-seeker-experiences";
import { pageSectionGutterSx, sessionsSeekerTestimonialsFaqBandGradient } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const displayTitleFontSize = {
  xs: unitScale(32),
  md: unitScale(48)
} as const;

const subleadFontSize = {
  xs: unitScale(18),
  md: unitScale(22)
} as const;

const quoteFontSize = {
  xs: unitScale(16),
  md: unitScale(20)
} as const;

const authorFontSize = {
  xs: unitScale(17),
  md: unitScale(20)
} as const;

const locationFontSize = {
  xs: unitScale(14),
  md: unitScale(16.8)
} as const;

export type OurProgramsSeekerExperiencesSectionSurface = "default" | "plain";

export type OurProgramsSeekerExperiencesSectionProps = {
  videos?: readonly OurProgramsSeekerVideoItem[];
  testimonials?: readonly OurProgramsSeekerTestimonialItem[];
  surface?: OurProgramsSeekerExperiencesSectionSurface;
  videoStripHeading?: string;
  testimonialsBlockHeading?: string;
  testimonialsDescription?: string;
  /** When true, hides the “How to Enrol” block (e.g. Meditation program page). */
  omitHowToEnrol?: boolean;
};

const howToEnrolSectionDomId = "our-programs-how-to-enrol";

function ProgramsSeekerVideoCarousel({
  videos,
  isPlain,
  carouselNavIconSx,
  onPlay
}: {
  videos: readonly OurProgramsSeekerVideoItem[];
  isPlain: boolean;
  carouselNavIconSx: SxProps<Theme>;
  onPlay: (embedSrc: string) => void;
}) {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: false });
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"), { defaultMatches: false });
  const visibleCount = lgUp ? 3 : mdUp ? 2 : 1;
  const maxSlide = Math.max(0, videos.length - visibleCount);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex((i) => Math.min(i, maxSlide));
  }, [maxSlide]);

  return (
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
                  onClick={() => onPlay(video.embedSrc)}
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
                      outline: `${unitScale(2)} solid ${isPlain ? theme.palette.guru.coral : theme.palette.common.white}`,
                      outlineOffset: unitScale(2)
                    }
                  }}
                >
                  <Image
                    alt=""
                    fill
                    src={encodePublicPath(video.image)}
                    sizes={lgUp ? "33vw" : mdUp ? "50vw" : "100vw"}
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
            sx={carouselNavIconSx}
          >
            <ChevronLeftRoundedIcon sx={{ fontSize: { xs: unitScale(28), md: unitScale(30) } }} />
          </IconButton>
          <IconButton
            type="button"
            aria-label="Next seeker videos"
            onClick={() => setSlideIndex((i) => Math.min(maxSlide, i + 1))}
            disabled={slideIndex >= maxSlide}
            sx={carouselNavIconSx}
          >
            <ChevronRightRoundedIcon sx={{ fontSize: { xs: unitScale(28), md: unitScale(30) } }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

function ProgramsVideoEmbedDialog({
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

function ProgramsSeekerTestimonialCards({
  testimonials,
  isPlain
}: {
  testimonials: readonly OurProgramsSeekerTestimonialItem[];
  isPlain: boolean;
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: { xs: 3, md: 3.5 },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))"
        },
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
            bgcolor: isPlain ? theme.palette.primary.light : theme.palette.background.paper,
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
              <Image
                alt=""
                fill
                src={encodePublicPath(ourProgramsSeekerTestimonialCornerIcon)}
                sizes="52px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              px: { xs: 2.5, md: 3 },
              pt: { xs: 3.2, md: 3.75 },
              pb: { xs: 2.6, md: 3 }
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: quoteFontSize,
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
                  fontSize: authorFontSize,
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
                  fontSize: locationFontSize,
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
  );
}

const DEFAULT_VIDEO_HEADING = "Experiences from Seekers";

export function OurProgramsSeekerExperiencesSection({
  videos = ourProgramsSeekerVideos,
  surface = "default",
  videoStripHeading = DEFAULT_VIDEO_HEADING,
  omitHowToEnrol = false
}: OurProgramsSeekerExperiencesSectionProps) {
  const theme = useTheme();
  const isPlain = surface === "plain";
  const videoHeadingId = useId();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeEmbedSrc, setActiveEmbedSrc] = useState<string | null>(null);

  const onLight = alpha(theme.palette.common.white, 0.92);
  const headingColor = isPlain ? theme.palette.guru.coral : alpha(theme.palette.common.white, 0.96);

  const coral = theme.palette.guru.coral;
  /** Without the tall default `minHeight`, the bottom mint arc would overlap the video strip. */
  const reserveBottomForArc = isPlain || omitHowToEnrol;
  const carouselNavIconSx = isPlain
    ? {
      color: theme.palette.common.white,
      border: `1px solid ${alpha(coral, 0.55)}`,
      bgcolor: coral,
      width: { xs: unitScale(48), md: unitScale(52) },
      height: { xs: unitScale(48), md: unitScale(52) },
      "&:hover": { bgcolor: alpha(coral, 0.88) },
      "&.Mui-disabled": {
        color: alpha(theme.palette.common.white, 0.55),
        borderColor: alpha(coral, 0.35),
        bgcolor: alpha(coral, 0.45)
      }
    }
    : {
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
    };

  function openVideo(embedSrc: string) {
    setActiveEmbedSrc(embedSrc);
    setDialogOpen(true);
  }

  function closeVideo() {
    setDialogOpen(false);
    setActiveEmbedSrc(null);
  }

  return (
    <Box
      component="section"
      aria-label="Our Programs seeker experiences and testimonials"
      sx={{
        position: "relative",
        overflow: "visible",
        width: isPlain ? 1 : undefined,
        maxWidth: isPlain ? "100%" : undefined,
        minHeight: isPlain || omitHowToEnrol ? "auto" : unitScale(1440),
        pt: omitHowToEnrol ? { xs: 7, md: 8 } : { xs: 8, md: 10 },
        pb: reserveBottomForArc
          ? {
              xs: unitScale(32),
              md: unitScale(40),
              lg: `calc(${SECTION_TOP_ARC_HEIGHT} + ${unitScale(50)} + ${unitScale(36)})`
            }
          : { xs: 8, md: 10 },
        color: isPlain ? theme.palette.text.primary : theme.palette.common.white,
        ...(isPlain
          ? {
            background: sessionsSeekerTestimonialsFaqBandGradient,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }
          : {
            backgroundImage: `url("${encodePublicPath(ourProgramsSeekerExperiencesSectionBg)}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top"
          })
      }}
    >

      <Container sx={{ position: "relative", zIndex: 1, ...pageSectionGutterSx }} maxWidth="lg">

        {!omitHowToEnrol ? (
          <Box aria-labelledby={howToEnrolSectionDomId} sx={{ mt: { xs: 7, md: 0 }, pb: 4 }}>
            <Typography
              id={howToEnrolSectionDomId}
              component="h3"
              sx={{
                fontFamily: 'var(--font-forum), serif',
                fontWeight: 400,
                fontSize: { xs: unitScale(48), md: unitScale(70) },
                lineHeight: { xs: 1.1, md: 1.2 },
                color: alpha(theme.palette.common.white, 0.96),
                textAlign: "center",
                textTransform: "none",
                mt: 0
              }}
            >
              How to Enrol
            </Typography>
            <Typography
              component="p"
              sx={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
                fontSize: { xs: unitScale(20), md: unitScale(24) },
                lineHeight: { xs: 1.5, md: 1.45 },
                textAlign: "center",
                color: alpha(theme.palette.common.white, 0.9),
                mx: "auto",
                mt: 1.5,
                mb: { xs: 3, md: 4.5 }
              }}
            >
              Begin your transformation journey in three simple steps
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
                gap: { xs: 2, md: 2.5 }
              }}
            >
              {[
                {
                  number: "1",
                  title: "Choose Your Program",
                  body: "Review the programs above and select the one that resonates with your needs and goals."
                },
                {
                  number: "2",
                  title: "Submit Your Enquiry",
                  body: "Fill out the form below or contact us directly via WhatsApp or phone for personalized guidance."
                },
                {
                  number: "3",
                  title: "Begin Your Journey",
                  body: "We'll schedule an initial consultation to understand your needs and create a personalized plan."
                }
              ].map((step) => (
                <Card
                  key={step.number}
                  sx={{
                    borderRadius: unitScale(18),
                    p: { xs: 2.5, md: 3 },
                    bgcolor: alpha(theme.palette.common.white, 0.98),
                    boxShadow: `0 ${unitScale(10)} ${unitScale(24)} ${alpha(theme.palette.common.black, 0.2)}`
                  }}
                >
                  <Box
                    sx={{
                      width: unitScale(64),
                      height: unitScale(64),
                      borderRadius: "50%",
                      bgcolor: "#E89A83",
                      color: theme.palette.common.white,
                      display: "grid",
                      placeItems: "center",
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: unitScale(34),
                      mb: 2
                    }}
                  >
                    {step.number}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: unitScale(27),
                      color: "#2D4A53",
                      lineHeight: 1.25
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.3,
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 400,
                      fontSize: unitScale(18),
                      lineHeight: 1.5,
                      color: alpha("#2D4A53", 0.9)
                    }}
                  >
                    {step.body}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>
        ) : null}

        <Typography
          id={videoHeadingId}
          component="h2"
          sx={{
            fontFamily: 'var(--font-forum), serif',
            fontWeight: 400,
            fontSize: displayTitleFontSize,
            lineHeight: { xs: 1.1, md: 1.2 },
            color: headingColor,
            textAlign: "center",
            textTransform: isPlain ? "capitalize" : "none",
            mb: { xs: 2.5, md: 3.5 },
            mt: omitHowToEnrol ? { xs: 3, md: 4 } : { xs: 7, md: 10 }
          }}
        >
          {videoStripHeading}
        </Typography>

        <Box aria-labelledby={videoHeadingId}>
          <ProgramsSeekerVideoCarousel
            videos={videos}
            isPlain={isPlain}
            carouselNavIconSx={carouselNavIconSx}
            onPlay={openVideo}
          />
        </Box>

        <ProgramsVideoEmbedDialog open={dialogOpen} embedSrc={activeEmbedSrc} onClose={closeVideo} />


      </Container>
      <Box
        sx={{
          position: "absolute",
          bgcolor: "#D1F1F5",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          height: { xs: unitScale(20), lg: unitScale(50) },
          lineHeight: 0
        }}
      >
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <SectionTopArc surface="#D1F1F5" />
        </Box>
      </Box>

    </Box>
  );
}
