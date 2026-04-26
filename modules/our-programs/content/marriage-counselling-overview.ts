import type { ProgramMintOverviewContent } from "./program-mint-overview-types";

const base = "/images/our-programs/marriage-counselling-section";

export const marriageCounsellingOverviewContent: ProgramMintOverviewContent = {
  ariaLabel: "Marriage counselling overview",
  sectionPhoto: `${base}/img-1.png`,
  sectionPhotoAlt: "Marriage counselling session",
  lotusBg: `${base}/lotus-bg.svg`,
  spiralBg: `${base}/spriralbg.svg`,
  smallLotusIcon: `${base}/small-lotus-icon.svg`,
  whatToExpectIcon: `${base}/what-to-expect.svg`,
  introHeading: "How to Forge Better, Stronger and Long-Lasting Relationships",
  introBody:
    'Marriage is the journey from being a carefree individual to a partner sharing vows, responsibilities, and promises. While the world teaches "give and take," Guru Maa Shubha Didi guides you toward the higher truth: Marriage is about the joy of giving. Through these sessions, we deep-dive internally to heal hearts and clear thoughts. We move away from the need to "own" or "control," restoring the foundational balance and enhancing the soul-level connection with your partner.',
  primaryCtaLabel: "Connect with Us",
  whatToExpectRows: [
    {
      title: "Restore Balance:",
      body: "Realign your mental and spiritual match when life's pressure creates a mismatch."
    },
    {
      title: "Rekindle Happiness:",
      body: "Shift from unsettling disturbances to a space of joy and mutual respect."
    },
    {
      title: "Heal the Foundation:",
      body: "Stop encroaching on individuality and start respecting your partner's sacred space."
    },
    {
      title: "Falling in Love Again:",
      body: "Learn the secret to falling in love many times, always with the same person."
    }
  ],
  isThisForYouRows: [
    '"How do I forge a stronger, long-lasting relationship?"',
    '"How can I ensure our problems don\'t break our home?"',
    '"How do we move from suffocation to bliss?"'
  ],
  isThisForYouClosing: "Then a fruitful journey with Guru Maa Shubha Didi is your next step.",
  secondaryCtaLabel: "Begin Your Journey to Bliss"
};
