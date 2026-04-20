// app/api/image/inpaint/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    mask,
    prompt,
    strength,
  } = body;

  const res = await fetch(process.env.IMAGE_INPAINT_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      mask,
      prompt,
      strength,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    inpainted: data?.inpainted || null,
  });
}
