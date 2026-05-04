"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[200vh] flex items-start justify-center pt-[30vh]"
    >
      <div
        className="text-center z-10 px-4"
        style={{
          opacity: showText ? 1 : 0,
          transform: showText ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <h1
          className="glitch-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          data-text="NORACORP"
          style={{
            background: "linear-gradient(135deg, #ffffff, #a78bfa, #7c5cff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "none",
          }}
        >
          NORACORP
        </h1>
        <p
          className="text-lg md:text-xl font-light tracking-[0.15em] uppercase"
          style={{ color: "rgba(167, 139, 250, 0.7)" }}
        >
          Innovating the Future
        </p>
        <p
          className="mt-4 text-sm md:text-base max-w-md mx-auto"
          style={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          Building next-gen systems for a better tomorrow.
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #7c5cff, #4a3aff)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(124, 92, 255, 0.3)",
            }}
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
}
