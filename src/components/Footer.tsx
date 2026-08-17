import { Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo size="sm" />
            <p className="max-w-xs text-center text-sm text-muted sm:text-left">
              El SaaS de pronósticos de fútbol para competir con amigos en
              ligas privadas y públicas.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:justify-end">
              <a
                href="/privacidad"
                className="text-muted transition-colors hover:text-foreground"
              >
                Política de Privacidad
              </a>
              <a
                href="/terminos"
                className="text-muted transition-colors hover:text-foreground"
              >
                Términos de Uso
              </a>
            </nav>

            <a
              href="mailto:soporte@pronomatch.app"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Soporte
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border-subtle/60 pt-6 text-center text-xs text-muted sm:text-left">
          © {year} PronoMatch. Todos los derechos reservados. PronoMatch es
          una plataforma de entretenimiento deportivo y no está afiliada con
          la UEFA, CONMEBOL ni CONCACAF.
        </div>
      </div>
    </footer>
  );
}
