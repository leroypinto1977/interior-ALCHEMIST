import { cn } from "@/lib/utils";

// Faint line-art motifs from the mockup. Place inside a `relative isolate overflow-hidden` section.
type Kind = "arcs" | "kaleido" | "leaf" | "lines";

const shapes: Record<Kind, React.ReactNode> = {
  // concentric quarter circles anchored to the bottom-left corner
  arcs: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      {[30, 55, 80, 105, 130, 155, 180, 205].map((r) => (
        <circle key={r} cx="0" cy="200" r={r} />
      ))}
    </g>
  ),
  // six-fold star of petals, like a kaleidoscope tile
  kaleido: (
    <g fill="currentColor">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <g key={a} transform={`rotate(${a} 100 100)`}>
          <path d="M100 100 L100 18 L128 42 Z" />
          <path d="M100 100 L128 42 L150 70 Z" opacity="0.6" />
          <path d="M100 100 L112 58 L100 44 L88 58 Z" opacity="0.35" />
        </g>
      ))}
    </g>
  ),
  // three leaves on a stem
  leaf: (
    <g fill="currentColor">
      <path d="M40 200 C42 140 70 100 118 78 C112 134 82 174 40 200 Z" />
      <path d="M76 190 C90 150 118 126 160 118 C150 160 118 184 76 190 Z" opacity="0.8" />
      <path d="M20 150 C26 110 46 84 80 70 C78 110 56 138 20 150 Z" opacity="0.6" />
      <path d="M40 200 C60 150 100 115 150 95" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
  // diagonal hatching inside a circle
  lines: (
    <g stroke="currentColor" strokeWidth="1.5" clipPath="url(#ornament-circle)">
      {Array.from({ length: 16 }, (_, i) => {
        const o = -100 + i * 25;
        return <line key={i} x1={o} y1="200" x2={o + 200} y2="0" />;
      })}
      <clipPath id="ornament-circle">
        <circle cx="100" cy="100" r="100" />
      </clipPath>
    </g>
  ),
};

export default function Ornament({ kind, className }: { kind: Kind; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute -z-10 text-ornament opacity-70", className)}
    >
      {shapes[kind]}
    </svg>
  );
}
