"use client";

import { useEffect, useState, useRef } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "morphing" | "done">("loading");
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2500;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p >= 1) {
        clearInterval(interval);
        setPhase("morphing");
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 1200);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        background: "#0a0a0f",
        opacity: phase === "morphing" ? 0 : 1,
        transition: "opacity 1s ease-out",
      }}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Circular loader ring */}
        <div
          ref={ringRef}
          className="relative"
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            transform: phase === "morphing" ? "scale(8)" : "scale(1)",
            opacity: phase === "morphing" ? 0 : 1,
            transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease",
          }}
        >
          {/* Background ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "3px solid rgba(124, 92, 255, 0.15)",
            }}
          />
          {/* Progress ring using SVG */}
          <svg
            className="absolute inset-0"
            viewBox="0 0 160 160"
            style={{
              transform: "rotate(-90deg)",
              animation: "loaderSpin 2s linear infinite",
            }}
          >
            <circle
              cx="80"
              cy="80"
              r="77"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${progress * 4.84} ${484 - progress * 4.84}`}
              style={{ transition: "stroke-dasharray 0.1s ease" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c5cff" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#00f5ff" />
              </linearGradient>
            </defs>
          </svg>
          {/* Center glow */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, rgba(124, 92, 255, ${progress / 400}) 0%, transparent 70%)`,
            }}
          >
            <span
              className="text-2xl font-mono font-bold tracking-widest"
              style={{
                color: "#a78bfa",
                textShadow: "0 0 20px rgba(124, 92, 255, 0.5)",
              }}
            >
              {progress}%
            </span>
          </div>
        </div>
        {/* Brand text */}
        <div
          className="text-xs font-mono tracking-[0.3em] uppercase"
          style={{
            color: "rgba(167, 139, 250, 0.6)",
            opacity: phase === "morphing" ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          NORACORP
        </div>
      </div>
    </div>
  );
}
