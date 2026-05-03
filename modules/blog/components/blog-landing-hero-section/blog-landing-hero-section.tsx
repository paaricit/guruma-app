"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";

/** Full-bleed starfield hero from user-provided handoff. */
const BLOG_LANDING_HERO_SRC = "/images/blog/landing-hero-rectangle-34624485.svg" as const;
const BLOG_VERTICAL_SEPARATOR_SRC = "/images/blog/vertical.svg" as const;

const visuallyHiddenSx = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0
} as const;

export function BlogLandingHeroSection() {
  const theme = useTheme();
  const hero = encodePublicPath(BLOG_LANDING_HERO_SRC);
  const verticalSeparator = encodePublicPath(BLOG_VERTICAL_SEPARATOR_SRC);

  return (
    <Box
      component="section"
      aria-labelledby="blog-landing-hero-heading"
      sx={{
        position: "relative",
        minHeight: { xs: unitScale(480), md: unitScale(750) },
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <Typography id="blog-landing-hero-heading" component="h1" sx={visuallyHiddenSx}>
        Videos, Audios, and Blogs — wisdom articles and reflections
      </Typography>
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src={hero}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Box>
      <Container
        maxWidth={pageContainerMaxWidth}
        sx={{
          ...pageSectionGutterSx,
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: unitScale(110), md: unitScale(120) },
          pb: { xs: unitScale(140), md: unitScale(168) }
        }}
      >
        <Box
          component="h2"
          aria-hidden
          sx={{
            m: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: unitScale(10), md: unitScale(16) },
            flexWrap: { xs: "wrap", md: "nowrap" },
            color: theme.palette.common.white,
            fontFamily: "var(--font-forum), serif",
            textAlign: "center"
          }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: unitScale(52), md: unitScale(120) },
              fontWeight: 400,
              lineHeight: 1,
              color: alpha(theme.palette.common.white, 0.72)
            }}
          >
            Videos
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: { xs: unitScale(14), md: unitScale(22) },
              height: { xs: unitScale(46), md: unitScale(94) },
              opacity: 0.78,
              mt: { md: unitScale(6) }
            }}
          >
            <Image src={verticalSeparator} alt="" fill sizes="18px" style={{ objectFit: "contain", objectPosition: "center" }} />
          </Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: unitScale(52), md: unitScale(120) },
              fontWeight: 400,
              lineHeight: 1,
              color: alpha(theme.palette.common.white, 0.72)
            }}
          >
            Audios
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: { xs: unitScale(14), md: unitScale(22) },
              height: { xs: unitScale(46), md: unitScale(94) },
              opacity: 0.78,
              mt: { md: unitScale(6) }
            }}
          >
            <Image src={verticalSeparator} alt="" fill sizes="18px" style={{ objectFit: "contain", objectPosition: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1, mt: { md: unitScale(2) } }}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: { xs: unitScale(56), md: unitScale(120) },
                fontWeight: 400,
                lineHeight: 1,
                color: alpha(theme.palette.common.white, 0.98)
              }}
            >
              Blogs
            </Typography>
            <Box
              sx={{
                mt: unitScale(6),
                position: "relative",
                width: { xs: unitScale(128), md: unitScale(180) },
                height: { xs: unitScale(10), md: unitScale(14) }
              }}
            >
              <Image
                src={encodePublicPath("/images/blog/underlinebar.svg")}
                alt=""
                fill
                sizes="170px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
