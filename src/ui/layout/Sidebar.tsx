import React from "react";
import { ThemeContext } from "./ThemeProvider";

const links = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Image Realm", icon: "🖼️" },
  { label: "Audio Realm", icon: "🎧" },
  { label: "Video Realm", icon: "🎬" },
  { label: "Text Realm", icon: "✍🏽" },
  { label: "Brand Realm", icon: "🌐" },
  { label: "Social Realm", icon: "📣" },
];

export const Sidebar = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: theme.colors.gray900,
        borderRight: `1px solid ${theme.colors.gray800}`,
        padding: theme.spacing.lg,
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing.md,
      }}
    >
      {links.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: theme.spacing.md,
            padding: theme.spacing.md,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            color: theme.colors.gray300,
            transition: theme.motion.normal,
          }}
        >
          <span style={{ fontSize: "20px" }}>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
