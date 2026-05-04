"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center reveal-section">
        <p
          className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
          style={{ color: "rgba(124, 92, 255, 0.7)" }}
        >
          Get in Touch
        </p>
        <h2
          className="glitch-text text-4xl md:text-5xl font-bold mb-8"
          data-text="Contact Us"
          style={{
            background: "linear-gradient(135deg, #ffffff, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "none",
          }}
        >
          Contact Us
        </h2>
        <p
          className="text-lg max-w-xl mx-auto mb-10"
          style={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          Ready to build the future together? Reach out to start a conversation.
        </p>
        <a
          href="mailto:hello@noracorp.com"
          className="inline-block px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #7c5cff, #4a3aff)",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(124, 92, 255, 0.3)",
          }}
        >
          Say Hello
        </a>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs font-mono tracking-[0.2em] uppercase"
            style={{ color: "rgba(255, 255, 255, 0.3)" }}
          >
            NORACORP 3D Website Builder — Where Interaction Meets Immersion.
          </p>
          <p
            className="text-xs font-mono tracking-[0.15em] uppercase"
            style={{ color: "rgba(255, 255, 255, 0.3)" }}
          >
            Build. Animate. Inspire.
          </p>
        </div>
      </div>
    </section>
  );
}
