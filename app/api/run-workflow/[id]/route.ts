// app/api/run-workflow/[id]/route.ts

import { NextResponse } from "next/server";
import { loadWorkflow } from "@/lib/loadWorkflow";
import { executeWorkflow } from "@/lib/workflowRuntime";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const workflowId = params.id;
  const body = await req.json();
  const initialContext = body.initialContext || {};
  const spaceId = body.spaceId;

  if (!spaceId) {
    return NextResponse.json(
      { error: "spaceId is required" },
      { status: 400 }
    );
  }

  try {
    const workflow = await loadWorkflow(workflowId, spaceId);
    const result = await executeWorkflow(workflow, initialContext);

    return NextResponse.json({ workflowId, spaceId, result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Runtime error" },
      { status: 500 }
    );
  }
}
