import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(request: Request) {
  const { command } = await request.json();

  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(
          NextResponse.json({
            success: false,
            output: stderr || error.message,
          })
        );
        return;
      }

      resolve(
        NextResponse.json({
          success: true,
          output: stdout,
        })
      );
    });
  });
}
