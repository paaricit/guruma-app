"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SiteFooter } from "@/component/site-footer";
import { SiteHeader } from "@/component/site-header";
import { theme } from "@/theme";

type MuiProviderProps = {
  children: React.ReactNode;
};

/**
 * Next.js App Router + Emotion cache (SSR-friendly) + MUI theme.
 * Root layout: global `<header>` + column with flex growth on `<main>`, global `<footer>` outside `<main>`.
 */
export default function MuiProvider({ children }: MuiProviderProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 1,
            minHeight: "100vh",
            "@supports (height: 100dvh)": {
              minHeight: "100dvh"
            }
          }}
        >
          <SiteHeader />
          <Box
            component="main"
            id="main-content"
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              width: 1,
              minHeight: 0
            }}
          >
            {children}
          </Box>
          <SiteFooter />
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
