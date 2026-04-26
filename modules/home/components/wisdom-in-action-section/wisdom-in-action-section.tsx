"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { pageSectionGutterSx } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";
import {
  wisdomBadgeDotImage,
  wisdomCards,
  wisdomInActionSectionCurveBg,
  wisdomStarIcon,
  type WisdomCardItem
} from "@/modules/home/content/wisdom-in-action";

/** 1580 tokens — `xs` / `md` only (fluid via `unitScale`). */
const wisdomDisplayTitleFontSize = {
  xs: unitScale(44),
  md: unitScale(70)
} as const;

const wisdomEyebrowFontSize = {
  xs: unitScale(18),
  md: unitScale(22)
} as const;

/** Card + image + footer corners */
const cardRadius = unitScale(42);

/** Card image block height — `fill` needs a definite block size. */
const cardImageHeight = {
  xs: unitScale(280),
  md: unitScale(470)
} as const;

const cardTitleFontSize = {
  xs: unitScale(16),
  md: unitScale(19)
} as const;

const cardSubtitleFontSize = {
  xs: unitScale(15),
  md: unitScale(18)
} as const;

const pillTextFontSize = {
  xs: unitScale(13),
  md: unitScale(15)
} as const;

const cardBodyPadding = {
  xs: unitScale(20),
  md: unitScale(24)
} as const;

const badgeInset = unitScale(25);

const cornerIconSize = unitScale(58);

const backdropBlur = `blur(${unitScale(31.831)})`;

export type WisdomInActionSectionProps = {
  cards?: readonly WisdomCardItem[];
};

export function WisdomInActionSection({ cards = wisdomCards }: WisdomInActionSectionProps) {
  const theme = useTheme();

  /** Was `0.29rem 0.29rem 0.73rem` @ 16px/rem */
  const cardShadow = `${unitScale(4.64)} ${unitScale(4.64)} ${unitScale(11.68)} ${alpha(theme.palette.primary.main, 0.2)}`;
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
        pb: { xs: 8, md: 16 },
        overflow: "visible",
        borderTop: (t) => `1px solid ${t.palette.divider}`,
        backgroundImage: `url('${wisdomInActionSectionCurveBg}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain"
      }}
    >
      {/* <HomeCornerCurveDecor /> */}
      <Container
        maxWidth={'lg'}
        sx={{
          position: "relative",
          ...pageSectionGutterSx,
          
        }}
      >
        <Box sx={{ position: "relative", zIndex: 3, pt: { xs: 0.5, md: 0, lg: 10 }, pb: { xs: 2, md: 3 } }}>
          <Typography
            id="wisdom-in-action-heading"
            component="h2"
            sx={{
              fontFamily: 'var(--font-forum), serif',
              fontWeight: 400,
              fontSize: wisdomDisplayTitleFontSize,
              lineHeight: { xs: 1.1, md: 1.2 },
              color: theme.palette.guru.ink,
              textAlign: "center"
            }}
          >
            Wisdom in Action
          </Typography>
          <Typography
            component="p"
            sx={{
              mt: 0.4,
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
              fontSize: wisdomEyebrowFontSize,
              lineHeight: 1.35,
              letterSpacing: "0.02em",
              textTransform: "none",
              textAlign: "center",
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
            mt: { xs: unitScale(32), md: unitScale(40) },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: unitScale(16), sm: unitScale(20), md: unitScale(24), lg: unitScale(30) }
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
                  height: cardImageHeight,
                  borderTopLeftRadius: cardRadius,
                  borderTopRightRadius: cardRadius,
                  overflow: "hidden"
                }}
              >
                <Image
                  alt={card.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  src={card.image}
                  style={{ objectFit: "cover" }}
                />
                <Box sx={{ position: "absolute", inset: 0, bgcolor: overlayBg }} />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: cardBodyPadding,
                    right: cardBodyPadding,
                    width: cornerIconSize,
                    height: cornerIconSize
                  }}
                >
                  <Image alt="" src={card.icon} fill sizes="72px" style={{ objectFit: "contain" }} />
                </Box>

                <Stack
                  direction="row"
                  spacing={{ xs: 0.75, sm: 1 }}
                  sx={{ position: "absolute", top: badgeInset, left: badgeInset, flexWrap: "wrap", rowGap: 0.75 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: unitScale(6), md: unitScale(9) },
                      px: { xs: unitScale(6), md: unitScale(8.5) },
                      py: { xs: unitScale(4), md: unitScale(4.5) },
                      borderRadius: unitScale(64),
                      bgcolor: pillBg,
                      backdropFilter: backdropBlur
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: pillTextFontSize,
                        lineHeight: 1.2,
                        color: theme.palette.text.primary
                      }}
                    >
                      {card.rating}
                    </Typography>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: unitScale(14), md: unitScale(18) },
                        height: { xs: unitScale(14), md: unitScale(18) },
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
                      gap: { xs: unitScale(6), md: unitScale(8.5) },
                      minHeight: { xs: unitScale(28), md: unitScale(34) },
                      px: { xs: unitScale(9), md: unitScale(13) },
                      py: { xs: unitScale(4), md: unitScale(4.5) },
                      borderRadius: unitScale(64),
                      bgcolor: pillBg,
                      backdropFilter: backdropBlur
                    }}
                  >
                    <Box
                      aria-hidden
                      sx={{
                        position: "relative",
                        width: { xs: unitScale(7), md: unitScale(8.5) },
                        height: { xs: unitScale(7), md: unitScale(8.5) },
                        flexShrink: 0
                      }}
                    >
                      <Image alt="" src={wisdomBadgeDotImage} fill sizes="9px" style={{ objectFit: "contain" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: pillTextFontSize,
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
                  px: cardBodyPadding,
                  py: cardBodyPadding,
                  backdropFilter: backdropBlur,
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
                    fontSize: cardTitleFontSize,
                    lineHeight: { xs: 1.35, md: 1.2 }
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    mt: { xs: unitScale(6), md: unitScale(12) },
                    color: theme.palette.grey[700],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                    fontSize: cardSubtitleFontSize,
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
