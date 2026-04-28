import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      image,
      mode,
      refine,
      feather,
      replaceColor
    } = body;

    // ⭐ Unified provider-based background removal
    const result = await modelRouter({
      model: "image-remove-bg",
      input: {
        image,
        mode,
        refine,
        feather,
        replaceColor
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Background removal failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      cutout: result.cutout || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Background removal error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
