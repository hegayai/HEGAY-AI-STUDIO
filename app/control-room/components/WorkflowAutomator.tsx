"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function WorkflowAutomator() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState("");
  const [inputData, setInputData] = useState("");

  // ✅ FIXED — destructure notify from context
  const { notify } = useNotify();

  const loadWorkflows = async () => {
    try {
      const res = await fetch("/api/system/workflow");
      const data = await res.json();
      setWorkflows(data.workflows || []);
    } catch {
      notify("Failed to load workflows", "error");
    }
  };

  const runWorkflow = async () => {
    if (!selectedWorkflow) {
      notify("Select a workflow to run", "info");
      return;
    }

    try {
      const res = await fetch("/api/system/run-workflow", {
        method: "POST",
        body: JSON.stringify({
          id: Number(selectedWorkflow),
          input: inputData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        notify("Workflow executed successfully", "success");
      } else {
        notify("Workflow execution failed: " + data.error, "error");
      }
    } catch (err: any) {
      notify("Workflow error: " + err.message, "error");
    }
  };

  useEffect(() => {
    loadWorkflows();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Workflow Automator</h2>

      {/* WORKFLOW SELECTOR */}
      <select
        value={selectedWorkflow}
        onChange={(e) => setSelectedWorkflow(e.target.value)}
        className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-4"
      >
        <option value="">Select workflow…</option>
        {workflows.map((wf) => (
          <option key={wf.id} value={wf.id}>
            {wf.name}
          </option>
        ))}
      </select>

      {/* INPUT FIELD */}
      <textarea
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-4"
        placeholder="Optional input data…"
        rows={4}
      />

      <button
        onClick={runWorkflow}
        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold"
      >
        Run Workflow
      </button>
    </div>
  );
}
