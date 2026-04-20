"use client";

import { useState, useEffect } from "react";

export default function CommandCenterPage() {
  const [systemStatus, setSystemStatus] = useState<any>(null);
  const [runningWorkflows, setRunningWorkflows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);

    try {
      const [statusRes, workflowRes] = await Promise.all([
        fetch("/api/system/status"),
        fetch("/api/workflow/list"),
      ]);

      const statusData = await statusRes.json();
      const workflowData = await workflowRes.json();

      setSystemStatus(statusData);
      setRunningWorkflows(workflowData || []);
    } catch (err) {
      console.error("Failed to load command center data", err);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Command Center</h1>
        <p className="text-gray-400 max-w-2xl">
          The Command Center is the operational core of Hegay AI Studio. Monitor
          system intelligence, manage workflows, inspect agents, and oversee
          real‑time activity across your creative universe.
        </p>
      </header>

      {/* System Status */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">System Status</h2>

        <div className="rounded-xl border border-gray-800 bg-black/20 p-6">
          {loading && <p className="text-gray-500">Loading system status…</p>}

          {!loading && systemStatus && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatusCard
                label="Workflows Running"
                value={systemStatus.workflowsRunning}
              />
              <StatusCard
                label="Jobs Pending"
                value={systemStatus.jobsPending}
              />
              <StatusCard
                label="Agents Active"
                value={systemStatus.agentsActive}
              />
            </div>
          )}
        </div>
      </section>

      {/* Running Workflows */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Running Workflows</h2>

        <div className="rounded-xl border border-gray-800 bg-black/20 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-black/40 border-b border-gray-800">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Status</th>
                <th className="p-3">Started</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan={4} className="p-4 text-gray-500">
                    Loading workflows…
                  </td>
                </tr>
              )}

              {!loading && runningWorkflows.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-4 text-gray-500">
                    No workflows running.
                  </td>
                </tr>
              )}

              {!loading &&
                runningWorkflows.map((wf) => (
                  <tr
                    key={wf.id}
                    className="border-b border-gray-800 hover:bg-black/30"
                  >
                    <td className="p-3">{wf.id}</td>
                    <td className="p-3">{wf.name}</td>
                    <td className="p-3 capitalize">{wf.status}</td>
                    <td className="p-3">
                      {new Date(wf.startedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Actions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="Run Workflow"
            description="Trigger a workflow manually."
            href="/studio/workflow/run"
          />

          <ActionCard
            title="Queue Manager"
            description="Inspect and manage queued jobs."
            href="/studio/worker-agent"
          />

          <ActionCard
            title="System Intelligence"
            description="Monitor AI core, metrics, and activity."
            href="/studio/system"
          />
        </div>
      </section>
    </div>
  );
}

/* ------------------------------
   STATUS CARD
------------------------------ */
function StatusCard({ label, value }: { label: string; value: any }) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-black/20 space-y-2">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

/* ------------------------------
   ACTION CARD
------------------------------ */
function ActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block p-6 rounded-xl border border-gray-800 bg-black/20 hover:bg-black/30 transition space-y-4"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </a>
  );
}
