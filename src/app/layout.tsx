import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PronoMatch — La experiencia definitiva de pronósticos de fútbol",
  description:
    "Compite en ligas privadas o públicas de pronósticos de fútbol con tus amigos. Champions League, Copa Libertadores y Concacaf. Descarga PronoMatch.",
  keywords: [
    "PronoMatch",
    "pronósticos de fútbol",
    "polla mundialista",
    "porra fútbol",
    "ligas privadas fútbol",
    "Champions League",
    "Copa Libertadores",
  ],
  openGraph: {
    title: "PronoMatch — La experiencia definitiva de pronósticos de fútbol",
    description:
      "Crea ligas privadas, invita a tus amigos y demuestra quién sabe más de fútbol.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
