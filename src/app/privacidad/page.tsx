import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad — PronoMatch",
  description:
    "Conoce cómo PronoMatch recopila, usa y protege tus datos personales.",
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

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Política de Privacidad" updatedAt="16 de agosto de 2026">
      <Section title="1. Introducción">
        <p>
          En PronoMatch (&quot;nosotros&quot;, &quot;nuestro&quot; o la
          &quot;Plataforma&quot;) nos tomamos en serio la privacidad de
          nuestros usuarios. Esta Política de Privacidad explica qué datos
          recopilamos a través de nuestra aplicación móvil y sitio web, cómo
          los utilizamos, con quién los compartimos y qué derechos tienes
          sobre tu información. Al usar PronoMatch aceptas las prácticas
          descritas en este documento.
        </p>
      </Section>

      <Section title="2. Datos que recopilamos">
        <p>Para ofrecerte la experiencia de pronósticos de PronoMatch recopilamos:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Datos de cuenta:
            </span>{" "}
            nombre de usuario, correo electrónico y contraseña cifrada (o
            proveedor de inicio de sesión social) al momento de registrarte.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos de uso y juego:
            </span>{" "}
            pronósticos realizados, ligas creadas o a las que te unes,
            puntuaciones, clasificaciones e interacciones dentro de la app.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos del dispositivo:
            </span>{" "}
            identificadores de dispositivo, sistema operativo, versión de la
            app y token de notificaciones push, recopilados a través de
            nuestro proveedor de infraestructura móvil (Expo).
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos técnicos:
            </span>{" "}
            dirección IP aproximada, tipo de red y registros de errores con
            fines de seguridad y estabilidad del servicio.
          </li>
        </ul>
        <p>
          No recopilamos ni procesamos datos financieros, de tarjetas de pago
          o de apuestas, ya que PronoMatch es una plataforma de
          entretenimiento y habilidad, no de apuestas.
        </p>
      </Section>

      <Section title="3. Uso de servicios de terceros">
        <p>
          PronoMatch utiliza proveedores de infraestructura de confianza para
          operar la plataforma de forma segura y eficiente:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">Supabase:</span>{" "}
            utilizamos Supabase como proveedor de base de datos,
            autenticación y almacenamiento en la nube. Tus datos de cuenta,
            ligas y pronósticos se almacenan en servidores gestionados por
            Supabase bajo estrictos protocolos de cifrado y control de
            acceso.
          </li>
          <li>
            <span className="font-semibold text-foreground">Expo:</span>{" "}
            nuestra aplicación móvil está construida con el framework Expo,
            que puede procesar identificadores de dispositivo y tokens de
            notificaciones push necesarios para enviarte alertas sobre
            partidos, jornadas y actividad en tus ligas.
          </li>
        </ul>
        <p>
          Estos proveedores actúan como encargados del tratamiento de datos y
          están sujetos a sus propias políticas de privacidad y acuerdos de
          protección de datos.
        </p>
      </Section>

      <Section title="4. Finalidad del tratamiento">
        <p>Usamos tus datos personales para:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Crear y gestionar tu cuenta de usuario.</li>
          <li>
            Permitirte crear, unirte y participar en ligas privadas o
            públicas.
          </li>
          <li>Calcular puntuaciones y mostrar clasificaciones en tiempo real.</li>
          <li>
            Enviarte notificaciones relevantes sobre partidos, jornadas y
            actividad de tus ligas.
          </li>
          <li>
            Detectar, prevenir y resolver problemas técnicos, fraude o abuso
            de la plataforma.
          </li>
          <li>Mejorar y personalizar la experiencia dentro de la app.</li>
        </ul>
      </Section>

      <Section title="5. Conservación de datos">
        <p>
          Conservamos tus datos personales mientras tu cuenta permanezca
          activa. Si solicitas la eliminación de tu cuenta, eliminaremos o
          anonimizaremos tus datos personales en un plazo razonable, salvo
          que debamos conservar cierta información por obligaciones legales
          o para resolver disputas.
        </p>
      </Section>

      <Section title="6. Tus derechos">
        <p>
          Dependiendo de tu jurisdicción, tienes derecho a acceder,
          rectificar, eliminar, limitar u oponerte al tratamiento de tus
          datos personales, así como a solicitar la portabilidad de los
          mismos. Para ejercer cualquiera de estos derechos, puedes
          escribirnos a{" "}
          <a
            href="mailto:soporte@pronomatch.app"
            className="font-semibold text-accent hover:underline"
          >
            soporte@pronomatch.app
          </a>
          .
        </p>
      </Section>

      <Section title="7. Seguridad de la información">
        <p>
          Implementamos medidas técnicas y organizativas razonables —
          incluyendo cifrado en tránsito y en reposo a través de nuestros
          proveedores de infraestructura— para proteger tus datos personales
          contra accesos no autorizados, pérdida o alteración. Sin embargo,
          ningún sistema es 100% infalible y no podemos garantizar seguridad
          absoluta.
        </p>
      </Section>

      <Section title="8. Menores de edad">
        <p>
          PronoMatch no está dirigido a menores de 13 años. Si tenemos
          conocimiento de que hemos recopilado datos personales de un menor
          sin el consentimiento verificable de sus padres o tutores,
          tomaremos medidas para eliminar dicha información.
        </p>
      </Section>

      <Section title="9. Cambios en esta política">
        <p>
          Podemos actualizar esta Política de Privacidad periódicamente. Te
          notificaremos sobre cambios materiales a través de la app o por
          correo electrónico, y la fecha de &quot;última actualización&quot;
          reflejará la versión vigente.
        </p>
      </Section>

      <Section title="10. Contacto">
        <p>
          Si tienes preguntas sobre esta Política de Privacidad o sobre el
          tratamiento de tus datos, contáctanos en{" "}
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
