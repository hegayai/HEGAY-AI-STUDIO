import { NextResponse } from "next/server";
import { prisma } from "@/core/db/client";
import { getCurrentUserFromCookie } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUserFromCookie();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const media = await prisma.media.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      media,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch media" },
      { status: 500 }
    );
  }
}
