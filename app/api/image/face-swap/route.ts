// app/api/image/face-swap/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    sourceFace,
    targetImage,
    blend,
    enhance,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_FACE_SWAP_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sourceFace,
      targetImage,
      blend,
      enhance,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    swapped: data?.swapped || null,
  });
}
