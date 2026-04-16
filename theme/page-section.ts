import type { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

/**
 * Marketing home (and matching footer): shared fluid type + horizontal gutters.
 * Forum = display headings; Inter = subheads and body.
 */

export const pageContainerMaxWidth = "xl" as const;

/** Default section gutters — use on `Container` `sx` (or merge with `disableGutters` layouts). */
export const pageSectionGutterSx = {
  px: { xs: 2, sm: 2.5, md: 3, lg: 8 }
} as const;

/** Programs: full-bleed on xs; same gutters as `pageSectionGutterSx` from `sm` up. */
export const pageSectionBleedGutterSx = {
  px: { xs: 0, sm: 2.5, md: 3, lg: 8 }
} as const;

// --- Fluid scales (rem + vw) — one ladder for the whole page ---

export const fluidSectionDisplayTitle = "clamp(1.875rem, 0.85rem + 3.6vw, 4.25rem)";

export const fluidSectionEyebrow = "clamp(0.78rem, 0.28vw + 1.2rem, 1.5rem)";

export const fluidSectionSublead = "clamp(0.9375rem, 0.35vw + 0.82rem, 1.35rem)";

export const fluidSectionBody = "clamp(0.875rem, 0.32vw + 0.78rem, 1.0625rem)";

export const fluidSectionBodyProminent = "clamp(0.9375rem, 0.55vw + 0.78rem, 1.25rem)";

/** Program row titles (slightly tighter cap than section H2). */
export const fluidProgramRowTitle = "clamp(1.625rem, 2.8vw + 0.85rem, 3.35rem)";

export const fluidProgramRowEyebrow = "clamp(0.6875rem, 0.38vw + 0.58rem, 1rem)";

export const fluidProgramRowBody = "clamp(0.8125rem, 1vw + 0.58rem, 1.2rem)";

export const fluidSectionPromoLead = "clamp(0.875rem, 1vw + 0.65rem, 1.75rem)";

export const fluidTestimonialQuote = "clamp(1rem, 0.45vw + 0.85rem, 1.2rem)";

export const fluidTestimonialAuthor = "clamp(1rem, 0.38vw + 0.88rem, 1.25rem)";

export const fluidTestimonialLocation = "clamp(0.875rem, 0.3vw + 0.78rem, 1.05rem)";

/** Footer column headings (Forum) — scales down on small screens. */
export const fluidFooterColumnHeading = "clamp(1.5rem, 0.95rem + 2.2vw, 2.5rem)";

/** Footer body / nav links (Inter). */
export const fluidFooterBody = "clamp(0.9375rem, 0.38vw + 0.8rem, 1.25rem)";

export const fluidFooterLabel = "clamp(1rem, 0.45vw + 0.85rem, 1.3125rem)";

/** Footer contact card helper / microcopy */
export const fluidFooterFormHelper = "clamp(0.65rem, 0.28vw + 0.58rem, 0.75rem)";

/** Sapt “Stay Connected” bridge — keeps larger expressive cap. */
export const fluidSaptBridge = "clamp(1.0625rem, 0.75rem + 3.25vw, 4.375rem)";

/** Home impact stats — large numerals (~36–70px intent), scales with viewport. */
export const fluidImpactStatValue = "clamp(2.25rem, 1.1rem + 4.8vw, 3.375rem)";

/** Home impact stats — Forum caption under rule (~16–28px intent). */
export const fluidImpactStatLabel = "clamp(1rem, 0.65rem + 1.4vw, 1.875rem)";

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
    color: alpha(theme.palette.primary.contrastText, 0.95)
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

/** Forum display name (~30–52px intent). */
export const fluidGuruIntroTitle = "clamp(1.875rem, 1rem + 3.2vw, 3.25rem)";

/** Inter tagline under name (uppercase ~14–16px intent). */
export const fluidGuruIntroTagline = "clamp(0.8125rem, 0.28vw + 0.72rem, 1rem)";

/** Role row label beside icon (~15–22px intent). */
export const fluidGuruIntroRole = "clamp(0.9375rem, 0.35vw + 0.82rem, 1.375rem)";

/** Intro body paragraph (~14–21px intent). */
export const fluidGuruIntroBody = "clamp(0.875rem, 0.4vw + 0.88rem, 1.3125rem)";

/** Primary CTA on intro band. */
export const fluidGuruIntroCta = "clamp(0.9375rem, 0.35vw + 0.84rem, 1.0625rem)";

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

/** Inter lead above the Forum name (~16–38px intent). */
export const fluidHomeHeroLead = "clamp(1rem, 0.52rem + 2.15vw, 2.375rem)";

/** Forum hero display (~44–95px intent). */
export const fluidHomeHeroDisplay = "clamp(2.6875rem, 1.2rem + 7.25vw, 5.9375rem)";

/** Hero CTA labels. */
export const fluidHomeHeroCta = "clamp(0.9375rem, 0.38vw + 0.82rem, 1.125rem)";

export function homeHeroLeadOnDarkSx(theme: Theme) {
  return {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontWeight: 500,
    fontSize: fluidHomeHeroLead,
    lineHeight: { xs: 1.4, md: 1.37 },
    color: alpha(theme.palette.common.white, 0.94),
    maxWidth: "32.5rem"
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

