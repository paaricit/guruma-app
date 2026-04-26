"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import {
  aboutHerHeroBannerSrc,
  aboutHerHeroBody,
  aboutHerHeroTitle
} from "@/modules/about-her/content/about-her-hero";
import {
  homeHeroImageLayerSx,
  homeHeroMobileGradientBackdropSx,
  pageSectionGutterSx
} from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

const titleFontSize = {
  xs: unitScale(40),
  md: unitScale(52),
  lg: unitScale(72)
} as const;

const bodyFontSize = {
  xs: unitScale(15),
  md: unitScale(17),
  lg: unitScale(18)
} as const;

const bodyMaxWidth = unitScale(696);

export function AboutHerHeroSection() {
  const theme = useTheme();
  const overlayBlue = alpha(theme.palette.primary.dark, 0.5);
  const titleColor = alpha(theme.palette.common.white, 0.98);
  const bodyColor = alpha(theme.palette.common.white, 0.9);
  const heroTextShadow = `0 ${unitScale(2)} ${unitScale(32)} ${alpha(theme.palette.common.black, 0.42)}`;

  return (
    <Box
      component="section"
      aria-labelledby="about-her-hero-heading"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "min(88dvh, 760px)", md: "min(100dvh, 880px)", lg: "120vh" },
        bgcolor: { xs: "primary.dark", md: "transparent" },
        /* `lg+`: unchanged desktop offset. `<lg` (phone / tablet): tighter top so copy sits higher under the header. */
        pt: { xs: unitScale(52), md: unitScale(44), lg: unitScale(96) },
        justifyContent: "center",
        overflow: "hidden",
        pb: { xs: unitScale(32), md: unitScale(48), lg: 0 }
      }}
    >
      <Box sx={homeHeroMobileGradientBackdropSx(theme)} aria-hidden />
      <Box
        aria-hidden
        sx={[
          homeHeroImageLayerSx(theme, aboutHerHeroBannerSrc),
          {
            /* Pull focal point left on tablet so the figure is not clipped off the right edge. */
            backgroundSize: { md: "115% auto", lg: "cover" },
            backgroundPosition: {
              md: "30% 22%",
              lg: "50% center"
            }
          }
        ]}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
          backgroundImage: {
            md: `linear-gradient(-84deg, ${alpha(theme.palette.common.black, 0)} 38%, ${overlayBlue} 82%)`,
            lg: `linear-gradient(-84deg, ${alpha(theme.palette.common.black, 0)} 47%, ${overlayBlue} 76%)`
          }
        }}
      />
      {/* <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
          width: { xs: "48%", md: "52%" },
          maxWidth: { xs: unitScale(360), md: unitScale(820) },
          display: { xs: "none", md: "block" },
          pointerEvents: "none"
        }}
      >
        <Image
          alt=""
          src={encodePublicPath(aboutHerHeroPortraitSrc)}
          fill
          priority
          sizes="(max-width: 900px) 0px, 42vw"
          style={{ objectFit: "contain", objectPosition: "right bottom" }}
        />
      </Box> */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          flex: { xs: 1, md: 1, lg: "unset" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "center", lg: "flex-start" },
          minHeight: { xs: 0, md: 0, lg: "unset" },
          py: { xs: unitScale(10), md: unitScale(16), lg: unitScale(48) },
          ...pageSectionGutterSx,
          pb: { xs: unitScale(10), md: unitScale(16), lg: unitScale(188) }
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: `min(${unitScale(640)}, 92%)`, lg: `min(${unitScale(755)}, 52%)` },
            mt: { xs: -2, md: -2.5, lg: 0 }
          }}
        >
          <Typography
            id="about-her-hero-heading"
            component="h1"
            sx={{
              fontFamily: "var(--font-forum), serif",
              fontSize: titleFontSize,
              lineHeight: { xs: 1.08, md: 1.05, lg: 0.96 },
              color: titleColor,
              fontWeight: 400,
              letterSpacing: { xs: "-0.02em", md: "-0.012em", lg: 0 },
              textWrap: { md: "balance" },
              textShadow: heroTextShadow
            }}
          >
            {aboutHerHeroTitle}
          </Typography>
          <Typography
            sx={{
              mt: { xs: unitScale(16), md: unitScale(22) },
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: bodyFontSize,
              lineHeight: { xs: 1.62, md: 1.68, lg: 1.65 },
              letterSpacing: { md: "0.01em" },
              color: bodyColor,
              maxWidth: bodyMaxWidth,
              textShadow: heroTextShadow
            }}
          >
            {aboutHerHeroBody}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
