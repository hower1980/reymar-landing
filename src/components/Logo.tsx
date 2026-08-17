const SIZES = {
  md: {
    icon: "h-8 w-8 sm:h-10 sm:w-10",
    text: "text-2xl sm:text-3xl",
    gap: "gap-2 sm:gap-2.5",
  },
  sm: {
    icon: "h-7 w-7",
    text: "text-xl",
    gap: "gap-2",
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
      className={`group flex items-center ${s.gap} ${className}`}
      aria-label="PronoMatch — Inicio"
    >
      <img
        src="/brand/isotipo-transparente.svg"
        alt=""
        aria-hidden="true"
        className={`${s.icon} shrink-0 drop-shadow-[0_0_14px_rgba(255,0,0,0.35)] transition-transform duration-200 group-hover:scale-105`}
      />
      <span
        className={`font-heading ${s.text} font-extrabold tracking-tight text-foreground`}
      >
        Prono<span className="text-accent-secondary">Match</span>
      </span>
    </a>
  );
}
