// app/api/image/vignette/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    strength,
    radius,
    softness,
    color,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_VIGNETTE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      strength,
      radius,
      softness,
      color,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    vignette: data?.vignette || null,
  });
}
