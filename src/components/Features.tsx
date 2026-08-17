import { Lock, Zap, ShieldCheck, Trophy } from "lucide-react";

const FEATURES = [
  {
    icon: Lock,
    title: "Ligas 100% privadas",
    description:
      "Controla quién entra a tu liga con invitaciones y códigos de acceso exclusivos.",
  },
  {
    icon: Zap,
    title: "Clasificación en tiempo real",
    description:
      "Los puntos se actualizan automáticamente al finalizar cada partido.",
  },
  {
    icon: Trophy,
    title: "Multi-torneo",
    description:
      "Sigue varias competiciones al mismo tiempo desde una sola app.",
  },
  {
    icon: ShieldCheck,
    title: "Entretenimiento y habilidad",
    description:
      "Un SaaS deportivo de pronósticos: sin apuestas, sin dinero en juego.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-border-subtle/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas para competir
          </h2>
          <p className="mt-4 text-lg text-muted">
            Diseñado para grupos de amigos, comunidades y fanáticos del fútbol
            que quieren más que solo ver los partidos.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border-subtle bg-surface p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <feature.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
