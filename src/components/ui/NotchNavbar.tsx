"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#video" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function NotchNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const root = document.documentElement;
      const raw = root.style.getPropertyValue("--scroll-progress");
      const p = parseFloat(raw) || 0;
      setVisible(p > 0.3);
    };

    const interval = setInterval(check, 100);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <nav
      className="notch-navbar"
      style={{
        animation: "fadeInUp 0.6s ease forwards",
      }}
    >
      <div className="notch-pill">
        <div
          className="text-sm font-bold tracking-[0.25em] uppercase text-center"
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            textShadow: "0 0 10px rgba(124, 92, 255, 0.3)",
          }}
        >
          NORACORP
        </div>
        <div className="notch-menu">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="notch-menu-item">
              <span className="dot" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
