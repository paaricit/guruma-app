"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import YouTube from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import NextLink from "next/link";
import { FooterContactForm } from "@/component/footer-contact-form";
import {
  footerBodyOnPrimarySx,
  footerColumnHeadingSx,
  footerLabelOnPrimarySx,
  pageSectionGutterSx
} from "@/theme/page-section";
import { pxToRem } from "@/utils/px-to-rem";

const footerBackgroundSrc = "/images/footer-background.png";

const footerVideoSrc = `/images/${encodeURIComponent("Blue Abstract Welcome Background Intro Video.mp4")}`;

const footerColumnHeadingFontSize = { xs: pxToRem(24), md: pxToRem(36) };
const footerBodyFontSize = { xs: pxToRem(15), md: pxToRem(22) };
const footerLabelFontSize = { xs: pxToRem(16), md: pxToRem(21) };

const ADDRESS =
  "4th floor, no 4, Abhinav centre Old no 19, New, off Chamiers Road, Cooperative Colony, Chennai, Tamil Nadu 600018";

const PHONE = "+91-9123-456-789";
const EMAIL = "info@iishtgold.com";

const footerServiceLinks = [
  { label: "About Her", href: "/about-her" },
  { label: "Sessions", href: "/sessions" },
  { label: "Events", href: "/events" },
  { label: "Our Programs", href: "/meditation-program" },
  { label: "Wisdom", href: "/wisdom-videos" },
  { label: "Sapt Sadhana", href: "/sapt-sadhana" },
  { label: "Courses", href: "/isht-gold" },
  { label: "Blogs", href: "/wisdom-blogs" }
] as const;

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com", Icon: YouTube },
  { label: "Facebook", href: "https://www.facebook.com", Icon: FacebookRoundedIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon }
] as const;

/**
 * Global footer — MUI `Grid` (12 columns) for main vs form; nested grid for IISHT / Our Services.
 * Background: looping muted video with image fallback (`prefers-reduced-motion` uses image only).
 */
export default function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        zIndex: 2,
        // overflow: "hidden",
        pt: { xs: 2.5, md: 3 },
        pb: { xs: 2.5, md: 10 },
        color: "primary.contrastText"
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${footerBackgroundSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "none",
          "@media (prefers-reduced-motion: reduce)": {
            display: "block"
          }
        }}
      />
      <Box
        component="video"
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        poster={footerBackgroundSrc}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          "@media (prefers-reduced-motion: reduce)": {
            display: "none"
          }
        }}
      >
        <source src={footerVideoSrc} type="video/mp4" />
      </Box>
      <Box
        aria-hidden
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          zIndex: 1,
          bgcolor: alpha(theme.palette.primary.dark, 0.62),
          pointerEvents: "none"
        })}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          pb: 0.5,
          overflow: "visible",
          ...pageSectionGutterSx
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 7 }}
          columns={12}
          sx={{ width: "100%", alignItems: "flex-start", overflow: "visible", justifyContent: { xs: "center", md: "flex-start" } }}
        >
          <Grid size={{ xs: 12, lg: 7 }} sx={{ minWidth: 0, pt: { xs: 2, md: 4 } }}>
            <Grid container spacing={{ xs: 3, md: 12 }} columns={12} sx={{ width: "100%" }}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
                <Typography
                  component="h2"
                  sx={(theme) => ({
                    ...footerColumnHeadingSx(theme),
                    fontSize: footerColumnHeadingFontSize
                  })}
                >
                  IISHT
                </Typography>
                <Typography
                  sx={(theme) => ({
                    ...footerBodyOnPrimarySx(theme),
                    fontSize: footerBodyFontSize,
                    mt: 1.2,
                    maxWidth: { sm: 420, md: "none" },
                    wordBreak: "break-word",
                    overflowWrap: "anywhere"
                  })}
                >
                  {ADDRESS}
                </Typography>
                <Box
                  sx={(theme) => ({
                    borderBottom: `1px solid ${alpha(theme.palette.primary.contrastText, 0.7)}`,
                    mt: 2.5,
                    width: 130
                  })}
                />

                <Box
                  sx={{
                    mt: 1.8,
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    alignItems: { xs: "flex-start", md: "stretch" },
                    gap: { xs: 0, md: 0 },
                    width: "100%"
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      flex: { xs: "1 1 0%", md: "none" },
                      minWidth: 0,
                      width: { md: "100%" },
                      pr: { xs: 1.5, md: 0 },
                      borderRight: {
                        xs: `1px solid ${alpha(theme.palette.primary.contrastText, 0.35)}`,
                        md: "none"
                      }
                    })}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                      <PhoneInTalkOutlinedIcon />
                      <Typography
                        sx={(theme) => ({
                          ...footerLabelOnPrimarySx(theme),
                          fontSize: footerLabelFontSize
                        })}
                      >
                        Phone number
                      </Typography>
                    </Box>
                    <Typography
                      sx={(theme) => ({
                        ...footerBodyOnPrimarySx(theme),
                        fontSize: footerBodyFontSize,
                        mt: 0.6,
                        wordBreak: "break-all"
                      })}
                    >
                      {PHONE}
                    </Typography>
                    <Box
                      sx={(theme) => ({
                        borderBottom: `1px solid ${alpha(theme.palette.primary.contrastText, 0.7)}`,
                        mt: 2.5,
                        width: 130,
                        display: { xs: "none", md: "block" }
                      })}
                    />
                  </Box>

                  <Box
                    sx={{
                      flex: { xs: "1 1 0%", md: "none" },
                      minWidth: 0,
                      width: { md: "100%" },
                      pl: { xs: 1.5, md: 0 },
                      pt: { xs: 0, md: 0 }
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mt: { xs: 0, md: 1.7 } }}>
                      <EmailOutlinedIcon />
                      <Typography
                        sx={(theme) => ({
                          ...footerLabelOnPrimarySx(theme),
                          fontSize: footerLabelFontSize
                        })}
                      >
                        Email
                      </Typography>
                    </Box>
                    <Typography
                      sx={(theme) => ({
                        ...footerBodyOnPrimarySx(theme),
                        fontSize: footerBodyFontSize,
                        mt: 0.5,
                        wordBreak: "break-all"
                      })}
                    >
                      {EMAIL}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={(theme) => ({
                    borderBottom: `1px solid ${alpha(theme.palette.primary.contrastText, 0.7)}`,
                    mt: 2.5,
                    width: 130
                  })}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
                <Typography
                  component="h2"
                  sx={(theme) => ({
                    ...footerColumnHeadingSx(theme),
                    fontSize: footerColumnHeadingFontSize
                  })}
                >
                  Our Services
                </Typography>
                <Box
                  component="nav"
                  aria-label="Footer services"
                  sx={{
                    mt: 1.5,
                    display: "grid",
                    gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", md: "1fr" },
                    columnGap: { xs: 2, md: 0 },
                    rowGap: 1.5
                  }}
                >
                  {footerServiceLinks.map((item) => (
                    <Link
                      key={item.href}
                      component={NextLink}
                      href={item.href}
                      underline="hover"
                      sx={(theme) => ({
                        ...footerBodyOnPrimarySx(theme),
                        fontSize: footerBodyFontSize,
                        minWidth: 0
                      })}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Box>

                <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap" }}>
                  {socialLinks.map(({ label, href, Icon }) => {
                    const isInstagram = label === "Instagram";
                    const isYouTube = label === "YouTube";
                    return (
                      <IconButton
                        key={label}
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        sx={(theme) => ({
                          width: { xs: isInstagram ? 38 : 40, md: isInstagram ? 44 : 46 },
                          height: { xs: isInstagram ? 38 : 40, md: isInstagram ? 44 : 46 },
                          borderRadius: isInstagram ? "6px" : isYouTube ? "10px" : "50%",
                          bgcolor: isInstagram ? "transparent" : "common.white",
                          border: isInstagram ? `2px solid ${theme.palette.common.white}` : "none",
                          color: isInstagram ? "common.white" : "secondary.main",
                          "&:hover": {
                            bgcolor: isInstagram
                              ? alpha(theme.palette.common.white, 0.08)
                              : alpha(theme.palette.common.white, 0.9)
                          }
                        })}
                      >
                        <Icon sx={{ fontSize: { xs: isInstagram ? 20 : 22, md: isInstagram ? 22 : 24 } }} />
                      </IconButton>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            size={{ xs: 12, lg: 5 }}
            display={{ xs: "none", lg: "block"}}
            mt={-18}
          >
            <FooterContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
