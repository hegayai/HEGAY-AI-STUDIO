import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const triggerDir = "C:\\HegayOS\\triggers";
const triggerFile = path.join(triggerDir, "triggers.json");

function loadTriggers() {
  if (!fs.existsSync(triggerDir)) fs.mkdirSync(triggerDir);
  if (!fs.existsSync(triggerFile)) fs.writeFileSync(triggerFile, "[]");
  return JSON.parse(fs.readFileSync(triggerFile, "utf8"));
}

function saveTriggers(data: any) {
  fs.writeFileSync(triggerFile, JSON.stringify(data, null, 2));
}

export async function GET() {
  const triggers = loadTriggers();
  return NextResponse.json({ triggers });
}

export async function POST(request: Request) {
  const { workflowId, eventType, threshold } = await request.json();
  const triggers = loadTriggers();

  triggers.push({
    id: Date.now(),
    workflowId,
    eventType,
    threshold,
    createdAt: new Date().toISOString(),
  });

  saveTriggers(triggers);

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  let triggers = loadTriggers();

  triggers = triggers.filter((t: any) => t.id !== id);
  saveTriggers(triggers);

  return NextResponse.json({ success: true });
}
