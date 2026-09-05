"use client";

import Logo from "./Logo";
import { StoreButtons } from "./StoreButtons";
import { DEEP_LINK_JOIN } from "@/lib/site-config";

export default function JoinMesaScreen({
  code,
  valid,
  siteName,
}: {
  code: string;
  valid: boolean;
  siteName: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border-subtle/60 bg-background">
        <div className="mx-auto flex max-w-lg items-center justify-between px-6 py-4">
          <Logo size="sm" />
          <a
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Inicio
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-6 py-16">
        {valid ? (
          <>
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              Invitación
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
              Te invitaron a una mesa {siteName}
            </h1>
            <p className="mt-3 text-muted">
              Usa este código en la app o ábrela si ya la tienes instalada.
            </p>
            <p className="mt-8 rounded-2xl border border-border-subtle bg-surface px-4 py-5 text-center font-heading text-3xl font-extrabold tracking-[0.35em] text-accent">
              {code}
            </p>
            <a
              href={DEEP_LINK_JOIN(code)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Abrir Reymar
            </a>
            <p className="mt-10 text-center text-sm text-muted">
              Próximamente en App Store y Google Play
            </p>
            <div className="mt-4">
              <StoreButtons align="center" />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
              Ese código no parece una mesa
            </h1>
            <p className="mt-4 leading-relaxed text-muted">
              Un código de mesa tiene 6 caracteres (letras o números). Revisa
              el enlace o pide uno nuevo al admin. No es un error del
              servidor: el código no encaja.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-border-subtle px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Volver al inicio
            </a>
          </>
        )}
      </main>

      <p className="px-6 pb-8 text-center text-xs leading-relaxed text-muted">
        Reymar no está afiliado a UEFA, CONMEBOL, Concacaf ni FIFA. No es
        una casa de apuestas.
      </p>
    </div>
  );
}
