"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "all", label: "All Realms" },
  { id: "visual", label: "Visual" },
  { id: "narrative", label: "Narrative" },
  { id: "audio", label: "Audio" },
  { id: "systems", label: "Systems" },
];

export default function RealmNav() {
  const [active, setActive] = useState("all");

  return (
    <nav className="mt-8 flex w-full items-center justify-between gap-4">
      <div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-black/30 p-1 backdrop-blur">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative rounded-2xl px-3 py-1.5 text-xs font-medium transition ${
              active === tab.id
                ? "text-slate-50"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            {active === tab.id && (
              <motion.span
                layoutId="realm-nav-pill"
                className="absolute inset-0 -z-10 rounded-2xl bg-purple-500/40"
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      <p className="text-[0.7rem] text-slate-500 uppercase tracking-[0.22em]">
        Realms Navigation
      </p>
    </nav>
  );
}
