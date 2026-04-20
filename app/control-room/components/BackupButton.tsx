"use client";

import { useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function BackupButton({ onComplete }: { onComplete: () => void }) {
  const [loading, setLoading] = useState(false);
  const notify = useNotify();

  const triggerBackup = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/system/backup", { method: "POST" });
      const data = await res.json();

      if (data.success) {
        notify("Backup completed successfully", "success");
        onComplete();
      } else {
        notify("Backup failed: " + data.error, "error");
      }
    } catch (err: any) {
      notify("Backup failed: " + err.message, "error");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={triggerBackup}
      disabled={loading}
      className={`mt-4 px-6 py-3 rounded-lg font-semibold transition ${
        loading
          ? "bg-gray-700 text-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-500 text-white"
      }`}
    >
      {loading ? "Creating Backup…" : "Create Backup Now"}
    </button>
  );
}
