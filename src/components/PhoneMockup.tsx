import { Trophy, Users } from "lucide-react";

const MATCHES = [
  { home: "REA", away: "MUN", homeScore: 2, awayScore: 1, time: "Finalizado" },
  { home: "BAR", away: "PSG", homeScore: 1, awayScore: 1, time: "Hoy 18:00" },
  { home: "MCI", away: "BAY", homeScore: 3, awayScore: 0, time: "Hoy 20:30" },
];

const LEADERBOARD = [
  { pos: 1, name: "Carlos M.", points: 128 },
  { pos: 2, name: "Valeria S.", points: 121 },
  { pos: 3, name: "Ana G.", points: 115 },
];

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative rounded-[2.75rem] border-[6px] border-[#0a0f24] bg-[#0a0f24] shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#0a0f24]" />

        <div className="overflow-hidden rounded-[2.25rem] bg-surface">
          <div className="flex items-center justify-between px-5 pb-4 pt-8">
            <div>
              <p className="text-[11px] font-medium text-muted">Liga Amigos FC</p>
              <p className="text-sm font-bold text-foreground">Jornada 12</p>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15">
              <Trophy className="h-4 w-4 text-accent" />
            </span>
          </div>

          <div className="space-y-2.5 px-4">
            {MATCHES.map((match) => (
              <div
                key={`${match.home}-${match.away}`}
                className="rounded-2xl border border-border-subtle bg-surface-elevated px-3.5 py-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-foreground">
                      {match.home}
                    </span>
                    <span className="text-xs font-medium text-muted">vs</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-foreground">
                      {match.away}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-background text-xs font-bold text-foreground">
                      {match.homeScore}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-background text-xs font-bold text-foreground">
                      {match.awayScore}
                    </span>
                  </div>
                </div>
                <p className="mt-1.5 text-[10px] text-muted">{match.time}</p>
              </div>
            ))}
          </div>

          <div className="mx-4 mb-6 mt-4 rounded-2xl border border-border-subtle bg-surface-elevated p-3.5">
            <div className="mb-2 flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-accent" />
              <p className="text-[11px] font-semibold text-foreground">
                Clasificación
              </p>
            </div>
            <div className="space-y-1.5">
              {LEADERBOARD.map((row) => (
                <div
                  key={row.pos}
                  className="flex items-center justify-between text-[11px]"
                >
                  <span className="flex items-center gap-2 text-muted">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
                        row.pos === 1
                          ? "bg-accent text-on-accent"
                          : "bg-white/10 text-foreground"
                      }`}
                    >
                      {row.pos}
                    </span>
                    {row.name}
                  </span>
                  <span className="font-semibold text-foreground">
                    {row.points} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
