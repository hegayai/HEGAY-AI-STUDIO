"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CivilizationEnginePage() {
  const [input, setInput] = useState("");

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
            Civilization Engine
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Generate entire civilizations with culture, governance, economy, and identity
          </p>
        </motion.div>

        {/* MAIN PANEL */}
        <GlowShell>
          <div className="space-y-10">
            {/* SECTION: INTRO */}
            <Section
              title="What This Does"
              text="The Civilization Engine synthesizes all realms into a unified civilizational blueprint. It generates culture, governance, economy, education, mythic identity, and societal dynamics. This is the sovereign intelligence layer of your Creative Civilization OS."
            />

            {/* SECTION: INPUT */}
            <section className="space-y-4">
              <h2 className="text-xl font-medium text-white">Describe Your Civilization</h2>

              <motion.textarea
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe the civilization you want to generate. Include culture, governance style, economy, values, mythic identity, societal structure, or anything else."
                className="w-full h-40 rounded-xl bg-white/5 border border-white/10 p-4 text-slate-200 placeholder-slate-500 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </section>

            {/* SECTION: ACTION BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full rounded-xl bg-gradient-to-r from-amber-400/20 via-pink-500/20 to-sky-500/20 border border-white/10 py-4 text-white font-medium backdrop-blur-xl hover:bg-white/10"
              onClick={() => console.log("Civilization generation triggered:", input)}
            >
              Generate Civilization
            </motion.button>

            {/* SECTION: OUTPUT PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h2 className="text-xl font-medium text-white mb-4">Generated Civilization</h2>

              <p className="text-slate-400 text-sm">
                Your generated civilization will appear here.  
                This panel will display:
                <br />• Cultural identity  
                <br />• Governance model  
                <br />• Economic system  
                <br />• Education + knowledge structure  
                <br />• Mythic + ancestral identity  
                <br />• Societal hierarchy  
                <br />• Prosperity + scarcity dynamics  
                <br />• Conflict + harmony patterns  
                <br />• Civilization lifecycle  
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
