"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function SchedulerPanel() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [schedules, setSchedules] = useState<any[]>([]);
  const [workflowId, setWorkflowId] = useState("");
  const [interval, setInterval] = useState("");
  const notify = useNotify();

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
    if (!workflowId || !interval) {
      notify("Select workflow and interval", "info");
      return;
    }

    try {
      await fetch("/api/system/scheduler", {
        method: "POST",
        body: JSON.stringify({
          workflowId: Number(workflowId),
          interval: Number(interval),
        }),
      });

      notify("Schedule created", "success");
      setWorkflowId("");
      setInterval("");
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

        <select
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
        >
          <option value="">Select interval…</option>
          <option value="60">Every 1 minute</option>
          <option value="300">Every 5 minutes</option>
          <option value="900">Every 15 minutes</option>
          <option value="3600">Every hour</option>
          <option value="86400">Daily</option>
        </select>

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
                Workflow #{sc.workflowId} — every {sc.interval}s
              </span>
              <button
                onClick={() => deleteSchedule(sc.id)}
                className="text-red-400 hover:text-red-300"
              >
                delete
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Last run: {sc.lastRun || "Never"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
