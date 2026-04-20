import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { modelName, file } = body;

  const res = await fetch(process.env.MODEL_UPLOAD_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MODEL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      modelName,
      file,
    }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
