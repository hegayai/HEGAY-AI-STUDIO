"use client";

import StudioNav from "../components/StudioNav";
import UniverseTopBar from "../components/UniverseTopBar";
import DailyEnergyBar from "../components/DailyEnergyBar";
import Analytics from "@/src/components/studio/Analytics";

export default function AnalyticsPage() {
  return (
    <div className="space-y-10 page-enter cosmic-bg min-h-screen pb-20">

      <StudioNav />
      <DailyEnergyBar />
      <UniverseTopBar />

      <section className="section-enter p-6 md:p-7 rounded-2xl cosmic-panel relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-gradient opacity-15 blur-2xl" />
        <div className="relative">
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
            Analytics Realm
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-cosmic-gold mt-2">
            Analytics
          </h1>
          <p className="text-white/70 mt-2 max-w-xl text-xs md:text-sm">
            Track usage, creator activity, realm performance, and system intelligence.
          </p>
        </div>
      </section>

      <section className="section-enter cosmic-panel p-6 md:p-7 rounded-2xl">
        <Analytics />
      </section>

    </div>
  );
}
