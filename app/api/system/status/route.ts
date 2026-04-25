import { NextResponse } from "next/server";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Check PostgreSQL service
    let postgresStatus = "offline";
    try {
      const pg = execSync('sc query "PostgreSQL16"').toString();
      postgresStatus = pg.includes("RUNNING") ? "online" : "offline";
    } catch {
      postgresStatus = "offline";
    }

    // Check Next.js server (port 3000)
    let nextStatus = "offline";
    try {
      const portCheck = execSync("netstat -ano | findstr :3000").toString();
      nextStatus = portCheck.includes("LISTENING") ? "online" : "offline";
    } catch {
      nextStatus = "offline";
    }

    // Read last backup timestamp
    const backupDir = path.join(
      process.env.USERPROFILE || "",
      "OneDrive",
      "HegayOS",
      "backups"
    );

    let lastBackup = "No backups found";
    if (fs.existsSync(backupDir)) {
      const files = fs
        .readdirSync(backupDir)
        .filter((f) => f.endsWith(".dump"))
        .sort()
        .reverse();

      if (files.length > 0) {
        lastBackup = files[0];
      }
    }

    // Read last 10 log lines
    const logPath = "C:\\HegayOS\\logs\\startup.log";
    let logs: string[] = [];

    if (fs.existsSync(logPath)) {
      const content = fs.readFileSync(logPath, "utf8").split("\n");
      logs = content.slice(-10);
    }

    return NextResponse.json({
      postgres: postgresStatus,
      nextjs: nextStatus,
      lastBackup,
      logs,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "System status check failed", details: error },
      { status: 500 }
    );
  }
}
