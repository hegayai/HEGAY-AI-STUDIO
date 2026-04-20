// app/api/image/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    prompt,
    provider,
    model,
    width = 1024,
    height = 1024,
    steps = 30,
    cfgScale = 7,
    seed,
  } = body;

  if (!prompt) {
    return NextResponse.json({ error: "prompt is required" }, { status: 400 });
  }

  // 🔥 Example: generic external image API using multipart/form-data
  // Replace IMAGE_API_URL + headers with your real provider.
  const form = new FormData();
  form.append("prompt", prompt);
  form.append("width", String(width));
  form.append("height", String(height));
  form.append("steps", String(steps));
  form.append("cfg_scale", String(cfgScale));
  if (seed !== undefined) form.append("seed", String(seed));
  if (provider) form.append("provider", provider);
  if (model) form.append("model", model);

  const res = await fetch(process.env.IMAGE_API_URL as string, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.IMAGE_API_KEY}`,
      // DO NOT set Content-Type manually; fetch will set multipart boundary.
    },
    body: form,
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: text || "Image provider error" },
      { status: 500 }
    );
  }

  // Expecting provider to return JSON with an image URL or base64
  const data = await res.json();

  const imageUrl =
    data.url ||
    data.image_url ||
    (Array.isArray(data.images) && data.images[0]?.url) ||
    "";

  if (!imageUrl) {
    return NextResponse.json(
      { error: "Image URL missing in provider response" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    image: {
      url: imageUrl,
      meta: {
        provider,
        model,
        width,
        height,
        steps,
        cfgScale,
        seed,
        raw: data,
      },
    },
  });
}
