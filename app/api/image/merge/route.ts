import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { images, layout } = body;

    // ⭐ Unified provider-based image merge
    const result = await modelRouter({
      model: "image-merge",
      input: {
        images,
        layout
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Image merge failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      merged: result.merged || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image merge error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
