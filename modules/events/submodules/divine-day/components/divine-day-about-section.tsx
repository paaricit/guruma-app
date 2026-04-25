import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import { pageContainerMaxWidth, pageSectionGutterSx } from "@/theme/page-section";
import { encodePublicPath } from "@/utils/encode-public-path";
import { unitScale } from "@/utils/unit-scale";
import { divineDayImages } from "../content/divine-day-content";

const experienceItems = [
  {
    title: "Guided Meditation",
    body: "Experience stillness and inner silence through a powerful meditation session.",
    iconSrc: "/images/Divine day page Photos/img-1.svg"
  },
  {
    title: "Collective Spiritual Experience",
    body: "Energizing us through initiatives that bring harmony in mind, body, and spirit.",
    iconSrc: "/images/Divine day page Photos/img-2.svg"
  },
  {
    title: "Spiritual Talk",
    body: "Awakening our consciousness through insightful teachings that illuminate the soul.",
    iconSrc: "/images/Divine day page Photos/img-3.svg"
  },
  {
    title: "Awakening to True Self",
    body: "Helping us recognize the higher purpose of our existence and divine nature.",
    iconSrc: "/images/Divine day page Photos/img-4.svg"
  },
  {
    title: "Revealing the Highest Path",
    body: "Empowering us to transcend limitations and experience the divine in every moment.",
    iconSrc: "/images/Divine day page Photos/img-5.svg"
  },
  {
    title: "Divine Presence of Guru Maa Shubha Didi",
    body: "Experience guidance that brings peace, reassurance, and deeper awareness.",
    iconSrc: "/images/Divine day page Photos/img-6.svg"
  },
  {
    title: "Transformational Workshops",
    body: "Expanding our awareness and opening new dimensions of thought and being.",
    iconSrc: "/images/Divine day page Photos/img-7.svg"
  }
] as const;

export function DivineDayAboutSection() {
  const spiralSrc = encodePublicPath(divineDayImages.experienceSpiralBg);
  const topPortraitSrc = encodePublicPath(divineDayImages.experienceTopPortrait);
  const bottomPortraitSrc = encodePublicPath(divineDayImages.experienceBottomPortrait);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: unitScale(56), md: unitScale(72) },
      }}
    >
      <Container maxWidth={false} sx={{ ...pageSectionGutterSx, position: "relative" }}>
        <Box
          sx={{
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.24fr) minmax(0, 0.76fr)" },
            gap: { xs: unitScale(24), md: unitScale(28) },
            alignItems: "center",
            mb: { xs: unitScale(40), md: unitScale(200) }
          }}
          component={Container}
          maxWidth={pageContainerMaxWidth}
        >
          <Box sx={{ position: "absolute", left: 0, top: "-10%", width: "100%", maxWidth: { xs: unitScale(320), md: unitScale(360) }, zIndex: 10 }}>
            <Box sx={{ position: "relative", width: "100%", aspectRatio: "438 / 817" }}>
              <Image src={topPortraitSrc} alt="Guru Maa portrait" fill sizes="(max-width: 900px) 320px, 360px" style={{ objectFit: "contain", objectPosition: "left top" }} />
            </Box>
          </Box>
          <Box></Box>

          <Box sx={{ minWidth: 0, pt: { xs: unitScale(4), md: unitScale(18) } }}>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                color: "guru.coral",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                fontWeight: 500,
                fontSize: unitScale(40),
                mb: { xs: unitScale(18), md: unitScale(24) }
              }}
            >
              What You Will Experience
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: unitScale(14), md: unitScale(18) }
              }}
            >
              {experienceItems.map(({ title, body, iconSrc }) => (
                <Stack key={title} direction="row" spacing={unitScale(10)} alignItems="flex-start">
                  <Box sx={{ position: "relative", width: unitScale(70), height: unitScale(70), mt: unitScale(2), flexShrink: 0 }}>
                    <Image
                      src={encodePublicPath(iconSrc)}
                      alt=""
                      fill
                      sizes="70px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "guru.coral",
                        fontFamily: "var(--font-forum), serif",
                        fontWeight: 500,
                        lineHeight: 1.2,
                        fontSize: unitScale(25)
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: unitScale(4),
                        color: "text.disabled",
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        lineHeight: 1.38,
                        fontSize: unitScale(20)
                      }}
                    >
                      {body}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          aria-hidden
          sx={{
            position: "absolute",
            width: '100%',
            height: '100%',
            top: '10%',
            left: 0,
            // inset: { xs: `${unitScale(210)} 0 ${unitScale(200)} 0`, md: `${unitScale(250)} ${unitScale(10)} ${unitScale(210)} ${unitScale(10)}` },
            zIndex: 1,
            opacity: 0.88,
            pointerEvents: "none"
          }}
        >
          <Image src={spiralSrc} alt="" fill sizes="100vw" style={{ objectFit: "contain", objectPosition: "center" }} />
        </Box>

        <Box
          sx={{
            mt: { xs: unitScale(64), md: unitScale(120) },
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.56fr) minmax(0, 0.44fr)" },
            gap: { xs: unitScale(28), md: unitScale(32) },
            alignItems: "center"
          }}
          component={Container}
          maxWidth={pageContainerMaxWidth}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: unitScale(620) } }}>
            <Typography
              sx={{
                fontFamily: "var(--font-forum), serif",
                color: "guru.coral",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 1.08,
                fontWeight: 500,
                fontSize: unitScale(40)
              }}
            >
              Shubha Didi&apos;s
              <br />
              Divine Presence,
            </Typography>
            <Typography
              sx={{
                mt: { xs: unitScale(12), md: unitScale(16) },
                color: "text.disabled",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                lineHeight: 1.62,
                fontSize: unitScale(20),
                maxWidth: unitScale(540)
              }}
            >
              Boundless energy, and sacred mission have given new meaning to our lives, setting us on the right path toward inner and outer fulfillment.
              When we have received so much, our hearts naturally long to give back - to express our love, gratitude, and joy in the most meaningful way.
              Divine Day is that sacred moment. It is a day to consciously reciprocate love, spread joy, and share the blessings we have received.
            </Typography>
          </Box>

          <Box sx={{ width: "100%", maxWidth: { xs: unitScale(360), md: unitScale(460) }, ml: { xs: 0, md: "auto" } }}>
            <Box sx={{ position: "relative", width: "100%", aspectRatio: "567 / 758" }}>
              <Image src={bottomPortraitSrc} alt="Guru Maa in meditation" fill sizes="(max-width: 900px) 360px, 460px" style={{ objectFit: "contain", objectPosition: "right bottom" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
