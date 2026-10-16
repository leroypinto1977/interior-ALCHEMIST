import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";

// The one background design, cut from the client's mockup: a star top-left, a leaf top-right,
// concentric arcs bottom-left and hatching bottom-right. Same placement in every section.
// Place inside a `relative isolate overflow-hidden` section. `tone` picks the colour.
export default function Backdrop({ tone = "ornament" }: { tone?: "ornament" | "cream" }) {
  const color = tone === "cream" ? "bg-cream opacity-10" : "bg-ornament";
  // the strips keep their proportions and never shrink below 760px wide, so phones still see the shapes at the edges
  const size = "max(100%, 760px) auto";
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 block overflow-hidden">
      <span
        className={cn("absolute inset-x-0 top-0 block h-[45%] max-h-[30vw]", color)}
        style={maskStyle("/backdrop-top.png", undefined, size, "top center")}
      />
      <span
        className={cn("absolute inset-x-0 bottom-0 block h-[45%] max-h-[30vw]", color)}
        style={maskStyle("/backdrop-bottom.png", undefined, size, "bottom center")}
      />
    </span>
  );
}
