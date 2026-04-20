"use client";

import StudioHero from "@/components/StudioHero";

export default function DashboardPage() {
  return (
    <main className="cosmic-bg min-h-screen px-6 py-10 space-y-10">

      {/* HERO SECTION */}
      <StudioHero />

      <section className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 text-white/70">
        <h2 className="text-xl font-semibold text-[color:var(--hegay-gold)]">
          Studio Dashboard
        </h2>
        <p className="text-sm mt-2">
          A secondary dashboard for managing tools, assets, and creative flows.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 text-white/70">

        <div className="rounded-3xl border border-white/10 bg-black/30 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Assets</h3>
          <p className="text-sm text-white/60">
            Manage generated images, videos, and audio files.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Activity</h3>
          <p className="text-sm text-white/60">
            Track recent actions, tasks, and creative operations.
          </p>
        </div>

      </section>

    </main>
  );
}
