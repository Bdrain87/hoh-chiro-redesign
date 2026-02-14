import { ArrowRight, Award, Users, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <p className="text-olive-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-olive-light">Team</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Dr. Adam Rushford founded Hands On Health Chiropractic in 2013 with
            a vision of providing comprehensive, multidisciplinary care to the
            Brighton community.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-olive">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-3 gap-8 text-center text-white">
          <div>
            <Calendar size={28} className="mx-auto mb-2" />
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm text-white/80">Years of Service</p>
          </div>
          <div>
            <Users size={28} className="mx-auto mb-2" />
            <p className="text-3xl font-bold">5,000+</p>
            <p className="text-sm text-white/80">Patients Treated</p>
          </div>
          <div>
            <Award size={28} className="mx-auto mb-2" />
            <p className="text-3xl font-bold">5.0</p>
            <p className="text-sm text-white/80">Google Rating</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Our Approach
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Together, our team has developed a multidisciplinary approach to
                improving patient health and wellbeing in a cutting-edge
                facility. We combine chiropractic care, spinal disc
                decompression therapy, cold laser therapy, functional nutrition,
                supplements, home care services, and massage therapy.
              </p>
              <p className="text-body leading-relaxed">
                We believe chiropractic therapy can build vitality and change
                lives. Whether you&apos;re dealing with chronic pain, recovering
                from an injury, or looking to improve your overall wellness, our
                team is here to help.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Chiropractic office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-light">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Feeling Better?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule your first appointment today and take the first step toward
            a healthier body and mind.
          </p>
          <a
            href="https://intake.mychirotouch.com/?clinic=HOHC0002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition inline-flex items-center gap-2"
          >
            Schedule Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
