import { cn } from "@/lib/utils";

// Oxblood / gold / stone hairline that separates sections in the mockup.
export default function Stripe({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex h-[3px] w-full", className)}>
      <span className="flex-1 bg-oxblood" />
      <span className="flex-1 bg-gold" />
      <span className="flex-1 bg-stone" />
    </div>
  );
}
