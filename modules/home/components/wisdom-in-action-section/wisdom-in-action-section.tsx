"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { SectionTopArc } from "@/component/section-top-curve";
import { pageContainerMaxWidth, pageSectionGutterSx, sectionDisplayTitleSx, sectionEyebrowSx } from "@/theme/page-section";
import {
  wisdomBadgeDotImage,
  wisdomCards,
  wisdomStarIcon,
  type WisdomCardItem
} from "@/modules/home/content/wisdom-in-action";
import { HomeCornerCurveDecor } from "@/modules/home/components/home-corner-curve-decor";

/** Card + image + footer corners — scales from ~16px to ~42px (2.65rem). */
const cardRadius = "clamp(1rem, 2.75vw + 0.5rem, 2.65rem)";

/** Card image block height — `fill` needs a definite block size. */
const fluidCardImageHeight = "clamp(20rem, 28vw + 6rem, 34.56rem)";

/** Card title (Inter medium) */
const fluidCardTitle = "clamp(1rem, 1.35vw + 0.82rem, 1.194rem)";

/** Card subtitle line */
const fluidCardSubtitle = "clamp(0.875rem, 0.95vw + 0.72rem, 1.125rem)";

/** Rating / badge pill text */
const fluidPillText = "clamp(0.75rem, 0.55vw + 0.62rem, 0.928rem)";

/** Inset padding for card text block */
const fluidCardBodyPadding = "clamp(1rem, 2.2vw, 1.525rem)";

/** Badge stack offset from edges */
const fluidBadgeInset = "clamp(0.85rem, 2.2vw, 1.59rem)";

/** Corner media icon box */
const fluidCornerIcon = "clamp(2.5rem, 5.5vw, 3.6rem)";

export type WisdomInActionSectionProps = {
  cards?: readonly WisdomCardItem[];
};

export function WisdomInActionSection({ cards = wisdomCards }: WisdomInActionSectionProps) {
  const theme = useTheme();

  const cardShadow = `0.29rem 0.29rem 0.73rem ${alpha(theme.palette.primary.main, 0.2)}`;
  const pillBg = alpha(theme.palette.common.white, 0.9);
  const overlayBg = alpha(theme.palette.common.black, 0.2);

  return (
    <Box
      component="section"
      aria-labelledby="wisdom-in-action-heading"
      sx={{
        position: "relative",
        zIndex: 2,
        isolation: "isolate",
        bgcolor: "#F3F2EE",
        pt: { xs: 2, md: 2.5 },
        pb: { xs: 8, md: 9 },
        overflow: "visible",
        borderTop: (t) => `1px solid ${t.palette.divider}`
      }}
    >
      {/* <HomeCornerCurveDecor /> */}
      <Container maxWidth={pageContainerMaxWidth} sx={{ position: "relative", ...pageSectionGutterSx }}>
        <Box sx={{ position: "relative", zIndex: 3,  pt: { xs: 0.5, md: 0, lg: 10 }, pb: { xs: 2, md: 3 } }}>
          <Typography id="wisdom-in-action-heading" component="h2" sx={sectionDisplayTitleSx(theme)}>
            Wisdom in Action
          </Typography>
          <Typography
            component="p"
            sx={{
              mt: 0.4,
              ...sectionEyebrowSx(theme, { uppercase: false, fontWeight: 400 }),
              color: alpha(theme.palette.text.primary, 0.95)
            }}
          >
            We work hard to gain a trust of you.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            mt: { xs: 3, md: "clamp(2rem, 3.5vw, 2.5rem)" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: "clamp(1rem, 3vw, 1.5rem)", md: "clamp(1.5rem, 2.5vw, 1.75rem)" }
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.title}
              sx={{
                borderRadius: cardRadius,
                boxShadow: cardShadow,
                overflow: "hidden",
                bgcolor: theme.palette.background.paper
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: fluidCardImageHeight,
                  borderTopLeftRadius: cardRadius,
                  borderTopRightRadius: cardRadius,
                  overflow: "hidden"
                }}
              >
                <Image
                  alt={card.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  src={card.image}
                  style={{ objectFit: "cover" }}
                />
                <Box sx={{ position: "absolute", inset: 0, bgcolor: overlayBg }} />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: fluidCardBodyPadding,
                    right: fluidCardBodyPadding,
                    width: fluidCornerIcon,
                    height: fluidCornerIcon
                  }}
                >
                  <Image alt="" src={card.icon} fill sizes="72px" style={{ objectFit: "contain" }} />
                </Box>

                <Stack
                  direction="row"
                  spacing={{ xs: 0.75, sm: 1 }}
                  sx={{ position: "absolute", top: fluidBadgeInset, left: fluidBadgeInset, flexWrap: "wrap", rowGap: 0.75 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(0.35rem, 1vw, 0.55rem)",
                      px: "clamp(0.4rem, 1.1vw, 0.53rem)",
                      py: "clamp(0.2rem, 0.6vw, 0.27rem)",
                      borderRadius: "4rem",
                      bgcolor: pillBg,
                      backdropFilter: "blur(31.831px)"
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: fluidPillText,
                        lineHeight: 1.2,
                        color: theme.palette.text.primary
                      }}
                    >
                      {card.rating}
                    </Typography>
                    <Box
                      sx={{
                        position: "relative",
                        width: "clamp(0.875rem, 2vw, 1.125rem)",
                        height: "clamp(0.875rem, 2vw, 1.125rem)",
                        flexShrink: 0
                      }}
                    >
                      <Image alt="" src={wisdomStarIcon} fill sizes="18px" style={{ objectFit: "contain" }} />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(0.35rem, 1vw, 0.53rem)",
                      minHeight: "clamp(1.75rem, 4vw, 2.12rem)",
                      px: "clamp(0.55rem, 1.5vw, 0.8rem)",
                      py: "clamp(0.2rem, 0.6vw, 0.27rem)",
                      borderRadius: "4rem",
                      bgcolor: pillBg,
                      backdropFilter: "blur(31.831px)"
                    }}
                  >
                    <Box
                      aria-hidden
                      sx={{
                        position: "relative",
                        width: "clamp(0.45rem, 1vw, 0.53rem)",
                        height: "clamp(0.45rem, 1vw, 0.53rem)",
                        flexShrink: 0
                      }}
                    >
                      <Image alt="" src={wisdomBadgeDotImage} fill sizes="9px" style={{ objectFit: "contain" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: fluidPillText,
                        lineHeight: 1.2,
                        color: theme.palette.text.primary
                      }}
                    >
                      {card.badge}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box
                sx={{
                  px: fluidCardBodyPadding,
                  py: fluidCardBodyPadding,
                  backdropFilter: "blur(31.831px)",
                  bgcolor: alpha(theme.palette.background.paper, 0.98),
                  borderBottomLeftRadius: cardRadius,
                  borderBottomRightRadius: cardRadius
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: fluidCardTitle,
                    lineHeight: { xs: 1.35, sm: 1.25, md: 1.2 }
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    mt: "clamp(0.4rem, 1.2vw, 0.75rem)",
                    color: theme.palette.grey[700],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                    fontSize: fluidCardSubtitle,
                    lineHeight: { xs: 1.4, md: 1.2 }
                  }}
                >
                  {card.subtitle}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
