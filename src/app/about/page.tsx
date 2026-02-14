import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

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
      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2021/12/22-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="divider mb-6" style={{ background: "#d3d58a" }} />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">Our Story</h1>
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              A team of dedicated professionals united by one mission: helping you live your healthiest life.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6 leading-tight">Founded in 2013</h2>
              <p className="text-body leading-relaxed mb-4">
                Dr. Adam Rushford founded Hands On Health Chiropractic with a clear vision: build a team that treats patients with honesty and respect while enriching the Brighton community.
              </p>
              <p className="text-body leading-relaxed mb-4">
                Today, our multi-disciplinary approach includes chiropractic care, spinal decompression, cold laser therapy, functional nutrition, massage therapy, and home care services — all under one roof.
              </p>
              <p className="text-body leading-relaxed">
                We provide care for all ages, helping residents across Livingston, Oakland, and Genesee Counties achieve a higher quality of life.
              </p>
            </div>
            <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-6.jpg" alt="Dr. Adam Rushford" className="w-full h-[440px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-white/50 text-sm font-medium shrink-0">
              <MapPin size={16} className="text-olive" /> Proudly Serving
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-white/70 text-sm px-4 py-1.5 rounded-full border border-white/10">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mb-4">Meet the Team</h2>
            <p className="text-body">Experienced professionals dedicated to your health and wellbeing.</p>
          </div>

          {/* Featured doctor */}
          {team.filter(m => m.featured).map((member) => (
            <div key={member.name} className="grid md:grid-cols-2 gap-12 items-center mb-16 bg-cream rounded-2xl overflow-hidden">
              <div className="img-zoom h-full">
                <img src={member.img} alt={member.name} className="w-full h-full min-h-[360px] object-cover" />
              </div>
              <div className="p-8 md:pr-12">
                <p className="text-olive text-xs font-semibold uppercase tracking-wider mb-2">{member.role}</p>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{member.name}</h3>
                <p className="text-body leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}

          {/* Rest of team */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.filter(m => !m.featured).map((member) => (
              <div key={member.name} className="group bg-cream rounded-2xl overflow-hidden card-lift">
                <div className="img-zoom h-56">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-charcoal text-sm">{member.name}</h3>
                  <p className="text-olive text-xs font-medium mt-0.5">{member.role}</p>
                  <p className="text-body text-xs leading-relaxed mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <div className="divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-charcoal hover:text-olive transition text-sm">
                  {faq.q}
                  <ChevronDown size={18} className="text-olive shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-body text-sm leading-relaxed -mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start?</h2>
          <p className="text-white/60 mb-10 max-w-md mx-auto">Take the first step toward a healthier life. Our team is ready to build a plan around your goals.</p>
          <a href="https://intake.mychirotouch.com/?clinic=HOHC0002" target="_blank" rel="noopener noreferrer" className="bg-olive hover:bg-olive-dark text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all inline-flex items-center gap-2 btn-pulse">
            Schedule Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
