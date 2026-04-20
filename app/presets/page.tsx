"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";
import Link from "next/link";

const presetCategories = [
  {
    title: "World Templates",
    description: "Instant world blueprints with geography, culture, and mythic identity.",
    href: "/presets/worlds",
  },
  {
    title: "Civilization Templates",
    description: "Pre‑built civilizations with culture, governance, and economy.",
    href: "/presets/civilizations",
  },
  {
    title: "Culture Templates",
    description: "Art, rituals, language, and creative identity presets.",
    href: "/presets/culture",
  },
  {
    title: "Governance Templates",
    description: "Leadership, law, and societal structure presets.",
    href: "/presets/governance",
  },
  {
    title: "Economy Templates",
    description: "Trade, value, and prosperity system presets.",
    href: "/presets/economy",
  },
  {
    title: "Education Templates",
    description: "Knowledge, learning, and generational continuity presets.",
    href: "/presets/education",
  },
  {
    title: "Hybrid Realm Templates",
    description: "Cross‑realm fusion presets for advanced creators.",
    href: "/presets/hybrid",
  },
];

export default function PresetsEnginePage() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-7xl pt-10 pb-20 px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Presets Engine
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            One‑click templates for creators • Creative Civilization OS
          </p>
        </motion.div>

        {/* MAIN PANEL */}
        <GlowShell className="p-0">
          <div className="p-8 space-y-12">
            {/* SECTION: INTRO */}
            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white">What This Does</h2>
              <p className="text-slate-400 text-sm">
                The Presets Engine provides instant creative acceleration.  
                Each preset is a fully structured template that creators can use to generate worlds, civilizations, cultures, governance systems, economies, and hybrid realm constructs with a single click.
              </p>
            </section>

            {/* SECTION: PRESET GRID */}
            <section>
              <h2 className="text-xl font-medium text-white mb-4">Preset Categories</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {presetCategories.map((preset, index) => (
                  <PresetCard
                    key={preset.href}
                    index={index}
                    title={preset.title}
                    description={preset.description}
                    href={preset.href}
                  />
                ))}
              </div>
            </section>
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

/* --------------------------------------------- */
/* PRESET CARD COMPONENT                         */
/* --------------------------------------------- */

function PresetCard({
  title,
  description,
  href,
  index,
}: {
  title: string;
  description: string;
  href: string;
  index: number;
}) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={{
          scale: 1.03,
          x: 6,
          transition: { duration: 0.25 },
        }}
        className="cursor-pointer rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-400">{description}</p>
      </motion.div>
    </Link>
  );
}
