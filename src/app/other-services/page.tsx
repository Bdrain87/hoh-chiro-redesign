import { ArrowRight, Star } from "lucide-react";

const massageTypes = ["Swedish", "Deep Tissue", "Prenatal & Pediatric", "Lymphatic Drain", "Craniosacral", "Trigger Point", "Aromatherapy", "Reversed Polarity", "Sports Massage", "Myofascial Release"];
const supplementProviders = ["Standard Process", "Jigsaw", "Integrative Therapeutics", "Biotics", "Urban Moonshine", "Klaire Labs", "Vital Proteins", "Health & Wisdom", "Thorne"];

const services = [
  { title: "Massage Therapy", desc: "Immediate and ongoing relief for muscle soreness and pain caused by injuries, conditions, stress, and repeated trauma. When combined with chiropractic care, massage therapy provides powerful benefits for chronic pain sufferers.", tags: massageTypes, tagLabel: "Techniques" },
  { title: "Work Ergonomics", desc: "Poor posture and chronic sitting account for thousands of hours and millions of dollars lost annually. We offer workplace ergonomic assessments plus free community workshops (45 min–1 hour) on wellness and ergonomic best practices." },
  { title: "Functional Nutrition", desc: "Going beyond conventional dietary advice, we use comprehensive assessments to identify nutritional deficiencies and create personalized plans that address root causes — whether digestive issues, fatigue, or chronic inflammation." },
  { title: "Cold Laser Therapy", desc: "Specific wavelengths of light stimulate healing at the cellular level. This painless, non-invasive treatment accelerates tissue repair, reduces inflammation, and manages pain for soft tissue injuries, joint conditions, and neuropathy." },
  { title: "Supplements & Home Care", desc: "We carry practitioner-grade supplements from trusted providers and provide home care guidance including exercises, stretches, and ergonomic advice to support your recovery between visits.", tags: supplementProviders, tagLabel: "Our Partners" },
];

const testimonials = [
  { name: "Viviane F.", text: "The massage therapists here are incredible. Hands on Health is by far the best. They really listen to what you need." },
  { name: "Heather H.", text: "The whole team approach has made a huge difference in my overall health." },
  { name: "Brandon P.", text: "Cold laser therapy for my knee injury worked wonders. The staff genuinely cares about your recovery." },
];

export default function OtherServicesPage() {
  return (
    <>
      <section className="relative bg-charcoal overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-17.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="divider mb-6" style={{ background: "#d3d58a" }} />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Wellness Services</h1>
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              Complementary therapies to support your total health journey — beyond adjustments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 space-y-8">
          {services.map((svc, i) => (
            <div key={svc.title} className="bg-white rounded-2xl p-8 md:p-10 card-lift">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-olive/30 font-extrabold text-4xl leading-none">0{i + 1}</span>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-charcoal">{svc.title}</h2>
                </div>
              </div>
              <p className="text-body leading-relaxed mb-5">{svc.desc}</p>
              {svc.tags && (
                <div className="mb-5">
                  <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-2">{svc.tagLabel}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="bg-olive/8 text-olive text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
              <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-olive hover:text-olive-dark font-semibold text-sm transition group">
                Schedule <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
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

      {/* Thorne CTA */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Shop Recommended Supplements</h2>
          <p className="text-white/60 mb-10">Practitioner-grade supplements curated for your specific health needs.</p>
          <a href="https://www.thorne.com/u/handsonhealthchiropractic" target="_blank" rel="noopener noreferrer" className="bg-olive hover:bg-olive-dark text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition inline-flex items-center gap-2">
            Thorne Store <ArrowRight size={16} />
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
