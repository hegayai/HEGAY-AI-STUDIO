import { NextResponse } from "next/server";
import os from "os";
import { execSync } from "child_process";

export async function GET() {
  try {
    // SYSTEM UPTIME
    const uptimeSeconds = os.uptime();
    const uptime = formatUptime(uptimeSeconds);

    // MEMORY
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memUsage = ((usedMem / totalMem) * 100).toFixed(1);

    // CPU LOAD
    const cpus = os.loadavg(); // 1, 5, 15 min load
    const cpuLoad = cpus[0].toFixed(2);

    // DISK USAGE (C:)
    let diskUsage = "Unknown";
    try {
      const disk = execSync("wmic logicaldisk where DeviceID='C:' get FreeSpace,Size /format:value")
        .toString()
        .trim()
        .split("\n");

      const free = parseInt(disk[0].split("=")[1]);
      const size = parseInt(disk[1].split("=")[1]);
      const used = size - free;

      diskUsage = ((used / size) * 100).toFixed(1);
    } catch {}

    // POSTGRES UPTIME
    let postgresUptime = "Unknown";
    try {
      const result = execSync('wmic service where "Name=\'PostgreSQL16\'" get Started /value')
        .toString();
      postgresUptime = result.includes("TRUE") ? "Running" : "Stopped";
    } catch {}

    return NextResponse.json({
      uptime,
      memUsage,
      cpuLoad,
      diskUsage,
      postgresUptime,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Metrics fetch failed", details: error.message },
      { status: 500 }
    );
  }
}

function formatUptime(seconds: number) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  return `${d}d ${h}h ${m}m`;
}
