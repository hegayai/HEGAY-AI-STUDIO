import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";
import { getCurrentUser, getTodayUsage, canGenerateVideo } from "@/lib/auth";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { prompt, duration } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const usage = await getTodayUsage(user.id);
    if (!canGenerateVideo(user.planId as any, usage)) {
      return NextResponse.json(
        { error: "Video limit reached for today" },
        { status: 429 }
      );
    }

    // ⭐ Unified provider-based video generation
    const result = await modelRouter({
      model: "flux-video",
      input: {
        prompt,
        duration: duration || 6
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video generation failed", raw: result },
        { status: 500 }
      );
    }

    const videoUrl = result.url;

    // ⭐ Save media
    await prisma.media.create({
      data: {
        userId: user.id,
        type: "video",
        url: videoUrl,
        prompt
      }
    });

    // ⭐ Update usage
    await prisma.usage.update({
      where: { id: usage.id },
      data: { videosUsed: usage.videosUsed + 1 }
    });

    return NextResponse.json({
      success: true,
      url: videoUrl
    });

  } catch (error) {
    console.error("Video Generation Error:", error);
    return NextResponse.json(
      {
        error: "Video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
