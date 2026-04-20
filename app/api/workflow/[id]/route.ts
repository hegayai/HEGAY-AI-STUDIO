import { NextResponse } from "next/server";

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

// IMPORTANT: share the same store as in /api/workflows
// Easiest: move this to a shared module in /lib/workflowsStore.ts.
// For now, re‑declare and accept that it's a separate store if you paste as‑is.
// To keep it truly shared, create /lib/workflowsStore.ts and import from there.

const WORKFLOWS = (globalThis as any).__HEGAY_WORKFLOWS__ as
  | Map<string, WorkflowDef>
  | undefined
  || new Map<string, WorkflowDef>();

(globalThis as any).__HEGAY_WORKFLOWS__ = WORKFLOWS;

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const wf = WORKFLOWS.get(params.id);
  if (!wf) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ workflow: wf });
}
