import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Modern home interior",
    description: "A complete overhaul of a classic mid-century home, bringing in modern elements while preserving its original character. Light, airy and functional.",
    location: "Los Angeles",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  },
  {
    title: "Villa summer classic",
    description: "Mediterranean-inspired villa redesign focused on indoor-outdoor flow: natural stone, warm woods and expansive glass.",
    location: "Miami",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Modern living room",
    description: "A minimalist approach to a downtown penthouse: custom furniture, integrated lighting and panoramic city views.",
    location: "New York",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section className="bg-blush py-20 md:py-36 px-6 md:px-10" id="portfolio">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-taupe">Our portfolio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-oxblood text-[clamp(2.8rem,6.5vw,6rem)] mt-8">
              Homes that <em>feel</em> as good as they <em>look</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-taupe leading-relaxed">
              Every project is designed around the homeowner’s lifestyle, taste and daily routine, then built by the same team that drew it.
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-oxblood/30">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={0.2 + i * 0.08}>
                <li className="group py-7 border-b border-oxblood/30 grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline">
                  <h3 className="font-serif text-3xl md:text-4xl text-oxblood group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                  <span className="eyebrow text-taupe">
                    {p.location} · {p.year}
                  </span>
                  <p className="sm:col-span-2 text-taupe leading-relaxed max-w-xl">{p.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <Link href="/book" className="btn btn-oxblood mt-12">
              Start your project →
            </Link>
          </Reveal>
        </div>

        {/* Film-strip frame, as on the reference's portfolio block */}
        <Reveal className="lg:col-span-5 flex lg:justify-end" delay={0.15}>
          <div className="w-[260px] md:w-[300px] border border-ink/60 bg-cream p-2.5 space-y-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
            {projects.map((p) => (
              <div key={p.image} className="group relative aspect-[4/5] overflow-hidden">
                <Image src={p.image} alt={p.title} fill sizes="300px" className="photo" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
