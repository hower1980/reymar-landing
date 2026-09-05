"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "¿Reymar es una app de apuestas?",
    answer:
      "No. No hay prize pool ni dinero real. Es una mesa de pronósticos: habilidad y puntos, no apuestas.",
  },
  {
    question: "¿Es gratis?",
    answer:
      "La mesa de amigos es gratis (cupo 25). Temporada es un pago anual opcional por mesa: desbloquea campañas, Versus, Gráfica, Pleno sin watermark y el ranking combinado del año en esa mesa. Sin Temporada sigues jugando Reymar partido a partido y el ranking de mesa solo Reymar. Las campañas también se pueden jugar para el ranking FREE mundial.",
  },
  {
    question: "¿Cómo funciona la mesa?",
    answer:
      "Un admin crea la mesa y comparte un código o un enlace HTTPS de invitación (getreymar.com/join/CODIGO). Con ese código te unes. El objeto es el grupo privado, no una liga de pago.",
  },
  {
    question: "¿Necesito cuenta para el primer pronóstico?",
    answer:
      "No de inmediato. Con Ghost Prediction puedes meter un marcador y ver cómo queda. Pedimos cuenta cuando guardas de verdad para entrar al ranking.",
  },
  {
    question: "¿Qué copas hay?",
    answer:
      "Champions está en lab y se puede jugar. Libertadores, Copa de Campeones y Copa Oro existen como estructura inactiva: en camino, no jugables hoy.",
  },
  {
    question: "¿Hay que pagar para crear el grupo?",
    answer:
      "No. Crear o unirse a una mesa es gratis. Temporada no es un peaje para abrir la mesa: es un extra anual en esa mesa concreta.",
  },
  {
    question: "¿Cómo se calcula Reymar?",
    answer:
      "Tendencia + marcador, 10+10+10 por partido. El corte cierra 2 horas antes. Con Temporada se suman las campañas de esa mesa al ranking del año.",
  },
  {
    question: "¿Hay que cargar los resultados a mano?",
    answer:
      "No. Los marcadores se actualizan en automático cuando el partido cierra. No prometemos “tiempo real” ni “fuentes oficiales en producción” mientras el cron no esté vivo.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Mesa, Temporada y copas, sin humo.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-surface"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-foreground sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
