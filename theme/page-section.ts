import type { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { unitScale } from "@/utils/unit-scale";

/**
 * Marketing home (and matching footer): shared fluid type + horizontal gutters.
 * Forum = display headings; Inter = subheads and body.
 * Fluid type uses `unitScale(px@1580)` (vw + auto floor) instead of `clamp(rem, vw, rem)`.
 */

export const pageContainerMaxWidth = "lg" as const;

/** Default section gutters — use on `Container` `sx` (or merge with `disableGutters` layouts). */
export const pageSectionGutterSx = {
  px: { xs: 2, sm: 2.5, md: 3, lg: 0 }
} as const;

/** Programs: full-bleed on xs; same gutters as `pageSectionGutterSx` from `sm` up. */
export const pageSectionBleedGutterSx = {
  px: { xs: 0, sm: 2.5, md: 3, lg: 8 }
} as const;

// --- Fluid scales (`unitScale` @ 1580 — former clamp max @ 16px/rem) ---

export const fluidSectionDisplayTitle = unitScale(68);

export const fluidSectionEyebrow = unitScale(24);

export const fluidSectionSublead = unitScale(21.6);

export const fluidSectionBody = unitScale(17);

export const fluidSectionBodyProminent = unitScale(20);

/** Program row titles (slightly tighter cap than section H2). */
export const fluidProgramRowTitle = unitScale(53.6);

export const fluidProgramRowEyebrow = unitScale(16);

export const fluidProgramRowBody = unitScale(19.2);

export const fluidSectionPromoLead = unitScale(28);

export const fluidTestimonialQuote = unitScale(19.2);

export const fluidTestimonialAuthor = unitScale(20);

export const fluidTestimonialLocation = unitScale(16.8);

/** Footer column headings (Forum) — scales down on small screens. */
export const fluidFooterColumnHeading = unitScale(40);

/** Footer body / nav links (Inter). */
export const fluidFooterBody = unitScale(20);

export const fluidFooterLabel = unitScale(21);

/** Footer contact card helper / microcopy */
export const fluidFooterFormHelper = unitScale(12);

/** Sapt “Stay Connected” bridge — keeps larger expressive cap. */
export const fluidSaptBridge = unitScale(70);

/** Home impact stats — large numerals; token = former clamp max (3.375rem). */
export const fluidImpactStatValue = unitScale(54);

/** Home impact stats — Forum caption under rule; token = former clamp max (1.875rem). */
export const fluidImpactStatLabel = unitScale(30);

// --- Sx factories ---

export function sectionDisplayTitleSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-forum), serif',
    fontWeight: 400,
    fontSize: fluidSectionDisplayTitle,
    lineHeight: { xs: 1.1, md: 1.2 },
    color: theme.palette.guru.ink,
    textAlign: "center" as const
  };
}

export function sectionDisplayTitleOnDarkSx(theme: Theme) {
  return {
    ...sectionDisplayTitleSx(theme),
    color: alpha(theme.palette.common.white, 0.96)
  };
}

export function sectionEyebrowSx(
  theme: Theme,
  opts?: { uppercase?: boolean; fontWeight?: number; textAlign?: "center" | "left" }
) {
  const uppercase = opts?.uppercase ?? false;
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: opts?.fontWeight ?? 600,
    fontSize: fluidSectionEyebrow,
    lineHeight: 1.35,
    letterSpacing: uppercase ? "0.14em" : "0.02em",
    textTransform: (uppercase ? "uppercase" : "none") as "uppercase" | "none",
    color: theme.palette.text.primary,
    textAlign: (opts?.textAlign ?? "center") as "center" | "left"
  };
}

export function sectionSubleadSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: 400,
    fontSize: fluidSectionSublead,
    lineHeight: 1.45,
    textAlign: "center" as const,
    color: alpha(theme.palette.text.primary, 0.88)
  };
}

export function sectionSubleadOnDarkSx(theme: Theme) {
  return {
    ...sectionSubleadSx(theme),
    color: alpha(theme.palette.common.white, 0.88)
  };
}

export function footerColumnHeadingSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), serif',
    fontWeight: 400,
    fontSize: fluidFooterColumnHeading,
    lineHeight: 1.15,
    color: alpha(theme.palette.primary.contrastText, 0.98)
  };
}

export function footerBodyOnPrimarySx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: 400,
    fontSize: fluidFooterBody,
    lineHeight: 1.45,
    color: alpha(theme.palette.primary.contrastText, 0.75)
  };
}

export function footerLabelOnPrimarySx(theme: Theme) {
  return {
    ...footerBodyOnPrimarySx(theme),
    fontSize: fluidFooterLabel,
    fontWeight: 600
  };
}

/** Impact stats row — Poppins value on photo / dark overlay. */
export function impactStatValueOnDarkSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-poppins), var(--font-inter), system-ui, sans-serif',
    fontWeight: 600,
    fontSize: fluidImpactStatValue,
    lineHeight: { xs: 1.1, md: 1.2 },
    color: alpha(theme.palette.common.white, 0.98)
  };
}

/** Impact stats row — Forum label under hairline. */
export function impactStatLabelOnDarkSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-forum), ui-serif, Georgia, serif',
    fontWeight: 400,
    fontSize: fluidImpactStatLabel,
    lineHeight: { xs: 1.25, md: 1.3 },
    color: alpha(theme.palette.common.white, 0.94)
  };
}

// --- Home: Guru Maa intro (video + roles) — fluid type, theme colors ---

/** Forum display name — former clamp max 3.25rem. */
export const fluidGuruIntroTitle = unitScale(52);

/** Inter tagline under name (uppercase). */
export const fluidGuruIntroTagline = unitScale(16);

/** Role row label beside icon. */
export const fluidGuruIntroRole = unitScale(22);

/** Intro body paragraph. */
export const fluidGuruIntroBody = unitScale(21);

/** Primary CTA on intro band. */
export const fluidGuruIntroCta = unitScale(17);

export function guruIntroSectionBackgroundSx(theme: Theme) {
  return {
    background: `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.guru.surfaceWash} 50%, ${theme.palette.guru.surfaceCream} 100%)`
  };
}

export function guruIntroTitleSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-forum), ui-serif, Georgia, serif',
    fontWeight: 400,
    fontSize: fluidGuruIntroTitle,
    lineHeight: 1.05,
    color: theme.palette.secondary.main
  };
}

export function guruIntroTaglineSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: 700,
    fontSize: fluidGuruIntroTagline,
    lineHeight: 1.35,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: alpha(theme.palette.secondary.main, 0.92),
    mt: 1
  };
}

export function guruIntroRoleLabelSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: 500,
    fontSize: fluidGuruIntroRole,
    lineHeight: 1.35,
    color: alpha(theme.palette.guru.ink, 0.88)
  };
}

export function guruIntroBodySx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: 400,
    fontSize: fluidGuruIntroBody,
    lineHeight: 1.75,
    color: alpha(theme.palette.text.primary, 0.72),
    mt: { xs: 2, md: 2.5 }
  };
}

// --- Home: Hero (banner + lead + display + CTAs) — fluid type, theme colors ---

/** Inter lead above the Forum name — former clamp max 2.375rem. */
export const fluidHomeHeroLead = unitScale(38);

/** Forum hero display — former clamp max 5.9375rem. */
export const fluidHomeHeroDisplay = unitScale(95);

/** Hero CTA labels — former clamp max 1.125rem. */
export const fluidHomeHeroCta = unitScale(18);

export function homeHeroLeadOnDarkSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: 500,
    fontSize: fluidHomeHeroLead,
    lineHeight: { xs: 1.4, md: 1.37 },
    color: alpha(theme.palette.common.white, 0.94),
    maxWidth: unitScale(520)
  };
}

export function homeHeroDisplayOnDarkSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-forum), ui-serif, Georgia, serif',
    fontWeight: 400,
    fontSize: fluidHomeHeroDisplay,
    lineHeight: { xs: 1.05, md: 0.88, lg: 0.82 },
    color: alpha(theme.palette.common.white, 0.96),
    letterSpacing: { xs: "-0.01em", md: 0 }
  };
}

/**
 * Mobile hero — no photo: `primary.dark` → same ink @ 0.7 alpha (no white). Section uses solid `primary.dark` under this layer.
 */
export function homeHeroMobileGradientBackdropSx(theme: Theme) {
  const ink = theme.palette.primary.dark;
  return {
    position: "absolute" as const,
    inset: 0,
    zIndex: 0,
    display: { xs: "block", md: "none" },
    background: `linear-gradient(180deg, ${ink} 0%, ${alpha(ink, 0.85)} 42%, ${alpha(ink, 0.7)} 100%)`
  };
}

/** Hero photo — desktop only (`md+`): cover + center under wash. */
export function homeHeroImageLayerSx(theme: Theme, bannerSrc: string) {
  return {
    position: "absolute" as const,
    inset: 0,
    zIndex: 0,
    display: { xs: "none", md: "block" },
    backgroundImage: `url('${bannerSrc}')`,
    backgroundRepeat: "no-repeat" as const,
    backgroundSize: "cover" as const,
    backgroundPosition: "center center" as const
  };
}

/** Hero gradient wash on top of the photo (same edge intent as legacy composite). */
export function homeHeroGradientWashSx(theme: Theme) {
  return {
    position: "absolute" as const,
    inset: 0,
    zIndex: 1,
    pointerEvents: "none" as const,
    backgroundImage: `linear-gradient(270deg, ${alpha(theme.palette.common.black, 0)} 0%, ${alpha(theme.palette.common.black, 0)} 29%, ${theme.palette.secondary.main} 100%)`
  };
}

