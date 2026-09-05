import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Condiciones de uso de Reymar: plataforma SaaS de pronósticos de fútbol, sin apuestas ni premios en dinero real.",
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
      <Section title="1. Aceptación de los Términos">
        <p>
          Al registrarse o hacer uso de Reymar, el Usuario declara haber
          leído, comprendido y aceptado en su totalidad estos Términos y
          Condiciones de Uso. Si el Usuario no está de acuerdo con alguno de
          los puntos aquí expuestos, deberá abstenerse de utilizar la
          Aplicación.
        </p>
      </Section>

      <Section title="2. Naturaleza del Servicio y Ausencia de Apuestas">
        <p>
          Reymar es una plataforma digital de software (SaaS) concebida
          exclusivamente con fines de entretenimiento social y recreativo.
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              No es una Casa de Apuestas:
            </span>{" "}
            Reymar no es un operador de apuestas, no posee licencias de
            juego de azar ni actúa como intermediario financiero para la
            gestión de envites o apuestas.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Sin Premios Monetarios:
            </span>{" "}
            la Aplicación no distribuye ni garantiza la entrega de premios en
            metálico o especies. Cualquier acuerdo privado entre usuarios de
            una liga sobre premios o reconocimientos externos es
            responsabilidad exclusiva de dichos participantes y ajeno por
            completo a Reymar.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Cobro por Software (SaaS):
            </span>{" "}
            las tarifas asociadas a la creación de ligas ampliadas o
            funciones Premium corresponden al pago por el uso de capacidades
            adicionales del software (servidores, procesamiento de datos,
            estadísticas avanzadas).
          </li>
        </ol>
      </Section>

      <Section title="3. Propiedad Intelectual y Uso de Marcas">
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Uso Descriptivo y Nominativo:
            </span>{" "}
            todos los nombres de competiciones futbolísticas (como UEFA
            Champions League, Copa Libertadores, Concacaf Champions Cup),
            países o ciudades mencionadas en la Aplicación se utilizan
            únicamente con fines descriptivos del calendario deportivo real
            de acceso público.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Independencia de Marcas:
            </span>{" "}
            Reymar utiliza nombres de fantasía, acrónimos geográficos y
            elementos gráficos genéricos o conceptuales. Ningún nombre,
            logo, escudo o distintivo comercial dentro de la app implica
            patrocinio, respaldo, licencia o vinculación oficial con clubes
            deportivos, federaciones u organizaciones como la UEFA, CONMEBOL,
            CONCACAF o FIFA.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Derechos de la Plataforma:
            </span>{" "}
            el diseño UI, los algoritmos de puntuación, el código fuente y
            las marcas &quot;Reymar&quot; son propiedad intelectual
            exclusiva de la plataforma.
          </li>
        </ol>
      </Section>

      <Section title="4. Cuentas de Usuario y Reglas de Conducta">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            El Usuario se compromete a proporcionar un correo electrónico
            válido y mantener la confidencialidad de sus credenciales.
          </li>
          <li>
            Se prohíbe expresamente el uso de nombres de usuario o nombres de
            ligas privadas que contengan lenguaje difamatorio, xenófobo,
            obsceno o violatorio de derechos de terceros. Reymar se
            reserva el derecho de suspender o eliminar cuentas que
            incumplan esta norma.
          </li>
          <li>
            Se prohíbe el uso de scripts, bots o intentos de explotación del
            API de la plataforma.
          </li>
        </ul>
      </Section>

      <Section title="5. Compras en la Aplicación y Suscripciones (In-App Purchases)">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Las compras se procesan a través de la App Store de Apple y la
            Play Store de Google según los términos de pago elegidos por el
            usuario.
          </li>
          <li>
            Las ventas de paquetes de actualización de ligas o funciones
            Premium son finales y no reembolsables por parte de Reymar,
            salvo disposición legal obligatoria de las plataformas de
            distribución de Apple o Google.
          </li>
        </ul>
      </Section>

      <Section title="6. Limitación de Responsabilidad">
        <p>
          Reymar realiza sus mejores esfuerzos por garantizar la
          disponibilidad continua del servicio y la precisión en la
          sincronización de resultados deportivos provistos por API de
          terceros. Sin embargo, no se garantiza que el servicio esté libre
          de interrupciones o errores técnicos imprevistos. Reymar no se
          hace responsable por pérdidas indirectas derivadas de fallas en la
          transmisión de datos antes del cierre de una jornada de
          pronósticos.
        </p>
      </Section>

      <Section title="7. Modificaciones">
        <p>
          Nos reservamos el derecho de actualizar estos Términos en
          cualquier momento. Las modificaciones entrarán en vigor a partir de
          su publicación en la Aplicación o sitio web oficial.
        </p>
      </Section>

      <Section title="8. Contacto Legal">
        <p>
          Para consultas legales o notificaciones sobre los Términos de Uso:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">Correo:</span>{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-accent hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </li>
        </ul>
      </Section>
    </LegalLayout>
  );
}
