// lib/imageClient.ts

export interface GenerateImageParams {
  prompt: string;
  provider?: string;
  model?: string;
  width?: number;
  height?: number;
  steps?: number;
  cfgScale?: number;
  seed?: number;
}

export interface GeneratedImage {
  url: string;
  meta?: Record<string, any>;
}

export async function generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/image`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Image generation failed");
  }

  const data = await res.json();
  return data.image as GeneratedImage;
}
