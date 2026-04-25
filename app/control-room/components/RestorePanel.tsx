"use client";

import { useEffect, useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function RestorePanel({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [backups, setBackups] = useState<any[]>([]);
  const [selectedBackup, setSelectedBackup] = useState("");

  const { notify } = useNotify();

  const loadBackups = async () => {
    try {
      const res = await fetch("/api/system/backup");
      const data = await res.json();
      setBackups(data.backups || []);
    } catch (err) {
      notify("Failed to load backups", "error");
    }
  };

  const restoreBackup = async () => {
    if (!selectedBackup) {
      notify("Select a backup to restore", "info");
      return;
    }

    try {
      const res = await fetch("/api/system/restore", {
        method: "POST",
        body: JSON.stringify({ id: Number(selectedBackup) }),
      });

      const data = await res.json();

      if (data.success) {
        notify("System restored successfully", "success");
        onComplete(); // ⭐ now valid
      } else {
        notify("Restore failed: " + data.error, "error");
      }
    } catch (err: any) {
      notify("Restore error: " + err.message, "error");
    }
  };

  useEffect(() => {
    loadBackups();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">System Restore</h2>

      <select
        value={selectedBackup}
        onChange={(e) => setSelectedBackup(e.target.value)}
        className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-4"
      >
        <option value="">Select backup…</option>
        {backups.map((b) => (
          <option key={b.id} value={b.id}>
            Backup #{b.id} — {b.timestamp}
          </option>
        ))}
      </select>

      <button
        onClick={restoreBackup}
        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold"
      >
        Restore Backup
      </button>

      <h3 className="text-xl font-semibold mt-8 mb-3">Available Backups</h3>

      <div className="space-y-3">
        {backups.map((b) => (
          <div
            key={b.id}
            className="p-4 rounded-xl bg-black/40 border border-gray-700 text-gray-200"
          >
            <div className="font-semibold">Backup #{b.id}</div>
            <div className="text-sm text-gray-400">{b.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
