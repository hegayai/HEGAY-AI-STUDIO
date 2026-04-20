import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.deepinfra.com/v1/inference/black-forest-labs/flux-1-dev",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.DEEPINFRA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      }
    );

    const result = await response.json();

    if (!result?.images?.[0]) {
      return NextResponse.json(
        { error: "No image returned from DeepInfra." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      imageUrl: result.images[0],
    });
  } catch (error) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      { error: "Image generation failed." },
      { status: 500 }
    );
  }
}
