import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import ShowcaseGrid from "@/components/ShowcaseGrid";
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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Statement />
      <About />
      <ShowcaseGrid />
      <Problem />
      <DreamOutcome />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Differentiation />
      <Testimonials />
      <VideoFeedback />
      <Trust />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
