/**
 * Module augmentation for custom palette keys used by Guruma.
 * Import this file once before `createTheme` (see `theme/index.ts`).
 */
declare module "@mui/material/styles" {
  interface Palette {
    guru: {
      warm: string;
      mint: string;
      ink: string;
      /** Light band mid-tone (marketing section washes). */
      surfaceWash: string;
      /** Warm off-white section floor. */
      surfaceCream: string;
    };
  }

  interface PaletteOptions {
    guru?: {
      warm?: string;
      mint?: string;
      ink?: string;
      surfaceWash?: string;
      surfaceCream?: string;
    };
  }
}

export {};
