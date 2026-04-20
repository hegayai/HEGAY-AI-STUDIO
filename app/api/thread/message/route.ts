import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { threadId, role, content } = await req.json();

    if (!threadId || !role || !content) {
      return NextResponse.json(
        { error: "Missing threadId, role, or content" },
        { status: 400 }
      );
    }

    const message = await prisma.message.create({
      data: {
        threadId,
        role,
        content,
      },
    });

    return NextResponse.json({ message });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Message creation failed" },
      { status: 500 }
    );
  }
}
