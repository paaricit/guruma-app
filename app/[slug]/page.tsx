import { notFound } from "next/navigation";
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
    "about-her": "/images/about-her/page-main.jpg",
    "sessions": "/images/pages/sessions/page-main.png",
    "events": "/images/pages/dedicated-spiritual-speaker-program/page-main.png",
    "delhi": "/images/pages/delhi/page-main.jpg",
    "marriage-counselling": "/images/pages/marriage-counselling/page-main.png",
    "family-counselling": "/images/pages/family-counselling/page-main.png",
    "meditation-program": "/images/pages/meditation-program/page-main.jpg",
    "spiritual-retreats": "/images/pages/spiritual-retreats/page-main.png",
    "wisdom-audios": "/images/pages/sessions/page-main.png",
    "dedicated-spiritual-speaker-program": "/images/pages/dedicated-spiritual-speaker-program/page-main.png",
    "sapt-sadhana": "/images/pages/sapt-sadhana/page-main.jpg",
    "wisdom-blogs": "/images/pages/wisdom-blogs/page-main.png",
    "wisdom-videos": "/images/pages/wisdom-videos/page-main.png"
  };

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
