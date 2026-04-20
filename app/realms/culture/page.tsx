"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";

export default function CultureRealmPage() {
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
          <h1 className="text-4xl font-semibold text-white">Culture Realm</h1>
          <p className="mt-2 text-slate-400 text-sm">
            Art • Language • Rituals • Creative Expression
          </p>
        </motion.div>

        {/* PANEL */}
        <GlowShell>
          <div className="space-y-8">
            <Section
              title="Realm Purpose"
              text="The Culture Realm defines artistic expression, rituals, language, and the emotional fabric of a civilization."
            />

            <Section
              title="Core Functions"
              text="• Cultural identity generation  
• Ritual + tradition creation  
• Language + symbol systems  
• Artistic style frameworks"
            />

            <Section
              title="Launch Tools"
              text="• Cultural Style Engine  
• Ritual Builder  
• Language Pattern Generator"
            />
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

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
