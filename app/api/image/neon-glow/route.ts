// app/api/image/neon-glow/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    glowColor,
    intensity,
    spread,
    bloom,
    edgeDetect,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_NEON_GLOW_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      glowColor,
      intensity,
      spread,
      bloom,
      edgeDetect,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    neon: data?.neon || null,
  });
}
