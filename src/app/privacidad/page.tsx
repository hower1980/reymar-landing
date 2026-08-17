import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo PronoMatch recopila, usa y protege tus datos personales a través de Supabase, Expo y RevenueCat.",
  alternates: {
    canonical: "https://pronomatch.app/privacidad",
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
    <LegalLayout title="Política de Privacidad" updatedAt="16 de agosto de 2026">
      <Section title="1. Introducción">
        <p>
          PronoMatch (&quot;la Aplicación&quot;, &quot;el Servicio&quot;,
          &quot;nosotros&quot;) es una plataforma de Software como Servicio
          (SaaS) orientada al entretenimiento social y a la gestión de ligas
          privadas de pronósticos deportivos de fútbol. La presente Política
          de Privacidad describe cómo recopilamos, utilizamos, almacenamos y
          protegemos la información personal de nuestros usuarios
          (&quot;el Usuario&quot; o &quot;usted&quot;). Al descargar, acceder
          o utilizar PronoMatch, usted acepta las prácticas descritas en esta
          política.
        </p>
      </Section>

      <Section title="2. Datos que recopilamos">
        <p>
          Recopilamos únicamente la información estrictamente necesaria para
          la prestación y optimización del servicio:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Datos de Cuenta y Autenticación:
            </span>{" "}
            correo electrónico, nombre de usuario y contraseña cifrada
            (gestionados mediante la infraestructura de autenticación segura
            de Supabase Auth).
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos de Actividad del Juego:
            </span>{" "}
            pronósticos ingresados, fechas de envío, puntuaciones obtenidas,
            registros de auditoría de puntos, historial de membresía y
            administración de ligas privadas.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos Técnicos y de Dispositivo:
            </span>{" "}
            identificadores únicos del dispositivo, sistema operativo,
            versión de la aplicación y tokens de notificaciones push (Expo
            Notifications) utilizados exclusivamente para emitir alertas
            sobre fechas límite de pronósticos y novedades de tus ligas.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Datos de Transacciones y Compras:
            </span>{" "}
            información sobre el estado de suscripción o paquetes de ligas
            creadas, procesada y autenticada vía RevenueCat y las plataformas
            oficiales Apple App Store y Google Play Store.{" "}
            <span className="font-semibold text-foreground">
              PronoMatch no recopila, procesa ni almacena datos de tarjetas
              de crédito o débito.
            </span>
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Información NO recopilada:
            </span>{" "}
            PronoMatch NO rastrea ni almacena su ubicación geográfica
            precisa, lista de contactos, archivos multimedia ni actividad de
            navegación fuera de la Aplicación.
          </li>
        </ul>
      </Section>

      <Section title="3. Aclaración sobre Juegos de Azar y Apuestas">
        <p>
          PronoMatch{" "}
          <span className="font-semibold text-foreground">
            NO es una plataforma de apuestas deportivas ni un casino en
            línea
          </span>
          . El cobro de funciones dentro de la aplicación corresponde
          exclusivamente al acceso a características de software mejoradas
          (SaaS), como la ampliación del cupo de participantes en ligas
          privadas o estadísticas avanzadas. No se permite, facilita ni
          realiza la apuesta de dinero real ni la entrega de premios en
          efectivo a través de la infraestructura de la Aplicación.
        </p>
      </Section>

      <Section title="4. Cómo usamos la información">
        <p>Utilizamos la información recopilada para:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Autenticar su identidad y mantener activa su sesión de usuario.</li>
          <li>
            Calcular en tiempo real puntuaciones, posiciones en
            clasificaciones generales y desempates matemáticos.
          </li>
          <li>
            Notificar los recordatorios de cierre de jornadas de pronóstico y
            actividad relevante en ligas privadas.
          </li>
          <li>Procesar y activar las funciones Premium adquiridas por el usuario.</li>
          <li>
            Monitorear el rendimiento técnico, solucionar errores de
            software y prevenir conductas fraudulentas o abuso de la API.
          </li>
        </ol>
      </Section>

      <Section title="5. Proveedores de Servicios y Subencargados del Tratamiento">
        <p>
          Para la operación del Servicio, compartimos datos mínimos
          requeridos con los siguientes proveedores de infraestructura
          tecnológica:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Supabase Inc.:
            </span>{" "}
            gestión de base de datos relacional PostgreSQL, funciones de
            backend (Edge Functions) y autenticación segura de usuarios.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Expo / 650 Industries Inc.:
            </span>{" "}
            infraestructura de compilación y servicio de notificaciones push
            móviles.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              RevenueCat Inc.:
            </span>{" "}
            validación de recibos de compras dentro de la app (In-App
            Purchases) y estado de membresías.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              API-Football (API-Sports):
            </span>{" "}
            proveedor externo de resultados deportivos y calendarios (no
            recibe ningún dato personal de los usuarios).
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Apple Inc. / Google LLC:
            </span>{" "}
            procesamiento y cobro de transacciones en las tiendas oficiales.
          </li>
        </ul>
        <p>
          No vendemos, alquilamos ni comercializamos datos personales con
          terceros bajo ninguna circunstancia.
        </p>
      </Section>

      <Section title="6. Retención y Eliminación de Datos">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Período de Conservación:
            </span>{" "}
            los datos se conservan mientras la cuenta del Usuario permanezca
            activa en la plataforma.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Derecho de Eliminación (Derecho al Olvido):
            </span>{" "}
            el Usuario puede solicitar y ejecutar la eliminación completa e
            irreversible de su cuenta en cualquier momento accediendo dentro
            de la aplicación a:{" "}
            <span className="font-semibold text-foreground">
              Mi Perfil → Ajustes → Eliminar Cuenta
            </span>
            .
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Efectos de la Eliminación:
            </span>{" "}
            la eliminación de la cuenta borra de forma permanente el perfil,
            el historial de pronósticos y las marcas de puntos. En caso de
            que el Usuario sea el creador/administrador de una liga privada,
            la liga se cerrará para el resto de miembros.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Resguardos de Seguridad:
            </span>{" "}
            las copias de seguridad del sistema (backups) purgan los datos
            residuales en un período máximo de 30 días posteriores a la
            solicitud de eliminación.
          </li>
        </ul>
      </Section>

      <Section title="7. Menores de Edad">
        <p>
          PronoMatch está concebida para usuarios mayores de 13 años (o la
          edad mínima legal exigida en su país de residencia para el uso de
          servicios digitales). No recopilamos a sabiendas información de
          menores de edad sin el consentimiento de sus padres o tutores.
        </p>
      </Section>

      <Section title="8. Derechos de los Usuarios (ARCO / GDPR)">
        <p>
          Dependiendo de su lugar de residencia, el Usuario puede ejercer sus
          derechos de Acceso, Rectificación, Cancelación, Oposición y
          Portabilidad de sus datos personales enviando un mensaje expreso a
          nuestro correo oficial de privacidad:{" "}
          <a
            href="mailto:privacidad@pronomatch.app"
            className="font-semibold text-accent hover:underline"
          >
            privacidad@pronomatch.app
          </a>
          .
        </p>
      </Section>

      <Section title="9. Contacto">
        <p>
          Para cualquier duda, aclaración o ejercicio de derechos sobre la
          presente Política de Privacidad, puede contactarnos en:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-foreground">
              Correo electrónico:
            </span>{" "}
            <a
              href="mailto:privacidad@pronomatch.app"
              className="font-semibold text-accent hover:underline"
            >
              privacidad@pronomatch.app
            </a>
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Soporte General:
            </span>{" "}
            <a
              href="mailto:soporte@pronomatch.app"
              className="font-semibold text-accent hover:underline"
            >
              soporte@pronomatch.app
            </a>
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Sitio Web:
            </span>{" "}
            <a
              href="https://pronomatch.app"
              className="font-semibold text-accent hover:underline"
            >
              https://pronomatch.app
            </a>
          </li>
        </ul>
      </Section>
    </LegalLayout>
  );
}
