"use client";

import StudioNav from "../components/StudioNav";
import UniverseTopBar from "../components/UniverseTopBar";
import DailyEnergyBar from "../components/DailyEnergyBar";
import AudioGenerator from "@/src/components/studio/AudioGenerator";

export default function AudioLabPage() {
  return (
    <div className="space-y-10 page-enter cosmic-bg min-h-screen pb-20">

      <StudioNav />
      <DailyEnergyBar />
      <UniverseTopBar />

      <section className="section-enter p-6 md:p-7 rounded-2xl cosmic-panel relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-gradient opacity-15 blur-2xl" />
        <div className="relative">
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
            Audio Realm
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-cosmic-gold mt-2">
            Audio Lab
          </h1>
          <p className="text-white/70 mt-2 max-w-xl text-xs md:text-sm">
            Generate soundscapes, voices, music, and audio transformations.
          </p>
        </div>
      </section>

      <section className="section-enter cosmic-panel p-6 md:p-7 rounded-2xl">
        <AudioGenerator />
      </section>

    </div>
  );
}
