import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";
import { prisma } from "@/src/core/db/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { task, payload, mode } = body;

    // Decide if this should be queued or run immediately
    const shouldQueue =
      mode === "worker" ||
      mode === "office" ||
      task === "long-running";

    if (shouldQueue) {
      const job = await prisma.job.create({
        data: {
          task,
          payload,
          status: "queued"
        }
      });

      return NextResponse.json({
        queued: true,
        jobId: job.id
      });
    }

    // Immediate execution
    const result = await modelRouter({
      model: "agent-router",
      input: { task, payload, mode },
      provider: fal,
      type: "agent"
    });

    return NextResponse.json({
      queued: false,
      result
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Agent router error", details: String(error) },
      { status: 500 }
    );
  }
}
