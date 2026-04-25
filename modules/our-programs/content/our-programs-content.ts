export type ProgramCard = {
  id: string;
  title: string;
  imageSrc: string;
  whoItsFor: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export const ourProgramsIntro = {
  heading: "Our Programs",
  body: "Personalized and group programs that address different life areas.",
  bodySecondLine: "Combining spiritual wisdom with practical tools for lasting transformation."
} as const;

export const ourPrograms: ProgramCard[] = [
  {
    id: "01",
    title: "Marriage Counselling",
    imageSrc: "/images/our-programs/marriage-counselling.png",
    whoItsFor: "Who it's for",
    description: "Couples seeking to strengthen their relationship, overcome challenges, and build a deeper connection rooted in love and understanding.",
    href: "/our-programs/marriage-counselling",
    ctaLabel: "Enrol in this Program"
  },
  {
    id: "02",
    title: "Personal Counselling",
    imageSrc: "/images/our-programs/personal-counselling.png",
    whoItsFor: "Who it's for",
    description: "Personalised, purposeful, profound support for navigating complex relationships, shifting expectations, and life's emotional transitions with grace.",
    href: "/our-programs/personal-counselling",
    ctaLabel: "Enrol in this Program"
  },
  {
    id: "03",
    title: "Meditation Programs",
    imageSrc: "/images/our-programs/meditation-programs.png",
    whoItsFor: "Who it's for",
    description: "Anyone seeking inner peace, stress relief, mental clarity, and spiritual growth, from complete beginners to advanced practitioners.",
    href: "/our-programs/meditation",
    ctaLabel: "Enrol in this Program"
  },
  {
    id: "04",
    title: "Spiritual Retreats",
    imageSrc: "/images/our-programs/spiritual-retreats.png",
    whoItsFor: "Who it's for",
    description: "Seekers ready for deep transformation, individuals wanting to disconnect from daily life, and those seeking profound spiritual experiences in sacred spaces.",
    href: "/our-programs/spiritual-retreats",
    ctaLabel: "Enrol in this Program"
  }
];
