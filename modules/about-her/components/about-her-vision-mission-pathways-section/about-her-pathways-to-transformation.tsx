"use client";

import type { SvgIconComponent } from "@mui/icons-material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import {
  aboutHerPathways,
  aboutHerPathwaysSectionTitle,
  type AboutHerPathwayIconKey
} from "@/modules/about-her/content/vision-mission-pathways";
import { unitScale } from "@/utils/unit-scale";

const pathwayIconByKey: Record<AboutHerPathwayIconKey, SvgIconComponent> = {
  favorite: FavoriteBorderOutlinedIcon,
  autoAwesome: AutoAwesomeOutlinedIcon,
  nightlight: NightlightRoundOutlinedIcon,
  waves: WavesOutlinedIcon,
  volunteerActivism: VolunteerActivismOutlinedIcon,
  spa: SpaOutlinedIcon
};

/** Figma node `1:7478` — Forum; `xs` / `md` only (fluid via `unitScale`). */
const pathwaysTitleFontSize = {
  xs: unitScale(40),
  md: unitScale(71)
} as const;

const pathwayCardTitleFontSize = {
  xs: unitScale(22),
  md: unitScale(26)
} as const;

const pathwayCardBodyFontSize = {
  xs: unitScale(18),
  md: unitScale(21)
} as const;

/** Line height for ~21px body (~34px line box) */
const pathwayCardBodyLineHeightRatio = 34 / 21;

const pathwayCardTitleLineHeight = {
  xs: unitScale(28),
  md: unitScale(32)
} as const;

const pathwayIconTileSize = {
  xs: unitScale(44),
  md: unitScale(65)
} as const;

const pathwayIconTileRadius = unitScale(14);

const pathwayIconGlyphSize = {
  xs: unitScale(22),
  md: unitScale(26)
} as const;

const cardRadius = unitScale(21);

/** Section art behind the pathway cards (1528×1070, from design export). */
const pathwaysCardsBackgroundImage = "/images/about-her/pathways-section-bg.svg";

export function AboutHerPathwaysToTransformation() {
  const theme = useTheme();
  const g = theme.palette.guru;
  const cardShadow = alpha(theme.palette.primary.dark, 0.06);

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: {lg: `url(${pathwaysCardsBackgroundImage})`, xs: 'none'},
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
        backgroundSize: "100% auto",
        px: { xs: 4, md: 14 },
        pb: { xs: 6, md: 18 },
        pt: { xs: 6, md: 10 },
      }}>
      <Container
        maxWidth={'lg'}
      >
        <Typography
          id="about-her-pathways-heading"
          component="h2"
          sx={{
            textAlign: "center",
            fontFamily: 'var(--font-forum), ui-serif, Georgia, serif',
            fontWeight: 400,
            fontSize: pathwaysTitleFontSize,
            lineHeight: { xs: 1.12, md: 1.08 },
            letterSpacing: "0.006em",
            color: g.pathwaySectionHeading,
            mb: { xs: 2.5, md: 4 },
            px: { xs: 0, md: 1 },
            maxWidth: "100%"
          }}
        >
          {aboutHerPathwaysSectionTitle}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))"
            },
            gap: { xs: 2, sm: 2.25, md: 2.5, lg: 3 },
            alignItems: "stretch",
            width: 1,
            position: "relative"
          }}
        >
          {aboutHerPathways.map(({ title, description, icon, iconSrc, iconFillsTile }) => {
            const Icon = pathwayIconByKey[icon];
            return (
              <Card
                key={title}
                elevation={0}
                sx={{
                  borderRadius: cardRadius,
                  p: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  bgcolor: theme.palette.common.white,
                  border: `1px solid ${g.pathwayCardBorder}`,
                  boxShadow: `0 ${unitScale(6)} ${unitScale(24)} ${cardShadow}`,
                  minWidth: 0,
                  minHeight: unitScale(350),
                  justifyContent: 'space-evenly'
                }}
              >
                <Box
                  sx={{
                    width: pathwayIconTileSize,
                    height: pathwayIconTileSize,
                    borderRadius: pathwayIconTileRadius,
                    bgcolor: iconFillsTile
                      ? "transparent"
                      : alpha(g.aboutHerTeachingsAccent, 0.22),
                    color: g.pathwayIconAccent,
                    display: "grid",
                    placeItems: "center",
                    mb: { xs: 1.5, md: 2 },
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {iconSrc ? (
                    <Box
                      alt=""
                      component="img"
                      decoding="async"
                      loading="lazy"
                      src={iconSrc}
                      sx={{
                        width: iconFillsTile ? "100%" : "72%",
                        height: iconFillsTile ? "100%" : "72%",
                        objectFit: "contain",
                        display: "block"
                      }}
                    />
                  ) : (
                    <Icon sx={{ fontSize: pathwayIconGlyphSize }} />
                  )}
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: pathwayCardTitleFontSize,
                    lineHeight: pathwayCardTitleLineHeight,
                    letterSpacing: "-0.022em",
                    color: g.pathwayCardTitle,
                    textAlign: "center",
                    width: "100%",
                    mb: { xs: 0.75, md: 1 }
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                    fontSize: pathwayCardBodyFontSize,
                    lineHeight: pathwayCardBodyLineHeightRatio,
                    letterSpacing: "-0.025em",
                    color: g.pathwayCardBody,
                    textAlign: "center",
                    width: "100%",
                    m: 0
                  }}
                >
                  {description}
                </Typography>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Container>
  );
}
