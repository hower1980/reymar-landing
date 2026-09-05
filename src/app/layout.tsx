import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import {
  APP_NAME,
  APP_SUBTITLE,
  KEYWORDS,
  PROMO_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site-config";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — ${APP_SUBTITLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: PROMO_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  category: "Deportes",
  openGraph: {
    title: `${APP_NAME} — ${APP_SUBTITLE}`,
    description: PROMO_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — ${APP_SUBTITLE}`,
    description: PROMO_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
