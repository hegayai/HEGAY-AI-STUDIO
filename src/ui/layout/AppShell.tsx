import React from "react";
import { NavBar } from "./NavBar";
import { Sidebar } from "./Sidebar";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <NavBar />

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px",
            background: "#0A0A0A",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
