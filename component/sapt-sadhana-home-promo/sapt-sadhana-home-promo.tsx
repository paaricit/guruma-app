"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { pageSectionGutterSx } from "@/theme/page-section";
import { SectionTopArc } from "@/component/section-top-curve";
import { SaptSadhanaCarouselControls } from "@/component/sapt-sadhana-carousel-controls";
import { SaptSadhanaStackCarousel } from "@/components/site/sapt-sadhana-stack-carousel";
import { unitScale } from "@/utils/unit-scale";

const DEFAULT_SLIDES = [
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (1).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (2).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (3).webp",
  "/images/Home Page Photos/SAPT SADHANA - Serving Beyond Self (4).webp"
] as const;

const ARROW_LEFT = "/images/Home Page Photos/Arrow Left-poiint.png";
const ARROW_RIGHT = "/images/Home Page Photos/Arrow Right-point.png";

const STAY_CONNECTED_ART = "/images/footer-above-icon.png";

const SAPT_SECTION_WAVE_ICON = "/images/Home Page Photos/sapt -sadhana-icon.svg";
/** Design size for `sapt -sadhana-icon.png` (intrinsic aspect). */
const SAPT_WAVE_ICON_WIDTH_PX = 287.54;
const SAPT_WAVE_ICON_HEIGHT_PX = 88.07;

/** 65rem × 16px/rem → 1040px at 1580 reference */
const bodyCopyMaxWidth = unitScale(1040);

const bridgeArt = {
  minWidth: { xs: unitScale(72), md: unitScale(140) },
  height: { xs: unitScale(28), md: unitScale(48) }
} as const;

/** Body copy — `xs` / `md` (fluid via `unitScale`). */
const sectionBodyProminentFontSize = {
  xs: unitScale(17),
  md: unitScale(24)
} as const;

/** “SAPT SADHANA” */
const saptHeadingMainFontSize = {
  xs: unitScale(36),
  md: unitScale(66)
} as const;

/** “ - Serving Beyond Self” */
const saptHeadingSubFontSize = {
  xs: unitScale(26),
  md: unitScale(50)
} as const;

/** “Stay Connected” row */
const stayConnectedHeadingFontSize = {
  xs: unitScale(36),
  md: unitScale(70)
} as const;

export type SaptSadhanaHomePromoSectionProps = {
  slides?: readonly string[];
};

/**
 * Home page block: Sapt Sadhana copy, stack carousel, external controls, and “Stay Connected” bridge above the footer.
 */
export function SaptSadhanaHomePromoSection({ slides = DEFAULT_SLIDES }: SaptSadhanaHomePromoSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;

  const onStep = useCallback(
    (delta: 1 | -1) => {
      setActiveIndex((i) =>
        delta === 1 ? (i + 1) % slideCount : (i - 1 + slideCount) % slideCount
      );
    },
    [slideCount]
  );

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        background: "linear-gradient(180deg, #F3F2EE 0%, #FFF 50%, #D1F1F5 100%)",
        pb: { xs: 7, md: 6 },
        overflow: "visible"
      }}
    >
      <SectionTopArc surface="#F3F2EE" />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 3, ...pageSectionGutterSx }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box
            sx={{
              position: "relative",
              width: {
                xs: "min(100%, 11.25rem)",
                md: `min(100%, ${unitScale(SAPT_WAVE_ICON_WIDTH_PX)})`
              },
              aspectRatio: `${SAPT_WAVE_ICON_WIDTH_PX} / ${SAPT_WAVE_ICON_HEIGHT_PX}`,
              overflow: "visible"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                transform: "translateY(-49px)"
              }}
            >
              <Image
                alt=""
                src={SAPT_SECTION_WAVE_ICON}
                fill
                sizes="(max-width: 600px) 180px, (max-width: 900px) 224px, 288px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Box>
          </Box>
        </Box>

        <Typography
          component="h2"
          sx={{
            mt: { xs: 1, md: 1.25 },
            textAlign: "center",
            fontFamily: "var(--font-forum), serif",
            fontWeight: 400,
            lineHeight: { xs: 1.1, md: 1.2 },
            // color: (t) => t.palette.guru.ink
          }}
        >
          <Box component="span" sx={{ fontSize: saptHeadingMainFontSize }}>
            SAPT SADHANA
          </Box>
          <Box component="span" sx={{ fontSize: saptHeadingSubFontSize }}> - Serving Beyond Self</Box>
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: 1.2,
            mx: "auto",
            textAlign: "center",
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            color: (t) => alpha(t.palette.text.primary, 0.8),
            fontSize: sectionBodyProminentFontSize,
            maxWidth: bodyCopyMaxWidth,
            lineHeight: { xs: 1.65, md: 1.7 },
            letterSpacing: 0.2
          }}
        >
          <i><b>Sapt Sadhana</b></i> is our commitment to selfless service (seva), transforming spiritual wisdom into compassionate action.
          Through various initiatives, we serve underprivileged communities, provide education,
        </Typography>

        <Box sx={{ mt: 3.5 }}>
          <SaptSadhanaStackCarousel slides={slides} activeIndex={activeIndex} onStep={onStep} />
        </Box>

        <SaptSadhanaCarouselControls
          slideCount={slideCount}
          activeIndex={activeIndex}
          onStep={onStep}
          onSelectSlide={setActiveIndex}
          arrowLeftSrc={ARROW_LEFT}
          arrowRightSrc={ARROW_RIGHT}
        />

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
