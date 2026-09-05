import { Trophy } from "lucide-react";

const TOURNAMENTS = [
  {
    name: "Champions League",
    region: "Europa",
  },
  {
    name: "Copa Libertadores",
    region: "Sudamérica",
  },
  {
    name: "Copa de Campeones",
    region: "Norte, Centroamérica y Caribe",
  },
];

export default function Tournaments() {
  return (
    <section id="copas" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Copas que cubrimos
          </h2>
          <p className="mt-4 text-lg text-muted">
            Pronostica en las competiciones de clubes más importantes del
            planeta.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TOURNAMENTS.map((tournament) => (
            <div
              key={tournament.name}
              className="group flex flex-col items-center rounded-2xl border border-border-subtle bg-surface px-6 py-10 text-center transition-colors hover:border-accent/50"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                <Trophy className="h-7 w-7 text-accent" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-bold text-foreground">
                {tournament.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{tournament.region}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
