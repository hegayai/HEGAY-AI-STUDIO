"use client";

import { useState, useEffect } from "react";

export default function WorkerAgentPanel() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  // Load jobs from API
  async function loadJobs() {
    setLoading(true);
    try {
      const res = await fetch("/api/queue/jobs");
      const data = await res.json();
      setJobs(data || []);
    } catch (err) {
      console.error("Failed to load jobs", err);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div className="w-full p-8 space-y-8">
      <h1 className="text-4xl font-bold">Worker Agent</h1>

      <p className="text-gray-400 max-w-2xl">
        Monitor, inspect, and manage workflow jobs processed by the Hegay
        Worker Agent. This panel shows job status, results, and execution
        details.
      </p>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Job Queue</h2>
        <button
          onClick={loadJobs}
          className="px-4 py-2 bg-white text-black rounded-lg font-semibold"
        >
          Refresh
        </button>
      </div>

      {/* Job List */}
      <div className="rounded-xl border border-gray-800 bg-black/20 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black/40 border-b border-gray-800">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Workflow</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="p-4 text-gray-500">
                  Loading jobs…
                </td>
              </tr>
            )}

            {!loading && jobs.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-gray-500">
                  No jobs found.
                </td>
              </tr>
            )}

            {!loading &&
              jobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b border-gray-800 hover:bg-black/30"
                >
                  <td className="p-3">{job.id}</td>
                  <td className="p-3">{job.workflowId}</td>
                  <td className="p-3 capitalize">{job.status}</td>
                  <td className="p-3">
                    {new Date(job.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="px-3 py-1 bg-white text-black rounded"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Job Details Panel */}
      {selectedJob && (
        <div className="rounded-xl border border-gray-800 p-6 bg-black/30 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Job Details</h3>
            <button
              onClick={() => setSelectedJob(null)}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded"
            >
              Close
            </button>
          </div>

          <div className="space-y-2">
            <p>
              <span className="text-gray-400">Job ID:</span> {selectedJob.id}
            </p>
            <p>
              <span className="text-gray-400">Workflow:</span>{" "}
              {selectedJob.workflowId}
            </p>
            <p>
              <span className="text-gray-400">Status:</span>{" "}
              {selectedJob.status}
            </p>
            <p>
              <span className="text-gray-400">Created:</span>{" "}
              {new Date(selectedJob.createdAt).toLocaleString()}
            </p>
          </div>

          {/* Payload */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Payload</h4>
            <pre className="bg-black/40 p-4 rounded-lg text-gray-300 text-sm overflow-auto">
              {JSON.stringify(selectedJob.payload, null, 2)}
            </pre>
          </div>

          {/* Result */}
          {selectedJob.result && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Result</h4>
              <pre className="bg-black/40 p-4 rounded-lg text-gray-300 text-sm overflow-auto">
                {JSON.stringify(selectedJob.result, null, 2)}
              </pre>
            </div>
          )}

          {/* Error */}
          {selectedJob.error && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-red-400">
                Error
              </h4>
              <pre className="bg-black/40 p-4 rounded-lg text-red-300 text-sm overflow-auto">
                {selectedJob.error}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
