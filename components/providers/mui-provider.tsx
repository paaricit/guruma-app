"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "@/lib/mui-theme";

type MuiProviderProps = {
  children: React.ReactNode;
};

export default function MuiProvider({ children }: MuiProviderProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
