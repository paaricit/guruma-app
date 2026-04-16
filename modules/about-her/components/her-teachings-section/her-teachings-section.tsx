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
import { pxToRem } from "@/utils/px-to-rem";

const iconByKey: Record<HerTeachingIconKey, SvgIconComponent> = {
  menuBook: MenuBookOutlinedIcon,
  person: PersonOutlineOutlinedIcon,
  favorite: FavoriteBorderOutlinedIcon,
  visibility: VisibilityOutlinedIcon
};

/** Section display — scales up to 62px from `md` */
const sectionHeadingFontSize = { xs: pxToRem(34), md: pxToRem(62) } as const;

/** Item title — scales up to 25px from `md` */
const itemTitleFontSize = { xs: pxToRem(17), md: pxToRem(25) } as const;

/** Item title → body spacing */
const itemTitlePaddingBottom = { xs: pxToRem(6), md: pxToRem(8) } as const;

/** Body copy — scales up to 18px from `md` (`guru.aboutHerTeachingsBody`) */
const itemBodyFontSize = { xs: pxToRem(15), md: pxToRem(18) } as const;

/** Icon circle + glyph — scale with breakpoint */
const iconGlyphSize = { xs: pxToRem(22), md: pxToRem(28) } as const;

const iconCircleSize = { xs: pxToRem(44), md: pxToRem(55) } as const;

const containerMinHeight = {
  xs: pxToRem(380),
  md: pxToRem(520)
} as const;

const containerRadius = pxToRem(12);

export function HerTeachingsSection() {
  const theme = useTheme();
  const g = theme.palette.guru;

  return (
    <Box
      component="section"
      aria-labelledby="her-teachings-heading"
      sx={{
        bgcolor: g.aboutHerTeachingsBand,
        backgroundImage: { xs: "none", md: `url("${herTeachingsImageSrc}")` },
        backgroundSize: { md: "30%" },
        backgroundPosition: { md: "right -50px" },
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
                        lineHeight: 1.35,
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
                        lineHeight: 1.55,
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
