import { Users, Target, Trophy } from "lucide-react";

const STEPS = [
  {
    icon: Users,
    title: "Crea o únete a una liga",
    description:
      "Arma tu liga privada en segundos e invita a tus amigos, o suma puntos en las ligas públicas de PronoMatch.",
  },
  {
    icon: Target,
    title: "Pronostica cada jornada",
    description:
      "Predice el marcador exacto de cada partido antes del pitazo inicial. Cuanto más preciso, más puntos sumas.",
  },
  {
    icon: Trophy,
    title: "Compite en la clasificación",
    description:
      "Sigue la tabla de posiciones en tiempo real y demuestra quién sabe más de fútbol en tu grupo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 border-t border-border-subtle/60 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tres pasos para convertirte en el mejor pronosticador de tu liga.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border-subtle bg-surface p-8"
            >
              <span className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <step.icon className="h-8 w-8 text-accent" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
