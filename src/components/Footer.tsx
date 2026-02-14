import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "General Services" },
  { href: "/other-services", label: "Other Services" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Hands on Health Chiropractic
            </h3>
            <p className="text-sm leading-relaxed">
              Chiropractic care for healthy body &amp; mind. Serving Brighton,
              MI and surrounding communities since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-olive-light font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-olive transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-olive-light font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-olive mt-0.5 shrink-0" />
                10192 E Grand River Ave #107
                <br />
                Brighton, MI 48116
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-olive shrink-0" />
                <a href="tel:810-494-1900" className="hover:text-olive transition">
                  810-494-1900
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-olive shrink-0" />
                <a
                  href="mailto:office@hohchiro.com"
                  className="hover:text-olive transition"
                >
                  office@hohchiro.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-olive-light font-semibold text-sm uppercase tracking-wider mb-4">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-olive shrink-0" />
                Mon: 9am – 6pm
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-olive shrink-0" />
                Tue: 2pm – 6pm
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-olive shrink-0" />
                Wed: 9am – 6pm
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-olive shrink-0" />
                Thu: 9am – 5pm
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-olive shrink-0" />
                Fri: 9am – 12pm
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/HandsonHealthChiroBrighton/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-charcoal rounded-full flex items-center justify-center hover:bg-olive transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.google.com/maps/place/Hands+on+Health+Chiropractic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-charcoal rounded-full flex items-center justify-center hover:bg-olive transition text-xs font-bold"
              >
                G
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-charcoal rounded-full flex items-center justify-center hover:bg-olive transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Hands on Health Chiropractic. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
