// app/api/image/face-cleanup/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    skinSmooth,
    blemishRemove,
    eyeBrighten,
    teethWhiten,
    toneBalance,
    detailPreserve,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_FACE_CLEANUP_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      skinSmooth,
      blemishRemove,
      eyeBrighten,
      teethWhiten,
      toneBalance,
      detailPreserve,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    cleaned: data?.cleaned || null,
  });
}
