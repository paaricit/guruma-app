import type { Metadata } from "next";
import { Forum, Inter, Montserrat, Poppins } from "next/font/google";
import MuiProvider from "@/components/providers/mui-provider";
import { APP_NAME } from "@/lib/design-system";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const forum = Forum({
  subsets: ["latin"],
  variable: "--font-forum",
  weight: ["400"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600"]
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://gurumaa.app"),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`
  },
  description: "Spiritual discourses, sessions, programs, wisdom resources, and guidance with Guru Maa.",
  applicationName: APP_NAME,
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    title: APP_NAME,
    description: "Spiritual discourses, sessions, programs, wisdom resources, and guidance with Guru Maa.",
    url: "/",
    siteName: APP_NAME
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: "Spiritual discourses, sessions, programs, wisdom resources, and guidance with Guru Maa."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${forum.variable} ${montserrat.variable} font-[var(--font-poppins)] antialiased`}
      >
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
