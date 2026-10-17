import ArcSeam from "./ArcSeam";
import Reveal from "./Reveal";

// The one-line thesis, set heavy, as in the mockup.
export default function Statement() {
  return (
    <section className="relative isolate overflow-hidden bg-cream text-ink">
      <ArcSeam half="top" side="left" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-40">
        <Reveal>
          <p className="eyebrow text-ink/70 max-w-xs leading-loose">
            India&apos;s first conceptual interior design studio
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="display text-[clamp(2.6rem,6.5vw,6.5rem)] leading-[0.95] mt-8 max-w-5xl">
            Your home should feel like a masterpiece you get to live inside.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
