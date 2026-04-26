export type ProgramMintOverviewExpectRow = {
  title: string;
  body: string;
};

/** Shared “mint band” overview (marriage / personal counselling, etc.). */
export type ProgramMintOverviewContent = {
  ariaLabel: string;
  sectionPhoto: string;
  sectionPhotoAlt: string;
  /** Decorative assets (defaults match marriage-counselling-section paths). */
  lotusBg: string;
  spiralBg: string;
  smallLotusIcon: string;
  whatToExpectIcon: string;
  introHeading: string;
  introBody: string;
  primaryCtaLabel: string;
  whatToExpectRows: readonly ProgramMintOverviewExpectRow[];
  isThisForYouRows: readonly string[];
  isThisForYouClosing: string;
  secondaryCtaLabel: string;
};
