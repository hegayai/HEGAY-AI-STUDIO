import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      platform,
      content,
      hashtags,
      scheduledAt
    } = body;

    if (!platform || !content || !scheduledAt) {
      return NextResponse.json(
        { error: "Platform, content, and scheduledAt are required" },
        { status: 400 }
      );
    }

    const job = await prisma.job.create({
      data: {
        task: "social-post",
        payload: {
          platform,
          content,
          hashtags
        },
        scheduledAt,
        status: "queued"
      }
    });

    return NextResponse.json({
      scheduled: true,
      jobId: job.id
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Social scheduling error", details: String(error) },
      { status: 500 }
    );
  }
}
