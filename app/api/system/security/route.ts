import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const securityDir = "C:\\HegayOS\\security";
const alertsFile = path.join(securityDir, "alerts.json");

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

export async function GET() {
  const alerts = loadAlerts();
  return NextResponse.json({ alerts });
}

export async function POST(request: Request) {
  const { level, source, message } = await request.json();
  const alerts = loadAlerts();

  alerts.unshift({
    id: Date.now(),
    level,
    source,
    message,
    createdAt: new Date().toISOString(),
  });

  // keep last 500 alerts
  const trimmed = alerts.slice(0, 500);
  saveAlerts(trimmed);

  return NextResponse.json({ success: true });
}
