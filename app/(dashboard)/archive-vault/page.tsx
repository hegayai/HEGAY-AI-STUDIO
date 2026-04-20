"use client";

export default function ArchiveVaultPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9))]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Archive Vault
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Eternal Storage · Cultural Continuity
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              A secure vault for preserving universes, realms, and cultural artifacts beyond any single timeline.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <VaultCard title="Universe Snapshots" desc="Frozen states of universes at key narrative moments." />
          <VaultCard title="Culture Capsules" desc="Curated bundles of language, music, and memory." />
          <VaultCard title="Governance Records" desc="Decisions, trials, and justice outcomes across eras." />
          <VaultCard title="Creator Logs" desc="Personal journals, design notes, and origin reflections." />
        </section>
      </div>
    </main>
  );
}

function VaultCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2">
        Archive Node
      </div>
      <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
    </div>
  );
}
