"use client";

import React from "react";
import { useNotification } from "@/app/context/NotificationContext";

export default function BackupButton({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const { notify } = useNotification(); // ✅ FIXED — destructure the function

  const handleBackup = async () => {
    try {
      const res = await fetch("/api/backup", { method: "POST" });
      const data = await res.json();

      if (data.success) {
        notify("Backup completed successfully", "success");
        onComplete();
      } else {
        notify("Backup failed: " + data.error, "error");
      }
    } catch (err: any) {
      notify("Backup error: " + err.message, "error");
    }
  };

  return (
    <button
      onClick={handleBackup}
      className="rounded-lg bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700"
    >
      Run Backup
    </button>
  );
}
