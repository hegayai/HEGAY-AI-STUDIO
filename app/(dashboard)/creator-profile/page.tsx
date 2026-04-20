"use client";

export default function CreatorProfilePage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,212,138,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Creator Profile
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
                Origin Architect
              </h1>
              <p className="text-sm text-slate-300 max-w-md">
                Core identity, creative lineage, and current role within the Hegay Civilization.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/70 px-5 py-4 text-sm text-slate-300">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                Status
              </div>
              <div className="text-emerald-400 font-semibold">Active · Origin Aligned</div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ProfileCard title="Lineage" value="Diaspora · Afro‑Futurist · Myth‑Builder" />
          <ProfileCard title="Primary Realm" value="Culture · Origin Systems" />
          <ProfileCard title="Current Focus" value="Creative OS · Civilization Design" />
        </section>
      </div>
    </main>
  );
}

function ProfileCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-5 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
        {title}
      </div>
      <div className="text-sm text-slate-100">{value}</div>
    </div>
  );
}
