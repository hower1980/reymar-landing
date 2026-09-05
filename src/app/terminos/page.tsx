import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Términos de Reymar: mesas de pronósticos, Temporada por mesa, Club fuera de IAP, sin apuestas ni dinero real.",
  alternates: {
    canonical: `${SITE_URL}/terminos`,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Términos de Uso" updatedAt="5 de septiembre de 2026">
      <Section title="1. Aceptación">
        <p>
          Al registrarse o usar Reymar, el Usuario declara haber leído y
          aceptado estos Términos. Si no está de acuerdo, no debe usar la
          Aplicación.
        </p>
      </Section>

      <Section title="2. Naturaleza del servicio">
        <p>
          Reymar es entretenimiento social. El objeto es la{" "}
          <span className="font-semibold text-foreground">mesa</span> (grupo
          privado), no una liga de pago. Crear o unirse a una mesa de
          amigos es gratis (cupo 25; el admin cuenta).
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              No es una casa de apuestas:
            </span>{" "}
            Reymar no opera apuestas, no tiene licencia de juego de azar
            ni intermedia envites. No hay prize pool ni dinero real.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Sin premios monetarios:
            </span>{" "}
            la Aplicación no entrega premios en metálico. Cualquier
            acuerdo privado entre miembros de una mesa es ajeno a Reymar.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Temporada:
            </span>{" "}
            un pago anual por mesa (compra dentro de la app; temporada
            2026/27 del 4 de septiembre de 2026 al 1 de agosto de 2027).
            En esa mesa desbloquea campañas, Versus, Gráfica, Pleno sin
            watermark y el ranking combinado del año. Sin Temporada, la
            mesa sigue con Reymar partido a partido y ranking de mesa
            solo Reymar. Las campañas pueden jugarse para el ranking FREE
            mundial. Temporada no es un peaje para crear el grupo.
          </li>
          <li>
            <span className="font-semibold text-foreground">Club:</span>{" "}
            alta manual, fuera del flujo de compras dentro de la app del
            consumidor. No se vende como paquete de cupo ni como requisito
            para abrir una mesa.
          </li>
        </ol>
      </Section>

      <Section title="3. Propiedad intelectual y marcas">
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Uso descriptivo:
            </span>{" "}
            los nombres de competiciones se usan solo para describir el
            calendario público. Hoy Champions está en lab; Libertadores,
            Copa de Campeones y Copa Oro existen como estructura inactiva.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Escudos Cero:
            </span>{" "}
            Reymar usa acrónimos, nombres de fantasía y gráficos
            genéricos. Ningún distintivo implica patrocinio, respaldo o
            licencia de UEFA, CONMEBOL, Concacaf, FIFA, clubes o
            federaciones. Reymar no está afiliada a esas entidades.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Derechos de la plataforma:
            </span>{" "}
            el diseño, los algoritmos de puntuación, el código y la marca
            &quot;Reymar&quot; son de la plataforma.
          </li>
        </ol>
      </Section>

      <Section title="4. Cuentas y conducta">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            El Usuario debe dar un correo válido y cuidar sus
            credenciales.
          </li>
          <li>
            Se prohíben nombres de usuario o de mesa difamatorios,
            xenófobos, obscenos o que vulneren derechos de terceros.
            Reymar puede suspender o eliminar esas cuentas.
          </li>
          <li>
            Se prohíben scripts, bots o explotación de la API.
          </li>
        </ul>
      </Section>

      <Section title="5. Compras (Temporada) y Club">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Temporada se procesa, cuando las tiendas estén abiertas, a
            través de App Store y Google Play según sus términos.
          </li>
          <li>
            La compra de Temporada es por mesa y por año. No hay paquetes
            de cupo ni un plan para “crear la mesa”.
          </li>
          <li>
            Las ventas de Temporada no son reembolsables por Reymar,
            salvo lo que exijan Apple o Google.
          </li>
          <li>
            Club no es una compra dentro de la app del consumidor: el
            alta es manual y se gestiona fuera de ese flujo.
          </li>
        </ul>
      </Section>

      <Section title="6. Marcadores y limitación">
        <p>
          Los marcadores se actualizan en automático cuando el partido
          cierra. No garantizamos difusión en vivo ni “fuentes oficiales
          en producción”. Reymar no asegura un servicio libre de
          interrupciones. No responde por pérdidas indirectas derivadas de
          fallos técnicos antes del corte.
        </p>
      </Section>

      <Section title="7. Modificaciones">
        <p>
          Podemos actualizar estos Términos. Los cambios rigen desde su
          publicación en la Aplicación o en getreymar.com.
        </p>
      </Section>

      <Section title="8. Contacto">
        <p>
          Consultas sobre estos Términos:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-semibold text-accent hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
