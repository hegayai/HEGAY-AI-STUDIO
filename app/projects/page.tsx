"use client";

const PROJECTS = [
  {
    id: "hegay-origin-beta",
    name: "Hegay Origin Beta",
    status: "In progress",
    models: ["Origin", "Aesthetic"],
  },
  {
    id: "avatar-universe-v1",
    name: "Avatar Universe v1",
    status: "Designing",
    models: ["Avatar"],
  },
  {
    id: "mood-dream-lab",
    name: "Mood + Dream Lab",
    status: "Concept",
    models: ["Mood", "Dream"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        {/* Header */}
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Hegay AI Studio
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-50">
              Projects
            </h1>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              Track the universes, engines, and experiments you’re building across the model suite.
            </p>
          </div>
          <button className="mt-2 inline-flex items-center justify-center rounded-full border border-cyan-400/70 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-cyan-100 shadow-lg shadow-cyan-500/30 sm:mt-0">
            New Project
          </button>
        </header>

        {/* List */}
        <section className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Active Projects
          </p>
          <div className="space-y-2">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-50">
                    {project.name}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Models:{" "}
                    <span className="text-slate-200">
                      {project.models.join(" • ")}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-200">
                    {project.status}
                  </span>
                  <button className="text-[11px] text-cyan-300 hover:text-cyan-100">
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
