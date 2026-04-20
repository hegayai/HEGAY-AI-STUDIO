import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { token } = await req.json();

  // TODO: look up verification token in DB
  // For now, mock: treat token as email
  if (!token) {
    return NextResponse.json({ message: "Invalid token." }, { status: 400 });
  }

  await prisma.user.update({
    where: { email: token },
    data: { emailVerified: true },
  });

  return NextResponse.json({ message: "Email verified. You can now log in." });
}
