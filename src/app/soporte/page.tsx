import type { Metadata } from "next";
import { Mail } from "lucide-react";
import LegalLayout from "@/components/LegalLayout";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Soporte",
  description:
    "Contacta al equipo de Reymar para dudas sobre la app, ligas o tu cuenta.",
  alternates: {
    canonical: `${SITE_URL}/soporte`,
  },
};

export default function SupportPage() {
  return (
    <LegalLayout title="Soporte" updatedAt="5 de septiembre de 2026">
      <section>
        <p>
          Si tienes dudas sobre Reymar, tu cuenta, ligas privadas o
          funciones Premium, escríbenos y te responderemos lo antes posible.
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          <Mail className="h-4 w-4" />
          {SUPPORT_EMAIL}
        </a>
      </section>
    </LegalLayout>
  );
}
