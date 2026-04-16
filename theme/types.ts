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
      /** About Her — “Her teachings” band (Figma-approved). */
      aboutHerTeachingsBand: string;
      /** Icon circle fill on that band. */
      aboutHerTeachingsAccent: string;
      /** Display + item titles on the band. */
      aboutHerTeachingsTitle: string;
      /** Supporting copy on the band. */
      aboutHerTeachingsBody: string;
      /** Image well wash behind the photo. */
      aboutHerTeachingsImageWell: string;
      /** About Her — “Pathways to Transformation” display title. */
      pathwaySectionHeading: string;
      /** Pathways block floor behind cards + art. */
      pathwaySectionSurface: string;
      /** Pathway card title. */
      pathwayCardTitle: string;
      /** Pathway card body. */
      pathwayCardBody: string;
      /** Pathway card icon tint on warm tile. */
      pathwayIconAccent: string;
      /** Pathway card border (Figma `rgba(14,123,125,0.15)`). */
      pathwayCardBorder: string;
    };
  }

  interface PaletteOptions {
    guru?: {
      warm?: string;
      mint?: string;
      ink?: string;
      surfaceWash?: string;
      surfaceCream?: string;
      aboutHerTeachingsBand?: string;
      aboutHerTeachingsAccent?: string;
      aboutHerTeachingsTitle?: string;
      aboutHerTeachingsBody?: string;
      aboutHerTeachingsImageWell?: string;
      pathwaySectionHeading?: string;
      pathwaySectionSurface?: string;
      pathwayCardTitle?: string;
      pathwayCardBody?: string;
      pathwayIconAccent?: string;
      pathwayCardBorder?: string;
    };
  }
}

export {};
