"use client";

const ROADMAP_ITEMS = [
  {
    quarter: "Q1",
    title: "Research",
    desc: "Foundation research and core technology prototyping.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    status: "completed",
  },
  {
    quarter: "Q2",
    title: "Development",
    desc: "Building the core platform and infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    status: "active",
  },
  {
    quarter: "Q3",
    title: "Testing",
    desc: "Rigorous testing and community beta access.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    status: "upcoming",
  },
  {
    quarter: "Q4",
    title: "Launch",
    desc: "Public launch and global rollout.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    status: "upcoming",
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-section glitch-reveal mb-16 text-center">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(124, 92, 255, 0.7)" }}
          >
            Progress
          </p>
          <h2
            className="glitch-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-text="Roadmap"
            style={{
              background: "linear-gradient(135deg, #ffffff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            Roadmap
          </h2>
        </div>

        {/* Timeline */}
        <div className="reveal-section relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(124,92,255,0.3)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {ROADMAP_ITEMS.map((item, index) => (
              <div key={item.quarter} className="relative">
                {/* Dot on connector */}
                <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background:
                        item.status === "completed"
                          ? "#7c5cff"
                          : item.status === "active"
                            ? "rgba(124, 92, 255, 0.5)"
                            : "rgba(124, 92, 255, 0.2)",
                      boxShadow:
                        item.status === "active"
                          ? "0 0 20px rgba(124, 92, 255, 0.5)"
                          : "none",
                    }}
                  />
                </div>

                <div
                  className="glass-card p-6 text-center"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{
                      background: "rgba(124, 92, 255, 0.1)",
                      color: "#a78bfa",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="text-xs font-mono font-bold tracking-[0.2em] uppercase"
                    style={{
                      color:
                        item.status === "completed"
                          ? "#7c5cff"
                          : item.status === "active"
                            ? "#a78bfa"
                            : "rgba(167, 139, 250, 0.4)",
                    }}
                  >
                    {item.quarter}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2 text-white">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
