"use client";

export default function VideoSection() {
  return (
    <section id="video" className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-section glitch-reveal mb-12">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(124, 92, 255, 0.7)" }}
          >
            Technology Preview
          </p>
          <h2
            className="glitch-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-text="Powering the Future"
            style={{
              background: "linear-gradient(135deg, #ffffff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            Powering the Future
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            We combine research, engineering and design to build future-ready
            solutions that create impact.
          </p>
        </div>

        <div className="reveal-section">
          <div className="glass-card overflow-hidden relative group cursor-pointer">
            <div
              className="aspect-video w-full flex items-center justify-center relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13, 27, 42, 0.8), rgba(31, 64, 104, 0.4))",
              }}
            >
              {/* Video frame overlay lines */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(124, 92, 255, 0.03) 2px, rgba(124, 92, 255, 0.03) 4px)",
                }}
              />
              {/* Play button */}
              <div
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: "rgba(124, 92, 255, 0.2)",
                  border: "2px solid rgba(124, 92, 255, 0.4)",
                  boxShadow: "0 0 40px rgba(124, 92, 255, 0.2)",
                }}
              >
                <svg
                  className="w-8 h-8 ml-1"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* Corner accents */}
              <div
                className="absolute top-4 left-4 w-8 h-8"
                style={{
                  borderTop: "2px solid rgba(124, 92, 255, 0.3)",
                  borderLeft: "2px solid rgba(124, 92, 255, 0.3)",
                }}
              />
              <div
                className="absolute top-4 right-4 w-8 h-8"
                style={{
                  borderTop: "2px solid rgba(124, 92, 255, 0.3)",
                  borderRight: "2px solid rgba(124, 92, 255, 0.3)",
                }}
              />
              <div
                className="absolute bottom-4 left-4 w-8 h-8"
                style={{
                  borderBottom: "2px solid rgba(124, 92, 255, 0.3)",
                  borderLeft: "2px solid rgba(124, 92, 255, 0.3)",
                }}
              />
              <div
                className="absolute bottom-4 right-4 w-8 h-8"
                style={{
                  borderBottom: "2px solid rgba(124, 92, 255, 0.3)",
                  borderRight: "2px solid rgba(124, 92, 255, 0.3)",
                }}
              />
            </div>
            <div className="p-6">
              <p
                className="text-sm font-mono tracking-wider uppercase"
                style={{ color: "rgba(124, 92, 255, 0.7)" }}
              >
                Watch Video
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
