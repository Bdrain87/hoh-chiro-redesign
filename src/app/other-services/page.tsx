import { ArrowRight, Leaf, ShieldCheck, Pill } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Functional Nutrition",
    desc: "Our functional nutrition services go beyond conventional dietary advice. We use comprehensive assessments to identify nutritional deficiencies and create personalized plans that support your body's natural healing. Whether you're dealing with digestive issues, fatigue, or chronic inflammation, our nutrition approach addresses the root cause.",
  },
  {
    icon: ShieldCheck,
    title: "Cold Laser Therapy",
    desc: "Cold laser therapy (low-level laser therapy) uses specific wavelengths of light to stimulate healing at the cellular level. This painless, non-invasive treatment accelerates tissue repair, reduces inflammation, and manages pain. It's effective for soft tissue injuries, joint conditions, neuropathy, and post-surgical healing.",
  },
  {
    icon: Pill,
    title: "Supplements & Home Care",
    desc: "We've partnered with Thorne to provide access to high-quality, practitioner-grade supplements. Our team can recommend specific products based on your health needs and treatment plan. We also provide home care guidance including exercises, stretches, and ergonomic advice to support your recovery between visits.",
  },
];

export default function OtherServicesPage() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <p className="text-olive-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Beyond Adjustments
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Other <span className="text-olive-light">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Complementary therapies and wellness services to support your total
            health journey.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <div className="w-16 h-16 bg-olive/10 rounded-xl flex items-center justify-center mb-5">
                  <svc.icon size={32} className="text-olive" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  {svc.title}
                </h2>
                <p className="text-body leading-relaxed mb-6">{svc.desc}</p>
                <a
                  href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive hover:text-olive-dark font-semibold inline-flex items-center gap-2 transition"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
              <div
                className={`bg-brown-warm/20 rounded-xl h-64 flex items-center justify-center ${
                  i % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <svc.icon size={80} className="text-olive/20" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thorne CTA */}
      <section className="bg-olive">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Shop Recommended Supplements
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Browse our curated selection of Thorne supplements, recommended by
            our chiropractic team for your specific health needs.
          </p>
          <a
            href="https://www.thorne.com/u/handsonhealthchiropractic"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-olive hover:bg-cream px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
          >
            Thorne Supplement Store <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
