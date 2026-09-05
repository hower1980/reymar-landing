import { Users, Target, Trophy } from "lucide-react";

const STEPS = [
  {
    icon: Users,
    title: "Crea o únete a una mesa",
    description:
      "La mesa es gratis: hasta 25 personas (el admin cuenta). Créala o únete con un código de invitación.",
  },
  {
    icon: Target,
    title: "Pronostica Reymar antes del corte",
    description:
      "Tendencia + marcador (10+10+10) en cada partido. El corte cierra 2 horas antes del pitazo.",
  },
  {
    icon: Trophy,
    title: "Compite en tu mesa",
    description:
      "Sin Temporada: Reymar partido a partido y ranking de mesa. Con Temporada en esa mesa: campañas, Versus, Gráfica y Pleno.",
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
            El objeto es la mesa: un grupo privado, no una liga de pago.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border-subtle bg-surface p-8"
            >
              <span className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">
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
