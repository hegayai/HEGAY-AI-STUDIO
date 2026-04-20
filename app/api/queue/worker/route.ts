// app/api/queue/worker/route.ts

import { NextResponse } from "next/server";
import { claimNextJob, completeJob, failJob } from "@/lib/jobQueue";
import { loadWorkflow } from "@/lib/loadWorkflow";
import { executeWorkflow } from "@/lib/workflowRuntime";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { spaceId } = body;

  const job = claimNextJob(spaceId);
  if (!job) {
    return NextResponse.json({ message: "No jobs in queue" });
  }

  try {
    const workflow = await loadWorkflow(job.workflowId, job.spaceId);
    const result = await executeWorkflow(workflow, job.initialContext);

    completeJob(job.id, result);

    return NextResponse.json({
      message: "Job completed",
      jobId: job.id,
      workflowId: job.workflowId,
      spaceId: job.spaceId,
      result,
    });
  } catch (err: any) {
    failJob(job.id, err?.message || "Unknown error");
    return NextResponse.json(
      {
        message: "Job failed",
        jobId: job.id,
        spaceId: job.spaceId,
        error: err?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
