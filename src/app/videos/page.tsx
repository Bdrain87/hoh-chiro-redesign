import ScrollReveal from "@/components/ScrollReveal";

const videos = [
  { id: "Q4n3bzNEjmc", title: "Hands on Health Chiropractic" },
  { id: "hwSNOI4PlhY", title: "Patient Testimonial" },
  { id: "8-2RgxoE5ZM", title: "Chiropractic Care" },
  { id: "I0x879MF3xE", title: "Spinal Decompression" },
  { id: "t0qX9uFMGU8", title: "Wellness Tips" },
  { id: "tzvfVLUfF5I", title: "Office Tour" },
  { id: "mh90Efj4s8E", title: "Community Outreach" },
];

export default function VideosPage() {
  return (
    <>
      <section className="relative hero-gradient overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="section-label" style={{ color: "rgba(106,173,123,0.8)" }}>Media</div>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold text-white mb-5 tracking-tight">Watch &amp; Learn</h1>
            <p className="text-white/80 text-lg max-w-lg leading-relaxed">
              Learn about the benefits of chiropractic care and ways to improve your health.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-ink-secondary leading-relaxed">
                Our team of doctors and therapists are passionate about helping patients achieve total health and wellness. We hope you find these videos informative and inspirational. For more, follow us on{" "}
                <a href="https://www.facebook.com/HandsonHealthChiroBrighton/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light font-semibold transition-colors">Facebook</a>.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <ScrollReveal key={video.id} variant="scale" delay={i * 60}>
                <div className="rounded-2xl overflow-hidden card-hover bg-surface border border-border-light">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      width="100%"
                      height="100%"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-ink text-sm tracking-tight">{video.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
