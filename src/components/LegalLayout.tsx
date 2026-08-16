import { ArrowLeft } from "lucide-react";
import Logo from "./Logo";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border-subtle/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8">
          <Logo />
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </a>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">
            Última actualización: {updatedAt}
          </p>

          <div className="legal-content mt-12 space-y-10 text-muted">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
