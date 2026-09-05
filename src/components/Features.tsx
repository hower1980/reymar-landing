const FEATURES = [
  {
    title: "Mesas privadas",
    description:
      "Gratis, cupo 25. Creas o te unes con un código. El admin decide quién entra.",
  },
  {
    title: "Temporada opcional",
    description:
      "Un pago anual por mesa. En esa mesa desbloqueas campañas, Versus, Gráfica, Pleno sin watermark y el ranking combinado del año.",
  },
  {
    title: "Una mesa, el año",
    description:
      "La mesa vive la temporada. Multi-copa no significa que hoy se jueguen todas: Champions está en lab; el resto, en camino.",
  },
  {
    title: "Sin apuestas",
    description:
      "Entretenimiento y habilidad. No hay prize pool ni dinero real en juego.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-border-subtle/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Lo que es — y lo que no
          </h2>
          <p className="mt-4 text-lg text-muted">
            El objeto social es la mesa. Temporada no es un peaje para crear
            el grupo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <img
                  src="/brand/isotipo-transparente.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6"
                />
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
