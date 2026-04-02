"use client";

import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar } from "@mui/material";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Her", href: "/about-her" },
  { label: "Sessions", href: "/sessions" },
  { label: "Events", href: "/events" },
  { label: "Our Programs", href: "/meditation-program" },
  { label: "Wisdom", href: "/wisdom-videos" },
  { label: "Sapt Sadhana", href: "/sapt-sadhana" },
  { label: "Courses", href: "/meditation-program" },
  { label: "Contact", href: "/contact" }
];

const programsMenuItems: string[] = [];

type SharedHeaderProps = {
  showProgramsMenu?: boolean;
};

export default function SharedHeader({ showProgramsMenu = false }: SharedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => setMobileMenuOpen(true);
  const handleCloseMobileMenu = () => setMobileMenuOpen(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "transparent"
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 72, md: 90 }, px: { xs: 2, md: 3 } }}>
        <Stack
          direction="column"
          component={Link}
          href="/"
          spacing={1}
          alignItems="center"
          sx={{ textDecoration: "none", mr: 2 }}
        >
          <Box sx={{ position: "relative", width: { xs: 36, md: 48 }, height: { xs: 36, md: 48 } }}>
            <Image alt="Guru Maa logo" fill src="/images/logo.svg" style={{ objectFit: "contain" }} />
          </Box>
          <Box sx={{ position: "relative", width: { xs: 130, md: 180 }, height: { xs: 22, md: 30 } }}>
            <Image alt="Guru Maa Shubha Didi" fill src="/images/logo-desc.svg" style={{ objectFit: "contain" }} />
          </Box>
        </Stack>

        <Stack direction="row" spacing={0} sx={{ ml: "auto", display: { xs: "none", lg: "flex" } }}>
          {navItems.map((item) => (
            <Button
              component={Link}
              href={item.href}
              key={item.href}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontFamily: "var(--font-montserrat), sans-serif",
                fontWeight: 600,
                fontSize: 15.4,
                px: 2.2,
                minWidth: 0,
                height: { xs: 56, md: 64 }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>

        <IconButton
          aria-label="Open navigation menu"
          onClick={handleOpenMobileMenu}
          sx={{ ml: "auto", color: "#fff", display: { xs: "inline-flex", lg: "none" } }}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Toolbar>

      {showProgramsMenu && programsMenuItems.length > 0 && (
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: 60,
            left: "50%",
            transform: "translateX(-28%)",
            bgcolor: "rgba(2, 20, 51, 0.95)",
            border: "1px solid rgba(255,255,255,0.16)",
            minWidth: 122,
            zIndex: 10
          }}
        >
          {programsMenuItems.map((item) => (
            <Box
              key={item}
              sx={{
                color: "#fff",
                fontSize: 11,
                px: 1,
                py: 0.8,
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      )}

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "rgba(2, 20, 51, 0.96)",
            color: "#fff",
            p: 2
          }
        }}
      >
        <Stack spacing={1} sx={{ mt: 6 }}>
          {navItems.map((item) => (
            <Button
              key={`mobile-${item.href}-${item.label}`}
              component={Link}
              href={item.href}
              onClick={handleCloseMobileMenu}
              sx={{
                justifyContent: "flex-start",
                color: "#fff",
                textTransform: "none",
                fontFamily: "var(--font-montserrat), sans-serif",
                fontWeight: 600,
                fontSize: 16
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
}
