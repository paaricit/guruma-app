"use client";

import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { unitScale } from "@/utils/unit-scale";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const programsMenuItems = [
  { label: "Marriage Counseling", href: "/our-programs/marriage-counselling" },
  { label: "Personal Counseling", href: "/our-programs/personal-counselling" },
  { label: "Meditation Programs", href: "/our-programs/meditation" },
  { label: "Spiritual Retreats", href: "/our-programs/spiritual-retreats" }
] as const;

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Her", href: "/about-her" },
  { label: "Sessions", href: "/sessions" },
  { label: "Events", href: "/events" },
  { label: "Our Programs", href: "/our-programs", children: [...programsMenuItems] },
  { label: "Sapt Sadhana", href: "/sapt-sadhana" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export default function SharedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => setMobileMenuOpen(true);
  const handleCloseMobileMenu = () => setMobileMenuOpen(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={(theme) => ({
        // `color="transparent"` stops MUI from injecting default AppBar `backgroundColor`.
        background: {
          // xs: theme.palette.primary.dark,
          xs: `linear-gradient(0deg, ${alpha(theme.palette.primary.dark, 0)} 23.64%, ${theme.palette.primary.dark} 61.82%, ${theme.palette.common.black} 100%)`
        },
        boxShadow: "none"
      })}
    >
      {/* --- Section: Primary toolbar (logo + nav + menu button) --- */}
      <Toolbar sx={{ minHeight: { xs: unitScale(72), md: unitScale(90) }, px: { xs: 1.5, sm: 2, md: 3 }, maxWidth: "100vw", boxSizing: "border-box" }}>
        <Stack
          direction="column"
          component={Link}
          href="/"
          spacing={1}
          alignItems="center"
          sx={{
            textDecoration: "none",
            mr: { xs: 1, md: 2 },
            position: 'absolute',
            flexShrink: 1,
            minWidth: 0,
            maxWidth: { xs: `calc(100vw - ${unitScale(120)})`, sm: "none" },
            // Nudge logo down without padding (padding grows the flex item and re-centers the whole toolbar).
            transform: { xs: "translateY(0px)", md: `translateY(${unitScale(28)})` }
          }}
        >
          <Box sx={{ position: "relative", width: { xs: unitScale(34), md: unitScale(48) }, height: { xs: unitScale(34), md: unitScale(48) }, flexShrink: 0 }}>
            <Image alt="Guru Maa logo" fill src="/images/logo.svg" style={{ objectFit: "contain" }} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "relative",
              width: { sm: unitScale(130), md: unitScale(180) },
              height: { sm: unitScale(20), md: unitScale(30) },
              flexShrink: 0
            }}
          >
            <Image alt="Guru Maa Shubha Didi" fill src="/images/logo-desc.svg" style={{ objectFit: "contain" }} />
          </Box>
        </Stack>

        <Stack direction="row" spacing={0} sx={{ display: { xs: "none", lg: "flex" }, justifyContent: 'center', flexGrow: 1 }}>
          {navItems.map((item) => {
            const children = item.children ?? [];
            return (
              <Box
                key={`${item.href}-${item.label}`}
                sx={{
                  position: "relative",
                  "&:hover .programs-dropdown, &:focus-within .programs-dropdown": {
                    opacity: 1,
                    visibility: "visible",
                    transform: "translateY(0)"
                  }
                }}
              >
                <Button
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: unitScale(16), md: unitScale(18) },
                    px: 3,
                    minWidth: 0,
                    height: { xs: unitScale(56), md: unitScale(64) }
                  }}
                >
                  {item.label}
                </Button>
                {children.length ? (
                  <Box
                    className="programs-dropdown"
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: "100%",
                      minWidth: unitScale(290),
                      border: "1px solid rgba(255,255,255,0.18)",
                      background: "linear-gradient(180deg, #000000 30%, rgba(0, 0, 0, 0) 100%)",
                      boxShadow: `0 ${unitScale(10)} ${unitScale(32)} rgba(0,0,0,0.25)`,
                      opacity: 0,
                      visibility: "hidden",
                      transform: "translateY(6px)",
                      transition: "opacity 180ms ease, transform 180ms ease, visibility 180ms ease"
                    }}
                  >
                    {children.map((child, index) => (
                      <Button
                        key={child.href}
                        component={Link}
                        href={child.href}
                        sx={{
                          width: "100%",
                          justifyContent: "flex-start",
                          borderRadius: 0,
                          px: unitScale(18),
                          py: unitScale(14),
                          color: "#fff",
                          textTransform: "none",
                          fontFamily: "var(--font-montserrat), sans-serif",
                          fontWeight: 600,
                          fontSize: unitScale(18),
                          borderBottom: index === children.length - 1 ? "none" : "1px solid rgba(255,255,255,0.24)"
                        }}
                      >
                        {child.label}
                      </Button>
                    ))}
                  </Box>
                ) : null}
              </Box>
            );
          })}
        </Stack>

        <IconButton
          aria-label="Open navigation menu"
          onClick={handleOpenMobileMenu}
          sx={{ ml: "auto", color: "#fff", display: { xs: "inline-flex", lg: "none" } }}
        >
          <MenuRoundedIcon sx={{ fontSize: { xs: unitScale(28), md: unitScale(32) } }} />
        </IconButton>
      </Toolbar>

      {/* --- Section: Mobile navigation drawer --- */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
        PaperProps={{
          sx: {
            width: { xs: `min(${unitScale(300)}, calc(100vw - ${unitScale(32)}))`, sm: unitScale(300) },
            maxWidth: "100vw",
            bgcolor: "rgba(2, 20, 51, 0.96)",
            color: "#fff",
            p: 2,
            boxSizing: "border-box"
          }
        }}
      >
        <Stack spacing={1} sx={{ mt: 6 }}>
          {navItems.map((item) => (
            <Box key={`mobile-${item.href}-${item.label}`}>
              <Button
                component={Link}
                href={item.href}
                onClick={handleCloseMobileMenu}
                sx={{
                  justifyContent: "flex-start",
                  color: "#fff",
                  textTransform: "none",
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: unitScale(16), md: unitScale(18) }
                }}
              >
                {item.label}
              </Button>
              {item.children?.map((child) => (
                <Button
                  key={`mobile-${child.href}-${child.label}`}
                  component={Link}
                  href={child.href}
                  onClick={handleCloseMobileMenu}
                  sx={{
                    justifyContent: "flex-start",
                    color: alpha("#fff", 0.9),
                    textTransform: "none",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontWeight: 500,
                    fontSize: unitScale(14),
                    pl: unitScale(26)
                  }}
                >
                  {child.label}
                </Button>
              ))}
            </Box>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
}
