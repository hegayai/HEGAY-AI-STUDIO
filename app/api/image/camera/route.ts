// app/api/image/camera/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    depth,
    focalLength,
    aperture,
    focusDistance,
    tilt,
    shift,
    roll,
    distortion,
    chromaticAberration,
    motionBlur,
  } = body;

  const res = await fetch(process.env.IMAGE_CAMERA_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      depth,
      focalLength,
      aperture,
      focusDistance,
      tilt,
      shift,
      roll,
      distortion,
      chromaticAberration,
      motionBlur,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    camera: data?.camera || null,
  });
}
