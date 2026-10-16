import Image from "next/image";
import Ornament from "./Ornament";
import Reveal from "./Reveal";
import Stripe from "./Stripe";

const images = [
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80", alt: "Japandi dining, Kyoto" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80", alt: "Modernist villa, Zurich" },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=700&q=80", alt: "Living room" },
  { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80", alt: "Bright loft, Berlin" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80", alt: "Villa pool, Miami" },
  { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=700&q=80", alt: "Zen entryway, Seattle" },
];

// "THE LIFESTYLE" marquee with the photo strip hung beneath it.
export default function ShowcaseGrid() {
  const word = Array(4).fill("The lifestyle").join("    ");
  return (
    <section className="relative isolate overflow-hidden bg-sand pt-6 pb-14 md:pb-20">
      <Ornament kind="lines" className="left-1/2 -translate-x-1/2 -top-24 w-64 opacity-70" />
      <Ornament kind="kaleido" className="left-4 top-1/2 w-32 md:w-44" />
      <Ornament kind="kaleido" className="right-4 top-1/2 w-32 md:w-44" />

      <div aria-hidden className="flex whitespace-nowrap display uppercase text-[clamp(3.6rem,10vw,9rem)] text-ink select-none">
        <span className="animate-marquee-left pr-8">{word}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="animate-marquee-left pr-8">{word}&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <Stripe className="mt-1 h-[2px]" />

      <div className="relative mt-3 flex gap-3 md:gap-4 px-6 overflow-x-auto md:overflow-visible md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={i * 0.08} className={`shrink-0 ${i % 2 ? "md:-mt-5" : "md:mt-5"}`}>
            <div className="group relative w-[170px] md:w-[150px] lg:w-[190px] aspect-[3/4] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill sizes="220px" className="photo" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
