const SIZES = {
  md: {
    icon: "h-7 w-7 sm:h-9 sm:w-9",
    text: "text-3xl sm:text-4xl",
    gap: "gap-2 sm:gap-2.5",
  },
  sm: {
    icon: "h-6 w-6",
    text: "text-2xl",
    gap: "gap-1.5",
  },
} as const;

export default function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) {
  const s = SIZES[size];

  return (
    <a
      href="#top"
      className={`group flex items-end ${s.gap} ${className}`}
      aria-label="PronoMatch — Inicio"
    >
      <img
        src="/brand/isotipo-transparente.svg"
        alt=""
        aria-hidden="true"
        className={`${s.icon} shrink-0 drop-shadow-[0_0_14px_rgba(255,0,0,0.35)] transition-transform duration-200 group-hover:scale-105`}
      />
      <span
        className={`font-heading ${s.text} font-extrabold leading-none tracking-tight text-foreground`}
      >
        Prono<span className="text-accent-secondary">Match</span>
      </span>
    </a>
  );
}
