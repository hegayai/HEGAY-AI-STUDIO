"use client";

import WorkerAgentPanel from "@/app/components/studio/WorkerAgentPanel";

export default function WorkerAgentPage() {
  return (
    <div className="w-full p-8 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Worker Agent</h1>
        <p className="text-gray-400 max-w-2xl">
          Inspect, monitor, and manage workflow jobs processed by the Hegay
          Worker Agent. View job details, payloads, results, and system
          execution logs in real time.
        </p>
      </header>

      <WorkerAgentPanel />
    </div>
  );
}
