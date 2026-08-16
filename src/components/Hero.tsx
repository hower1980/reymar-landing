import { StoreButtons } from "./StoreButtons";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="gradient-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            El SaaS de pronósticos para verdaderos fanáticos
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            La experiencia definitiva de{" "}
            <span className="text-accent">pronósticos de fútbol</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
            Crea tu propia liga privada, invita a tus amigos y compite jornada
            a jornada acertando resultados. Pronostica en torneos públicos o
            reta a tu grupo en una porra 100% personalizada.
          </p>

          <div className="mt-10">
            <StoreButtons id="descargar" />
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">+50</span>
              <span>Ligas activas</span>
            </div>
            <div className="h-8 w-px bg-border-subtle" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">3</span>
              <span>Torneos oficiales</span>
            </div>
            <div className="h-8 w-px bg-border-subtle" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">100%</span>
              <span>Habilidad, no azar</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
