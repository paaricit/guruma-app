"use client";

import type { SvgIconComponent } from "@mui/icons-material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import {
  herTeachingsImageSrc,
  herTeachingsItems,
  herTeachingsSectionTitle,
  type HerTeachingIconKey
} from "@/modules/about-her/content/her-teachings";
import { pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

const iconByKey: Record<HerTeachingIconKey, SvgIconComponent> = {
  menuBook: MenuBookOutlinedIcon,
  person: PersonOutlineOutlinedIcon,
  favorite: FavoriteBorderOutlinedIcon,
  visibility: VisibilityOutlinedIcon
};

/** Section display — `xs` / `md` (fluid via `unitScale`). */
const sectionHeadingFontSize = { xs: unitScale(34), md: unitScale(62) } as const;

const itemTitleFontSize = { xs: unitScale(17), md: unitScale(25) } as const;

const itemTitlePaddingBottom = { xs: unitScale(6), md: unitScale(8) } as const;

const itemBodyFontSize = { xs: unitScale(15), md: unitScale(18) } as const;

const iconGlyphSize = { xs: unitScale(22), md: unitScale(28) } as const;

const iconCircleSize = { xs: unitScale(44), md: unitScale(55) } as const;

const containerMinHeight = {
  xs: unitScale(380),
  md: unitScale(520)
} as const;

const containerRadius = unitScale(12);

/** Horizontal pull past the right edge — was `-50px`; fluid via `unitScale`. */
const teachingsBgPositionRight = `right calc(0px - ${unitScale(70)})`;

export function HerTeachingsSection() {
  const theme = useTheme();
  const g = theme.palette.guru;

  return (
    <Box
      component="section"
      aria-labelledby="her-teachings-heading"
      sx={{
        bgcolor: '#fff',
        backgroundImage: { xs: "none", md: `url("${herTeachingsImageSrc}")` },
        backgroundSize: { md: "30%" },
        backgroundPosition: { md: teachingsBgPositionRight },
        backgroundRepeat: { md: "no-repeat" },
        py: { xs: 6, md: 10 }
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          ...pageSectionGutterSx,
          position: "relative",
          overflow: "hidden",
          borderRadius: containerRadius,
          minHeight: containerMinHeight,
          
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1, maxWidth: { xs: "100%" }, minWidth: 0 }}>
          <Typography
            id="her-teachings-heading"
            component="h2"
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: sectionHeadingFontSize,
              lineHeight: { xs: 1.2, md: 1.15 },
              color: g.aboutHerTeachingsTitle,
              mb: { xs: 3, md: 4 }
            }}
          >
            {herTeachingsSectionTitle}
          </Typography>
          <Stack spacing={{ xs: 2.5, md: 3 }}>
            {herTeachingsItems.map(({ title, body, icon }) => {
              const Icon = iconByKey[icon];
              return (
                <Box
                  key={title}
                  sx={{
                    display: "flex",
                    gap: { xs: 1.5, md: 2 },
                    alignItems: "flex-start",
                    minWidth: 0,
                    width: { xs: "100%", md: "50%" }
                  }}
                >
                  <Box
                    sx={{
                      width: iconCircleSize,
                      height: iconCircleSize,
                      borderRadius: "50%",
                      bgcolor: g.aboutHerTeachingsAccent,
                      color: theme.palette.primary.contrastText,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0
                    }}
                  >
                    <Icon sx={{ fontSize: iconGlyphSize }} />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      component="h3"
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 700,
                        fontSize: itemTitleFontSize,
                        lineHeight: { xs: 1.4, md: 1.35 },
                        color: g.aboutHerTeachingsTitle,
                        pb: itemTitlePaddingBottom
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      sx={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: itemBodyFontSize,
                        lineHeight: { xs: 1.52, md: 1.55 },
                        color: g.aboutHerTeachingsBody,
                        m: 0
                      }}
                    >
                      {body}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
