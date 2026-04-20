"use client";

import { createContext, useContext, useState } from "react";

const FileSystemContext = createContext(null);

export function FileSystemProvider({ children }) {
  const [files, setFiles] = useState([
    {
      id: "origin-ritual",
      name: "Origin Ritual.hgx",
      type: "ritual",
      action: "origin-creation",
      folder: "/rituals",
    },
    {
      id: "dream-manifest",
      name: "Dream Manifest.hgx",
      type: "document",
      content: "Dream realm manifest file",
      folder: "/documents",
    },
    {
      id: "avatar-profile",
      name: "Avatar Profile.hgx",
      type: "document",
      content: "Avatar realm profile data",
      folder: "/documents",
    },
  ]);

  const [folders] = useState([
    { path: "/", name: "Home" },
    { path: "/rituals", name: "Rituals" },
    { path: "/documents", name: "Documents" },
  ]);

  return (
    <FileSystemContext.Provider value={{ files, folders }}>
      {children}
    </FileSystemContext.Provider>
  );
}

export function useFileSystem() {
  return useContext(FileSystemContext);
}
