// app/api/queue/enqueue/route.ts

import { NextResponse } from "next/server";
import { enqueueJob } from "@/lib/jobQueue";

export async function POST(req: Request) {
  const body = await req.json();
  const { workflowId, initialContext = {}, spaceId, ownerId } = body;

  if (!workflowId) {
    return NextResponse.json({ error: "workflowId is required" }, { status: 400 });
  }

  if (!spaceId) {
    return NextResponse.json({ error: "spaceId is required" }, { status: 400 });
  }

  const job = enqueueJob(workflowId, initialContext, spaceId, ownerId);
  return NextResponse.json({ job });
}
