"use client";

import { useFileSystem } from "./FileSystem";
import { useWindows } from "./WindowManager";

export default function FileExplorer({ folder }) {
  const { files, folders } = useFileSystem();
  const { openWindow } = useWindows();

  const currentFiles = files.filter((f) => f.folder === folder);

  function openFile(file) {
    if (file.type === "ritual") {
      openWindow(
        <div className="text-sm opacity-80">
          Ritual triggered: {file.action}
        </div>,
        file.name
      );
    }

    if (file.type === "document") {
      openWindow(
        <pre className="whitespace-pre-wrap text-sm opacity-80">
          {file.content}
        </pre>,
        file.name
      );
    }
  }

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {currentFiles.map((file) => (
        <button
          key={file.id}
          onClick={() => openFile(file)}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
        >
          <div className="w-10 h-10 rounded bg-white/20" />
          <span className="text-sm opacity-90">{file.name}</span>
        </button>
      ))}
    </div>
  );
}
