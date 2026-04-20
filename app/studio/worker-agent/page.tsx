"use client";

import StudioNav from "../components/StudioNav";
import UniverseTopBar from "../components/UniverseTopBar";
import WorkerAgentPanel from "@/src/components/studio/WorkerAgentPanel";

export default function WorkerAgentPage() {
  return (
    <div className="page-enter space-y-10 cosmic-bg min-h-screen pb-20">
      <StudioNav />
      <UniverseTopBar />

      <section className="section-enter p-6 rounded-2xl cosmic-panel">
        <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
          Hegay Intelligence Core
        </div>
        <h1 className="text-3xl font-bold text-cosmic-gold mt-2">
          Worker Agent
        </h1>
        <p className="text-white/70 mt-2 text-sm max-w-xl">
          A professional-grade AI worker for office tasks, reports, emails, summaries, workflows, and business intelligence.
        </p>
      </section>

      <WorkerAgentPanel />
    </div>
  );
}
