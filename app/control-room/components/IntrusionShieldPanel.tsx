"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function IntrusionShieldPanel() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [workflowId, setWorkflowId] = useState("");
  const [intrusionType, setIntrusionType] = useState("");
  const [severity, setSeverity] = useState("");

  // ✅ FIXED — destructure notify from the context
  const { notify } = useNotify();

  const loadData = async () => {
    try {
      const wfRes = await fetch("/api/system/workflow");
      const evRes = await fetch("/api/system/intrusion");

      const workflowData = await wfRes.json();
      const eventData = await evRes.json();

      setWorkflows(workflowData.workflows || []);
      setEvents(eventData.events || []);
    } catch {
      notify("Failed to load Intrusion Shield data", "error");
    }
  };

  const addEvent = async () => {
    if (!workflowId || !intrusionType) {
      notify("Select workflow and intrusion type", "info");
      return;
    }

    try {
      await fetch("/api/system/intrusion", {
        method: "POST",
        body: JSON.stringify({
          workflowId: Number(workflowId),
          intrusionType,
          severity: Number(severity),
        }),
      });

      notify("Intrusion event created", "success");
      setWorkflowId("");
      setIntrusionType("");
      setSeverity("");
      loadData();
    } catch {
      notify("Failed to create intrusion event", "error");
    }
  };

  const deleteEvent = async (id: number) => {
    try {
      await fetch("/api/system/intrusion", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      notify("Intrusion event deleted", "success");
      loadData();
    } catch {
      notify("Failed to delete intrusion event", "error");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Intrusion Shield Engine</h2>

      {/* CREATE EVENT */}
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
          value={intrusionType}
          onChange={(e) => setIntrusionType(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
        >
          <option value="">Select intrusion type…</option>
          <option value="unauthorized-access">Unauthorized Access</option>
          <option value="malicious-activity">Malicious Activity</option>
          <option value="ai-core-breach">AI Core Breach</option>
          <option value="model-corruption">Model Corruption</option>
          <option value="system-tamper">System Tampering</option>
        </select>

        <input
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
          placeholder="Severity (1–10)"
        />

        <button
          onClick={addEvent}
          className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold"
        >
          Add Intrusion Event
        </button>
      </div>

      {/* EVENT LIST */}
      <h3 className="text-xl font-semibold mb-3">Active Intrusion Events</h3>

      <div className="space-y-3">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="p-4 rounded-xl bg-black/40 border border-gray-700 text-gray-200"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">
                Workflow #{ev.workflowId} — {ev.intrusionType}
              </span>
              <button
                onClick={() => deleteEvent(ev.id)}
                className="text-red-400 hover:text-red-300"
              >
                delete
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Severity: {ev.severity || "none"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
