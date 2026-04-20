"use client";

import Link from "next/link";

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 lg:px-6 lg:py-8">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Hegay AI Studio
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-50">
              Workflow Dashboard
            </h1>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              Launch, inspect, and evolve your workflows — including the visual Node Graph builder.
            </p>
          </div>
        </header>

        <section className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Workflows
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Example existing workflow card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-[11px] font-semibold text-slate-100">
                Standard Workflow Runner
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Configure and run linear, list-based workflows.
              </p>
            </div>

            {/* Node Graph entry */}
            <Link
              href="/studio/workflows/graph"
              className="group rounded-xl border border-cyan-500/60 bg-slate-900/70 p-4 shadow-[0_0_25px_rgba(34,211,238,0.18)] transition hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              <p className="text-[11px] font-semibold text-cyan-100">
                Node Graph Builder
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Design workflows visually with nodes, ports, branching logic, and curved edges.
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-cyan-300 group-hover:text-cyan-200">
                Open Graph →
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
