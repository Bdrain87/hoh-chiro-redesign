import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Star, ArrowRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/other-services", label: "Wellness" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

const hours = [
  { day: "M", time: "7:45a–12p, 2:30–6p" },
  { day: "T", time: "8a–12p, 3–6p" },
  { day: "W", time: "7:45a–12p, 2:30–6:30p" },
  { day: "Th", time: "7:45a–12p, 2:30–6p" },
  { day: "F", time: "7a–12p" },
  { day: "Sa", time: "8a–12p" },
];

export default function Footer() {
  return (
    <footer className="bg-dark">
      {/* CTA strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">Ready to feel better?</p>
            <p className="text-white/40 text-sm">Schedule your appointment today.</p>
          </div>
          <a
            href="https://intake.mychirotouch.com/?clinic=HOHC0002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-olive hover:bg-olive-dark text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition inline-flex items-center gap-2 shrink-0"
          >
            Book Now <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://hohchiro.com/wp-content/uploads/2020/02/logotall.png"
              alt="Hands on Health Chiropractic"
              className="h-16 w-auto brightness-200 mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed">
              Chiropractic care for healthy body &amp; mind. Serving Brighton, MI since 2013.
            </p>
            <div className="flex gap-2 mt-6">
              <a href="https://www.facebook.com/HandsonHealthChiroBrighton/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-olive rounded-lg flex items-center justify-center transition text-white/60 hover:text-white" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-olive rounded-lg flex items-center justify-center transition text-white/60 hover:text-white text-xs font-bold" aria-label="Google">
                G
              </a>
              <a href="https://reviews.nextadagency.com/hands-on-health-chiropractic-156658570088144/review-us?dashboard=1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-olive rounded-lg flex items-center justify-center transition text-white/60 hover:text-white" aria-label="Reviews">
                <Star size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">Navigate</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition">{link.label}</Link>
                </li>
              ))}
              <li>
                <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition">Patient Forms</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/50 hover:text-white transition">
                  <MapPin size={14} className="text-olive mt-0.5 shrink-0" />
                  <span>10192 E Grand River Ave #107<br />Brighton, MI 48116</span>
                </a>
              </li>
              <li>
                <a href="tel:810-494-1900" className="flex items-center gap-2.5 text-white/50 hover:text-white transition">
                  <Phone size={14} className="text-olive shrink-0" />
                  (810) 494-1900
                </a>
              </li>
              <li>
                <a href="mailto:office@hohchiro.com" className="flex items-center gap-2.5 text-white/50 hover:text-white transition">
                  <Mail size={14} className="text-olive shrink-0" />
                  office@hohchiro.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">Hours</h4>
            <div className="space-y-2 text-sm">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span className="text-white/60 font-medium">{h.day}</span>
                  <span className="text-white/40">{h.time}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span className="text-white/60 font-medium">Su</span>
                <span className="text-white/20">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} Hands on Health Chiropractic. All rights reserved.</p>
          <p className="text-white/20 text-xs">Livingston &bull; Oakland &bull; Genesee Counties</p>
        </div>
      </div>
    </footer>
  );
}
