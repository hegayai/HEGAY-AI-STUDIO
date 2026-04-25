import { NextResponse } from "next/server";
import { systemPrompt } from "@/app/ai/prompts/systemPrompt";
import { callModel } from "@/app/ai/callModel";

export async function POST(req: Request) {
  try {
    const { prompt, model } = await req.json();

    const result = await callModel({
      prompt,
      model,
      systemPrompt,
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error("ModelRouter Error:", error);
    return NextResponse.json(
      { error: "Model router failed." },
      { status: 500 }
    );
  }
}
