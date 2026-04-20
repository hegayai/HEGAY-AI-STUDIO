"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function RestorePanel({ onComplete }: { onComplete: () => void }) {
  const [backups, setBackups] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const notify = useNotify();

  const loadBackups = async () => {
    try {
      const res = await fetch("/api/system/restore");
      const data = await res.json();
      setBackups(data.backups || []);
    } catch (err) {
      notify("Failed to load backups", "error");
    }
  };

  const restoreBackup = async () => {
    if (!selected) {
      notify("Please select a backup file", "info");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/system/restore", {
        method: "POST",
        body: JSON.stringify({ filename: selected }),
      });

      const data = await res.json();

      if (data.success) {
        notify("Restore completed successfully", "success");
        onComplete();
      } else {
        notify("Restore failed: " + data.error, "error");
      }
    } catch (err: any) {
      notify("Restore failed: " + err.message, "error");
    }

    setLoading(false);
  };

  useEffect(() => {
    loadBackups();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">Restore Backup</h2>

      <select
        className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Select a backup file…</option>
        {backups.map((file, i) => (
          <option key={i} value={file}>
            {file}
          </option>
        ))}
      </select>

      <button
        onClick={restoreBackup}
        disabled={loading}
        className={`mt-4 px-6 py-3 rounded-lg font-semibold transition ${
          loading
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-500 text-white"
        }`}
      >
        {loading ? "Restoring…" : "Restore Selected Backup"}
      </button>
    </div>
  );
}
