import { NextResponse } from "next/server";
import { exec } from "child_process";

const PROJECT_DIR = `C:\\Users\\HEGAY COMMUNICATIONS\\hegay-ai-studio`;

function run(command: string): Promise<{ ok: boolean; error?: string }> {
  return new Promise((resolve) => {
    exec(command, (error, _stdout, stderr) => {
      if (error) {
        resolve({ ok: false, error: stderr || error.message });
      } else {
        resolve({ ok: true });
      }
    });
  });
}

export async function POST(request: Request) {
  const { action } = await request.json();

  try {
    if (action === "start") {
      const result = await run(
        `cmd /c "cd /d ${PROJECT_DIR} && npm run dev"`
      );
      if (!result.ok) {
        return NextResponse.json(
          { success: false, message: "Failed to start server", error: result.error },
          { status: 500 }
        );
      }
      return NextResponse.json({ success: true, message: "Server started" });
    }

    if (action === "stop") {
      const result = await run(`taskkill /F /IM node.exe`);
      if (!result.ok) {
        return NextResponse.json(
          { success: false, message: "Failed to stop server", error: result.error },
          { status: 500 }
        );
      }
      return NextResponse.json({ success: true, message: "Server stopped" });
    }

    if (action === "restart") {
      const stop = await run(`taskkill /F /IM node.exe`);
      if (!stop.ok) {
        return NextResponse.json(
          { success: false, message: "Failed to stop server", error: stop.error },
          { status: 500 }
        );
      }

      const start = await run(
        `cmd /c "cd /d ${PROJECT_DIR} && npm run dev"`
      );
      if (!start.ok) {
        return NextResponse.json(
          { success: false, message: "Failed to start server", error: start.error },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, message: "Server restarted" });
    }

    return NextResponse.json(
      { success: false, message: "Invalid action" },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Server control failed", error: error.message },
      { status: 500 }
    );
  }
}
