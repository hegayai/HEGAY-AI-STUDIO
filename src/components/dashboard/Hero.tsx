"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // PARALLAX MOTION
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.45)]">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.15] hero-video"
      >
        <source src="/hero/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* PARTICLE LAYER 1 */}
      <div className="absolute inset-0 pointer-events-none hero-particles" />

      {/* PARTICLE LAYER 2 */}
      <div className="absolute inset-0 pointer-events-none hero-particles-depth" />

      {/* GRADIENT SWEEP */}
      <div className="absolute inset-0 hero-gradient-sweep" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

      {/* CONTENT */}
      <div
        ref={containerRef}
        className="absolute bottom-10 left-10 flex flex-col gap-3 animate-fade-in"
      >
        <h1 className="text-[34px] font-light text-white leading-tight drop-shadow-xl">
          Hegay AI Studio
        </h1>

        <p className="text-[15px] text-white/80 max-w-lg leading-relaxed drop-shadow-xl">
          A cosmic‑minimal creative operating system for global diaspora creators.  
          Build worlds, stories, characters, music, videos, and universes — all in one place.
        </p>
      </div>
    </div>
  );
}
