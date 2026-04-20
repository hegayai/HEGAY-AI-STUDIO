import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const schedulerDir = "C:\\HegayOS\\scheduler";
const schedulerFile = path.join(schedulerDir, "schedules.json");

function loadSchedules() {
  if (!fs.existsSync(schedulerDir)) fs.mkdirSync(schedulerDir);
  if (!fs.existsSync(schedulerFile)) fs.writeFileSync(schedulerFile, "[]");
  return JSON.parse(fs.readFileSync(schedulerFile, "utf8"));
}

function saveSchedules(data: any) {
  fs.writeFileSync(schedulerFile, JSON.stringify(data, null, 2));
}

export async function GET() {
  const schedules = loadSchedules();
  return NextResponse.json({ schedules });
}

export async function POST(request: Request) {
  const { workflowId, interval } = await request.json();
  const schedules = loadSchedules();

  schedules.push({
    id: Date.now(),
    workflowId,
    interval,
    lastRun: null,
    createdAt: new Date().toISOString(),
  });

  saveSchedules(schedules);

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  let schedules = loadSchedules();

  schedules = schedules.filter((s: any) => s.id !== id);
  saveSchedules(schedules);

  return NextResponse.json({ success: true });
}
