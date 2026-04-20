// app/api/queue/jobs/[id]/route.ts

import { NextResponse } from "next/server";
import { getJob } from "@/lib/jobQueue";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const job = getJob(params.id);
  if (!job) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ job });
}
