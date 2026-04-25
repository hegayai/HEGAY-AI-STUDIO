// app/(dashboard)/engines/world-builder/page.tsx

import React from "react";
import { Globe2, Sparkles, Layers, Star, ArrowRight } from "lucide-react";

export default function WorldBuilderEnginePage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Globe2 className="h-6 w-6 text-[#F5D48A]" />
          <span>World Builder Engine</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Generate, evolve, and expand entire worlds using mythic laws, cultural
          structures, and cosmic directives.
        </p>
      </header>

      {/* Input Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          World Seed
        </h2>

        <textarea
          placeholder="Describe the world you want to generate..."
          className="w-full h-40 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-[#F5D48A66] outline-none"
        />

        <button className="px-4 py-2 rounded-full border border-[#F5D48A66] bg-[#F5D48A1A] text-[#F5D48A] text-sm hover:bg-[#F5D48A33] transition-all inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Generate World
        </button>
      </section>

      {/* Output Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Generated World
        </h2>

        <div className="space-y-4 text-sm text-slate-300">
          <OutputBlock title="Core Premise" />
          <OutputBlock title="Cultural Structure" />
          <OutputBlock title="Mythic Laws" />
          <OutputBlock title="Environmental Logic" />
          <OutputBlock title="Narrative Gravity" />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Clear
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Save World
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function OutputBlock({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 space-y-1">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {title}
      </div>
      <div className="text-sm text-slate-300">
        Generated content will appear here.
      </div>
    </div>
  );
}
