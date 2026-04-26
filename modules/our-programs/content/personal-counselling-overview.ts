import type { ProgramMintOverviewContent } from "./program-mint-overview-types";

/** Same decorative SVGs as marriage band; swap copy + photo only. */
const deco = "/images/our-programs/marriage-counselling-section";

export const personalCounsellingOverviewContent: ProgramMintOverviewContent = {
  ariaLabel: "Personal counselling overview",
  sectionPhoto: "/images/our-programs/personal-counselling-section-hero.png",
  sectionPhotoAlt: "Personal counselling session",
  lotusBg: `${deco}/lotus-bg.svg`,
  spiralBg: `${deco}/spriralbg.svg`,
  smallLotusIcon: `${deco}/small-lotus-icon.svg`,
  whatToExpectIcon: `${deco}/what-to-expect.svg`,
  introHeading: "Uproot the Cause, Not the Symptoms",
  introBody:
    "Modern life often forces us to nourish negative thoughts until they pull us downward. Curated sessions help you stop this cycle through power-packed, solution-oriented conversations coupled with deep, calming vibrational energies. We don't just address the symptoms; we go to the root cause to uproot it completely. Whether you are at a crossroads in your career, desires, or joy, seeking support is the first step toward a rebirth of happiness.",
  primaryCtaLabel: "Connect with Us",
  whatToExpectRows: [
    {
      title: "Release the Weight:",
      body: "Address the problem directly to take the heavy burden off your back and move ahead."
    },
    {
      title: "Mental Productivity:",
      body: "A healthy mind is a productive mind. Restore your equilibrium to achieve wonders."
    },
    {
      title: "Vibrational Healing:",
      body: "Use outside-in perspectives and energy to calm a disturbed mind."
    },
    {
      title: "A New Perspective:",
      body: "Shift your perceptions to reshape your behaviours and exit negative traps."
    }
  ],
  isThisForYouRows: [
    "If you are handling a delicate situation,",
    "facing a mental roadblock, or know someone who needs a rebirth of joy,",
    "these sessions are designed to work miracles for you."
  ],
  isThisForYouClosing: "You deserve abundance, not pain.",
  secondaryCtaLabel: "Get Connected"
};
