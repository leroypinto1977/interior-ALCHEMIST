import Reveal from "./Reveal";

const proof = [
  { value: "12+", label: "Years experience" },
  { value: "150+", label: "Homes designed & executed" },
  { value: "Premium", label: "Material standards" },
  { value: "Structured", label: "Execution process" },
  { value: "Transparent", label: "Communication" },
];

const trust = [
  "India’s 1st conceptual interior design studio",
  "End-to-end execution",
  "Structured timelines & process clarity",
  "Premium material & finish selection",
];

export default function About() {
  return (
    <section className="bg-cream py-20 md:py-36 px-6" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="eyebrow text-taupe">About Interior Alchemist</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-oxblood text-[clamp(2.6rem,6.5vw,5.5rem)] mt-8">
            We design <em>emotionally</em> refined homes for people who want <em>more</em> than ordinary interiors — and we <em>build</em> them too
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl mx-auto text-taupe text-base md:text-lg leading-relaxed">
            Interior Alchemist designs and executes living spaces for modern homeowners. One studio handles the concept, the materials, the timeline and the site, so the home you imagined is the home you move into.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-16">
          <ul className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-oxblood/20 divide-y md:divide-y-0 md:divide-x divide-oxblood/20">
            {proof.map((p) => (
              <li key={p.label} className="py-6 px-3 last:col-span-2 md:last:col-span-1">
                <span className="font-serif text-3xl md:text-4xl text-oxblood block">{p.value}</span>
                <span className="eyebrow text-taupe mt-2 block">{p.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-x-8 gap-y-3 eyebrow text-oxblood text-left mx-auto w-fit sm:w-auto">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-3 leading-relaxed">
                <span aria-hidden className="w-1.5 h-1.5 bg-oxblood rotate-45" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
