import Reveal from "./Reveal";

const rows = [
  { category: "Approach", ordinary: "Furniture-focused", alchemist: "Experience-focused" },
  { category: "Concept", ordinary: "Generic modular layouts", alchemist: "Deeply personalised concepts" },
  { category: "Relationship", ordinary: "Transactional", alchemist: "Lifestyle transformation" },
  { category: "Management", ordinary: "Execution confusion", alchemist: "Structured process clarity" },
  { category: "Design DNA", ordinary: "Trend-driven", alchemist: "Timeless sophistication" },
  { category: "Execution", ordinary: "Vendor coordination stress", alchemist: "Seamless end-to-end delivery" },
];

export default function Differentiation() {
  return (
    <section className="bg-cream py-28 md:py-36 px-6 md:px-10" id="differentiation">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow text-taupe">The difference</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-oxblood text-[clamp(2.8rem,6.5vw,6rem)] mt-8">
            The difference is <em>felt</em> immediately
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <div className="grid grid-cols-[auto_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-x-4 md:gap-x-10 eyebrow border-b border-oxblood pb-4">
            <span className="text-taupe">Compare</span>
            <span className="text-taupe">Ordinary firms</span>
            <span className="text-oxblood">Interior Alchemist</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.category}
              className="grid grid-cols-[auto_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-x-4 md:gap-x-10 items-baseline py-5 border-b border-oxblood/20"
            >
              <span className="eyebrow text-taupe">{r.category}</span>
              <span className="text-taupe/80 line-through decoration-oxblood/40 text-sm md:text-lg">{r.ordinary}</span>
              <span className="font-serif text-xl md:text-3xl text-oxblood">{r.alchemist}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
