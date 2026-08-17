import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site-config";
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

const APP_NAME = "PronoMatch: Pronósticos Fútbol";
const PROMO_DESCRIPTION =
  "¡Compite con tus amigos en la UEFA Champions League, Copa Libertadores y Concacaf! Haz tus pronósticos, crea ligas privadas y demuestra quién sabe más de fútbol.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — Ligas privadas y quinielas`,
    template: `%s | PronoMatch`,
  },
  description: PROMO_DESCRIPTION,
  applicationName: "PronoMatch",
  keywords: [
    "pronosticos",
    "futbol",
    "polla",
    "porra",
    "quiniela",
    "champions",
    "libertadores",
    "concacaf",
    "ligas",
    "resultados",
    "marcador",
  ],
  category: "Deportes",
  openGraph: {
    title: `${APP_NAME} — Ligas privadas y quinielas`,
    description: PROMO_DESCRIPTION,
    url: SITE_URL,
    siteName: "PronoMatch",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — Ligas privadas y quinielas`,
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
