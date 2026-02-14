"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="bg-primary text-white/70 text-[11px] tracking-wide">
        <div className="max-w-[1280px] mx-auto px-6 py-2 flex justify-between items-center">
          <a href="tel:810-494-1900" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={11} /> (810) 494-1900
          </a>
          <div className="hidden sm:flex items-center gap-5">
            <span className="text-white/40">10192 E Grand River Ave #107, Brighton, MI</span>
            <a
              href="https://intake.mychirotouch.com/?clinic=HOHC0002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-white transition-colors font-medium"
            >
              Patient Forms
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav shadow-[0_1px_0_rgba(0,0,0,0.04)] border-b border-black/[0.04]"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="shrink-0 group flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-sm tracking-tight">HoH</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-ink font-bold text-[13px] leading-tight tracking-tight">Hands on Health</p>
                <p className="text-ink-muted text-[11px] leading-tight">Chiropractic</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-ink-secondary hover:text-ink text-[13px] font-medium transition-colors duration-200 rounded-lg hover:bg-surface-alt"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 btn-primary text-[12px] py-2.5 px-5"
              >
                Book Now <ArrowRight size={13} />
              </a>
            </nav>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-alt transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} className="text-ink" /> : <Menu size={20} className="text-ink" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40" style={{ paddingTop: "32px" }}>
            <div className="max-w-[1280px] mx-auto px-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3.5 px-5 text-ink hover:text-primary hover:bg-surface-alt font-medium text-[15px] rounded-xl transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-primary text-center justify-center w-full"
                >
                  Book Now <ArrowRight size={14} />
                </a>
                <a
                  href="tel:810-494-1900"
                  className="block btn-secondary text-center justify-center w-full"
                >
                  <Phone size={14} /> (810) 494-1900
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
