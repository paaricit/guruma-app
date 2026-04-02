import type { MetadataRoute } from "next";
import { sitePages } from "@/lib/site-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gurumaa.app";
  const now = new Date();

  const routes = ["/", ...Object.keys(sitePages).filter((k) => k !== "home").map((k) => `/${k}`)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}
