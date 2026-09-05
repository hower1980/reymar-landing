import { StoreButtons } from "./StoreButtons";

export default function FinalCta() {
  return (
    <section className="border-t border-border-subtle/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Próximamente en App Store y Google Play
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Reymar aún no está en las tiendas. Cuando salga, arma tu mesa
          gratis y decide si esa mesa lleva Temporada.
        </p>
        <div className="mt-10">
          <StoreButtons align="center" />
        </div>
      </div>
    </section>
  );
}
