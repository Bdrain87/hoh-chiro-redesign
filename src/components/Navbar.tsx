"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/other-services", label: "Wellness" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-charcoal text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <a href="tel:810-494-1900" className="flex items-center gap-1.5 hover:text-olive transition">
            <Phone size={12} /> (810) 494-1900
          </a>
          <div className="hidden sm:flex items-center gap-6">
            <span className="text-white/40">10192 E Grand River Ave #107, Brighton, MI</span>
            <a
              href="https://intake.mychirotouch.com/?clinic=HOHC0002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-olive/20 hover:bg-olive/30 text-olive-light px-3 py-1 rounded-full transition text-xs font-medium"
            >
              Patient Forms
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100/50"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="shrink-0 relative group">
              <img
                src="https://hohchiro.com/wp-content/uploads/2020/02/logotall.png"
                alt="Hands on Health Chiropractic"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-charcoal/70 hover:text-charcoal text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 rounded-lg hover:bg-cream"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-olive hover:bg-olive-dark text-white pl-6 pr-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-1.5 btn-pulse"
              >
                Book Now <ChevronRight size={14} />
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-cream transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} className="text-charcoal" /> : <Menu size={22} className="text-charcoal" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 text-charcoal/80 hover:text-charcoal hover:bg-cream font-semibold text-sm uppercase tracking-wide rounded-lg transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <a
                  href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-olive hover:bg-olive-dark text-white text-center px-6 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
