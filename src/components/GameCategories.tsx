import { Target, Workflow, Crown, Footprints, Layers, Compass, Swords } from "lucide-react";

const GLOBAL_CATEGORIES = [
  {
    icon: Target,
    title: "Reymar",
    subtitle: "Marcadores y tendencias",
    description:
      "Pronostica el resultado exacto, la tendencia o los goles de cada partido de la competición. La precisión se paga con puntos.",
  },
  {
    icon: Workflow,
    title: "Bracket",
    subtitle: "El cuadro final",
    description:
      "Vive la tensión máxima prediciendo a los 14 clasificados ronda a ronda, desde octavos hasta la gran final.",
  },
  {
    icon: Crown,
    title: "Podio y País Dominante",
    subtitle: "La cumbre del torneo",
    description:
      "Arriésgate a predecir al campeón, al subcampeón y a la nación que dominará la competición internacional.",
  },
  {
    icon: Footprints,
    title: "Bota de Oro y MVP",
    subtitle: "Las grandes estrellas",
    description:
      "Demuestra que conoces a los protagonistas acertando al máximo goleador y al jugador más valioso de la temporada.",
  },
];

const TOURNAMENT_RULES = [
  {
    icon: Layers,
    tournament: "Champions League",
    description:
      "Domina la fase de liga prediciendo el codiciado Top 8, la zona de playoff y los cruces definitivos a octavos.",
  },
  {
    icon: Compass,
    tournament: "Copa Libertadores",
    description:
      "Pon a prueba tu lógica analizando las posiciones exactas de la fase de grupos y anticipando a los clasificados a octavos.",
  },
  {
    icon: Swords,
    tournament: "Copa de Campeones",
    description:
      "Estrategia exprés: pronostica con precisión quirúrgica a los ganadores de la Ronda 1 para avanzar a octavos.",
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
            Sistema multicategoría
          </span>
          <h2 className="text-balance mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Domina cada categoría de juego
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Reymar rompe los esquemas de las quinielas tradicionales. No se
            trata solo de adivinar quién gana un partido: pon a prueba tu
            visión estratégica compitiendo en categorías globales —incluida
            la modalidad Reymar de marcadores— y específicas de cada torneo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GLOBAL_CATEGORIES.map((category) => (
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

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Reglas de oro por competición
            </h3>
            <p className="mt-3 text-muted">
              Cada torneo tiene su propio formato: Reymar se adapta para
              exprimir al máximo tu estrategia.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TOURNAMENT_RULES.map((rule) => (
              <div
                key={rule.tournament}
                className="flex flex-col rounded-2xl border border-border-subtle bg-surface p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <rule.icon
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.75}
                  />
                </span>
                <h4 className="mt-4 text-sm font-bold uppercase tracking-wide text-foreground">
                  {rule.tournament}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
