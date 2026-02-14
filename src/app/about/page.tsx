import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  { name: "Dr. Adam Rushford", role: "Founder & Licensed Chiropractor", img: "https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-6.jpg", bio: "Dr. Rushford founded Hands On Health Chiropractic in 2013. Growing up in sports, he discovered chiropractic care early. He switched his major at Central Michigan University and graduated from Life University in Marietta, Georgia.", featured: true },
  { name: "Dr. Stephan J. Smith", role: "Chiropractor", img: "https://hohchiro.com/wp-content/uploads/2020/02/stephan-1.jpg", bio: "Dr. Smith specializes in spinal adjustments and decompression therapy, bringing years of chiropractic expertise to the team." },
  { name: "Dr. Jordan Clark", role: "Chiropractor", img: "https://hohchiro.com/wp-content/uploads/2020/02/jordan-1.jpg", bio: "Dr. Clark is passionate about helping patients achieve optimal health through chiropractic care and holistic wellness." },
  { name: "Michelle Engelhart", role: "LMT, FST Level 1 & 2", img: "https://hohchiro.com/wp-content/uploads/2021/12/Michelle_E-scaled.jpg", bio: "With the team since 2016, Michelle is certified in Fascial Stretch Therapy at both Level 1 and Level 2." },
  { name: "Patricia Evans", role: "Licensed Massage Therapist", img: "https://hohchiro.com/wp-content/uploads/2021/12/Trish-scaled.jpg", bio: "Patricia specializes in therapeutic, sports, and deep tissue massage to complement chiropractic care." },
  { name: "Kristine", role: "Licensed Massage Therapist", img: "https://hohchiro.com/wp-content/uploads/2025/11/images.jpg", bio: "Kristine helps patients relieve tension, reduce pain, and improve mobility through skilled therapeutic massage." },
  { name: "Kay", role: "Licensed Massage Therapist", img: "https://hohchiro.com/wp-content/uploads/2025/11/images.jpg", bio: "Kay brings a gentle, caring touch to help patients find relief and relaxation as part of their wellness plan." },
  { name: "Amanda", role: "Team Member", img: "https://hohchiro.com/wp-content/uploads/2025/11/images.jpg", bio: "Amanda is dedicated to providing excellent patient care and support at every visit." },
];

const serviceAreas = ["Brighton", "Howell", "Hartland", "Fenton", "South Lyon", "Milford", "Pickney", "Hamburg", "New Hudson"];

const faqs = [
  { q: "What can I expect during my first visit?", a: "During your first visit, one of our chiropractors will perform a thorough examination, review your health history, and discuss your symptoms and goals. If appropriate, you may receive your first adjustment that same day. Adjustments are generally painless and most patients feel immediate relief." },
  { q: "What types of massage do you offer?", a: "We offer Swedish, deep tissue, prenatal and pediatric, lymphatic drain, craniosacral therapy, trigger point, essential oils and aromatherapy, reversed polarity, sports massage, and myofascial release." },
  { q: "What conditions do you treat?", a: "We treat back pain, neck pain, sciatica, migraines, arthritis, fibromyalgia, bulging discs, carpal tunnel, shoulder pain, high blood pressure, sleep conditions, prenatal discomfort, and post-surgery recovery, among others." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans. We also offer affordable self-pay options. Contact our office to verify your specific coverage and discuss payment options." },
  { q: "Is chiropractic care safe for children and seniors?", a: "Absolutely. Chiropractic care is safe and beneficial for patients of all ages. Our doctors use age-appropriate techniques adjusted for each patient's unique needs and comfort level." },
  { q: "How often should I visit?", a: "Treatment frequency depends on your specific condition and health goals. Some patients benefit from weekly visits initially, transitioning to monthly maintenance care. We'll create a personalized plan for you." },
  { q: "Do I need a referral?", a: "No referral is needed to see a chiropractor in Michigan. You can schedule an appointment directly by calling or using our online scheduling tool." },
  { q: "Why combine chiropractic with lifestyle changes?", a: "Improved posture, regular exercise, proper nutrition, and stress management significantly enhance the benefits of chiropractic adjustments. Your body heals faster and maintains alignment longer." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative hero-gradient overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2021/12/22-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14]/90 via-[#0a1f14]/60 to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="section-label" style={{ color: "rgba(106,173,123,0.8)" }}>About Us</div>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold text-white mb-5 tracking-tight">Our Story</h1>
            <p className="text-white/45 text-lg max-w-lg leading-relaxed">
              A team of dedicated professionals united by one mission: helping you live your healthiest life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal variant="left">
              <div>
                <div className="section-label">Est. 2013</div>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-ink mb-6 leading-[1.1] tracking-tight">Founded on a vision of honest, holistic care</h2>
                <p className="text-ink-secondary leading-relaxed mb-4">
                  Dr. Adam Rushford founded Hands On Health Chiropractic with a clear vision: build a team that treats patients with honesty and respect while enriching the Brighton community.
                </p>
                <p className="text-ink-secondary leading-relaxed mb-4">
                  Today, our multi-disciplinary approach includes chiropractic care, spinal decompression, cold laser therapy, functional nutrition, massage therapy, and home care services — all under one roof.
                </p>
                <p className="text-ink-secondary leading-relaxed">
                  We provide care for all ages, helping residents across Livingston, Oakland, and Genesee Counties achieve a higher quality of life.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <div className="img-reveal shadow-2xl">
                <img src="https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-6.jpg" alt="Dr. Adam Rushford" className="w-full h-[480px] object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="hero-gradient">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-2.5 text-white/40 text-sm font-medium shrink-0">
                <MapPin size={15} className="text-accent" /> Proudly Serving
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="text-white/55 text-sm px-4 py-1.5 rounded-full border border-white/[0.08]">{area}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="section-label justify-center">Our Team</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-ink mb-4">Meet the team</h2>
              <p className="text-ink-secondary">Experienced professionals dedicated to your health and wellbeing.</p>
            </div>
          </ScrollReveal>

          {team.filter(m => m.featured).map((member) => (
            <ScrollReveal key={member.name} variant="scale">
              <div className="grid md:grid-cols-2 gap-0 items-stretch mb-16 bg-surface-alt rounded-2xl overflow-hidden border border-border-light">
                <div className="img-reveal rounded-none">
                  <img src={member.img} alt={member.name} className="w-full h-full min-h-[380px] object-cover" />
                </div>
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.14em] mb-3">{member.role}</p>
                  <h3 className="text-2xl font-bold text-ink mb-4 tracking-tight">{member.name}</h3>
                  <p className="text-ink-secondary leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {team.filter(m => !m.featured).map((member, i) => (
              <ScrollReveal key={member.name} variant="up" delay={i * 60}>
                <div className="group bg-surface-alt rounded-2xl overflow-hidden card-hover border border-border-light">
                  <div className="img-reveal rounded-none h-56">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-ink text-sm tracking-tight">{member.name}</h3>
                    <p className="text-accent text-[11px] font-medium mt-0.5">{member.role}</p>
                    <p className="text-ink-muted text-xs leading-relaxed mt-2">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label justify-center">FAQ</div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold text-ink mb-4 tracking-tight">Frequently asked questions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} variant="up" delay={i * 40}>
                <details className="bg-surface rounded-2xl border border-border-light group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-ink hover:text-primary transition-colors text-[14px]">
                    {faq.q}
                    <ChevronDown size={17} className="text-accent shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-ink-secondary text-sm leading-relaxed -mt-1">
                    {faq.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="relative max-w-[640px] mx-auto px-6 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white mb-5 tracking-tight">Ready to start?</h2>
            <p className="text-white/40 mb-12 max-w-md mx-auto leading-relaxed">Take the first step toward a healthier life. Our team is ready to build a plan around your goals.</p>
            <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="btn-accent">
              Schedule Now <ArrowRight size={15} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
