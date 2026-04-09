import { notFound } from "next/navigation";
import AboutHerPage from "@/components/site/about-her-page";
import DivineDayPage from "../../components/site/divine-day-page";
import SessionsPage from "@/components/site/sessions-page";
import SharedHeader from "@/components/site/shared-header";
import ImageFullPage from "@/components/site/image-full-page";
import SharedFooter from "@/components/site/shared-footer";
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

  const fullPageImageRoutes: Partial<Record<typeof route, string>> = {
    events: "/images/EVENTS (PAST & UPCOMING) Photos/EVENTS (PAST & UPCOMING) Banner.webp",
    delhi: "/images/Home Page Photos/Home Page Banner.webp",
    "marriage-counselling": "/images/Marriage Counselling Page Photos/Marriage Counselling Banner BG.webp",
    "family-counselling": "/images/Personal Counselling Page Photos/Personal Counselling Banner BG.webp",
    "meditation-program": "/images/Meditation Programs page Photos/Meditation Programs Banner BG.webp",
    "spiritual-retreats": "/images/Retreats Page Photos/Spiritual Retreats Banner BG.webp",
    "wisdom-audios": "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp",
    "dedicated-spiritual-speaker-program": "/images/Dedicated spiritual seekers program Page Photos/Section Below Benifits.webp",
    "sapt-sadhana": "/images/Sapt Sadhana Page Photos/SAPT SADHANA Banner BG.webp",
    "wisdom-blogs": "/images/Blongs Internal Page Photos/Blogs internal Page Photo.webp",
    "wisdom-videos": "/images/Blongs Internal Page Photos/Wisdom Pages Banner BG.webp"
  };

  if (route === "about-her") {
    return <AboutHerPage />;
  }

  if (route === "sessions") {
    return <SessionsPage />;
  }

  if (route === "divine-day") {
    return <DivineDayPage />;
  }

  const fullPageImage = fullPageImageRoutes[route];

  if (fullPageImage) {
    return (
      <>
        <SharedHeader />
        <ImageFullPage imageSrc={fullPageImage} title={sitePages[route].pageTitle} />
        <SharedFooter />
      </>
    );
  }

  return (
    <>
      <SitePage content={sitePages[route]} />
      <SharedFooter />
    </>
  );
}
