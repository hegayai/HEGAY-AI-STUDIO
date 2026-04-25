"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function SchedulerPanel() {
  const [schedules, setSchedules] = useState<any[]>([]);
  const [workflowId, setWorkflowId] = useState("");
  const [cron, setCron] = useState("");
  const [workflows, setWorkflows] = useState<any[]>([]);

  // ✅ FIXED — destructure notify from context
  const { notify } = useNotify();

  const loadData = async () => {
    try {
      const wfRes = await fetch("/api/system/workflow");
      const scRes = await fetch("/api/system/scheduler");

      const wfData = await wfRes.json();
      const scData = await scRes.json();

      setWorkflows(wfData.workflows || []);
      setSchedules(scData.schedules || []);
    } catch {
      notify("Failed to load scheduler data", "error");
    }
  };

  const addSchedule = async () => {
    if (!workflowId || !cron) {
      notify("Select workflow and enter CRON expression", "info");
      return;
    }

    try {
      await fetch("/api/system/scheduler", {
        method: "POST",
        body: JSON.stringify({
          workflowId: Number(workflowId),
          cron,
        }),
      });

      notify("Schedule created", "success");
      setWorkflowId("");
      setCron("");
      loadData();
    } catch {
      notify("Failed to create schedule", "error");
    }
  };

  const deleteSchedule = async (id: number) => {
    try {
      await fetch("/api/system/scheduler", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      notify("Schedule deleted", "success");
      loadData();
    } catch {
      notify("Failed to delete schedule", "error");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Scheduler Engine</h2>

      {/* CREATE SCHEDULE */}
      <div className="mb-6">
        <select
          value={workflowId}
          onChange={(e) => setWorkflowId(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
        >
          <option value="">Select workflow…</option>
          {workflows.map((wf) => (
            <option key={wf.id} value={wf.id}>
              {wf.name}
            </option>
          ))}
        </select>

        <input
          value={cron}
          onChange={(e) => setCron(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
          placeholder="CRON expression (e.g., */5 * * * *)"
        />

        <button
          onClick={addSchedule}
          className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold"
        >
          Add Schedule
        </button>
      </div>

      {/* SCHEDULE LIST */}
      <h3 className="text-xl font-semibold mb-3">Active Schedules</h3>

      <div className="space-y-3">
        {schedules.map((sc) => (
          <div
            key={sc.id}
            className="p-4 rounded-xl bg-black/40 border border-gray-700 text-gray-200"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">
                Workflow #{sc.workflowId} — {sc.cron}
              </span>
              <button
                onClick={() => deleteSchedule(sc.id)}
                className="text-red-400 hover:text-red-300"
              >
                delete
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Next run: {sc.nextRun || "unknown"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
