"use client";

import { useEffect, useState } from "react";
import "./themeShift.css";

import NotificationProvider from "./components/NotificationProvider";
import CosmicHeader from "./components/CosmicHeader";
import BackupButton from "./components/BackupButton";
import RestorePanel from "./components/RestorePanel";
import ServerControlPanel from "./components/ServerControlPanel";
import MetricsPanel from "./components/MetricsPanel";
import ActivityGrid from "./components/ActivityGrid";
import AICorePanel from "./components/AICorePanel";
import ModelRouterPanel from "./components/ModelRouterPanel";
import CommandConsole from "./components/CommandConsole";
import WorkflowAutomator from "./components/WorkflowAutomator";
import SchedulerPanel from "./components/SchedulerPanel";
import EventTriggerPanel from "./components/EventTriggerPanel";
import SecuritySentinelPanel from "./components/SecuritySentinelPanel";
import IntrusionShieldPanel from "./components/IntrusionShieldPanel";

import ContainmentOverlay from "./components/ContainmentOverlay";
import ContainmentToggleButton from "./components/ContainmentToggleButton";
import CosmicAlarmPulse from "./components/CosmicAlarmPulse";
import CosmicHUDStrip from "./components/CosmicHUDStrip";
import CosmicParticleField from "./components/CosmicParticleField";
import WarpDistortionLayer from "./components/WarpDistortionLayer";

export default function ControlRoom() {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // UI-only containment state (safe)
  const [containmentActive, setContainmentActive] = useState(false);

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/system/status");
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      console.error("Failed to fetch system status:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <NotificationProvider>
        <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
          Loading Control Room…
        </div>
      </NotificationProvider>
    );
  }

  return (
    <NotificationProvider>

      {/* CONTAINMENT OVERLAY */}
      <ContainmentOverlay active={containmentActive} />

      {/* COSMIC ALARM PULSE */}
      <CosmicAlarmPulse active={containmentActive} />

      {/* COSMIC HUD STRIP */}
      <CosmicHUDStrip active={containmentActive} />

      {/* COSMIC PARTICLE FIELD */}
      <CosmicParticleField active={containmentActive} />

      {/* WARP DISTORTION LAYER */}
      <WarpDistortionLayer active={containmentActive} />

      {/* CONTAINMENT TOGGLE BUTTON */}
      <ContainmentToggleButton
        active={containmentActive}
        onToggle={() => setContainmentActive(!containmentActive)}
      />

      {/* THEME SHIFT WRAPPER */}
      <div
        className={`theme-transition ${
          containmentActive ? "theme-containment" : "theme-normal"
        } min-h-screen`}
        style={{
          background: `linear-gradient(to bottom, var(--bg-start), var(--bg-mid), var(--bg-end))`,
          color: "var(--text-main)",
        }}
      >

        <div className="p-10">

          {/* COSMIC HEADER */}
          <CosmicHeader />

          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* SYSTEM HEALTH */}
            <div
              className="p-6 rounded-xl shadow-xl"
              style={{
                background: "var(--panel-bg)",
                border: `1px solid var(--panel-border)`,
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">System Health</h2>

              <div className="space-y-3">
                <StatusItem label="PostgreSQL" value={status.postgres} />
                <StatusItem label="Next.js Server" value={status.nextjs} />
                <StatusItem label="Last Backup" value={status.lastBackup} />
                <StatusItem label="Status Timestamp" value={status.timestamp} />
              </div>

              <BackupButton onComplete={fetchStatus} />
            </div>

            {/* LOG VIEWER */}
            <div
              className="p-6 rounded-xl shadow-xl"
              style={{
                background: "var(--panel-bg)",
                border: `1px solid var(--panel-border)`,
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">System Logs</h2>

              <div className="bg-black/40 p-4 rounded-lg h-64 overflow-y-auto text-sm font-mono border border-gray-800">
                {status.logs && status.logs.length > 0 ? (
                  status.logs.map((line: string, i: number) => (
                    <div key={i} className="text-gray-300">
                      {line}
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500">No logs available.</div>
                )}
              </div>
            </div>

          </div>

          {/* METRICS */}
          <MetricsPanel />

          {/* AI CORE */}
          <AICorePanel />

          {/* MODEL ROUTER */}
          <ModelRouterPanel />

          {/* SERVER CONTROL */}
          <ServerControlPanel onComplete={fetchStatus} />

          {/* RESTORE PANEL */}
          <RestorePanel onComplete={fetchStatus} />

          {/* ACTIVITY GRID */}
          <ActivityGrid />

          {/* SECURITY SENTINEL */}
          <SecuritySentinelPanel />

          {/* INTRUSION SHIELD */}
          <IntrusionShieldPanel />

          {/* WORKFLOW AUTOMATOR */}
          <WorkflowAutomator />

          {/* SCHEDULER ENGINE */}
          <SchedulerPanel />

          {/* EVENT TRIGGER ENGINE */}
          <EventTriggerPanel />

          {/* COMMAND CONSOLE */}
          <CommandConsole />

          <div className="text-center mt-10 text-gray-500 text-sm">
            HegayOS — Creative Operating System • Control Room v4.0
          </div>

        </div>
      </div>
    </NotificationProvider>
  );
}

function StatusItem({ label, value }: { label: string; value: string }) {
  const color =
    value === "online"
      ? "text-green-400"
      : value === "offline"
      ? "text-red-400"
      : "text-blue-400";

  return (
    <div className="flex justify-between border-b border-gray-700 pb-2">
      <span style={{ color: "var(--text-soft)" }}>{label}</span>
      <span className={`${color} font-semibold`}>{value}</span>
    </div>
  );
}
