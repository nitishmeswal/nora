"use client";

const VISION_ITEMS = [
  {
    number: "01",
    title: "Innovation",
    desc: "Intelligent systems for a changing world.",
  },
  {
    number: "02",
    title: "Scalability",
    desc: "Architecture designed to lead.",
  },
  {
    number: "03",
    title: "Impact",
    desc: "Technology that creates real impact.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-section glitch-reveal mb-16">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(124, 92, 255, 0.7)" }}
          >
            SEEFIRST
          </p>
          <h2
            className="glitch-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-text="Our Vision"
            style={{
              background: "linear-gradient(135deg, #ffffff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            Our Vision
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            We build intelligent systems that scale, adapt and empower the
            future. Our technology bridges the gap between innovation and
            real-world application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-section">
          {VISION_ITEMS.map((item) => (
            <div key={item.number} className="glass-card p-8">
              <span
                className="text-3xl font-bold font-mono"
                style={{ color: "rgba(124, 92, 255, 0.4)" }}
              >
                {item.number}
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white">
                {item.title}
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
