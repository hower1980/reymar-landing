import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos de Uso — PronoMatch",
  description:
    "Condiciones de uso de la plataforma PronoMatch para pronósticos deportivos.",
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
    <LegalLayout title="Términos de Uso" updatedAt="16 de agosto de 2026">
      <Section title="1. Aceptación de los términos">
        <p>
          Al crear una cuenta o utilizar la aplicación PronoMatch
          (&quot;la Plataforma&quot;, &quot;el Servicio&quot;) aceptas
          quedar vinculado por estos Términos de Uso. Si no estás de acuerdo
          con alguna parte de estos términos, no debes utilizar el Servicio.
        </p>
      </Section>

      <Section title="2. Descripción del servicio">
        <p>
          PronoMatch es un SaaS deportivo de entretenimiento y habilidad que
          permite a los usuarios pronosticar resultados de partidos de
          fútbol, competir en ligas privadas o públicas junto a otros
          usuarios y acumular puntos según la precisión de sus pronósticos.
        </p>
        <p>
          PronoMatch{" "}
          <span className="font-semibold text-foreground">
            no es una casa de apuestas ni una plataforma de juego de azar
          </span>
          . No se procesan pagos, apuestas ni premios en dinero real dentro
          de la Plataforma. La clasificación y los puntos obtenidos son de
          carácter exclusivamente lúdico y social.
        </p>
      </Section>

      <Section title="3. Registro y cuentas de usuario">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Debes proporcionar información veraz, actual y completa durante
            el proceso de registro.
          </li>
          <li>
            Eres responsable de mantener la confidencialidad de tus
            credenciales de acceso y de toda actividad realizada en tu
            cuenta.
          </li>
          <li>
            Debes tener al menos 13 años para crear una cuenta en
            PronoMatch.
          </li>
          <li>
            Nos reservamos el derecho de suspender o eliminar cuentas que
            proporcionen información falsa o violen estos Términos.
          </li>
        </ul>
      </Section>

      <Section title="4. Ligas privadas y públicas">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Los usuarios pueden crear ligas privadas e invitar a otros
            miembros mediante códigos o enlaces de invitación.
          </li>
          <li>
            El creador o administrador de una liga privada es responsable de
            gestionar a sus miembros y del contenido generado dentro de
            dicha liga (nombres, mensajes, etc.).
          </li>
          <li>
            Las ligas públicas están abiertas a la comunidad general de
            usuarios de PronoMatch y se rigen por las mismas normas de
            conducta descritas en estos Términos.
          </li>
        </ul>
      </Section>

      <Section title="5. Normas de conducta">
        <p>Al utilizar PronoMatch, te comprometes a no:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Utilizar la Plataforma con fines ilegales, fraudulentos o para
            manipular resultados o clasificaciones.
          </li>
          <li>
            Publicar contenido ofensivo, difamatorio, discriminatorio o que
            infrinja derechos de terceros (nombres de liga, avatares, etc.).
          </li>
          <li>
            Intentar acceder sin autorización a cuentas, sistemas o datos de
            otros usuarios.
          </li>
          <li>
            Realizar ingeniería inversa, extraer datos masivamente o
            interferir con el funcionamiento normal del Servicio.
          </li>
        </ul>
      </Section>

      <Section title="6. Propiedad intelectual">
        <p>
          Todo el contenido de PronoMatch, incluyendo su marca, logotipo,
          diseño, interfaz y código fuente, es propiedad de PronoMatch o de
          sus licenciantes y está protegido por leyes de propiedad
          intelectual. No se otorga ningún derecho de uso sobre estos
          elementos salvo el necesario para utilizar el Servicio conforme a
          estos Términos.
        </p>
      </Section>

      <Section title="7. Disponibilidad del servicio">
        <p>
          Nos esforzamos por mantener PronoMatch disponible de forma
          continua, pero no garantizamos que el Servicio esté libre de
          interrupciones, errores o retrasos, especialmente durante eventos
          deportivos de alta demanda. Los datos de partidos, calendarios y
          resultados provienen de fuentes de terceros y pueden estar sujetos
          a cambios o inexactitudes ajenas a nuestro control.
        </p>
      </Section>

      <Section title="8. Limitación de responsabilidad">
        <p>
          PronoMatch se ofrece &quot;tal cual&quot; y &quot;según
          disponibilidad&quot;. En la máxima medida permitida por la ley, no
          seremos responsables por daños indirectos, incidentales o
          consecuentes derivados del uso o la imposibilidad de uso de la
          Plataforma, incluyendo pérdidas relacionadas con la participación
          en ligas o clasificaciones.
        </p>
      </Section>

      <Section title="9. Terminación">
        <p>
          Podemos suspender o cancelar tu acceso a PronoMatch en caso de
          incumplimiento de estos Términos. Puedes eliminar tu cuenta en
          cualquier momento desde la configuración de la app o solicitándolo
          a nuestro equipo de soporte.
        </p>
      </Section>

      <Section title="10. Modificaciones a los términos">
        <p>
          Podemos actualizar estos Términos de Uso en cualquier momento. Los
          cambios significativos serán notificados a través de la app o por
          correo electrónico. El uso continuado del Servicio tras dichos
          cambios implica la aceptación de los nuevos Términos.
        </p>
      </Section>

      <Section title="11. Ley aplicable">
        <p>
          Estos Términos se rigen por las leyes aplicables en la
          jurisdicción donde opera PronoMatch, sin perjuicio de las
          disposiciones de protección al consumidor que puedan aplicar en tu
          país de residencia.
        </p>
      </Section>

      <Section title="12. Contacto">
        <p>
          Si tienes preguntas sobre estos Términos de Uso, escríbenos a{" "}
          <a
            href="mailto:soporte@pronomatch.app"
            className="font-semibold text-accent hover:underline"
          >
            soporte@pronomatch.app
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
