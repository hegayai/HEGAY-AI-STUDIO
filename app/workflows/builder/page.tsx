import { NextResponse } from "next/server";
import { WORKFLOW_REGISTRY } from "@/lib/workflow/registry";
import { runWorkflow } from "@/lib/workflow/engine";
import { WorkflowDefinition } from "@/lib/workflow/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let workflow: WorkflowDefinition | undefined;

    if (body.definition) {
      workflow = body.definition as WorkflowDefinition;
    } else if (body.workflow) {
      workflow = WORKFLOW_REGISTRY[body.workflow];
    }

    if (!workflow) {
      return NextResponse.json(
        { success: false, error: "Unknown or missing workflow" },
        { status: 400 }
      );
    }

    const result = await runWorkflow(workflow);
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
