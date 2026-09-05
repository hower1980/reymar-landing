import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { PRIVACY_EMAIL, SITE_URL, SUPPORT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Reymar trata tus datos: cuenta, mesa, Temporada y eliminación de cuenta. Sin apuestas ni dinero real.",
  alternates: {
    canonical: `${SITE_URL}/privacidad`,
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

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Política de Privacidad" updatedAt="5 de septiembre de 2026">
      <Section title="1. Introducción">
        <p>
          Reymar (&quot;la Aplicación&quot;, &quot;el Servicio&quot;,
          &quot;nosotros&quot;) es una aplicación de entretenimiento social
          para pronósticos de fútbol entre amigos. El objeto social es la{" "}
          <span className="font-semibold text-foreground">mesa</span>: un
          grupo privado que se crea o se une con un código, sin peaje para
          abrirla. Esta Política describe cómo recopilamos, usamos,
          almacenamos y protegemos la información personal
          (&quot;el Usuario&quot; o &quot;usted&quot;). Al usar Reymar,
          acepta estas prácticas.
        </p>
      </Section>

      <Section title="2. Datos que recopilamos">
        <p>
          Recopilamos únicamente la información necesaria para prestar el
          servicio:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Datos de cuenta y autenticación:
            </span>{" "}
            correo electrónico, nombre de usuario y contraseña cifrada
            (Supabase Auth). Ghost Prediction permite un pronóstico de
            prueba sin cuenta; pedimos registro cuando guardas de verdad
            para entrar al ranking.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos de actividad:
            </span>{" "}
            pronósticos (Reymar, campañas y demás modalidades de la mesa),
            fechas de envío, puntuaciones, historial de membresía y
            administración de mesas.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos técnicos:
            </span>{" "}
            identificadores de dispositivo, sistema operativo, versión de la
            aplicación y tokens de notificaciones push (Expo) para avisos
            de corte y actividad de tu mesa.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos de transacciones:
            </span>{" "}
            estado de la{" "}
            <span className="font-semibold text-foreground">Temporada</span>{" "}
            (compra anual dentro de la app, por mesa), validado vía
            RevenueCat y las tiendas Apple App Store y Google Play. El{" "}
            <span className="font-semibold text-foreground">Club</span> se
            da de alta de forma manual, fuera del flujo de compras
            dentro de la app del consumidor.{" "}
            <span className="font-semibold text-foreground">
              Reymar no recopila, procesa ni almacena datos de tarjetas
              de crédito o débito.
            </span>
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Información no recopilada:
            </span>{" "}
            no rastreamos ni almacenamos ubicación precisa, contactos del
            teléfono, archivos multimedia ni navegación fuera de la
            Aplicación.
          </li>
        </ul>
      </Section>

      <Section title="3. No es apuestas">
        <p>
          Reymar{" "}
          <span className="font-semibold text-foreground">
            no es una plataforma de apuestas ni un casino
          </span>
          . No hay prize pool ni dinero real. El único cobro al consumidor
          en tienda es Temporada: un pago anual por mesa que desbloquea
          funciones de software en esa mesa (campañas, Versus, Gráfica,
          Pleno sin watermark y ranking combinado del año). No vendemos
          cupos ni un peaje para crear el grupo. No se permite, facilita ni
          realiza apuesta de dinero real ni entrega de premios en efectivo
          a través de la Aplicación.
        </p>
      </Section>

      <Section title="4. Cómo usamos la información">
        <p>Usamos la información para:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Autenticar su identidad y mantener la sesión.</li>
          <li>
            Calcular puntuaciones y clasificaciones de mesa cuando el
            partido cierra (marcadores automáticos al cierre; no
            garantizamos difusión en vivo).
          </li>
          <li>
            Notificar el corte de pronóstico y actividad relevante de su
            mesa.
          </li>
          <li>
            Activar Temporada en la mesa que corresponda y registrar el
            alta manual de Club cuando exista.
          </li>
          <li>
            Monitorear el rendimiento técnico, corregir errores y prevenir
            abuso.
          </li>
        </ol>
      </Section>

      <Section title="5. Proveedores">
        <p>
          Compartimos el mínimo necesario con estos encargados de
          tratamiento:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Supabase Inc.:
            </span>{" "}
            base de datos, backend y autenticación.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Expo / 650 Industries Inc.:
            </span>{" "}
            compilación y notificaciones push.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              RevenueCat Inc.:
            </span>{" "}
            validación de recibos de compras dentro de la app (Temporada)
            y estado de esas compras.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Proveedor de calendarios y marcadores:
            </span>{" "}
            resultados y fixtures deportivos. No recibe datos personales
            de los usuarios.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Apple Inc. / Google LLC:
            </span>{" "}
            cobro de Temporada en las tiendas, cuando esté disponible.
          </li>
        </ul>
        <p>
          No vendemos, alquilamos ni comercializamos datos personales con
          terceros.
        </p>
      </Section>

      <Section title="6. Retención y eliminación">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Conservación:
            </span>{" "}
            mientras la cuenta permanezca activa.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Borrar cuenta:
            </span>{" "}
            puede solicitar y ejecutar la eliminación desde{" "}
            <span className="font-semibold text-foreground">
              Mi Perfil → Ajustes → Eliminar Cuenta
            </span>
            .
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Efectos:
            </span>{" "}
            se borra el perfil, el historial de pronósticos y las marcas
            de puntos. Si el Usuario es admin de una mesa, esa mesa se
            cierra para el resto de miembros.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Copias de seguridad:
            </span>{" "}
            los backups purgan residuos en un máximo de 30 días tras la
            eliminación.
          </li>
        </ul>
      </Section>

      <Section title="7. Menores">
        <p>
          Reymar está concebida para mayores de 13 años (o la edad mínima
          legal de su país para servicios digitales). No recopilamos a
          sabiendas datos de menores sin consentimiento de padres o
          tutores.
        </p>
      </Section>

      <Section title="8. Derechos (ARCO / GDPR)">
        <p>
          Puede ejercer acceso, rectificación, cancelación, oposición y
          portabilidad escribiendo a{" "}
          <a
            href={`mailto:${PRIVACY_EMAIL}`}
            className="font-semibold text-accent hover:underline"
          >
            {PRIVACY_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section title="9. Escudos Cero y no afiliación">
        <p>
          Reymar no está afiliada a UEFA, CONMEBOL, Concacaf ni FIFA, ni
          a clubes o federaciones. Usamos acrónimos, nombres descriptivos
          y gráficos genéricos (Escudos Cero): ningún escudo o logo
          implica patrocinio o licencia.
        </p>
      </Section>

      <Section title="10. Contacto">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Privacidad:{" "}
            <a
              href={`mailto:${PRIVACY_EMAIL}`}
              className="font-semibold text-accent hover:underline"
            >
              {PRIVACY_EMAIL}
            </a>
          </li>
          <li>
            Soporte:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-accent hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </li>
          <li>
            Web:{" "}
            <a
              href={SITE_URL}
              className="font-semibold text-accent hover:underline"
            >
              {SITE_URL}
            </a>
          </li>
        </ul>
      </Section>
    </LegalLayout>
  );
}
