import { ArrowRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      <section className="relative hero-gradient overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-17.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14]/90 via-[#0a1f14]/60 to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="section-label" style={{ color: "rgba(106,173,123,0.8)" }}>Holistic Health</div>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold text-white mb-5 tracking-tight">Wellness Services</h1>
            <p className="text-white/45 text-lg max-w-lg leading-relaxed">
              Complementary therapies to support your total health journey — beyond adjustments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 space-y-6">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} variant="up" delay={i * 60}>
              <div className="bg-surface rounded-2xl p-8 md:p-10 card-hover border border-border-light">
                <div className="flex items-start gap-5 mb-5">
                  <span className="text-accent/20 font-extrabold text-4xl leading-none tracking-tighter">0{i + 1}</span>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-ink tracking-tight">{svc.title}</h2>
                  </div>
                </div>
                <p className="text-ink-secondary leading-relaxed mb-6">{svc.desc}</p>
                {svc.tags && (
                  <div className="mb-6">
                    <p className="text-[11px] font-semibold text-ink-muted uppercase tracking-[0.14em] mb-2.5">{svc.tagLabel}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="bg-accent-glow text-primary text-[12px] font-medium px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold text-sm transition-colors group">
                  Schedule <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          ))}
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
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white mb-5 tracking-tight">Shop recommended supplements</h2>
            <p className="text-white/40 mb-12">Practitioner-grade supplements curated for your specific health needs.</p>
            <a href="https://www.thorne.com/u/handsonhealthchiropractic" target="_blank" rel="noopener noreferrer" className="btn-accent">
              Thorne Store <ArrowRight size={15} />
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
