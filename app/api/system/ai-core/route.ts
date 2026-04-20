import { NextResponse } from "next/server";
import os from "os";

let aiStartTime = Date.now();

export async function GET() {
  try {
    // AI UPTIME
    const uptimeMs = Date.now() - aiStartTime;
    const uptime = formatUptime(Math.floor(uptimeMs / 1000));

    // SIMULATED AI METRICS (replace with real model stats later)
    const modelLoad = (Math.random() * 40 + 20).toFixed(1); // 20–60%
    const tokenThroughput = Math.floor(Math.random() * 800 + 200); // 200–1000 t/s
    const activeProcesses = Math.floor(Math.random() * 5 + 1); // 1–5
    const aiMemory = (Math.random() * 3 + 1).toFixed(1); // 1–4 GB

    return NextResponse.json({
      engineStatus: "online",
      uptime,
      modelLoad,
      tokenThroughput,
      activeProcesses,
      aiMemory,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "AI Core fetch failed", details: error.message },
      { status: 500 }
    );
  }
}

function formatUptime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return `${h}h ${m}m ${s}s`;
}
