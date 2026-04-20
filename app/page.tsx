"use client";

export default function DashboardPage() {
  return (
    <div
      className="
        w-full min-h-[calc(100vh-4rem)]
        px-8 pt-10 pb-12
        flex flex-col gap-8
      "
    >
      {/* HERO */}
      <section className="flex flex-col gap-3">
        <div className="text-[11px] uppercase tracking-[0.35em] text-[var(--diamond-white)]/55">
          Hegay OS Supreme
        </div>
        <h1 className="text-[26px] leading-tight text-[var(--platinum)]">
          World‑Soul Command Dashboard
        </h1>
        <p className="text-[13px] text-[var(--diamond-white)]/70 max-w-xl">
          Orchestrate worlds, pantheons, and creative civilizations from a single, calm command surface.
          This is your primary vantage point into the living OS.
        </p>
      </section>

      {/* GRID */}
      <section
        className="
          grid gap-6
          grid-cols-1
          md:grid-cols-3
        "
      >
        {/* WORLD-SOUL */}
        <div
          className="
            glass-panel rounded-2xl
            p-5
            shadow-[0_24px_80px_rgba(0,0,0,0.9)]
            border border-[rgba(255,255,255,0.06)]
            flex flex-col gap-3
          "
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--diamond-white)]/60">
            World‑Soul
          </div>
          <div className="text-[15px] text-[var(--platinum)]">
            Core Civilization Field
          </div>
          <p className="text-[12px] text-[var(--diamond-white)]/70">
            Monitor the stability, resonance, and expansion state of your primary creative universe.
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-[var(--diamond-white)]/75">
            <span className="h-2 w-2 rounded-full bg-[var(--cosmic-blue)] shadow-[0_0_8px_var(--cosmic-blue)]" />
            <span>Stability: Stable · Expansion: Active</span>
          </div>
        </div>

        {/* PANTHEON */}
        <div
          className="
            glass-panel rounded-2xl
            p-5
            shadow-[0_24px_80px_rgba(0,0,0,0.9)]
            border border-[rgba(255,255,255,0.06)]
            flex flex-col gap-3
          "
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--diamond-white)]/60">
            Pantheon
          </div>
          <div className="text-[15px] text-[var(--platinum)]">
            Deities, Archetypes, Lineages
          </div>
          <p className="text-[12px] text-[var(--diamond-white)]/70">
            Track the status of your mythic entities, guardians, and narrative anchors across all realms.
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-[var(--diamond-white)]/75">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(0,255,0,0.7)]" />
            <span>Online: 12 · Dormant: 3</span>
          </div>
        </div>

        {/* SIGNAL */}
        <div
          className="
            glass-panel rounded-2xl
            p-5
            shadow-[0_24px_80px_rgba(0,0,0,0.9)]
            border border-[rgba(255,255,255,0.06)]
            flex flex-col gap-3
          "
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--diamond-white)]/60">
            Signal
          </div>
          <div className="text-[15px] text-[var(--platinum)]">
            Channels, Streams, Broadcasts
          </div>
          <p className="text-[12px] text-[var(--diamond-white)]/70">
            Observe the clarity of your transmission channels—radio, AI, social, and live creative streams.
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-[var(--diamond-white)]/75">
            <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_8px_rgba(255,255,0,0.7)]" />
            <span>Signal: Clear · Noise: Low</span>
          </div>
        </div>
      </section>

      {/* LOWER STRIP */}
      <section
        className="
          mt-2
          grid gap-6
          grid-cols-1
          md:grid-cols-2
        "
      >
        {/* QUICK COMMANDS */}
        <div
          className="
            glass-panel rounded-2xl
            p-5
            border border-[rgba(255,255,255,0.06)]
            flex flex-col gap-3
          "
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--diamond-white)]/60">
            Quick Commands
          </div>
          <p className="text-[12px] text-[var(--diamond-white)]/70">
            Use the universal shortcuts to move through the OS at light speed.
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-[var(--diamond-white)]/80 mt-1">
            <Shortcut label="Command Center" combo="⌘⇧C" />
            <Shortcut label="Global Search" combo="⌘K" />
            <Shortcut label="Command Palette" combo="⌘K" />
            <Shortcut label="Profile Menu" combo="⌘P" />
          </div>
        </div>

        {/* PRESENCE & MOTION */}
        <div
          className="
            glass-panel rounded-2xl
            p-5
            border border-[rgba(255,255,255,0.06)]
            flex flex-col gap-3
          "
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--diamond-white)]/60">
            Presence & Motion
          </div>
          <p className="text-[12px] text-[var(--diamond-white)]/70">
            The OS adapts to your state—focus, dimmer, idle, and motion preferences are reflected system‑wide.
          </p>
          <ul className="text-[11px] text-[var(--diamond-white)]/80 list-disc list-inside mt-1 space-y-1">
            <li>Toggle Focus Mode via Command Palette.</li>
            <li>Dim the screen for deep work sessions.</li>
            <li>Switch between Cinematic and Minimal Motion.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

/* ---------------------------------------------------------
   SHORTCUT CHIP
   --------------------------------------------------------- */
function Shortcut({ label, combo }: { label: string; combo: string }) {
  return (
    <div className="flex items-center justify-between gap-2 px-2 py-1 rounded-xl bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)]">
      <span>{label}</span>
      <span
        className="
          text-[10px] px-2 py-0.5 rounded-md
          bg-[rgba(255,255,255,0.08)]
          text-[var(--diamond-white)]/75
        "
      >
        {combo}
      </span>
    </div>
  );
}
