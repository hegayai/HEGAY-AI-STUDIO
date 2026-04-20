import fs from "fs";
import path from "path";

const securityDir = "C:\\HegayOS\\security";
const alertsFile = path.join(securityDir, "alerts.json");

const logsDir = "C:\\HegayOS\\logs";
const startupLog = path.join(logsDir, "startup.log");
const aiLog = path.join(logsDir, "ai-ping.log");

function ensureFiles() {
  if (!fs.existsSync(securityDir)) fs.mkdirSync(securityDir, { recursive: true });
  if (!fs.existsSync(alertsFile)) fs.writeFileSync(alertsFile, "[]");
}

function loadAlerts() {
  ensureFiles();
  return JSON.parse(fs.readFileSync(alertsFile, "utf8"));
}

function saveAlerts(alerts: any[]) {
  fs.writeFileSync(alertsFile, JSON.stringify(alerts, null, 2));
}

function addAlert(level: "info" | "warning" | "critical", source: string, message: string) {
  const alerts = loadAlerts();
  alerts.unshift({
    id: Date.now(),
    level,
    source,
    message,
    createdAt: new Date().toISOString(),
  });
  const trimmed = alerts.slice(0, 500);
  saveAlerts(trimmed);
}

function scanLogs() {
  if (!fs.existsSync(logsDir)) return;

  // simple, safe pattern checks – you can expand later
  if (fs.existsSync(startupLog)) {
    const content = fs.readFileSync(startupLog, "utf8");

    if (content.includes("UNAUTHORIZED") || content.includes("unauthorized")) {
      addAlert(
        "critical",
        "startup.log",
        "Possible unauthorized access detected in startup.log"
      );
    }

    if (content.includes("ECONNREFUSED") || content.includes("database error")) {
      addAlert(
        "warning",
        "startup.log",
        "Database or connection instability detected"
      );
    }
  }

  if (fs.existsSync(aiLog)) {
    const content = fs.readFileSync(aiLog, "utf8");
    if (content.includes("ERROR") || content.includes("OVERLOAD")) {
      addAlert(
        "warning",
        "ai-ping.log",
        "AI Core anomaly detected in AI log"
      );
    }
  }
}

export function startSecuritySentinel() {
  ensureFiles();

  // initial scan
  scanLogs();

  // scan every 30 seconds
  setInterval(() => {
    scanLogs();
  }, 30000);
}
