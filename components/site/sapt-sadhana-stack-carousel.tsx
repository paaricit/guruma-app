"use client";

import { Box } from "@mui/material";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { unitScale } from "@/utils/unit-scale";

export type SaptSadhanaStackCarouselProps = {
  slides: readonly string[];
  activeIndex: number;
  onStep: (delta: 1 | -1) => void;
};

const sidePanelBaseSx = {
  display: { xs: "none", sm: "block" },
  position: "relative" as const,
  flex: { sm: "0 0 22%", md: "0 0 20%" },
  maxWidth: { sm: unitScale(200), md: unitScale(220) },
  width: { sm: "22%", md: "20%" },
  height: { sm: unitScale(200), md: unitScale(230) },
  borderRadius: unitScale(18),
  overflow: "hidden",
  cursor: "pointer",
  p: 0,
  bgcolor: "transparent",
  zIndex: 1,
  alignSelf: "center",
  opacity: 0.58,
  boxShadow: `0 ${unitScale(8)} ${unitScale(24)} rgba(0,0,0,0.15)`,
  border: `${unitScale(2)} solid rgba(255,255,255,0.78)`,
  filter: "blur(0.45px)",
  transition: "opacity 0.35s ease, box-shadow 0.25s ease, transform 0.35s ease",
  "&:hover": {
    opacity: 0.72,
    boxShadow: `0 ${unitScale(12)} ${unitScale(32)} rgba(0,0,0,0.2)`
  },
  "&:focus-visible": {
    outline: `${unitScale(2)} solid #2b46a1`,
    outlineOffset: unitScale(3)
  }
};

/**
 * Cover-flow style carousel: large center card, smaller faded side previews (3D tilt).
 * Matches common “stacked / cover flow” reference layouts; keeps wheel + keyboard from before.
 */
export function SaptSadhanaStackCarousel({ slides, activeIndex, onStep }: SaptSadhanaStackCarouselProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const skipCenterIntro = useRef(true);
  const n = slides.length;

  const prevIdx = (activeIndex - 1 + n) % n;
  const nextIdx = (activeIndex + 1) % n;

  useLayoutEffect(() => {
    const el = centerRef.current;
    if (!el) return;
    if (skipCenterIntro.current) {
      skipCenterIntro.current = false;
      return;
    }
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { scale: 0.94, opacity: 0.82 },
      { scale: 1, opacity: 1, duration: 0.42, ease: "power2.out" }
    );
  }, [activeIndex]);

  useEffect(() => {
    const root = galleryRef.current;
    if (!root) return;

    let accum = 0;
    let tick: ReturnType<typeof requestAnimationFrame> | undefined;

    const flushWheel = () => {
      tick = undefined;
      if (Math.abs(accum) < 32) {
        accum = 0;
        return;
      }
      if (accum > 0) onStep(1);
      else onStep(-1);
      accum = 0;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      accum += e.deltaY;
      if (tick !== undefined) cancelAnimationFrame(tick);
      tick = requestAnimationFrame(flushWheel);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        onStep(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        onStep(-1);
      }
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    root.addEventListener("keydown", onKey);
    return () => {
      root.removeEventListener("wheel", onWheel);
      root.removeEventListener("keydown", onKey);
      if (tick !== undefined) cancelAnimationFrame(tick);
    };
  }, [onStep]);

  return (
    <Box
      ref={galleryRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Sapt Sadhana photo gallery"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: unitScale(1280),
        mx: "auto",
        minHeight: { xs: unitScale(220), sm: unitScale(260), md: unitScale(320) },
        py: { xs: 1, md: 2 },
        outline: "none",
        perspective: unitScale(2000),
        transformStyle: "preserve-3d",
        "&:focus-visible": { boxShadow: `0 0 0 ${unitScale(2)} rgba(43,70,161,0.35)` }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 0, sm: 0.5, md: 1 },
          px: { xs: 0, sm: 1, md: 2 }
        }}
      >
        {/* Previous slide — left wing */}
        <Box
          component="button"
          type="button"
          aria-label="Show previous slide"
          onClick={() => onStep(-1)}
          sx={{
            ...sidePanelBaseSx,
            transform: {
              sm: `scale(0.82) perspective(${unitScale(1400)}) rotateY(14deg) translateZ(calc(-1 * (${unitScale(20)})))`,
              md: `scale(0.84) perspective(${unitScale(1600)}) rotateY(16deg) translateZ(calc(-1 * (${unitScale(28)})))`
            },
            transformOrigin: "100% 50%"
          }}
        >
          <Image
            alt=""
            fill
            src={slides[prevIdx]}
            sizes="220px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            aria-hidden
          />
        </Box>

        {/* Active slide — center (720 / 800px caps at 1580 via unitScale) */}
        <Box
          ref={centerRef}
          sx={{
            position: "relative",
            zIndex: 4,
            flex: { xs: "1 1 auto", sm: "0 1 auto" },
            width: {
              xs: `min(92vw, ${unitScale(720)})`,
              sm: `min(72vw, ${unitScale(720)})`,
              md: `min(100%, ${unitScale(800)})`
            },
            maxWidth: unitScale(800),
            height: { xs: unitScale(220), sm: unitScale(240), md: unitScale(400) },
            mx: { sm: -1.5, md: -2.5 },
            borderRadius: unitScale(24),
            overflow: "hidden",
            boxShadow: `0 ${unitScale(28)} ${unitScale(56)} rgba(0,0,0,0.22), 0 ${unitScale(8)} ${unitScale(20)} rgba(0,0,0,0.12)`,
            border: `${unitScale(3)} solid rgba(255,255,255,0.95)`,
            transform: `perspective(${unitScale(1600)}) translateZ(0)`
          }}
        >
          <Image
            alt={`Sapt Sadhana slide ${activeIndex + 1} of ${n}`}
            fill
            src={slides[activeIndex]}
            sizes="(max-width: 600px) 92vw, 720px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority={activeIndex === 0}
          />
        </Box>

        {/* Next slide — right wing */}
        <Box
          component="button"
          type="button"
          aria-label="Show next slide"
          onClick={() => onStep(1)}
          sx={{
            ...sidePanelBaseSx,
            transform: {
              sm: `scale(0.82) perspective(${unitScale(1400)}) rotateY(-14deg) translateZ(calc(-1 * (${unitScale(20)})))`,
              md: `scale(0.84) perspective(${unitScale(1600)}) rotateY(-16deg) translateZ(calc(-1 * (${unitScale(28)})))`
            },
            transformOrigin: "0% 50%"
          }}
        >
          <Image
            alt=""
            fill
            src={slides[nextIdx]}
            sizes="220px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            aria-hidden
          />
        </Box>
      </Box>
    </Box>
  );
}
