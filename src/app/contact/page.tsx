import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const hours = [
  { day: "Mon", time: "7:45 AM – 12:00 PM, 2:30 PM – 6:00 PM" },
  { day: "Tue", time: "8:00 AM – 12:00 PM, 3:00 PM – 6:00 PM" },
  { day: "Wed", time: "7:45 AM – 12:00 PM, 2:30 PM – 6:30 PM" },
  { day: "Thu", time: "7:45 AM – 12:00 PM, 2:30 PM – 6:00 PM" },
  { day: "Fri", time: "7:00 AM – 12:00 PM" },
  { day: "Sat", time: "8:00 AM – 12:00 PM" },
  { day: "Sun", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative hero-gradient overflow-hidden min-h-[40vh] flex items-center">
        <div className="relative max-w-[1280px] mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="section-label" style={{ color: "rgba(106,173,123,0.8)" }}>Get in Touch</div>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold text-white mb-5 tracking-tight">Contact Us</h1>
            <p className="text-white/80 text-lg max-w-lg leading-relaxed">
              Ready to begin your journey to better health? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-5 gap-14">
            <ScrollReveal variant="left" className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-ink mb-4 tracking-tight">Get in Touch</h2>
                  <p className="text-ink-secondary text-sm leading-relaxed">
                    We&apos;re located on E Grand River Ave near Fonda Lake, down the road from Island Lake State Recreation Area.
                  </p>
                </div>

                <div className="space-y-5">
                  <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-accent/[0.08] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition">
                      <MapPin size={17} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">Address</p>
                      <p className="text-ink-secondary text-sm">10192 E Grand River Ave #107<br />Brighton, MI 48116</p>
                    </div>
                  </a>

                  <a href="tel:810-494-1900" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-accent/[0.08] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition">
                      <Phone size={17} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">Phone</p>
                      <p className="text-ink-secondary text-sm">(810) 494-1900</p>
                    </div>
                  </a>

                  <a href="mailto:office@hohchiro.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-accent/[0.08] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition">
                      <Mail size={17} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">Email</p>
                      <p className="text-ink-secondary text-sm">office@hohchiro.com</p>
                    </div>
                  </a>
                </div>

                <div className="bg-surface rounded-2xl p-6 border border-border-light">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Clock size={15} className="text-accent" />
                    <h3 className="font-bold text-ink text-sm">Office Hours</h3>
                  </div>
                  <div className="space-y-2.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="font-medium text-ink">{h.day}</span>
                        <span className={`text-ink-muted ${h.time === "Closed" ? "text-ink-faint" : ""}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="btn-accent">
                    Schedule <ArrowRight size={14} />
                  </a>
                  <a href="tel:810-494-1900" className="btn-secondary">
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right" className="md:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.1!2d-83.7825!3d42.5294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMxJzQ1LjgiTiA4M8KwNDYnNTcuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 560 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hands on Health Chiropractic"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="hero-gradient">
        <div className="max-w-[640px] mx-auto px-6 py-16 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-3 tracking-tight">Involved in an Auto Accident?</h2>
            <p className="text-white/75 mb-8">Please call us directly to schedule a priority appointment.</p>
            <a href="tel:810-494-1900" className="btn-accent">
              <Phone size={15} /> Call (810) 494-1900
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
