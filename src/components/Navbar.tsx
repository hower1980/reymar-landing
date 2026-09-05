"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Copas", href: "#copas" },
  { label: "Categorías", href: "#categorias" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border-subtle/60 bg-background"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#descargar"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-[0_0_20px_rgba(212,196,168,0.3)] transition-all hover:bg-accent-hover hover:shadow-[0_0_28px_rgba(212,196,168,0.45)] md:inline-block"
        >
          Próximamente
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border-subtle/60 bg-background px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#descargar"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Próximamente
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
