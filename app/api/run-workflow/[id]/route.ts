import { NextResponse } from "next/server";
import { loadWorkflow } from "@/lib/loadWorkflow";
import { executeWorkflow } from "@/lib/workflowRuntime";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const workflowId = params.id;

    const workflow = await loadWorkflow(workflowId);

    if (!workflow) {
      return NextResponse.json(
        { error: "Workflow not found" },
        { status: 404 }
      );
    }

    const body = await req.json().catch(() => ({}));

    const result = await executeWorkflow(workflow, body);

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Workflow execution failed" },
      { status: 500 }
    );
  }
}
