/** Portrait asset — filename contains U+2028 LINE SEPARATOR before `.webp`. */
export const aboutHerJourneyPortraitSrc =
  "/images/About Her Page Photos/Her Journey\u2028.webp" as const;

export const aboutHerJourneySectionTitle = "Her Journey" as const;

/** Section wash (legacy About Her band). */
export const aboutHerJourneyBandGradient =
  "linear-gradient(180deg, #D1F1F5 0%, #FFF 58.67%)" as const;

/** Top / bottom curved capsule bars. */
export const aboutHerJourneyNavyCapsule = "#0a1628" as const;

export type AboutHerJourneyStep = {
  num: string;
  title: string;
  body: string;
};

export const aboutHerJourneySteps: readonly AboutHerJourneyStep[] = [
  {
    num: "01",
    title: "The Innocent Seeker (Age 5-13):",
    body: 'Even as a child, Didi was drawn to the sacred. From chanting "Naam Jap" before preschool to questioning priests about seeing God, her early years were defined by an innate, unshakeable pull toward the Divine.'
  },
  {
    num: "02",
    title: "Meeting the Guru (Age 13):",
    body: "The turning point. Didi met her Guru and learned that spirituality is not a standalone journey—it must be lived through Samsara (destiny). She mastered the art of balancing worldly excellence with inner transformation."
  },
  {
    num: "03",
    title: "Early life & turning points:",
    body: 'Today, Didi leads a global mission. Through Nishkaam Sewa (Selfless Action), she has spent 40 years guiding students, professionals, and leaders across the UK, US, and beyond to live a life of purpose and "Permanent Happiness."'
  }
] as const;
