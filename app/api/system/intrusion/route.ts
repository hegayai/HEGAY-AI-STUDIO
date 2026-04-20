import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const shieldDir = "C:\\HegayOS\\intrusion";
const shieldFile = path.join(shieldDir, "shield.json");

function ensureFiles() {
  if (!fs.existsSync(shieldDir)) fs.mkdirSync(shieldDir, { recursive: true });
  if (!fs.existsSync(shieldFile)) {
    fs.writeFileSync(
      shieldFile,
      JSON.stringify({
        mode: "normal",
        escalations: [],
      })
    );
  }
}

function loadShield() {
  ensureFiles();
  return JSON.parse(fs.readFileSync(shieldFile, "utf8"));
}

function saveShield(data: any) {
  fs.writeFileSync(shieldFile, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(loadShield());
}

export async function POST(request: Request) {
  const { mode, message } = await request.json();
  const shield = loadShield();

  if (mode) shield.mode = mode;
  if (message) {
    shield.escalations.unshift({
      id: Date.now(),
      message,
      createdAt: new Date().toISOString(),
    });
  }

  saveShield(shield);

  return NextResponse.json({ success: true });
}
