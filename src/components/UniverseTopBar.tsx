"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function UniverseTopBar() {
  const pathname = usePathname();

  const [credits, setCredits] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [signal, setSignal] = useState("Stable");
  const [pulse, setPulse] = useState(false);

  // Fake live updates (replace with real API later)
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const realms = [
    { label: "Image", href: "/studio/image-generator" },
    { label: "Video", href: "/studio/video-generator" },
    { label: "Audio", href: "/studio/audio-lab" },
    { label: "Model Lab", href: "/studio/model-lab" },
    { label: "Pantheon", href: "/studio/pantheon" },
    { label: "Origin", href: "/studio/origin" },
    { label: "Marketplace", href: "/studio/marketplace" },
    { label: "Economy", href: "/studio/economy" },
    { label: "Analytics", href: "/studio/analytics" },
  ];

  return (
    <div className="section-enter sticky top-0 z-30 w-full px-6 py-4 mb-4
      bg-black/30 backdrop-blur-2xl border-b border-white/10
      flex items-center justify-between rounded-b-2xl cosmic-panel">

      {/* Left: Realm Switcher */}
      <div className="flex items-center gap-4">
        <div className="text-[11px] uppercase tracking-[0.25em] text-white/40">
          Realm
        </div>

        <select
          className="bg-black/40 border border-white/10 text-white text-xs px-3 py-2 rounded-xl
            focus:ring-2 focus:ring-cosmic-gold/70"
          value={pathname}
          onChange={(e) => (window.location.href = e.target.value)}
        >
          <option value="/studio">Dashboard</option>
          {realms.map((r) => (
            <option key={r.href} value={r.href}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      {/* Center: Live Signal */}
      <div className="flex items-center gap-2">
        <div
          className={`
            w-2 h-2 rounded-full 
            ${pulse ? "bg-cosmic-gold animate-ping" : "bg-cosmic-gold/70"}
          `}
        />
        <span className="text-xs text-white/60">
          Live Signal:
          <span className="ml-1 text-cosmic-gold">{signal} · Expanding</span>
        </span>
      </div>

      {/* Right: Energy + Credits + Avatar */}
      <div className="flex items-center gap-6">

        {/* Energy */}
        <div className="flex items-center gap-2">
          <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-cosmic-gold transition-all"
              style={{ width: `${energy}%` }}
            />
          </div>
          <span className="text-xs text-white/60">{energy}%</span>
        </div>

        {/* Credits */}
        <div className="flex items-center gap-2">
          <span className="text-cosmic-gold text-sm font-semibold">{credits}</span>
          <span className="text-xs text-white/50">credits</span>
        </div>

        {/* Notifications */}
        <button className="relative">
          <div className="w-3 h-3 bg-cosmic-gold rounded-full absolute -top-1 -right-1 animate-pulse" />
          <div className="text-white/70 text-lg">🔔</div>
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
          <span className="text-xs text-white/70">Creator</span>
        </div>
      </div>
    </div>
  );
}
