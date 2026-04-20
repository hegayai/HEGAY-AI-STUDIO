"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function IntrusionShieldPanel() {
  const [shield, setShield] = useState<any>(null);
  const [workflows, setWorkflows] = useState<any[]>([]);
  const notify = useNotify();

  const loadData = async () => {
    try {
      const s = await fetch("/api/system/intrusion");
      const w = await fetch("/api/system/workflow");

      const shieldData = await s.json();
      const workflowData = await w.json();

      setShield(shieldData);
      setWorkflows(workflowData.workflows || []);
    } catch {
      notify("Failed to load Intrusion Shield data", "error");
    }
  };

  const exitContainment = async () => {
    await fetch("/api/system/intrusion", {
      method: "POST",
      body: JSON.stringify({ mode: "normal", message: "Containment mode exited" }),
    });
    notify("Containment mode disabled", "success");
    loadData();
  };

  const assignWorkflow = async (id: number) => {
    await fetch("/api/system/intrusion", {
      method: "POST",
      body: JSON.stringify({ safeWorkflowId: id, message: "Safe workflow assigned" }),
    });
    notify("Safe workflow assigned", "success");
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!shield) return null;

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-purple-700/60 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Intrusion Shield</h2>

      <div className="mb-4">
        <span className="text-gray-300">Mode:</span>{" "}
        <span
          className={
            shield.mode === "containment"
              ? "text-red-400 font-bold"
              : "text-green-400 font-bold"
          }
        >
          {shield.mode}
        </span>
      </div>

      {shield.mode === "containment" && (
        <button
          onClick={exitContainment}
          className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold mb-6"
        >
          Exit Containment Mode
        </button>
      )}

      <h3 className="text-xl font-semibold mb-3">Assign Safe Workflow</h3>

      <div className="flex flex-wrap gap-3 mb-6">
        {workflows.map((wf) => (
          <button
            key={wf.id}
            onClick={() => assignWorkflow(wf.id)}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm"
          >
            {wf.name}
          </button>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-3">Escalations</h3>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {shield.escalations.map((e: any) => (
          <div
            key={e.id}
            className="p-3 rounded-lg bg-black/40 border border-gray-700 text-gray-200 text-sm"
          >
            <div className="flex justify-between">
              <span>{e.message}</span>
              <span className="text-xs text-gray-400">
                {new Date(e.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
