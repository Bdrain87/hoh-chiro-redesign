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
      <section className="relative bg-charcoal overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://hohchiro.com/wp-content/uploads/2020/02/HandsOnChiro-20.jpg')" }} />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="divider mb-6" style={{ background: "#d3d58a" }} />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Videos</h1>
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              Learn about the benefits of chiropractic care and ways to improve your health.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-body leading-relaxed">
              Our team of doctors and therapists are passionate about helping patients achieve total health and wellness. We hope you find these videos informative and inspirational. For more, follow us on{" "}
              <a href="https://www.facebook.com/HandsonHealthChiroBrighton/" target="_blank" rel="noopener noreferrer" className="text-olive hover:text-olive-dark font-semibold transition">Facebook</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="rounded-2xl overflow-hidden shadow-lg card-lift bg-white">
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
                  <p className="font-semibold text-charcoal text-sm">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
