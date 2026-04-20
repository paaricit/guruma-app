import type { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { palette } from "@/theme/palette";
import { unitScale } from "@/utils/unit-scale";

/**
 * Marketing home, Sessions page, and matching footer: shared fluid type + horizontal gutters.
 * Forum = display headings; Inter = subheads and body.
 * Fluid type uses `unitScale(px@1580)` (vw + auto floor) instead of `clamp(rem, vw, rem)`.
 */

export const pageContainerMaxWidth = "lg" as const;

/**
 * Vertical mint → paper wash for the combined seeker testimonials + FAQ band (`SessionsPage` wrapper).
 * Matches the former `SessionsSeekerTestimonialsSection` fill (`primary.light` → white).
 */
const paletteMint = (palette.primary as { light?: string } | undefined)?.light ?? "#d1f1f5";
const palettePaper = (palette.background as { paper?: string } | undefined)?.paper ?? "#ffffff";

export const sessionsSeekerTestimonialsFaqBandGradient =
  `linear-gradient(180deg, ${paletteMint} 0%, ${palettePaper} 100%)` as const;

/** Default section gutters — use on `Container` `sx` (or merge with `disableGutters` layouts). */
export const pageSectionGutterSx = {
  px: { xs: 4, sm: 4, md: 3, lg: 0 }
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

// --- Sessions page — fluid typography & spacing (`unitScale` @1580; xs / sm / md) ---

/** Forum hero title on dark banner (Figma ~68px @ desktop). */
export const sessionsFluidHeroDisplay = {
  xs: unitScale(44),
  sm: unitScale(52),
  md: unitScale(68)
} as const;

/** Pill label “FREE for All Seekers” (Figma ~21px @ desktop, Inter Medium). */
export const sessionsFluidHeroBadgeLabel = {
  xs: unitScale(16),
  sm: unitScale(18),
  md: unitScale(21)
} as const;

/** Hero sublead under title (Figma ~26px @ desktop, Inter Regular). */
export const sessionsFluidHeroSublead = {
  xs: unitScale(17),
  sm: unitScale(21),
  md: unitScale(26)
} as const;

export const sessionsFluidHeroLeadMaxWidth = unitScale(620);

/** Standard Forum section H2 (most light bands). */
export const sessionsFluidSectionHeading = {
  xs: unitScale(32),
  sm: unitScale(38),
  md: unitScale(70)
} as const;

/** Slightly smaller Forum H2 (e.g. Divine Discourses). */
export const sessionsFluidSectionHeadingAccent = {
  xs: unitScale(36),
  sm: unitScale(42),
  md: unitScale(48)
} as const;

/** Sessions Divine Discourses H2 (Figma ~51px @ desktop). */
export const sessionsFluidDivineDiscoursesTitle = {
  xs: unitScale(32),
  sm: unitScale(40),
  md: unitScale(51)
} as const;

/** Sessions Divine Discourses body (Figma ~22px @ desktop). */
export const sessionsFluidDivineDiscoursesBody = {
  xs: unitScale(16),
  sm: unitScale(18),
  md: unitScale(22)
} as const;

/** “What Are These FREE Live Sessions?” Forum display (Figma ~71px @ desktop). */
export const sessionsFluidFreeLiveSectionHeading = {
  xs: unitScale(32),
  sm: unitScale(44),
  md: unitScale(71)
} as const;

/** Pillar card title — Inter Medium (Figma ~24px @ desktop). */
export const sessionsFluidFreeLivePillarTitle = {
  xs: unitScale(18),
  sm: unitScale(20),
  md: unitScale(24)
} as const;

/** Pillar card body (Figma ~20px @ desktop). */
export const sessionsFluidFreeLivePillarBody = {
  xs: unitScale(15),
  sm: unitScale(17),
  md: unitScale(20)
} as const;

/**
 * “How to Join” main title — Figma `1:7869` (~71px @ ~1528px frame), Forum Regular.
 * @see https://www.figma.com/design/PBbuPRB1M6hXrVa2BLIv0B/Guru-Ma-Approved-version--Copy-?node-id=1-7869
 */
export const sessionsFluidHowToJoinTitle = {
  xs: unitScale(38),
  sm: unitScale(54),
  md: unitScale(70.954)
} as const;

/** How to Join subtitle + CTA label size — Figma `1:7869` Inter ~23.6px. */
export const sessionsFluidHowToJoinSublead = {
  xs: unitScale(16),
  sm: unitScale(20),
  md: unitScale(23.572)
} as const;

/** How to Join step descriptions — Figma `1:7869` Inter ~21px. */
export const sessionsFluidHowToJoinBody = {
  xs: unitScale(15),
  sm: unitScale(18),
  md: unitScale(20.953)
} as const;

/** Section subcopy / centered blurbs (schedule, guidelines, etc.). */
export const sessionsFluidSectionSublead = {
  xs: unitScale(15),
  sm: unitScale(16),
  md: unitScale(18)
} as const;

/** Card and list body. */
export const sessionsFluidBody = {
  xs: unitScale(15),
  sm: unitScale(16),
  md: unitScale(17)
} as const;

/**
 * FAQ question line (Inter Semi Bold in Figma `1:7953`).
 * @see https://www.figma.com/design/PBbuPRB1M6hXrVa2BLIv0B/Guru-Ma-Approved-version--Copy-?node-id=1-7953
 */
export const sessionsFluidFaqQuestion = {
  xs: unitScale(15),
  sm: unitScale(16),
  md: unitScale(17)
} as const;

/** FAQ answer body — matches section subcopy scale in the same frame. */
export const sessionsFluidFaqAnswer = sessionsFluidBody;

/** FAQ chevron (ExpandMore). */
export const sessionsFaqExpandIconSize = {
  xs: unitScale(22),
  sm: unitScale(24),
  md: unitScale(28)
} as const;

/** Gap between stacked FAQ accordions. */
export const sessionsFaqAccordionGap = {
  xs: unitScale(10),
  sm: unitScale(12),
  md: unitScale(14)
} as const;

/** FAQ card corner radius — same family as testimonial cards (`~19.2px` @ reference). */
export const sessionsFaqAccordionRadius = unitScale(19.2);

/** Accordion summary horizontal padding. */
export const sessionsFaqSummaryPx = {
  xs: unitScale(16),
  sm: unitScale(20),
  md: unitScale(24)
} as const;

/** Accordion summary vertical padding. */
export const sessionsFaqSummaryPy = {
  xs: unitScale(14),
  sm: unitScale(16),
  md: unitScale(18)
} as const;

/** Accordion details horizontal padding (align with summary text block). */
export const sessionsFaqDetailsPx = sessionsFaqSummaryPx;

/** Accordion details bottom padding; top flush under divider. */
export const sessionsFaqDetailsPb = {
  xs: unitScale(16),
  sm: unitScale(18),
  md: unitScale(20)
} as const;

/** Max width for FAQ copy column (readable measure on large screens). */
export const sessionsFaqContainerMaxWidth = "md" as const;

/** Schedule card title (~1.1rem / 1.35rem). */
export const sessionsFluidCardTitle = {
  xs: unitScale(17.6),
  sm: unitScale(19.2),
  md: unitScale(21.6)
} as const;

/** Badge line in schedule card. */
export const sessionsFluidBadge = {
  xs: unitScale(13),
  sm: unitScale(13.5),
  md: unitScale(14)
} as const;

/**
 * Sessions schedule full-bleed spiral decor (orange spiral SVG).
 * Pair with `sessionsScheduleSpiralDecorSx` on the full-bleed wrap (`Container maxWidth={false}`).
 */
export const sessionsScheduleSpiralDecorImage = "/images/sessions/spiral-orange.svg" as const;

export const sessionsScheduleSpiralDecorSx = {
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "50% 0" as const,
  backgroundSize: "100% auto" as const
};

/** Horizontal padding on the spiral layer (matches Pathways outer wrap). */
export const sessionsScheduleSpiralWrapPx = { xs: 4, md: 14 } as const;

/** Testimonial quote. */
export const sessionsFluidTestimonialQuote = {
  xs: unitScale(16),
  sm: unitScale(17),
  md: unitScale(18)
} as const;

/** Stat numerals under testimonials. */
export const sessionsFluidStatValue = {
  xs: unitScale(36),
  sm: unitScale(40),
  md: unitScale(44)
} as const;

/** Step numerals in How to Join — Figma `1:7869` Poppins SemiBold ~52.4px. */
export const sessionsFluidStepNumber = {
  xs: unitScale(40),
  sm: unitScale(46),
  md: unitScale(52.382)
} as const;

/** How to Join step titles (Register / Connect / Join) — Figma `1:7869` Inter Semi Bold ~28.8px. */
export const sessionsFluidHowToJoinStepTitle = {
  xs: unitScale(20),
  sm: unitScale(24),
  md: unitScale(28.81)
} as const;

/** @deprecated Use {@link sessionsFluidHowToJoinStepTitle}; kept for older imports. */
export const sessionsFluidPillarTitle = sessionsFluidHowToJoinStepTitle;

/** How to Join numbered circle diameter — Figma `1:7869` ~125.7px. */
export const sessionsHowToJoinStepCircle = {
  xs: unitScale(96),
  sm: unitScale(112),
  md: unitScale(125.716)
} as const;

/** How to Join 3-col grid gap — Figma `1:7869` ~41.9px. */
export const sessionsHowToJoinGridGap = {
  xs: unitScale(24),
  sm: unitScale(32),
  md: unitScale(41.905)
} as const;

/** “What happens” item titles. */
export const sessionsFluidItemTitle = {
  xs: unitScale(16),
  sm: unitScale(16.5),
  md: unitScale(16.8)
} as const;

/**
 * Sessions “What happens in a Session” band (Figma `1:8030`).
 * Mint → warm off-white; pair with `sessionsWhatHappensArcSurface` on `SectionTopArc`.
 */
export const sessionsWhatHappensBackgroundGradient =
  "linear-gradient(180deg, #D9F3F7 0%, #F1F1ED 100%)" as const;

/** Top curve seam fill — Figma surface / vertical mint (`#D9F3F7`). */
export const sessionsWhatHappensArcSurface = "#D9F3F7" as const;

export const sessionsSectionPyTight = {
  xs: unitScale(24),
  sm: unitScale(28),
  md: unitScale(36)
} as const;

export const sessionsSectionPySm = {
  xs: unitScale(32),
  sm: unitScale(40),
  md: unitScale(48)
} as const;

export const sessionsSectionPyMd = {
  xs: unitScale(48),
  sm: unitScale(56),
  md: unitScale(72)
} as const;

/**
 * FAQ band vertical padding (Figma `1:7953` — comfortable section rhythm).
 * @see https://www.figma.com/design/PBbuPRB1M6hXrVa2BLIv0B/Guru-Ma-Approved-version--Copy-?node-id=1-7953
 */
export const sessionsFaqSectionPy = {
  pt: {
    xs: unitScale(28),
    sm: unitScale(32),
    md: unitScale(40)
  },
  pb: sessionsSectionPyMd
} as const;

export const sessionsSectionPyLg = {
  xs: unitScale(48),
  sm: unitScale(64),
  md: unitScale(90)
} as const;

export const sessionsSectionPyBand = {
  xs: unitScale(56),
  sm: unitScale(64),
  md: unitScale(80)
} as const;

export const sessionsGridGapMd = {
  xs: unitScale(24),
  sm: unitScale(28),
  md: unitScale(48)
} as const;

export const sessionsGridGapLg = {
  xs: unitScale(24),
  sm: unitScale(32),
  md: unitScale(48)
} as const;

/** Curve dividers (hero → light, etc.). */
export const sessionsCurveHeight = {
  xs: unitScale(40),
  sm: unitScale(44),
  md: unitScale(52)
} as const;

export const sessionsCurveHeightLarge = {
  xs: unitScale(44),
  sm: unitScale(48),
  md: unitScale(56)
} as const;

/** Video / image tile min heights (Figma ~590px tall frame @ desktop). */
export const sessionsMediaMinHeightVideo = {
  xs: unitScale(260),
  sm: unitScale(300),
  md: unitScale(560)
} as const;

export const sessionsMediaMinHeightSessionPhoto = {
  xs: unitScale(300),
  sm: unitScale(320),
  md: unitScale(520)
} as const;

/** Play control sizing. */
export const sessionsFluidPlayButton = {
  xs: unitScale(68),
  sm: unitScale(74),
  md: unitScale(80)
} as const;

export const sessionsFluidPlayIcon = {
  xs: unitScale(34),
  sm: unitScale(37),
  md: unitScale(40)
} as const;

/** CTA row (final band). */
export const sessionsFluidCtaLabel = {
  xs: unitScale(15),
  sm: unitScale(16),
  md: unitScale(18)
} as const;

