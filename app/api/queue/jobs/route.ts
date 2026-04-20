// app/api/queue/jobs/route.ts

import { NextResponse } from "next/server";
import { listJobs } from "@/lib/jobQueue";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const spaceId = searchParams.get("spaceId") || undefined;

  const jobs = listJobs(spaceId, 100);
  return NextResponse.json({ jobs });
}
