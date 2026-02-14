import { ArrowRight, Activity, Zap, Heart } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Chiropractic Adjustments",
    desc: "Our chiropractors use a variety of techniques to restore proper alignment to the spine and joints. Adjustments help reduce pain, improve range of motion, and support the body's natural healing process. Whether you have back pain, neck pain, or headaches, chiropractic adjustments can help.",
  },
  {
    icon: Zap,
    title: "Spinal Disc Decompression",
    desc: "Non-surgical spinal decompression is an effective treatment for herniated discs, bulging discs, degenerative disc disease, sciatica, and spinal stenosis. This FDA-approved therapy gently stretches the spine, creating negative pressure in the disc to promote retraction of herniated material.",
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    desc: "Our licensed massage therapists offer a range of therapeutic massage techniques to complement your chiropractic care. Massage therapy helps relieve muscle tension, reduce stress, improve circulation, and accelerate the healing process. Combine with your adjustment for the best results.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <p className="text-olive-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            General <span className="text-olive-light">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Comprehensive chiropractic care tailored to your specific needs and
            health goals.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:direction-rtl" : ""
              }`}
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
                  Book This Service <ArrowRight size={16} />
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

      {/* CTA */}
      <section className="bg-olive">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule a consultation and our team will create a personalized
            treatment plan based on your needs.
          </p>
          <a
            href="https://intake.mychirotouch.com/?clinic=HOHC0002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-olive hover:bg-cream px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
          >
            Schedule a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
