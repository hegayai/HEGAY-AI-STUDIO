"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function WorkflowAutomator() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [newStep, setNewStep] = useState("");
  const notify = useNotify();

  const loadWorkflows = async () => {
    try {
      const res = await fetch("/api/system/workflow");
      const data = await res.json();
      setWorkflows(data.workflows || []);
    } catch {
      notify("Failed to load workflows", "error");
    }
  };

  const addWorkflow = async () => {
    if (!name.trim()) {
      notify("Workflow name required", "info");
      return;
    }
    if (steps.length === 0) {
      notify("Add at least one step", "info");
      return;
    }

    try {
      await fetch("/api/system/workflow", {
        method: "POST",
        body: JSON.stringify({ name, steps }),
      });

      notify("Workflow created", "success");
      setName("");
      setSteps([]);
      loadWorkflows();
    } catch {
      notify("Failed to create workflow", "error");
    }
  };

  const deleteWorkflow = async (id: number) => {
    try {
      await fetch("/api/system/workflow", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      notify("Workflow deleted", "success");
      loadWorkflows();
    } catch {
      notify("Failed to delete workflow", "error");
    }
  };

  useEffect(() => {
    loadWorkflows();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Workflow Automator</h2>

      {/* CREATE WORKFLOW */}
      <div className="mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-3"
          placeholder="Workflow name…"
        />

        <div className="flex gap-3 mb-3">
          <select
            value={newStep}
            onChange={(e) => setNewStep(e.target.value)}
            className="flex-1 p-3 rounded bg-black/40 border border-gray-700 text-gray-200"
          >
            <option value="">Select step…</option>
            <option value="backup">Create Backup</option>
            <option value="restore">Restore Latest Backup</option>
            <option value="server-restart">Restart Server</option>
            <option value="server-stop">Stop Server</option>
            <option value="server-start">Start Server</option>
            <option value="log-dump">Dump Logs</option>
            <option value="ai-ping">AI Core Ping</option>
          </select>

          <button
            onClick={() => {
              if (!newStep) return;
              setSteps((prev) => [...prev, newStep]);
              setNewStep("");
            }}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold"
          >
            Add Step
          </button>
        </div>

        {/* STEP LIST */}
        <div className="space-y-2 mb-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-2 rounded bg-black/40 border border-gray-700 text-gray-300 flex justify-between"
            >
              <span>{s}</span>
              <button
                onClick={() => setSteps((prev) => prev.filter((_, idx) => idx !== i))}
                className="text-red-400 hover:text-red-300"
              >
                remove
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addWorkflow}
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold"
        >
          Save Workflow
        </button>
      </div>

      {/* WORKFLOW LIST */}
      <h3 className="text-xl font-semibold mb-3">Saved Workflows</h3>

      <div className="space-y-3">
        {workflows.map((wf) => (
          <div
            key={wf.id}
            className="p-4 rounded-xl bg-black/40 border border-gray-700 text-gray-200"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{wf.name}</span>
              <button
                onClick={() => deleteWorkflow(wf.id)}
                className="text-red-400 hover:text-red-300"
              >
                delete
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Steps: {wf.steps.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
