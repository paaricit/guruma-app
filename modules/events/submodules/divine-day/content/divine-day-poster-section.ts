/**
 * Divine Day — poster band (event meta + title + CTAs) above “Who should attend”.
 * Copy aligned to design; image path lives on `divineDayImages.posterSectionBg`.
 */
export const divineDayPosterSectionContent = {
  meta: {
    dateLine: "1st MAY",
    dateSub: "FRIDAY",
    timeLine: "4:15 PM",
    timeSub: "ONWARDS",
    entryPrimary: "Entry: FREE",
    entrySub: "Entry by Invite Only",
    venue:
      "SIR MUTHA VENKATASUBBA RAO CONCERT HALL CHETPET (LADY ANDAL SCHOOL CAMPUS)"
  },
  title: "THE DIVINE DAY",
  tagline: "THE PATHWAY TO DIVINITY GOES THROUGH GATES OF WISDOM!",
  host: "WITH GURU MAA SHUBHA DIDI",
  primaryCta: { label: "Register Free", href: "/contact" },
  secondaryCta: { label: "Reserve My Spot", href: "/contact" }
} as const;
