"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function EventTriggerPanel() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [triggers, setTriggers] = useState<any[]>([]);
  const [workflowId, setWorkflowId] = useState("");
  const [eventType, setEventType] = useState("");
  const [threshold, setThreshold] = useState("");
  const notify = useNotify();

  const loadData = async () => {
    try {
      const wfRes = await fetch("/api/system/workflow");
      const trRes = await fetch("/api/system/triggers");

      const wfData = await wfRes.json();
      const trData = await trRes.json();

      setWorkflows(wfData.workflows || []);
      setTriggers(trData.triggers || []);
    } catch {
      notify("Failed to load trigger data", "error");
    }
  };

  const addTrigger = async () => {
    if (!workflowId || !eventType) {
      notify("Select workflow and event type", "info");
      return;
    }

    try {
      await fetch("/api/system/triggers", {
        method: "POST",
        body: JSON.stringify({
          workflowId: Number(workflowId),
          eventType,
          threshold: Number(threshold),
        }),
      });

      notify("Trigger created", "success");
      setWorkflowId("");
      setEventType("");
      setThreshold("");
      loadData();
    } catch {
      notify("Failed to create trigger", "error");
    }
  };

  const deleteTrigger = async (id: number) => {
    try {
      await fetch("/api/system/triggers", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      notify("Trigger deleted", "success");
      loadData();
    } catch {
      notify("Failed to delete trigger", "error");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Event Trigger Engine</h2>

      {/* CREATE TRIGGER */}
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
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
        >
          <option value="">Select event type…</option>
          <option value="cpu-spike">CPU Spike</option>
          <option value="memory-high">High Memory Usage</option>
          <option value="disk-high">High Disk Usage</option>
          <option value="ai-overload">AI Core Overload</option>
          <option value="model-failover">Model Router Failover</option>
        </select>

        <input
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
          placeholder="Threshold (e.g., 80)"
        />

        <button
          onClick={addTrigger}
          className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold"
        >
          Add Trigger
        </button>
      </div>

      {/* TRIGGER LIST */}
      <h3 className="text-xl font-semibold mb-3">Active Triggers</h3>

      <div className="space-y-3">
        {triggers.map((tr) => (
          <div
            key={tr.id}
            className="p-4 rounded-xl bg-black/40 border border-gray-700 text-gray-200"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">
                Workflow #{tr.workflowId} — {tr.eventType}
              </span>
              <button
                onClick={() => deleteTrigger(tr.id)}
                className="text-red-400 hover:text-red-300"
              >
                delete
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Threshold: {tr.threshold || "none"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
