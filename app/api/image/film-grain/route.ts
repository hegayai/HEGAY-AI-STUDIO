// app/api/image/film-grain/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    grainAmount,
    grainSize,
    roughness,
    monochrome,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_FILM_GRAIN_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      grainAmount,
      grainSize,
      roughness,
      monochrome,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    filmGrain: data?.filmGrain || null,
  });
}
