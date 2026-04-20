export default function HeroUniverse() {
  return (
    <section className="section-enter p-8 md:p-10 rounded-2xl bg-cosmic-panel/95 border border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.18),_transparent_60%)]" />
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
            Hegay AI · Creative Civilization OS
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-cosmic-gold">
            Creation Without Limits.
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-xl">
            Where imagination becomes civilization. Command AI video, image, script, voice,
            music, motion, and social engines from one Studio‑Integrated universe.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="cosmic-card rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs">
            <div className="text-white/50">Universe Status</div>
            <div className="mt-1 text-cosmic-gold font-semibold">
              Coherent · Expanding · Studio‑Integrated
            </div>
          </div>
          <div className="cosmic-card rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs">
            <div className="text-white/50">Watchword</div>
            <div className="mt-1 text-white/80">
              “Where imagination becomes civilization.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
