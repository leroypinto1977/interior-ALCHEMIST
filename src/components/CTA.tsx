import Link from "next/link";
import Ornament from "./Ornament";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 md:py-40 px-6">
      <Ornament kind="kaleido" className="-left-20 bottom-0 w-72 md:w-[24rem]" />
      <Ornament kind="arcs" className="right-10 -top-32 w-[22rem] md:w-[34rem] rotate-180" />
      <Ornament kind="kaleido" className="right-16 top-10 w-40 md:w-56" />
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
