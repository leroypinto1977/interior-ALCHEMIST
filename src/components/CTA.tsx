import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative bg-oxblood overflow-hidden py-20 md:py-40 px-6">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
        alt=""
        fill
        className="object-cover opacity-50 mix-blend-multiply"
      />
      <Reveal className="relative max-w-2xl mx-auto">
        <div className="bg-cream text-ink px-8 py-14 md:px-16 md:py-20 text-center">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] text-oxblood">
            The right home changes <em>the way</em> you live every day
          </h2>
          <p className="mt-8 text-taupe leading-relaxed max-w-md mx-auto">
            Let’s create a space that feels elegant, functional, personal and completely aligned with your lifestyle.
          </p>
          <Link href="/book" className="btn btn-oxblood mt-10">
            Book your free consultation
          </Link>
          <p className="eyebrow text-taupe mt-6">A 30-minute call about your home, vision and goals</p>
        </div>
      </Reveal>
    </section>
  );
}
