import Link from "next/link";
import { ArrowRight, Star, MapPin, Phone, ChevronRight, Clock, Shield, Users, Heart } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Serving Brighton" },
  { value: "4.9", label: "Google Rating" },
  { value: "9", label: "Team Members" },
  { value: "10+", label: "Services Offered" },
];

const coreServices = [
  {
    title: "Chiropractic Care",
    desc: "Expert adjustments to reduce pain, restore mobility, and optimize spinal health using proven techniques.",
    img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-16.jpg",
    href: "/services",
  },
  {
    title: "Massage Therapy",
    desc: "10+ specialized techniques including deep tissue, sports, prenatal, and craniosacral therapy.",
    img: "https://hohchiro.com/wp-content/uploads/2021/12/Michelle_E-scaled.jpg",
    href: "/services",
  },
  {
    title: "Spinal Decompression",
    desc: "FDA-approved non-surgical treatment for herniated discs, sciatica, and degenerative disc disease.",
    img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-10.jpg",
    href: "/services",
  },
];

const wellnessServices = [
  { icon: Heart, title: "Fascial Stretch Therapy", desc: "Pain-free, table-based stretching for flexibility and performance." },
  { icon: Shield, title: "Cold Laser Therapy", desc: "Accelerate healing and reduce inflammation at the cellular level." },
  { icon: Users, title: "Functional Nutrition", desc: "Personalized plans to support your body's natural healing." },
];

const conditions = [
  "Back Pain", "Neck Pain", "Sciatica", "Migraines", "Arthritis",
  "Fibromyalgia", "Bulging Discs", "Carpal Tunnel", "Shoulder Pain",
  "High Blood Pressure", "Sleep Conditions", "Prenatal Care",
];

const testimonials = [
  { text: "I love everyone at Hands On Health Chiropractic. Started out going just for chiropractic, and now I use their massage therapists, as well. Everyone in the office is so sweet and helpful.", name: "Shelley", highlight: "so sweet and helpful" },
  { text: "All the Dr.s are great and the office staff is kind and helpful too! My health has improved greatly since I've been a patient here! I definitely recommend Hands on Health Chiropractic.", name: "Toni Jackson", highlight: "My health has improved greatly" },
  { text: "I have been going to Hands on Health for over 5 years now. Dr. Rushford and his staff are always professional and friendly. I highly recommend them.", name: "Donald H.", highlight: "over 5 years" },
  { text: "The massage therapists here are incredible. I've tried many places and Hands on Health is by far the best. They really listen to what you need.", name: "Viviane F.", highlight: "by far the best" },
  { text: "Dr. Rushford and his team are amazing. They helped me recover from a sports injury and I was back to playing in no time.", name: "Tommy R.", highlight: "back to playing in no time" },
  { text: "Great experience every time I visit. The doctors take the time to explain everything and the treatment plans really work.", name: "Fred F.", highlight: "treatment plans really work" },
];

const hours = [
  { day: "Mon", time: "7:45a–12p, 2:30–6p" },
  { day: "Tue", time: "8a–12p, 3–6p" },
  { day: "Wed", time: "7:45a–12p, 2:30–6:30p" },
  { day: "Thu", time: "7:45a–12p, 2:30–6p" },
  { day: "Fri", time: "7a–12p" },
  { day: "Sat", time: "8a–12p" },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-charcoal overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/03/web_frontdesk.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-olive rounded-full" />
              <span className="text-white/80 text-xs font-medium tracking-wide">Brighton, MI &mdash; Accepting New Patients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6 animate-fade-up delay-100">
              Your Path to a<br />
              <span className="gradient-text">Healthier Life</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-lg animate-fade-up delay-200">
              Chiropractic, massage, and holistic wellness &mdash; all under one roof. Personalized care for lasting results.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a
                href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 btn-pulse"
              >
                Schedule Appointment <ArrowRight size={16} />
              </a>
              <a
                href="tel:810-494-1900"
                className="glass-dark text-white hover:bg-white/15 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2"
              >
                <Phone size={16} /> (810) 494-1900
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">{s.value}</p>
                <p className="text-body text-xs font-medium uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WELCOME ─── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider mb-6" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
                Holistic Care.<br />
                <span className="text-brown">Real Results.</span>
              </h2>
              <p className="text-body leading-relaxed mb-5 text-base">
                We believe chiropractic therapy can build vitality and change lives. Our team combines chiropractic, massage, and decompression therapy to treat chronic pain, arthritis, fibromyalgia, and a myriad of other conditions.
              </p>
              <p className="text-body leading-relaxed mb-8 text-base">
                Founded in 2013 by Dr. Adam Rushford, Hands on Health Chiropractic has grown into a multi-disciplinary wellness center with a talented team of doctors and therapists passionate about enriching our community.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-olive hover:text-olive-dark font-semibold text-sm transition group">
                Meet Our Team <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-9.jpg" alt="Chiropractic treatment at Hands on Health" className="w-full h-[420px] object-cover" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px] hidden md:block">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-charcoal font-bold text-sm">4.9 on Google</p>
                <p className="text-body text-xs">255+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE SERVICES ─── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mb-4">What We Do Best</h2>
            <p className="text-body text-base">Proven, non-invasive treatments delivered by experienced professionals who genuinely care about your recovery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreServices.map((svc) => (
              <Link key={svc.title} href={svc.href} className="group relative rounded-2xl overflow-hidden h-[460px] card-lift">
                <img src={svc.img} alt={svc.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-olive-light text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONDITIONS ─── */}
      <section className="bg-cream border-y border-olive/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold text-charcoal">Conditions We Treat</h3>
              <p className="text-body text-sm mt-2">Comprehensive care for a wide range of musculoskeletal and wellness conditions.</p>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-2">
              {conditions.map((c) => (
                <span key={c} className="bg-white text-charcoal/80 text-xs font-medium px-4 py-2 rounded-full border border-olive/10 hover:border-olive/40 transition">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WELLNESS SERVICES ─── */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-[3px] bg-olive-light rounded mb-6" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Beyond<br />Adjustments
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                A complete approach to wellness. From stretch therapy and cold laser to nutrition counseling and supplements, we address every dimension of your health.
              </p>
              <Link href="/other-services" className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition group">
                View All Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="space-y-4">
              {wellnessServices.map((svc) => (
                <div key={svc.title} className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-olive/20 rounded-lg flex items-center justify-center shrink-0">
                      <svc.icon size={20} className="text-olive-light" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{svc.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mb-4">Patient Stories</h2>
            <p className="text-body">Real experiences from the people we serve every day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-2xl p-8 card-lift relative">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-olive/15 rounded-full flex items-center justify-center">
                    <span className="text-olive font-bold text-xs">{t.name.charAt(0)}</span>
                  </div>
                  <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PATIENT CENTER + SUPPLEMENTS ─── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 card-lift">
              <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center mb-6">
                <Shield size={24} className="text-olive" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">New Patient?</h3>
              <p className="text-body leading-relaxed mb-6">Complete your intake forms online before your first visit for a faster, smoother experience. We make it easy.</p>
              <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-full font-semibold text-sm transition">
                Access Patient Forms <ArrowRight size={14} />
              </a>
            </div>
            <div className="bg-white rounded-2xl p-10 card-lift">
              <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} className="text-olive" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Supplements</h3>
              <p className="text-body leading-relaxed mb-6">Browse our practitioner-recommended supplements through the Thorne Online Store, tailored to your specific health needs.</p>
              <a href="https://www.thorne.com/u/handsonhealthchiropractic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white px-6 py-3 rounded-full font-semibold text-sm transition">
                Shop Thorne <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION + HOURS ─── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="divider mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-4">Visit Us in Brighton</h2>
              <p className="text-body leading-relaxed mb-6">
                Conveniently located on E Grand River Ave near Fonda Lake. Proudly serving Brighton, Howell, Hartland, Fenton, South Lyon, Milford, and surrounding communities across Livingston, Oakland &amp; Genesee Counties.
              </p>

              {/* Hours grid */}
              <div className="bg-cream rounded-xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-olive" />
                  <h4 className="font-bold text-charcoal text-sm">Office Hours</h4>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="font-semibold text-charcoal">{h.day}</span>
                      <span className="text-body">{h.time}</span>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <span className="font-semibold text-charcoal">Sun</span>
                    <span className="text-body/50">Closed</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-full font-semibold text-sm transition">
                  <MapPin size={14} /> Get Directions
                </a>
                <a href="tel:810-494-1900" className="inline-flex items-center gap-2 border-2 border-charcoal/15 text-charcoal hover:border-olive hover:text-olive px-6 py-3 rounded-full font-semibold text-sm transition">
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.1!2d-83.7825!3d42.5294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMxJzQ1LjgiTiA4M8KwNDYnNTcuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hands on Health Chiropractic location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Ready to Feel Better?</h2>
          <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">Take the first step. Our team is here to build a personalized plan around your health goals.</p>
          <a
            href="https://intake.mychirotouch.com/?clinic=HOHC0002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-olive hover:bg-olive-dark text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all inline-flex items-center gap-2 btn-pulse"
          >
            Book Your First Visit <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-cream border-t border-olive/5">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <p className="text-[11px] text-body/40 text-center leading-relaxed">
            Individual results may vary. Information on this site is not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare professional before beginning any treatment.
          </p>
        </div>
      </div>
    </>
  );
}
