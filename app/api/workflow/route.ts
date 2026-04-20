import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

interface GraphStep {
  id: string;
  type: string;
  name: string;
  x: number;
  y: number;
  provider?: string;
  model?: string;
  prompt?: string;
  ms?: number;
  message?: string;
  cases?: string[];
  inputKey?: string;
  outputKey?: string;
}

interface Edge {
  id: string;
  fromId: string;
  toId: string;
  fromPort: string;
  toPort: string;
  label?: string;
}

interface WorkflowDef {
  id: string;
  name: string;
  description?: string;
  steps: GraphStep[];
  edges: Edge[];
  createdAt: string;
  updatedAt: string;
}

// ⚠️ In‑memory store (reset on server restart).
// Replace with DB (Prisma/Postgres) when ready.
const WORKFLOWS = new Map<string, WorkflowDef>();

export async function GET() {
  const list = Array.from(WORKFLOWS.values()).map((w) => ({
    id: w.id,
    name: w.name,
    description: w.description,
    createdAt: w.createdAt,
    updatedAt: w.updatedAt,
  }));
  return NextResponse.json({ workflows: list });
}

export async function POST(req: Request) {
  const body = await req.json();
  const {
    id,
    name,
    description,
    steps,
    edges,
  }: {
    id?: string;
    name: string;
    description?: string;
    steps: GraphStep[];
    edges: Edge[];
  } = body;

  const now = new Date().toISOString();

  if (id && WORKFLOWS.has(id)) {
    const existing = WORKFLOWS.get(id)!;
    const updated: WorkflowDef = {
      ...existing,
      name,
      description,
      steps,
      edges,
      updatedAt: now,
    };
    WORKFLOWS.set(id, updated);
    return NextResponse.json({ workflow: updated });
  }

  const newId = id || randomUUID();
  const created: WorkflowDef = {
    id: newId,
    name,
    description,
    steps,
    edges,
    createdAt: now,
    updatedAt: now,
  };
  WORKFLOWS.set(newId, created);
  return NextResponse.json({ workflow: created });
}
