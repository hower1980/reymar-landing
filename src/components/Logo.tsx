const SIZES = {
  md: "h-10 sm:h-12",
  sm: "h-8 sm:h-9",
} as const;

export default function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) {
  return (
    <a
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Reymar — Inicio"
    >
      <img
        src="/brand/imagotipo-horizontal-contrastado.svg"
        alt="Reymar"
        className={`${SIZES[size]} w-auto max-w-[220px] sm:max-w-[280px]`}
      />
    </a>
  );
}
