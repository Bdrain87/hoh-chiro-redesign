import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Star, ArrowRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/other-services", label: "Wellness" },
  { href: "/videos", label: "Watch & Learn" },
  { href: "/contact", label: "Contact" },
];

const hours = [
  { day: "Mon", time: "7:45a – 12p, 2:30 – 6p" },
  { day: "Tue", time: "8a – 12p, 3 – 6p" },
  { day: "Wed", time: "7:45a – 12p, 2:30 – 6:30p" },
  { day: "Thu", time: "7:45a – 12p, 2:30 – 6p" },
  { day: "Fri", time: "7a – 12p" },
  { day: "Sat", time: "8a – 12p" },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl tracking-tight">Ready to feel your best?</p>
            <p className="text-white/40 text-sm mt-1">Take the first step toward a healthier life.</p>
          </div>
          <a
            href="https://intake.mychirotouch.com/?clinic=HOHC0002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent shrink-0"
          >
            Book Appointment <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="mb-5">
              <img src="/logo.png" alt="Hands on Health Chiropractic" className="h-16 w-auto brightness-200" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Chiropractic care for healthy body &amp; mind. Serving Brighton, MI and surrounding communities since 2013.
            </p>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/HandsonHealthChiroBrighton/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/[0.06] hover:bg-accent/30 rounded-lg flex items-center justify-center transition text-white/50 hover:text-white" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/[0.06] hover:bg-accent/30 rounded-lg flex items-center justify-center transition text-white/50 hover:text-white text-xs font-bold" aria-label="Google">
                G
              </a>
              <a href="https://reviews.nextadagency.com/hands-on-health-chiropractic-156658570088144/review-us?dashboard=1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/[0.06] hover:bg-accent/30 rounded-lg flex items-center justify-center transition text-white/50 hover:text-white" aria-label="Reviews">
                <Star size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.16em] mb-6">Navigate</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">Patient Forms</a>
              </li>
              <li>
                <a href="https://hohchiro.com/wp-content/uploads/2023/05/Good-Faith-Estimate-and-No-Surprise-Act.pdf" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">Good Faith Estimate</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.16em] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/50 hover:text-white transition-colors">
                  <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                  <span>10192 E Grand River Ave #107<br />Brighton, MI 48116</span>
                </a>
              </li>
              <li>
                <a href="tel:810-494-1900" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors">
                  <Phone size={14} className="text-accent shrink-0" />
                  (810) 494-1900
                </a>
              </li>
              <li>
                <a href="mailto:office@hohchiro.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors">
                  <Mail size={14} className="text-accent shrink-0" />
                  office@hohchiro.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.16em] mb-6">Hours</h4>
            <div className="space-y-2.5 text-sm">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <span className="text-white/60 font-medium">{h.day}</span>
                  <span className="text-white/35 text-right">{h.time}</span>
                </div>
              ))}
              <div className="flex justify-between gap-4">
                <span className="text-white/60 font-medium">Sun</span>
                <span className="text-white/20">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} Hands on Health Chiropractic. All rights reserved.</p>
          <p className="text-white/20 text-xs">Proudly serving Livingston, Oakland &amp; Genesee Counties</p>
        </div>
      </div>
    </footer>
  );
}
