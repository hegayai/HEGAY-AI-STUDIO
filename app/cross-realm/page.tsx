"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";
import { useState } from "react";

const realmOptions = [
  "Origin Realm",
  "Culture Realm",
  "Governance Realm",
  "Economy Realm",
  "Education Realm",
];

export default function CrossRealmEnginePage() {
  const [selectedRealms, setSelectedRealms] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const toggleRealm = (realm: string) => {
    setSelectedRealms((prev) =>
      prev.includes(realm)
        ? prev.filter((r) => r !== realm)
        : [...prev, realm]
    );
  };

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-6xl pt-10 pb-20 px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Cross‑Realm Engine
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Combine multiple realms into a unified generative pipeline
          </p>
        </motion.div>

        {/* MAIN PANEL */}
        <GlowShell>
          <div className="space-y-10">
            {/* SECTION: INTRO */}
            <Section
              title="What This Does"
              text="The Cross‑Realm Engine allows creators to combine any number of realms into a single generative request. This is the inter‑realm synthesis chamber of your Creative Civilization OS, enabling hybrid identity, culture‑governance blends, economic‑mythic fusion, and more."
            />

            {/* SECTION: REALM SELECTOR */}
            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white">Select Realms</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {realmOptions.map((realm, index) => (
                  <motion.button
                    key={realm}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => toggleRealm(realm)}
                    className={`rounded-xl border p-4 text-left backdrop-blur-xl transition-all ${
                      selectedRealms.includes(realm)
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {realm}
                  </motion.button>
                ))}
              </div>
            </section>

            {/* SECTION: INPUT */}
            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white">
                Describe Your Hybrid Request
              </h2>

              <motion.textarea
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe what you want to generate using the selected realms. For example: 'Create a culture‑governance hybrid for a desert civilization with mythic ancestry and a trade‑driven economy.'"
                className="w-full h-40 rounded-xl bg-white/5 border border-white/10 p-4 text-slate-200 placeholder-slate-500 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </section>

            {/* SECTION: ACTION BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full rounded-xl bg-gradient-to-r from-amber-400/20 via-pink-500/20 to-sky-500/20 border border-white/10 py-4 text-white font-medium backdrop-blur-xl hover:bg-white/10"
              onClick={() =>
                console.log("Cross‑Realm generation:", {
                  realms: selectedRealms,
                  input,
                })
              }
            >
              Generate Cross‑Realm Output
            </motion.button>

            {/* SECTION: OUTPUT PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h2 className="text-xl font-medium text-white mb-4">
                Cross‑Realm Output
              </h2>

              <p className="text-slate-400 text-sm">
                Your hybrid generative output will appear here.  
                This panel will display:
                <br />• Selected realm fusion  
                <br />• Hybrid identity  
                <br />• Cultural‑governance blends  
                <br />• Economic‑mythic synthesis  
                <br />• Education‑culture frameworks  
                <br />• Inter‑realm dynamics  
                <br />• Civilization‑scale implications  
              </p>
            </motion.div>
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

/* --------------------------------------------- */
/* SECTION COMPONENT                             */
/* --------------------------------------------- */

function Section({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      <h2 className="text-xl font-medium text-white">{title}</h2>
      <p className="text-slate-400 whitespace-pre-line">{text}</p>
    </motion.div>
  );
}
