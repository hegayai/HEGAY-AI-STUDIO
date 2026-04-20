"use client";

import { useWindow } from "../components/window-system/useWindow";

const mockJobs = [
  {
    id: "job-1",
    name: "Render: Diaspora Campaign Visuals",
    status: "running",
    createdAt: "Just now",
  },
  {
    id: "job-2",
    name: "Transcode: NaijaMix Radio Episode 12",
    status: "queued",
    createdAt: "2 min ago",
  },
  {
    id: "job-3",
    name: "Train: Hegay Persona Model v2",
    status: "completed",
    createdAt: "10 min ago",
  },
];

function JobsSurface() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-cosmic-gold">Job Queue</h1>
      <p className="text-sm text-white/60">
        Every render, training run, and workflow passes through here.
      </p>

      <div className="space-y-2">
        {mockJobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs"
          >
            <div>
              <p className="text-white/80">{job.name}</p>
              <p className="text-white/40 text-[11px]">{job.createdAt}</p>
            </div>

            <span
              className={`
                px-2 py-1 rounded-full text-[10px] uppercase tracking-wide
                ${
                  job.status === "running"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                    : job.status === "queued"
                    ? "bg-yellow-500/10 text-yellow-300 border border-yellow-400/30"
                    : job.status === "completed"
                    ? "bg-sky-500/10 text-sky-300 border border-sky-400/30"
                    : "bg-rose-500/10 text-rose-300 border border-rose-400/30"
                }
              `}
            >
              {job.status}
            </span>
          </div>
        ))}

        <p className="text-[11px] text-white/40 mt-2">
          (Future: real job data, logs, retries, routing.)
        </p>
      </div>
    </div>
  );
}

export default function JobsPage() {
  const { openWindow } = useWindow();

  const handleOpenInWindow = () => {
    openWindow({
      title: "Job Queue",
      content: <JobsSurface />,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-cosmic-gold">Job Queue</h1>
          <p className="text-sm text-white/60">
            Monitor and orchestrate all work happening across your OS.
          </p>
        </div>

        <button
          onClick={handleOpenInWindow}
          className="px-4 py-2 rounded-lg bg-cosmic-gold/20 border border-cosmic-gold/40 text-cosmic-gold text-xs font-medium hover:bg-cosmic-gold/30 transition"
        >
          Open in Window
        </button>
      </div>

      <JobsSurface />
    </div>
  );
}
