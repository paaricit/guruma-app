import type { Metadata } from "next";
import type { ReactNode } from "react";
import { sitePages } from "@/lib/site-pages";

const { pageTitle, hero } = sitePages.sessions;

export const metadata: Metadata = {
  title: pageTitle,
  description: hero.description
};

export default function SessionsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
