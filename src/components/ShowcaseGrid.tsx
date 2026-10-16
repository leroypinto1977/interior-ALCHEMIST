import Image from "next/image";
import Reveal from "./Reveal";

const images = [
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80", alt: "Japandi dining, Kyoto" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80", alt: "Modernist villa, Zurich" },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=700&q=80", alt: "Living room" },
  { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80", alt: "Bright loft, Berlin" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80", alt: "Villa pool, Miami" },
  { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=700&q=80", alt: "Zen entryway, Seattle" },
];

// Photo strip over a marquee of the wordmark.
export default function ShowcaseGrid() {
  const word = Array(4).fill("Interior Alchemist").join("  —  ");
  return (
    <section className="relative bg-ink py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex whitespace-nowrap font-serif uppercase text-oxblood text-[clamp(7rem,22vw,20rem)] leading-none select-none"
      >
        <span className="animate-marquee-left pr-8">{word}&nbsp;&nbsp;—&nbsp;&nbsp;</span>
        <span className="animate-marquee-left pr-8">{word}&nbsp;&nbsp;—&nbsp;&nbsp;</span>
      </div>

      <div className="relative flex gap-4 md:gap-5 px-6 overflow-x-auto md:overflow-visible md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={i * 0.08} className={`shrink-0 ${i % 2 ? "md:mt-10" : ""}`}>
            <div className="group relative w-[210px] md:w-[230px] lg:w-[260px] aspect-[3/4] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill sizes="260px" className="photo" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
