"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, FileText } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "General Services" },
  { href: "/other-services", label: "Other Services" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-olive text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <a
            href="tel:810-494-1900"
            className="flex items-center gap-2 hover:text-cream transition"
          >
            <Phone size={14} />
            Call Us Today! 810-494-1900
          </a>
          <a
            href="https://intake.mychirotouch.com/?clinic=HOHC0002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cream transition"
          >
            <FileText size={14} />
            Patient Forms
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col items-center leading-none">
              <div className="flex gap-1 mb-1">
                <span className="text-olive text-2xl">✋</span>
                <span className="text-brown text-2xl">✋</span>
                <span className="text-olive text-2xl">✋</span>
              </div>
              <span className="font-bold text-charcoal text-lg tracking-wider uppercase">
                Hands on Health
              </span>
              <span className="text-brown-light text-xs tracking-[0.3em] uppercase">
                Chiropractic
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brown/90 hover:text-olive font-medium text-sm uppercase tracking-wide transition"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://intake.mychirotouch.com/?clinic=HOHC0002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-olive hover:bg-olive-dark text-white px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide transition"
            >
              Schedule Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-brown/90 hover:text-olive font-medium text-sm uppercase tracking-wide border-b border-gray-50 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://intake.mychirotouch.com/?clinic=HOHC0002"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-olive hover:bg-olive-dark text-white text-center px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide transition"
            >
              Schedule Now
            </a>
          </div>
        )}
      </header>
    </>
  );
}
