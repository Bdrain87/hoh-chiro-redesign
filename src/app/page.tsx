import Link from "next/link";
import {
  ArrowRight,
  Star,
  MapPin,
  Phone,
  ChevronRight,
  Activity,
  Zap,
  Heart,
  Leaf,
  ShieldCheck,
  Pill,
} from "lucide-react";

const generalServices = [
  {
    icon: Activity,
    title: "Chiropractic Care",
    desc: "Comprehensive spinal adjustments to restore alignment, reduce pain, and improve overall nervous system function.",
  },
  {
    icon: Zap,
    title: "Spinal Decompression",
    desc: "Non-surgical decompression therapy targeting disc-related pain, sciatica, and herniated discs.",
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    desc: "Therapeutic massage to relieve tension, reduce stress, and complement your chiropractic care plan.",
  },
];

const otherServices = [
  {
    icon: Leaf,
    title: "Functional Nutrition",
    desc: "Personalized nutrition plans to support your body's natural healing processes and overall wellness.",
  },
  {
    icon: ShieldCheck,
    title: "Cold Laser Therapy",
    desc: "Advanced low-level laser therapy to accelerate healing, reduce inflammation, and manage pain.",
  },
  {
    icon: Pill,
    title: "Supplements",
    desc: "Access to the Thorne Online Supplement Store for high-quality, practitioner-recommended supplements.",
  },
];

const testimonials = [
  {
    text: "I love everyone at Hands On Health Chiropractic. Started out going just for chiropractic, and now I use their massage therapists, as well. I also have an upcoming appointment with their nutritionist. Everyone in the office is so sweet and helpful.",
    name: "Shelley",
  },
  {
    text: "I was up in Michigan for a visit but before coming I fell of my bicycle and hurt my piriformis and bruised my ribs. I can't thank Dr. Rushford for helping me be able to enjoy our visit.",
    name: "Kim Carter",
  },
  {
    text: "All the Dr.s are great and the office staff is kind and helpful too! My health has improved greatly since I've been a patient here! I definitely recommend Hands on Health Chiropractic.",
    name: "Toni Jackson",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Background image placeholder — replace with actual photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-44">
          <div className="max-w-2xl">
            <p className="text-olive-light font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Brighton, MI Chiropractor
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Chiropractic Care for{" "}
              <span className="text-olive-light">Healthy Body</span> &amp; Mind
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Our team combines the forces of chiropractic, massage, and
              decompression therapy to treat chronic pain, arthritis,
              fibromyalgia, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
              >
                Schedule Appointment <ArrowRight size={16} />
              </a>
              <a
                href="tel:810-494-1900"
                className="border-2 border-white/30 hover:border-olive text-white hover:text-olive px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
              >
                <Phone size={16} /> Call 810-494-1900
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK INFO BAR ===== */}
      <section className="bg-olive">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap justify-center gap-8 text-white text-sm font-medium">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            10192 E Grand River Ave #107, Brighton, MI 48116
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:810-494-1900" className="hover:text-cream transition">
              810-494-1900
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-300" />
            5-Star Rated on Google
          </div>
        </div>
      </section>

      {/* ===== INTRO / WELCOME ===== */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-olive font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                Welcome to Hands on Health
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Heal, Feel &amp;{" "}
                <span className="text-brown">Live Better</span>
              </h2>
              <p className="text-body leading-relaxed mb-6">
                We believe chiropractic therapy can build vitality and change
                lives. Our team combines the forces of chiropractic, massage,
                and decompression therapy to treat chronic pain, arthritis,
                fibromyalgia, and a myriad of other conditions.
              </p>
              <p className="text-body leading-relaxed mb-8">
                Founded by Dr. Adam Rushford in 2013, Hands on Health
                Chiropractic takes a multidisciplinary approach to improving
                patient health and wellbeing in our cutting-edge Brighton, MI
                facility.
              </p>
              <Link
                href="/about"
                className="text-olive hover:text-olive-dark font-semibold inline-flex items-center gap-2 transition"
              >
                Meet Our Team <ChevronRight size={18} />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80"
                alt="Chiropractic adjustment"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GENERAL SERVICES ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-14">
            <p className="text-olive font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              General Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {generalServices.map((svc) => (
              <div
                key={svc.title}
                className="group bg-cream hover:bg-olive rounded-xl p-8 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-olive/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-5 transition">
                  <svc.icon
                    size={28}
                    className="text-olive group-hover:text-white transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-charcoal group-hover:text-white mb-3 transition">
                  {svc.title}
                </h3>
                <p className="text-body group-hover:text-white/80 text-sm leading-relaxed transition">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OTHER SERVICES ===== */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-14">
            <p className="text-olive-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Beyond Adjustments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Other Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((svc) => (
              <div
                key={svc.title}
                className="border border-white/10 hover:border-olive/50 rounded-xl p-8 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-olive/20 rounded-lg flex items-center justify-center mb-5">
                  <svc.icon size={28} className="text-olive-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/other-services"
              className="border-2 border-olive text-olive hover:bg-olive hover:text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
            >
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-14">
            <p className="text-olive font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Patient Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Testimonials
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-body text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-semibold text-brown text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://reviews.nextadagency.com/hands-on-health-chiropractic-156658570088144/review-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive hover:text-olive-dark font-semibold inline-flex items-center gap-2 transition"
            >
              Write a Review <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PATIENT CENTER ===== */}
      <section className="bg-brown-light">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Patient Center
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Prepare for your first appointment by visiting our patient
                center. Complete your forms online ahead of time for a faster,
                smoother visit.
              </p>
              <a
                href="https://intake.mychirotouch.com/?clinic=HOHC0002"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brown hover:bg-cream px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
              >
                Access Patient Forms <ArrowRight size={16} />
              </a>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Supplements
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Browse our recommended supplements through the Thorne Online
                Supplement Store. Consult with our chiropractic team to ensure
                products align with your healthcare plan.
              </p>
              <a
                href="https://www.thorne.com/u/handsonhealthchiropractic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
              >
                Thorne Supplement Store <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP / CTA ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-olive font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                Visit Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Chiropractic Excellence in Brighton, MI
              </h2>
              <p className="text-body leading-relaxed mb-8">
                Conveniently located on E Grand River Ave, Hands on Health
                Chiropractic serves Brighton and the surrounding communities
                of Howell, Hartland, and Livingston County.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://goo.gl/maps/jsDzvzERg9VgjSGg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-olive hover:bg-olive-dark text-white px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <a
                  href="tel:810-494-1900"
                  className="border-2 border-olive text-olive hover:bg-olive hover:text-white px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.1!2d-83.7825!3d42.5294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMxJzQ1LjgiTiA4M8KwNDYnNTcuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="350"
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
    </>
  );
}
