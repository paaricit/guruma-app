"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import type { OurProgramsProgramHero } from "../../content/our-programs-program-heroes";
import {
  ourProgramsProgramHeroOverlayGradient,
  pageContainerMaxWidth,
  pageSectionGutterSx
} from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

const DIVIDER_BAR = "/images/our-programs/bar.svg";

/** `0px`–`767px` — full designed mobile banner (Figma / handoff). */
const MOBILE_BANNER_MQ = "@media (max-width: 767.98px)" as const;
/** `768px`+ — wide hero + HTML copy. */
const DESKTOP_HERO_MQ = "@media (min-width: 768px)" as const;

/** Fixed block height for mobile program banners (px). */
const MOBILE_PROGRAM_HERO_HEIGHT_PX = 550;

/** Display cap @ 1580 reference — aligns with requested 75px headline. */
const heroHeadingFontSize = {
  xs: unitScale(40),
  md: unitScale(75)
} as const;

/** Display cap @ 1580 reference — aligns with requested 24px subhead. */
const heroSubheadingFontSize = {
  xs: unitScale(17),
  md: unitScale(24)
} as const;

export type OurProgramsProgramHeroSectionProps = {
  hero: OurProgramsProgramHero;
  positionY?: "top" | "bottom";
};

/**
 * Full-bleed programme hero: background image, Forum headline (~75px @ md+), `bar.svg` divider
 * (same asset as main Our Programs intro), then Inter subhead (~24px @ md+).
 *
 * **≤767px:** optional `imageSrcMobile` fills a **550px**-tall band; when `mobileBannerIncludesCopy`,
 * overlay typography is omitted so baked-in banner text is not duplicated.
 */
export function OurProgramsProgramHeroSection({ hero, positionY }: OurProgramsProgramHeroSectionProps) {
  const theme = useTheme();
  const imageSrc = encodePublicPath(hero.imageSrc);
  const mobileSrc = hero.imageSrcMobile ? encodePublicPath(hero.imageSrcMobile) : null;
  const dividerSrc = encodePublicPath(DIVIDER_BAR);
  const showMobileBanner = Boolean(mobileSrc);
  const hideChromeOnMobileBanner = Boolean(hero.mobileBannerIncludesCopy && showMobileBanner);

  return (
    <Box
      sx={{
        position: "relative",
        width: 1,
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...(showMobileBanner
          ? {
              [MOBILE_BANNER_MQ]: {
                height: MOBILE_PROGRAM_HERO_HEIGHT_PX,
                minHeight: MOBILE_PROGRAM_HERO_HEIGHT_PX,
                maxHeight: MOBILE_PROGRAM_HERO_HEIGHT_PX
              },
              [DESKTOP_HERO_MQ]: {
                minHeight: unitScale(720)
              }
            }
          : {
              minHeight: { xs: unitScale(420), md: unitScale(720) }
            })
      }}
    >
      {showMobileBanner ? (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            display: "none",
            [MOBILE_BANNER_MQ]: { display: "block" }
          }}
        >
          <Image
            alt={hero.heading}
            src={mobileSrc!}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </Box>
      ) : null}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          ...(showMobileBanner
            ? {
                display: "none",
                [DESKTOP_HERO_MQ]: { display: "block" }
              }
            : { display: "block" })
        }}
      >
        <Image
          alt=""
          src={imageSrc}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: `center ${positionY ?? "center"}` }}
        />
      </Box>

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: ourProgramsProgramHeroOverlayGradient,
          zIndex: 1,
          ...(hideChromeOnMobileBanner
            ? {
                display: "none",
                [DESKTOP_HERO_MQ]: { display: "block" }
              }
            : { display: "block" })
        }}
      />

      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{
          position: "relative",
          zIndex: 2,
          ...pageSectionGutterSx,
          py: { xs: unitScale(48), md: unitScale(72) },
          mt: { xs: unitScale(40), md: 0 },
          textAlign: "center",
          ...(hideChromeOnMobileBanner
            ? {
                display: "none",
                [DESKTOP_HERO_MQ]: { display: "block" }
              }
            : { display: "block" })
        }}
      >
        <Stack spacing={{ xs: unitScale(16), md: unitScale(20) }} sx={{ maxWidth: unitScale(920), mx: "auto" }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontWeight: 400,
              fontSize: heroHeadingFontSize,
              lineHeight: { xs: 1.1, md: 1.08 },
              color: theme.palette.common.white
            }}
          >
            {hero.heading}
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: unitScale(588),
              height: unitScale(35),
              mx: "auto !important"
            }}
          >
            <Image src={dividerSrc} alt="" fill sizes="588px" style={{ objectFit: "contain" }} />
          </Box>

          <Typography
            component="p"
            sx={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
              fontSize: heroSubheadingFontSize,
              lineHeight: { xs: 1.6, md: 1.65 },
              color: alpha(theme.palette.common.white, 0.95),
              maxWidth: unitScale(900),
              mx: "auto"
            }}
          >
            {hero.subheading}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
