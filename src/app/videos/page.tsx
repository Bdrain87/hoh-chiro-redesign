export default function VideosPage() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <p className="text-olive-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Watch &amp; Learn
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Videos
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Learn more about our practice, treatments, and tips for living
            healthier from Dr. Rushford and the Hands on Health team.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Placeholder grid — replace with actual YouTube embeds */}
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="bg-charcoal rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-olive/80 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Video {n} — Replace with YouTube embed
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-body mt-12">
            Replace these placeholders with actual YouTube embed URLs from the
            Hands on Health YouTube channel or video library.
          </p>
        </div>
      </section>
    </>
  );
}
