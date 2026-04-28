import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      action,
      amount,
      rotate,
      flip,
      width,
      height,
      image
    } = body;

    // ⭐ Unified provider-based image transform
    const result = await modelRouter({
      model: "image-transform",
      input: {
        action,
        amount,
        rotate,
        flip,
        width,
        height,
        image
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Image transform failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      image: {
        url: result.url,
        meta: result.meta || null
      }
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image transform error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
