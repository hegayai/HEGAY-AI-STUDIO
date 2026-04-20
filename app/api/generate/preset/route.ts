import { NextResponse } from "next/server";

type PresetParam = {
  key: string;
  value: string;
};

export async function POST(req: Request) {
  try {
    const { presetId, template, params } = await req.json() as {
      presetId: string;
      template: string;
      params?: PresetParam[];
    };

    if (!presetId || !template) {
      return NextResponse.json(
        { error: "Missing presetId or template" },
        { status: 400 }
      );
    }

    // Simple param injection: replaces {{key}} with value in template
    let rendered = template;
    if (Array.isArray(params)) {
      for (const p of params) {
        const pattern = new RegExp(`{{\\s*${p.key}\\s*}}`, "g");
        rendered = rendered.replace(pattern, p.value);
      }
    }

    // 🔥 Replace this with your actual AI call if needed
    const generated = rendered;

    return NextResponse.json({ output: generated });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate preset output" },
      { status: 500 }
    );
  }
}
