import { ArrowRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { title: "Chiropractic Adjustments", img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-12.jpg", desc: "Our chiropractic adjustments use high velocity, low amplitude techniques to correct subluxations, reduce pain, and restore proper joint function. Regular adjustments help maintain spinal health and support your body's natural ability to heal itself." },
  { title: "Spinal Decompression", img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-16.jpg", desc: "A non-surgical, FDA-approved treatment that gently stretches the spine to relieve pressure on compressed discs and nerves. Effective for herniated discs, bulging discs, degenerative disc disease, sciatica, and spinal stenosis." },
  { title: "Fascial Stretch Therapy", img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-17.jpg", desc: "A pain-free, table-based assisted stretching system targeting the entire fascial network. Our therapists are certified at FST Level 1 and Level 2, improving flexibility, reducing pain, and enhancing athletic performance." },
  { title: "Therapeutic Massage", img: "https://hohchiro.com/wp-content/uploads/2021/12/Michelle_E-scaled.jpg", desc: "Our licensed massage therapists offer Swedish, deep tissue, sports, prenatal, trigger point, craniosacral, lymphatic drain, myofascial release, and aromatherapy — all tailored to complement your chiropractic care." },
];

const conditions = [
  "Back Pain", "Neck Pain", "Lower Back Pain", "Upper Back Pain", "Sciatica", "Migraines", "Arthritis", "Fibromyalgia",
  "Bulging Discs", "Carpal Tunnel", "Shoulder Pain", "High Blood Pressure",
  "Sleep Conditions", "Prenatal Discomfort", "Chronic Injuries", "Post-Surgery Recovery",
];

const testimonials = [
  { name: "Donald H.", text: "I have been going to Hands on Health for over 5 years now. Dr. Rushford and his staff are always professional and friendly." },
  { name: "Tommy R.", text: "They helped me recover from a sports injury and I was back to playing in no time. The whole office is welcoming and knowledgeable." },
  { name: "Fred F.", text: "The doctors take the time to explain everything and the treatment plans really work. My back pain has improved dramatically." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative hero-gradient overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-14.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f14]/60 via-[#0a1f14]/40 to-[#0a1f14]/70" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="section-label" style={{ color: "rgba(106,173,123,0.8)" }}>What We Offer</div>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold text-white mb-5 tracking-tight">Our Services</h1>
            <p className="text-white/80 text-lg max-w-lg leading-relaxed">
              Proven, non-invasive treatments tailored to your specific needs and health goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} variant={i % 2 === 0 ? "left" : "right"}>
                <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                  <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                    <div className="section-label">0{i + 1}</div>
                    <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold text-ink mb-5 leading-[1.1] tracking-tight">{svc.title}</h2>
                    <p className="text-ink-secondary leading-relaxed mb-7">{svc.desc}</p>
                    <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold text-sm transition-colors group">
                      Book This Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className={`img-reveal shadow-2xl ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                    <img src={svc.img} alt={svc.title} className="w-full h-[260px] md:h-[380px] object-cover" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient">
        <div className="max-w-[1280px] mx-auto px-6 py-14">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <h3 className="text-white font-bold text-lg shrink-0 tracking-tight">Conditions We Treat</h3>
              <div className="flex flex-wrap gap-2">
                {conditions.map((c) => (
                  <span key={c} className="text-white/90 text-[12px] px-4 py-2 rounded-full border border-white/[0.15] hover:border-accent/40 hover:text-white transition-colors">{c}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-label justify-center">Testimonials</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold text-ink tracking-tight">What patients say</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} variant="up" delay={i * 80}>
                <div className="bg-surface-alt rounded-2xl p-7 card-hover h-full border border-border-light">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-ink-secondary text-[14px] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
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

      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="relative max-w-[640px] mx-auto px-6 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white mb-5 tracking-tight">Not sure where to start?</h2>
            <p className="text-white/75 mb-12 max-w-md mx-auto leading-relaxed">Schedule a consultation — we&apos;ll create a personalized treatment plan.</p>
            <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="btn-accent">
              Book a Consultation <ArrowRight size={15} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-surface-alt border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <p className="text-[11px] text-ink-faint text-center">Individual results may vary. Consult a qualified healthcare professional before beginning any treatment.</p>
        </div>
      </div>
    </>
  );
}
