import Link from "next/link";
import { ArrowRight, Star, MapPin, Phone, Clock, Shield, Heart, Zap, Leaf, Activity } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
    img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-12.jpg",
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
    img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-16.jpg",
    href: "/services",
  },
];

const wellnessServices = [
  { icon: Activity, title: "Fascial Stretch Therapy", desc: "Pain-free, table-based stretching for flexibility and performance." },
  { icon: Zap, title: "Cold Laser Therapy", desc: "Accelerate healing and reduce inflammation at the cellular level." },
  { icon: Leaf, title: "Functional Nutrition", desc: "Personalized plans to support your body's natural healing." },
];

const conditions = [
  "Back Pain", "Neck Pain", "Lower Back Pain", "Upper Back Pain", "Sciatica", "Migraines", "Arthritis",
  "Fibromyalgia", "Bulging Discs", "Carpal Tunnel", "Shoulder Pain",
  "High Blood Pressure", "Sleep Conditions", "Prenatal Discomfort", "Chronic Injuries", "Post-Surgery Recovery",
];

const testimonials = [
  { text: "I love everyone at Hands On Health Chiropractic. Started out going just for chiropractic, and now I use their massage therapists, as well. Everyone in the office is so sweet and helpful.", name: "Shelley" },
  { text: "All the Dr.s are great and the office staff is kind and helpful too! My health has improved greatly since I've been a patient here! I definitely recommend Hands on Health Chiropractic.", name: "Toni Jackson" },
  { text: "I have been going to Hands on Health for over 5 years now. Dr. Rushford and his staff are always professional and friendly. I highly recommend them.", name: "Donald H." },
  { text: "The massage therapists here are incredible. I've tried many places and Hands on Health is by far the best. They really listen to what you need.", name: "Viviane F." },
  { text: "Dr. Rushford and his team are amazing. They helped me recover from a sports injury and I was back to playing in no time.", name: "Tommy R." },
  { text: "Great experience every time I visit. The doctors take the time to explain everything and the treatment plans really work.", name: "Fred F." },
];

const hours = [
  { day: "Mon", time: "7:45a – 12p, 2:30 – 6p" },
  { day: "Tue", time: "8a – 12p, 3 – 6p" },
  { day: "Wed", time: "7:45a – 12p, 2:30 – 6:30p" },
  { day: "Thu", time: "7:45a – 12p, 2:30 – 6p" },
  { day: "Fri", time: "7a – 12p" },
  { day: "Sat", time: "8a – 12p" },
];

export default function Home() {
  return (
    <>
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f14] via-[#0d2a1a]/95 to-[#1a3a2a]/80" />

        <div className="relative max-w-[1280px] mx-auto px-6 pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] rounded-full pl-3.5 pr-5 py-2 mb-8">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-white/70 text-[12px] font-medium tracking-wide">Brighton, MI &mdash; Accepting New Patients</span>
              </div>

              <h1 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-extrabold text-white leading-[1.04] mb-6 tracking-tight">
                Your path to a<br />
                <span className="gradient-text">healthier life.</span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-[520px]">
                Chiropractic, massage, and holistic wellness &mdash; all under one roof. Personalized care for lasting results.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 lg:mb-0">
                <a
                  href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  Schedule Appointment <ArrowRight size={15} />
                </a>
                <a
                  href="tel:810-494-1900"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white border-[1.5px] border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                >
                  <Phone size={15} /> (810) 494-1900
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/[0.06]">
                <img
                  src="https://hohchiro.com/wp-content/uploads/2020/03/web_frontdesk.jpg"
                  alt="Hands on Health Chiropractic office"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)] p-5 max-w-[210px]">
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-ink font-bold text-sm">4.9 on Google</p>
                <p className="text-ink-muted text-xs">255+ verified reviews</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-white rounded-2xl shadow-xl px-5 py-3.5 text-center">
                <p className="text-2xl font-extrabold leading-none">10+</p>
                <p className="text-[10px] font-medium opacity-80 mt-0.5">Years Serving<br />Brighton</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-black/20 backdrop-blur-sm border-t border-white/[0.06]">
          <div className="max-w-[1280px] mx-auto px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-white tracking-tighter">{s.value}</p>
                  <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.14em] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal variant="left">
              <div>
                <div className="section-label">Our Story</div>
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-ink mb-6 leading-[1.1]">
                  Holistic care.<br />
                  <span className="text-accent">Real results.</span>
                </h2>
                <p className="text-ink-secondary leading-relaxed mb-5">
                  We believe chiropractic therapy can build vitality and change lives. Our team combines chiropractic, massage, and decompression therapy to treat chronic pain, arthritis, fibromyalgia, and a myriad of other conditions.
                </p>
                <p className="text-ink-secondary leading-relaxed mb-8">
                  Founded in 2013 by Dr. Adam Rushford, Hands on Health Chiropractic has grown into a multi-disciplinary wellness center with a talented team of doctors and therapists passionate about enriching our community.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold text-sm transition-colors group">
                  Meet Our Team <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <div className="relative">
                <div className="img-reveal shadow-2xl">
                  <img src="https://hohchiro.com/wp-content/uploads/2021/12/22-scaled.jpg" alt="Hands on Health Chiropractic team" className="w-full h-[480px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-surface rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] p-5 max-w-[200px] hidden md:block">
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-ink font-bold text-sm">4.9 on Google</p>
                  <p className="text-ink-muted text-xs">255+ verified reviews</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="section-label justify-center">Core Services</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-ink mb-4">What we do best</h2>
              <p className="text-ink-secondary">Proven, non-invasive treatments delivered by experienced professionals who genuinely care about your recovery.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {coreServices.map((svc, i) => (
              <ScrollReveal key={svc.title} variant="scale" delay={i * 100}>
                <Link href={svc.href} className="group relative rounded-2xl overflow-hidden h-[500px] block card-hover">
                  <img src={svc.img} alt={svc.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-[22px] font-bold text-white mb-2.5 tracking-tight">{svc.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">{svc.desc}</p>
                    <span className="inline-flex items-center gap-2 text-accent-light text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #0a1f14 0%, #1a3a2a 40%, #0d2a1a 100%)" }}>
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="section-label justify-center" style={{ color: "rgba(106,173,123,0.8)" }}>What We Help With</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-white mb-3 tracking-tight">Conditions We Treat</h2>
              <p className="text-white/70 max-w-lg mx-auto">From chronic pain to injury recovery, our team has the expertise to help.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {conditions.map((c, i) => (
              <ScrollReveal key={c} variant="up" delay={i * 40}>
                <div className="bg-white/[0.10] border border-white/[0.15] rounded-xl px-5 py-4 text-center hover:bg-white/[0.18] hover:border-accent/40 transition-all duration-300">
                  <span className="text-white text-sm font-medium">{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-accent">
                View All Services <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative hero-gradient overflow-hidden">
        <div className="relative max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="left">
              <div>
                <div className="section-label" style={{ color: "rgba(106,173,123,0.8)" }}>Beyond Adjustments</div>
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-white mb-5 leading-[1.1]">
                  A complete approach<br />to wellness.
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-10">
                  From stretch therapy and cold laser to nutrition counseling and supplements, we address every dimension of your health.
                </p>
                <Link href="/other-services" className="btn-accent">
                  View All Services <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <div className="space-y-3.5">
                {wellnessServices.map((svc) => (
                  <div key={svc.title} className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.08] transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-accent/15 rounded-xl flex items-center justify-center shrink-0">
                        <svc.icon size={20} className="text-accent-light" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-[15px] mb-1">{svc.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{svc.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="section-label justify-center">Testimonials</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-ink mb-4">Patient stories</h2>
              <p className="text-ink-secondary">Real experiences from the people we serve every day.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} variant="up" delay={i * 80}>
                <div className="bg-surface-alt rounded-2xl p-7 card-hover h-full">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-ink-secondary text-[14px] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 bg-primary/[0.06] rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-[11px]">{t.name.charAt(0)}</span>
                    </div>
                    <p className="font-semibold text-ink text-sm">{t.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-5">
            <ScrollReveal variant="left">
              <div className="bg-surface rounded-2xl p-10 card-hover h-full border border-border-light">
                <div className="w-12 h-12 bg-primary/[0.06] rounded-xl flex items-center justify-center mb-7">
                  <Shield size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">New Patient?</h3>
                <p className="text-ink-secondary leading-relaxed mb-7">Complete your intake forms online before your first visit for a faster, smoother experience. We make it easy.</p>
                <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Access Patient Forms <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <div className="bg-surface rounded-2xl p-10 card-hover h-full border border-border-light">
                <div className="w-12 h-12 bg-accent/[0.08] rounded-xl flex items-center justify-center mb-7">
                  <Heart size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">Supplements</h3>
                <p className="text-ink-secondary leading-relaxed mb-7">Browse our practitioner-recommended supplements through the Thorne Online Store, tailored to your specific health needs.</p>
                <a href="https://www.thorne.com/u/handsonhealthchiropractic" target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Shop Thorne <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal variant="left">
              <div>
                <div className="section-label">Location</div>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold text-ink mb-4 tracking-tight">Visit us in Brighton</h2>
                <p className="text-ink-secondary leading-relaxed mb-7">
                  Conveniently located on E Grand River Ave near Fonda Lake. Proudly serving Brighton, Howell, Hartland, Fenton, South Lyon, Milford, and surrounding communities across Livingston, Oakland &amp; Genesee Counties.
                </p>

                <div className="bg-surface-alt rounded-2xl p-6 mb-8 border border-border-light">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Clock size={15} className="text-accent" />
                    <h4 className="font-bold text-ink text-sm">Office Hours</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between">
                        <span className="font-medium text-ink">{h.day}</span>
                        <span className="text-ink-muted">{h.time}</span>
                      </div>
                    ))}
                    <div className="flex justify-between">
                      <span className="font-medium text-ink">Sun</span>
                      <span className="text-ink-faint">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://g.page/Hohchiro?share" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <MapPin size={14} /> Get Directions
                  </a>
                  <a href="tel:810-494-1900" className="btn-secondary">
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.1!2d-83.7825!3d42.5294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMxJzQ1LjgiTiA4M8KwNDYnNTcuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hands on Health Chiropractic location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative hero-gradient overflow-hidden">
        <div className="relative max-w-[640px] mx-auto px-6 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white mb-5 tracking-tight">Ready to feel better?</h2>
            <p className="text-white/75 text-lg mb-12 max-w-md mx-auto leading-relaxed">Take the first step. Our team is here to build a personalized plan around your health goals.</p>
            <a
              href="https://intake.mychirotouch.com/?clinic=HOHC0002"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Book Your First Visit <ArrowRight size={15} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-surface-alt border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <p className="text-[11px] text-ink-faint text-center leading-relaxed">
            Individual results may vary. Information on this site is not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare professional before beginning any treatment.
          </p>
        </div>
      </div>
    </>
  );
}
