"use client";

import { motion } from "framer-motion";

/**
 * Lightweight CSS/SVG hero visual — replaces the previous React Three Fiber
 * scene. Same premium "floating wireframe orb + particles" feel, with zero
 * extra dependencies and no React-version conflicts.
 */
export default function HeroScene() {
  const particles = Array.from({ length: 24 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl" />

      {/* rotating wireframe orb */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] opacity-60"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        <g fill="none" stroke="#2563EB" strokeWidth="0.6">
          {Array.from({ length: 10 }).map((_, i) => (
            <ellipse
              key={`h-${i}`}
              cx="200"
              cy="200"
              rx="180"
              ry={20 + i * 18}
              transform={`rotate(${i * 18} 200 200)`}
            />
          ))}
          <circle cx="200" cy="200" r="180" />
        </g>
      </motion.svg>

      {/* floating particles */}
      {particles.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 6 + 6;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration, delay: i * 0.2, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
