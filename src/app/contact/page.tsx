import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <p className="text-olive-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-olive-light">Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            We&apos;d love to hear from you. Reach out to schedule an
            appointment or ask any questions about our services.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-8">
                Hands on Health Chiropractic
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-olive" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Address
                    </h3>
                    <p className="text-body text-sm">
                      10192 E Grand River Ave #107
                      <br />
                      Brighton, MI 48116
                    </p>
                    <a
                      href="https://goo.gl/maps/jsDzvzERg9VgjSGg7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-olive text-sm font-semibold hover:text-olive-dark inline-flex items-center gap-1 mt-1 transition"
                    >
                      Get Directions <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-olive" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <a
                      href="tel:810-494-1900"
                      className="text-body text-sm hover:text-olive transition"
                    >
                      810-494-1900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-olive" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <a
                      href="mailto:office@hohchiro.com"
                      className="text-body text-sm hover:text-olive transition"
                    >
                      office@hohchiro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-olive" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Hours</h3>
                    <div className="text-body text-sm space-y-1">
                      <p>Monday: 9:00am – 6:00pm</p>
                      <p>Tuesday: 2:00pm – 6:00pm</p>
                      <p>Wednesday: 9:00am – 6:00pm</p>
                      <p>Thursday: 9:00am – 5:00pm</p>
                      <p>Friday: 9:00am – 12:00pm</p>
                      <p>Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
                >
                  Schedule Appointment <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.1!2d-83.7825!3d42.5294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMxJzQ1LjgiTiA4M8KwNDYnNTcuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hands on Health Chiropractic"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
