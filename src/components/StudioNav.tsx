"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function StudioNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/studio", icon: "🌌" },
    { label: "Image", href: "/studio/image-generator", icon: "🖼️" },
    { label: "Video", href: "/studio/video-generator", icon: "🎥" },
    { label: "Audio", href: "/studio/audio-lab", icon: "🎧" },
    { label: "Model Lab", href: "/studio/model-lab", icon: "🧬" },
    { label: "Pantheon", href: "/studio/pantheon", icon: "⚡" },
    { label: "Origin", href: "/studio/origin", icon: "🌍" },
    { label: "Marketplace", href: "/studio/marketplace", icon: "🏛️" },
    { label: "Economy", href: "/studio/economy", icon: "💰" },
    { label: "Analytics", href: "/studio/analytics", icon: "📊" },
    { label: "Settings", href: "/studio/settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-5 left-5 z-50 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl text-white text-sm"
      >
        {open ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 cosmic-panel border-r border-white/10
          backdrop-blur-2xl bg-black/40 z-40 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold text-cosmic-gold tracking-wide">
            Hegay AI Studio
          </h1>
          <p className="text-xs text-white/50 mt-1">
            Creative Civilization OS
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${active
                    ? "bg-cosmic-gold text-black shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10">
          <div className="text-xs text-white/40">
            Powered by Hegay AI  
            <br />
            <span className="text-cosmic-gold">Creative Civilization OS</span>
          </div>
        </div>
      </aside>

      {/* Sidebar Spacer */}
      <div className="hidden md:block w-64" />
    </>
  );
}
