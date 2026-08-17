export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="PronoMatch — Inicio"
    >
      <img
        src="/brand/isotipo-transparente.svg"
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 drop-shadow-[0_0_14px_rgba(255,0,0,0.35)] transition-transform duration-200 group-hover:scale-105"
      />
      <span className="font-heading text-xl font-extrabold tracking-tight text-foreground">
        Prono<span className="text-accent-secondary">Match</span>
      </span>
    </a>
  );
}
