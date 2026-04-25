"use client";

import { createContext, useContext, useState } from "react";

type FileItem = {
  id: string;
  name: string;
  type: "ritual" | "document";
  folder: string;
  action?: string;
  content?: string;
};

type FileSystemContextType = {
  files: FileItem[];
  folders: Record<string, string[]>;
};

const FileSystemContext = createContext<FileSystemContextType | null>(null);

export function useFileSystem() {
  const ctx = useContext(FileSystemContext);
  if (!ctx) throw new Error("useFileSystem must be used inside FileSystemProvider");
  return ctx;
}

export function FileSystemProvider({ children }: { children: React.ReactNode }) {
  const [files] = useState<FileItem[]>([]);
  const [folders] = useState<Record<string, string[]>>({});

  return (
    <FileSystemContext.Provider value={{ files, folders }}>
      {children}
    </FileSystemContext.Provider>
  );
}
