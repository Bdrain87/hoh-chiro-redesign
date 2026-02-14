import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const services = [
  { title: "Chiropractic Adjustments", img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-16.jpg", desc: "Our chiropractic adjustments use high velocity, low amplitude techniques to correct subluxations, reduce pain, and restore proper joint function. Regular adjustments help maintain spinal health and support your body's natural ability to heal itself." },
  { title: "Spinal Decompression", img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-10.jpg", desc: "A non-surgical, FDA-approved treatment that gently stretches the spine to relieve pressure on compressed discs and nerves. Effective for herniated discs, bulging discs, degenerative disc disease, sciatica, and spinal stenosis." },
  { title: "Fascial Stretch Therapy", img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-9.jpg", desc: "A pain-free, table-based assisted stretching system targeting the entire fascial network. Our therapists are certified at FST Level 1 and Level 2, improving flexibility, reducing pain, and enhancing athletic performance." },
  { title: "Therapeutic Massage", img: "https://hohchiro.com/wp-content/uploads/2021/12/Michelle_E-scaled.jpg", desc: "Our licensed massage therapists offer Swedish, deep tissue, sports, prenatal, trigger point, craniosacral, lymphatic drain, myofascial release, and aromatherapy — all tailored to complement your chiropractic care." },
];

const conditions = [
  "Back Pain", "Neck Pain", "Sciatica", "Migraines", "Arthritis", "Fibromyalgia",
  "Bulging Discs", "Carpal Tunnel", "Shoulder Pain", "High Blood Pressure",
  "Sleep Conditions", "Prenatal Care", "Chronic Injuries", "Post-Surgery Recovery",
];

const testimonials = [
  { name: "Donald H.", text: "I have been going to Hands on Health for over 5 years now. Dr. Rushford and his staff are always professional and friendly." },
  { name: "Tommy R.", text: "They helped me recover from a sports injury and I was back to playing in no time. The whole office is welcoming and knowledgeable." },
  { name: "Fred F.", text: "The doctors take the time to explain everything and the treatment plans really work. My back pain has improved dramatically." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-16.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="divider mb-6" style={{ background: "#d3d58a" }} />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Our Services</h1>
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              Proven, non-invasive treatments tailored to your specific needs and health goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="space-y-24">
            {services.map((svc, i) => (
              <div key={svc.title} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="divider mb-6" />
                  <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal mb-4 leading-tight">{svc.title}</h2>
                  <p className="text-body leading-relaxed mb-6">{svc.desc}</p>
                  <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-olive hover:text-olive-dark font-semibold text-sm transition group">
                    Book This Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className={`img-zoom rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <img src={svc.img} alt={svc.title} className="w-full h-80 object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <h3 className="text-white font-bold text-lg shrink-0">Conditions We Treat</h3>
            <div className="flex flex-wrap gap-2">
              {conditions.map((c) => (
                <span key={c} className="text-white/60 text-xs px-4 py-2 rounded-full border border-white/10 hover:border-olive/40 hover:text-white/80 transition">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="divider mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-charcoal text-center mb-12">What Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-2xl p-8 card-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-charcoal text-sm">&mdash; {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-olive">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/70 mb-8">Schedule a consultation — we&apos;ll create a personalized treatment plan.</p>
          <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="bg-white text-olive hover:bg-cream px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition inline-flex items-center gap-2">
            Book a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <div className="bg-cream border-t border-olive/5">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <p className="text-[11px] text-body/40 text-center">Individual results may vary. Consult a qualified healthcare professional before beginning any treatment.</p>
        </div>
      </div>
    </>
  );
}
