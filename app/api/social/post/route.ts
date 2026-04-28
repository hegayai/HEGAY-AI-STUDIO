import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST() {
  try {
    const job = await prisma.job.findFirst({
      where: {
        task: "social-post",
        status: "queued"
      },
      orderBy: { scheduledAt: "asc" }
    });

    if (!job) {
      return NextResponse.json({ message: "No scheduled posts" });
    }

    await prisma.job.update({
      where: { id: job.id },
      data: { status: "processing" }
    });

    // Provider-based posting (placeholder)
    const result = await modelRouter({
      model: "social-post",
      input: job.payload,
      provider: fal,
      type: "agent"
    });

    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: "completed",
        result
      }
    });

    return NextResponse.json({
      posted: true,
      jobId: job.id,
      result
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Social posting error", details: String(error) },
      { status: 500 }
    );
  }
}
