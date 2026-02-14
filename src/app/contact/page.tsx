import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

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
      <section className="relative bg-charcoal overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="divider mb-6" style={{ background: "#d3d58a" }} />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              Ready to begin your journey to better health? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact details - 2 cols */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-charcoal mb-6">Get in Touch</h2>
                <p className="text-body text-sm leading-relaxed mb-8">
                  We&apos;re located on E Grand River Ave near Fonda Lake, down the road from Island Lake State Recreation Area.
                </p>
              </div>

              <div className="space-y-5">
                <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-olive/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-olive/20 transition">
                    <MapPin size={18} className="text-olive" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">Address</p>
                    <p className="text-body text-sm">10192 E Grand River Ave #107<br />Brighton, MI 48116</p>
                  </div>
                </a>

                <a href="tel:810-494-1900" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-olive/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-olive/20 transition">
                    <Phone size={18} className="text-olive" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">Phone</p>
                    <p className="text-body text-sm">(810) 494-1900</p>
                  </div>
                </a>

                <a href="mailto:office@hohchiro.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-olive/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-olive/20 transition">
                    <Mail size={18} className="text-olive" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">Email</p>
                    <p className="text-body text-sm">office@hohchiro.com</p>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-olive" />
                  <h3 className="font-bold text-charcoal text-sm">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="font-semibold text-charcoal">{h.day}</span>
                      <span className={`text-body ${h.time === "Closed" ? "text-body/40" : ""}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white px-6 py-3 rounded-full font-semibold text-sm transition btn-pulse">
                  Schedule <ArrowRight size={14} />
                </a>
                <a href="tel:810-494-1900" className="inline-flex items-center gap-2 border-2 border-charcoal/15 text-charcoal hover:border-olive hover:text-olive px-6 py-3 rounded-full font-semibold text-sm transition">
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>

            {/* Map - 3 cols */}
            <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-xl">
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
          </div>
        </div>
      </section>

      {/* Auto Accident */}
      <section className="bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Involved in an Auto Accident?</h2>
          <p className="text-white/50 mb-8">Please call us directly to schedule a priority appointment.</p>
          <a href="tel:810-494-1900" className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-full font-semibold text-sm transition">
            <Phone size={16} /> Call (810) 494-1900
          </a>
        </div>
      </section>
    </>
  );
}
