"use client";

const TEAM_MEMBERS = [
  {
    name: "John Doe",
    role: "Designer",
    initials: "JD",
    color: "#7c5cff",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    initials: "JS",
    color: "#00f5ff",
  },
  {
    name: "Alex Brown",
    role: "Engineer",
    initials: "AB",
    color: "#a78bfa",
  },
  {
    name: "Sam Wilson",
    role: "Founder",
    initials: "SW",
    color: "#ff006e",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-section glitch-reveal mb-16 text-center">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(124, 92, 255, 0.7)" }}
          >
            The People
          </p>
          <h2
            className="glitch-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-text="Our Team"
            style={{
              background: "linear-gradient(135deg, #ffffff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            Our Team
          </h2>
        </div>

        <div className="reveal-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name}
              className="glass-card p-8 text-center relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="team-card-glow" />
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${member.color}33, ${member.color}11)`,
                  border: `2px solid ${member.color}44`,
                  color: member.color,
                  boxShadow: `0 0 30px ${member.color}11`,
                }}
              >
                {member.initials}
              </div>
              {/* Lighting effect on hover */}
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${member.color}, transparent)`,
                }}
              />
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p
                className="text-sm font-mono tracking-wider uppercase"
                style={{ color: "rgba(167, 139, 250, 0.6)" }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
