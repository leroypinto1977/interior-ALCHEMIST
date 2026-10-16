import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Problem from "@/components/Problem";
import DreamOutcome from "@/components/DreamOutcome";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Differentiation from "@/components/Differentiation";
import Testimonials from "@/components/Testimonials";
import VideoFeedback from "@/components/VideoFeedback";
import Trust from "@/components/Trust";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Stripe from "@/components/Stripe";

type Entry = {
  C: () => JSX.Element;
  // `lock` pins the section while the next one scrolls over it; `over` is that next section, with rounded top corners.
  lock?: boolean;
  over?: boolean;
};

const sections: Entry[] = [
  { C: Hero, lock: true },
  { C: ShowcaseGrid, over: true },
  { C: Statement },
  { C: About },
  { C: Problem, lock: true },
  { C: DreamOutcome, over: true },
  { C: Services },
  { C: WhyUs },
  { C: Projects },
  { C: Process },
  { C: Differentiation },
  { C: Testimonials, lock: true },
  { C: VideoFeedback, over: true },
  { C: Trust },
  { C: Team },
  { C: FAQ },
  { C: CTA },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      {sections.map(({ C, lock, over }, i) => {
        if (lock) {
          // ponytail: pins from md up only; on phones these sections are taller than the screen and would hide their lower half
          return (
            <div key={i} className="md:sticky md:top-0">
              {i > 0 && <Stripe />}
              <C />
            </div>
          );
        }
        if (over) {
          return (
            <div key={i} className="relative -mt-8 rounded-t-[2.5rem] md:rounded-t-[3.5rem] overflow-hidden">
              <C />
            </div>
          );
        }
        return (
          <div key={i} className="relative">
            <Stripe />
            <C />
          </div>
        );
      })}
      <Stripe />
      <Footer />
    </main>
  );
}
