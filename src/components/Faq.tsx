"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "¿PronoMatch es una app de apuestas?",
    answer:
      "No. PronoMatch es un SaaS deportivo de entretenimiento y habilidad. No manejamos dinero real, apuestas ni casas de apuestas: se trata de demostrar tus conocimientos de fútbol pronosticando resultados y sumando puntos.",
  },
  {
    question: "¿Puedo crear ligas con mis amigos?",
    answer:
      "Sí. Puedes crear ligas privadas ilimitadas, invitar a tus amigos mediante un código o enlace, y tener control total sobre los miembros que forman parte de tu liga.",
  },
  {
    question: "¿Qué torneos cubren?",
    answer:
      "Actualmente cubrimos la UEFA Champions League, la Copa Libertadores y la Copa de Campeones de la Concacaf, con más torneos en camino.",
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
            Todo lo que necesitas saber antes de empezar a pronosticar.
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
