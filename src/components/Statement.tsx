import Image from "next/image";
import Reveal from "./Reveal";

// Full-bleed photo with the one-line thesis, like the reference's "NOT YOUR MOTHERS AGENCY" block.
export default function Statement() {
  return (
    <section className="relative bg-ink text-ivory overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=80"
        alt=""
        fill
        className="object-cover opacity-50"
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-44">
        <Reveal>
          <p className="eyebrow text-ivory/80 max-w-xs leading-loose">
            India&apos;s first conceptual interior design studio
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="headline text-[clamp(3rem,8vw,7.5rem)] mt-8 max-w-5xl">
            Your home should feel like a masterpiece you get to live inside.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
