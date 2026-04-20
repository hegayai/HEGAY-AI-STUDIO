// app/api/image/master-stylizer/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    styleA,
    styleB,
    blendAmount,
    textureStrength,
    colorGrade,
    detailPreserve,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_MASTER_STYLIZER_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      styleA,
      styleB,
      blendAmount,
      textureStrength,
      colorGrade,
      detailPreserve,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    stylized: data?.stylized || null,
  });
}
