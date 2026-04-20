"use client";

import { motion } from "framer-motion";
import UniverseNode from "./UniverseNode";

export default function UniverseMap() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
      {/* Background stars */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)] opacity-70" />

      <div className="relative z-10 space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-slate-100">
              Universe Map
            </h1>
            <p className="text-xs text-slate-400">
              A cosmic overview of your Creative Civilization.
            </p>
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
            Realms & Systems
          </p>
        </header>

        {/* Map canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mt-4 h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60"
        >
          {/* Subtle drifting layer */}
          <motion.div
            className="absolute inset-0"
            animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Center: OS Core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <UniverseNode
                label="Hegay Creative OS Core"
                href="/dashboard"
                aura="from-slate-900 to-slate-800"
                size="lg"
              />
            </div>

            {/* Orbits: Realms */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-52 w-52 rounded-full border border-white/10/40" />
            </div>

            {/* Image Realm */}
            <div className="absolute left-[18%] top-[22%]">
              <UniverseNode
                label="Image Realm"
                href="/realms/image"
                aura="from-purple-500/40 to-fuchsia-500/40"
                size="md"
              />
            </div>

            {/* Dream Realm */}
            <div className="absolute right-[16%] top-[28%]">
              <UniverseNode
                label="Dream Realm"
                href="/realms/dream"
                aura="from-indigo-500/40 to-blue-500/40"
                size="md"
              />
            </div>

            {/* Radio Realm */}
            <div className="absolute left-[22%] bottom-[18%]">
              <UniverseNode
                label="Radio Realm"
                href="/realms/radio"
                aura="from-amber-500/40 to-red-500/40"
                size="md"
              />
            </div>

            {/* Future Realm placeholder */}
            <div className="absolute right-[18%] bottom-[20%]">
              <UniverseNode
                label="Future Realm"
                href="/realms"
                aura="from-emerald-500/40 to-cyan-500/40"
                size="sm"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
