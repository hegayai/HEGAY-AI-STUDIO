import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { modelName, dataset } = body;

  const res = await fetch(process.env.MODEL_TRAIN_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MODEL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      modelName,
      dataset,
    }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
