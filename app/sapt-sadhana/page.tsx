import type { Metadata } from "next";
import SaptSadhanaPage from "@/modules/sapt-sadhana";
import { sitePages } from "@/lib/site-pages";

const meta = sitePages["sapt-sadhana"];

export const metadata: Metadata = {
  title: `${meta.pageTitle} | Guruma`,
  description: meta.hero.description
};

export default function SaptSadhanaRoutePage() {
  return <SaptSadhanaPage />;
}
