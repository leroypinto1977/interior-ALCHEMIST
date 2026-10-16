import { cn } from "@/lib/utils";

// Line-art shapes cut from the client's mockup, stored as alpha masks in /public/ornaments
// so they can take any colour (`bg-*`). Place inside a `relative isolate overflow-hidden` section.
export type OrnamentKind = "leaf" | "kaleido" | "arcs" | "lines" | "mark";

const shapes: Record<OrnamentKind, { file: string; ratio: string }> = {
  leaf: { file: "/ornaments/leaf.png", ratio: "725 / 800" },
  kaleido: { file: "/ornaments/kaleido.png", ratio: "300 / 440" },
  arcs: { file: "/ornaments/arcs.png", ratio: "302 / 800" },
  lines: { file: "/ornaments/lines.png", ratio: "800 / 319" },
  mark: { file: "/ornaments/mark.png", ratio: "1196 / 594" },
};

export function maskStyle(file: string, ratio: string): React.CSSProperties {
  const url = `url(${file})`;
  return {
    aspectRatio: ratio,
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
}

export default function Ornament({ kind, className }: { kind: OrnamentKind; className?: string }) {
  const { file, ratio } = shapes[kind];
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 block bg-ornament", className)}
      style={maskStyle(file, ratio)}
    />
  );
}
