import Link from "next/link";
import Shape from "./Shape";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 md:py-40 px-6">
      <Shape kind="leaf" className="right-[6%] top-1/2 -translate-y-1/2 w-[clamp(140px,16vw,260px)] -scale-x-100" />
      <Reveal className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-ink">
          The right home changes <em>the way</em> you live every day
        </h2>
        <p className="mt-8 text-taupe leading-relaxed max-w-md mx-auto">
          Let’s create a space that feels elegant, functional, personal and completely aligned with your lifestyle.
        </p>
        <Link href="/book" className="btn btn-ink mt-10">
          Book your free consultation
        </Link>
        <p className="eyebrow text-taupe mt-6">A 30-minute call about your home, vision and goals</p>
      </Reveal>
    </section>
  );
}
