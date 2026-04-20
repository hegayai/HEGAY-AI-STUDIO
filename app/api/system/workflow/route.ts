import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const workflowDir = "C:\\HegayOS\\workflows";
const workflowFile = path.join(workflowDir, "workflows.json");

function loadWorkflows() {
  if (!fs.existsSync(workflowDir)) fs.mkdirSync(workflowDir);
  if (!fs.existsSync(workflowFile)) fs.writeFileSync(workflowFile, "[]");
  return JSON.parse(fs.readFileSync(workflowFile, "utf8"));
}

function saveWorkflows(data: any) {
  fs.writeFileSync(workflowFile, JSON.stringify(data, null, 2));
}

export async function GET() {
  const workflows = loadWorkflows();
  return NextResponse.json({ workflows });
}

export async function POST(request: Request) {
  const { name, steps } = await request.json();
  const workflows = loadWorkflows();

  workflows.push({
    id: Date.now(),
    name,
    steps,
    createdAt: new Date().toISOString(),
  });

  saveWorkflows(workflows);

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  let workflows = loadWorkflows();

  workflows = workflows.filter((w: any) => w.id !== id);
  saveWorkflows(workflows);

  return NextResponse.json({ success: true });
}
