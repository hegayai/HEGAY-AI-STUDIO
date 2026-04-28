import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export async function POST() {
  try {
    // Claim next queued job
    const job = await prisma.job.findFirst({
      where: { status: "queued" },
      orderBy: { createdAt: "asc" }
    });

    if (!job) {
      return NextResponse.json({ message: "No jobs available" });
    }

    // Mark as processing
    await prisma.job.update({
      where: { id: job.id },
      data: { status: "processing" }
    });

    // Run the job
    const result = await modelRouter({
      model: "agent-worker",
      input: job.payload,
      provider: fal,
      type: "agent"
    });

    // Save result
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: "completed",
        result
      }
    });

    return NextResponse.json({
      jobId: job.id,
      status: "completed",
      result
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Worker agent error", details: String(error) },
      { status: 500 }
    );
  }
}
