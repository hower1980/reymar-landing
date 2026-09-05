const COPAS = [
  {
    name: "Champions League",
    region: "Europa",
    status: "Lab",
    note: "Disponible para jugar en lab.",
  },
  {
    name: "Copa Libertadores",
    region: "Sudamérica",
    status: "En camino",
    note: "Estructura lista; aún no jugable.",
  },
  {
    name: "Copa de Campeones",
    region: "Norte, Centroamérica y Caribe",
    status: "En camino",
    note: "Estructura lista; aún no jugable.",
  },
  {
    name: "Copa Oro",
    region: "Concacaf (selecciones)",
    status: "En camino",
    note: "Estructura lista; aún no jugable.",
  },
];

export default function Tournaments() {
  return (
    <section id="copas" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Copas
          </h2>
          <p className="mt-4 text-lg text-muted">
            Hoy se juega Champions en lab. El resto existe como estructura
            inactiva.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COPAS.map((copa) => (
            <div
              key={copa.name}
              className="flex flex-col rounded-2xl border border-border-subtle bg-surface px-6 py-8"
            >
              <span
                className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                  copa.status === "Lab"
                    ? "bg-accent/15 text-accent"
                    : "bg-white/5 text-muted"
                }`}
              >
                {copa.status}
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {copa.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{copa.region}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {copa.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
