import Reveal from "./Reveal";

const steps = [
  { title: "Discovery consultation", text: "We learn your lifestyle, vision, requirements and investment range." },
  { title: "Concept & planning", text: "Space planning, concepts, materials and visualisations." },
  { title: "Approvals", text: "Selections, timelines and scope confirmed before work begins." },
  { title: "Execution", text: "Managed implementation with regular updates and quality checks." },
  { title: "Handover", text: "A finished home, ready to live in." },
];

export default function Process() {
  return (
    <section className="bg-ink text-ivory py-20 md:py-36 px-6 md:px-10" id="process">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow text-ivory/60">Our process</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-[clamp(2.8rem,6.5vw,6rem)] mt-8 max-w-4xl">
            A <em>structured</em> process that keeps everything clear and <em>stress-free</em>
          </h2>
        </Reveal>

        <ol className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.1}>
              <li className="border-l border-ivory/30 pl-5 h-full">
                <span className="eyebrow text-oxblood-light">Step {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-2xl mt-4">{s.title}</h3>
                <p className="mt-3 text-ivory/60 leading-relaxed text-sm">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
