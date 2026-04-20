import { NextResponse } from "next/server";
import { claimNextJob, completeJob, failJob } from "@/lib/jobQueue";
import { loadWorkflow } from "@/lib/loadWorkflow";
import { executeWorkflow } from "@/lib/workflowRuntime";

export async function POST(req: Request) {
  try {
    const job = await claimNextJob();

    if (!job) {
      return NextResponse.json(
        { status: "idle", message: "No jobs in queue" },
        { status: 200 }
      );
    }

    try {
      const workflow = await loadWorkflow(job.workflowId);

      if (!workflow) {
        await failJob(job.id, "Workflow not found");
        return NextResponse.json(
          { status: "failed", reason: "Workflow not found" },
          { status: 404 }
        );
      }

      const input = job.payload || {};
      const result = await executeWorkflow(workflow, input);

      await completeJob(job.id, result);

      return NextResponse.json({
        status: "completed",
        jobId: job.id,
        result,
      });
    } catch (innerErr: any) {
      await failJob(job.id, innerErr?.message || "Job execution failed");
      return NextResponse.json(
        { status: "failed", jobId: job.id, error: innerErr?.message },
        { status: 500 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Worker error" },
      { status: 500 }
    );
  }
}
