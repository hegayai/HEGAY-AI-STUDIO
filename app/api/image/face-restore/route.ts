// app/api/image/face-restore/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    mode,
    strength,
    enhanceEyes,
    enhanceSkin,
  } = body;

  const res = await fetch(process.env.IMAGE_FACE_RESTORE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      mode,
      strength,
      enhanceEyes,
      enhanceSkin,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    restored: data?.restored || null,
  });
}
