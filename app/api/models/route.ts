import { NextResponse } from "next/server";
import { modelRouter } from "@/app/api/modelRouter";
import { systemPrompt } from "@/app/ai/prompts/systemPrompt";

export async function POST(req: Request) {
  try {
    const { prompt, model } = await req.json();

    if (!prompt || !model) {
      return NextResponse.json(
        { error: "Missing prompt or model" },
        { status: 400 }
      );
    }

    const result = await modelRouter({
      prompt,
      model,
      systemPrompt,
    });

    return NextResponse.json({ result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Model router error" },
      { status: 500 }
    );
  }
}
