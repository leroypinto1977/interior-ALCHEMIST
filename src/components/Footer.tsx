import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Ornament from "./Ornament";
import Stripe from "./Stripe";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "FAQ", href: "/#faq" },
  { name: "Book", href: "/book" },
];

const strip = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=700&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=700&q=80",
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-sand text-ink">
      <Ornament kind="lines" className="left-1/2 -translate-x-1/4 bottom-0 w-72 md:w-[26rem]" />
      <Ornament kind="mark" className="right-6 bottom-28 w-52 md:w-80" />

      <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3 py-8 px-6 eyebrow">
        {links.map((l) => (
          <Link key={l.name} href={l.href} className="hover:underline underline-offset-4">
            {l.name}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
        {strip.map((src) => (
          <div key={src} className="group relative aspect-[4/3] overflow-hidden">
            <Image src={src} alt="" fill sizes="25vw" className="photo" />
          </div>
        ))}
      </div>

      <div className="px-6 md:px-10 pt-10 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <h2 className="lg:col-span-8 display uppercase text-[clamp(3rem,9vw,9rem)]">
          Interior
          <br />
          Alchemist
        </h2>
        <div className="lg:col-span-4 flex flex-col lg:items-end gap-5">
          <Logo variant="full" className="w-28 md:w-36" />
          <p className="eyebrow leading-loose max-w-xs lg:text-right">
            India’s first conceptual interior design studio. Design and execution under one roof.
          </p>
          <span className="h-px w-10 bg-ink/40" />
          <ul className="flex gap-6 eyebrow">
            {["Instagram", "LinkedIn", "Behance"].map((s) => (
              <li key={s}>
                <a href="#" className="hover:underline underline-offset-4">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-10 pb-5 flex flex-col sm:flex-row justify-between gap-3 eyebrow text-taupe">
        <span>© {new Date().getFullYear()} Interior Alchemist</span>
        <span className="flex gap-6">
          <Link href="#" className="hover:text-ink">Privacy</Link>
          <Link href="#" className="hover:text-ink">Terms</Link>
        </span>
      </div>
      <Stripe className="h-1.5" />
    </footer>
  );
}
