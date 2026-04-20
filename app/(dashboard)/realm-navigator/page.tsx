"use client";

export default function RealmNavigatorPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(96,165,250,0.18),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Realm Navigator
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Realms · Domains · Interfaces
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Navigate between creative realms, operational domains, and interface layers of the Hegay Civilization.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <RealmCard title="Culture Realm" desc="Language, memory, and ancestral signals." />
          <RealmCard title="Origin Codex" desc="Foundational laws and mythic structure." />
          <RealmCard title="System Intelligence" desc="Signals, tensions, and predictions." />
          <RealmCard title="Multiverse Navigator" desc="Branches, timelines, and parallel states." />
          <RealmCard title="Mission Control" desc="Governance, justice, and operations." />
          <RealmCard title="Desktop Surface" desc="Primary creative workspace and OS shell." />
        </section>
      </div>
    </main>
  );
}

function RealmCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(52,211,153,0.35)] transition-all duration-300">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2">
        Realm
      </div>
      <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
    </div>
  );
}
