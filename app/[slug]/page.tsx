import { notFound } from "next/navigation";
import AboutHerPage from "@/components/site/about-her-page";
import DivineDayPage from "../../components/site/divine-day-page";
import ContactPage from "@/components/site/contact-page";
import IshtGoldPage from "@/components/site/isht-gold-page";
import MarriageCounsellingPage from "@/components/site/marriage-counselling-page";
import SaptSadhanaPage from "@/components/site/sapt-sadhana-page";
import ImageFullPage from "@/components/site/image-full-page";
import SitePage from "@/components/site/site-page";
import { routeFromSlug, sitePages } from "@/lib/site-pages";

type DynamicPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const route = routeFromSlug(slug);

  if (!route) {
    notFound();
  }

  // Dynamic routes: section markers live in each page component’s JSX.

  const fullPageImageRoutes: Partial<Record<typeof route, string>> = {
    events: "/images/EVENTS (PAST & UPCOMING) Photos/EVENTS (PAST & UPCOMING) Banner.webp",
    delhi: "/images/Home Page Photos/Home Page Banner.webp",
    "family-counselling": "/images/Personal Counselling Page Photos/Personal Counselling Banner BG.webp",
    "meditation-program": "/images/Meditation Programs page Photos/Meditation Programs Banner BG.webp",
    "spiritual-retreats": "/images/Retreats Page Photos/Spiritual Retreats Banner BG.webp",
    "wisdom-audios": "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp",
    "dedicated-spiritual-speaker-program": "/images/Dedicated spiritual seekers program Page Photos/Section Below Benifits.webp",
    "wisdom-blogs": "/images/Blongs Internal Page Photos/Blogs internal Page Photo.webp",
    "wisdom-videos": "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp"
  };

  if (route === "about-her") {
    return <AboutHerPage />;
  }

  if (route === "divine-day") {
    return <DivineDayPage />;
  }

  if (route === "marriage-counselling") {
    return <MarriageCounsellingPage />;
  }

  if (route === "sapt-sadhana") {
    return <SaptSadhanaPage />;
  }

  if (route === "contact") {
    return <ContactPage />;
  }

  if (route === "isht-gold") {
    return <IshtGoldPage />;
  }

  const fullPageImage = fullPageImageRoutes[route];

  if (fullPageImage) {
    return <ImageFullPage imageSrc={fullPageImage} title={sitePages[route].pageTitle} />;
  }

  return <SitePage content={sitePages[route]} />;
}
