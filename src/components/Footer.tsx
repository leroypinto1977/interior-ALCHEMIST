import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 px-6 border-t border-cream/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        <div className="max-w-md">
          <Link href="/" className="text-3xl tracking-tighter block mb-6 hover:opacity-80 transition-opacity">
            <span className="font-light text-ivory/75">interior</span>{" "}
            <span className="font-bold bg-gradient-to-r from-ivory via-ivory to-oxblood-light text-transparent bg-clip-text">ALCHEMIST</span>
          </Link>
          <p className="text-cream/60 text-sm md:text-base leading-relaxed">
            A premium architecture and interior design studio crafting exceptional spaces for modern living and working.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="font-medium mb-6 text-ivory">Pages</h4>
            <ul className="space-y-4 text-cream/60">
              <li><Link href="#" className="hover:text-ivory transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-ivory transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-ivory transition-colors">Portfolio</Link></li>
              <li><Link href="#faq" className="hover:text-ivory transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 text-ivory">Socials</h4>
            <ul className="space-y-4 text-cream/60">
              <li><a href="#" className="flex items-center gap-1 hover:text-ivory transition-colors">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-ivory transition-colors">Twitter <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-ivory transition-colors">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-ivory transition-colors">Behance <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cream/10 text-cream/45 text-sm">
        <p>&copy; {new Date().getFullYear()} interior ALCHEMIST. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-ivory transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-ivory transition-colors">Terms of Service</Link>
        </div>
      </div>
      
      {/* Huge Background Text as per reference image */}
      <div className="max-w-7xl mx-auto w-full mt-12 text-center overflow-hidden">
        <h1 
          className="font-bold tracking-tighter select-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-ivory/25 via-oxblood-light/10 to-transparent drop-shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
          style={{ 
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
            fontSize: "clamp(2rem, 8.2vw, 7.5rem)"
          }}
        >
          interior ALCHEMIST
        </h1>
      </div>
    </footer>
  );
}
