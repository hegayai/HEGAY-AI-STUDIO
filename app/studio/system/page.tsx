"use client";

import { useEffect, useState } from "react";

export default function SystemPage() {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function loadSystemStatus() {
    setLoading(true);

    try {
      const res = await fetch("/api/system/status");
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      console.error("Failed to load system status", err);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadSystemStatus();
  }, []);

  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">System Intelligence</h1>
        <p className="text-gray-400 max-w-2xl">
          Monitor the AI Core, system metrics, activity logs, intrusion
          detection, backups, and overall health of the Hegay AI Studio
          infrastructure.
        </p>
      </header>

      {/* System Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">System Overview</h2>

        <div className="rounded-xl border border-gray-800 bg-black/20 p-6">
          {loading && <p className="text-gray-500">Loading system data…</p>}

          {!loading && status && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SystemCard label="AI Core Load" value={`${status.aiLoad}%`} />
              <SystemCard label="Queue Pending" value={status.jobsPending} />
              <SystemCard label="Active Workflows" value={status.workflowsRunning} />
            </div>
          )}
        </div>
      </section>

      {/* AI Core */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">AI Core</h2>

        <div className="rounded-xl border border-gray-800 bg-black/20 p-6 space-y-4">
          {loading && <p className="text-gray-500">Loading AI core…</p>}

          {!loading && status && (
            <>
              <p className="text-gray-400">
                The AI Core manages reasoning, generation, workflow execution,
                and system‑level intelligence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SystemCard label="Model Router" value={status.modelRouter} />
                <SystemCard label="AI Core Status" value={status.aiCoreStatus} />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Intrusion Detection */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Intrusion Detection</h2>

        <div className="rounded-xl border border-gray-800 bg-black/20 p-6">
          {loading && <p className="text-gray-500">Checking security…</p>}

          {!loading && status && (
            <div className="space-y-2">
              <p className="text-gray-400">
                System Security:{" "}
                <span className="font-semibold text-white">
                  {status.securityStatus}
                </span>
              </p>

              <p className="text-gray-400">
                Last Intrusion Check:{" "}
                <span className="font-semibold text-white">
                  {new Date(status.lastSecurityCheck).toLocaleString()}
                </span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Backups */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Backup System</h2>

        <div className="rounded-xl border border-gray-800 bg-black/20 p-6">
          {loading && <p className="text-gray-500">Loading backup data…</p>}

          {!loading && status && (
            <div className="space-y-2">
              <p className="text-gray-400">
                Backup Status:{" "}
                <span className="font-semibold text-white">
                  {status.backupStatus}
                </span>
              </p>

              <p className="text-gray-400">
                Last Backup:{" "}
                <span className="font-semibold text-white">
                  {new Date(status.lastBackup).toLocaleString()}
                </span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Activity Logs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Activity</h2>

        <div className="rounded-xl border border-gray-800 bg-black/20 p-6">
          {loading && <p className="text-gray-500">Loading activity logs…</p>}

          {!loading && status && (
            <div className="space-y-3">
              {status.activity?.length === 0 && (
                <p className="text-gray-500">No recent activity.</p>
              )}

              {status.activity?.map((log: any, i: number) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-black/30 border border-gray-800"
                >
                  <p className="text-gray-300">{log.message}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(log.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ------------------------------
   SYSTEM CARD
------------------------------ */
function SystemCard({ label, value }: { label: string; value: any }) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-black/20 space-y-2">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
