import { Goal } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="PronoMatch — Inicio"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-[0_0_20px_rgba(255,0,0,0.35)] transition-transform duration-200 group-hover:scale-105">
        <Goal className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        Prono<span className="text-accent">Match</span>
      </span>
    </a>
  );
}
