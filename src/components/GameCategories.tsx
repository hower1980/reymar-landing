import { Target, Workflow, Crown, Footprints, Star, Layers } from "lucide-react";

const CATEGORIES = [
  {
    icon: Target,
    title: "Reymar",
    subtitle: "10 + 10 + 10",
    description:
      "Tendencia y marcador de cada partido. Es el núcleo de la mesa, con o sin Temporada.",
  },
  {
    icon: Workflow,
    title: "Bracket",
    subtitle: "Cuadro",
    description:
      "Predice clasificados ronda a ronda. El arranque depende de la copa (no siempre desde octavos).",
  },
  {
    icon: Crown,
    title: "Podio",
    subtitle: "Campeón y subcampeón",
    description:
      "Quién levanta el título y quién llega segundo. Con Temporada, suma al año de esa mesa.",
  },
  {
    icon: Footprints,
    title: "Bota de Oro",
    subtitle: "Goleador",
    description:
      "El máximo goleador de la copa. Campaña de Temporada, no un extra de pago para crear la mesa.",
  },
  {
    icon: Star,
    title: "MVP",
    subtitle: "Jugador más valioso",
    description:
      "Quién termina como el más decisivo del torneo. Misma lógica: Temporada en esa mesa.",
  },
  {
    icon: Layers,
    title: "Top 8, Playoff y Grupos",
    subtitle: "Según la copa",
    description:
      "Fase de liga, grupos o playoff según el formato de cada competición. Oro, por ejemplo, arranca más adelante.",
  },
];

export default function GameCategories() {
  return (
    <section
      id="categorias"
      className="scroll-mt-20 border-t border-border-subtle/60 bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Reymar y campañas
          </span>
          <h2 className="text-balance mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Cómo se pronostica
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Reymar (tendencia + marcador) está siempre. Campañas, Versus,
            Gráfica y Pleno se desbloquean con Temporada en esa mesa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <category.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.75}
                />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {category.title}
              </h3>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-accent/80">
                {category.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
