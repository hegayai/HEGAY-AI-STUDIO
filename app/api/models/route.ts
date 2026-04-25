import { NextResponse } from "next/server";
import { systemPrompt } from "@/app/ai/prompts/systemPrompt";
import { callModel } from "@/app/ai/callModel";

export async function POST(req: Request) {
  try {
    const { prompt, model, provider } = await req.json();

    if (!prompt || !model) {
      return NextResponse.json(
        { error: "Missing prompt or model" },
        { status: 400 }
      );
    }

    const result = await callModel({
      provider: provider || "local",
      model,
      systemPrompt,
      prompt,
    });

    return NextResponse.json({ result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Model router error" },
      { status: 500 }
    );
  }
}
