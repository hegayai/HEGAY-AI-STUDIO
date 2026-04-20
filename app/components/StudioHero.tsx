"use client";
import { useEffect } from "react";

export default function StudioHero() {
  useEffect(() => {
    const audio = new Audio("/sounds/hegay-boot-chime.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[420px] rounded-3xl cosmic-panel page-enter">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_10%_0%,rgba(241,91,181,0.35),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(75,228,210,0.35),transparent_55%)]" />
      <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="space-y-3">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/60">
            Hegay Creative Civilization OS
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[color:var(--hegay-gold)]">
            Orchestrate Diaspora Worlds from One Studio.
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-xl">
            Design origin systems, media empires, and living pantheons with a sovereign AI layer
            tuned to your culture, ethics, and destiny.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="cosmic-chip glow-gold text-xs md:text-sm">
              Enter Command Center
            </button>
            <button className="cosmic-chip text-xs md:text-sm">
              View Model Constellation
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-[320px] h-[220px] md:h-[260px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl animate-pulse-slow" />
          <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-[color:var(--hegay-violet)]/40 via-[color:var(--hegay-magenta)]/40 to-[color:var(--hegay-cyan)]/40 blur-xl" />
          <div className="relative inset-0 flex items-center justify-center h-full">
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">
              Model Constellation · Live
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
