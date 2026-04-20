import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";
import { LogoGlyph } from "../glyphs/LogoGlyph";

export const NavBar = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      style={{
        height: "64px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `0 ${theme.spacing.xl}`,
        background: theme.colors.gray900,
        borderBottom: `1px solid ${theme.colors.gray800}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: theme.spacing.md }}>
        <LogoGlyph size={32} />
        <span
          style={{
            fontFamily: theme.typography.fontFamily.heading,
            fontSize: theme.typography.fontSize.lg,
            color: theme.colors.cosmicWhite,
          }}
        >
          Hegay AI Studio
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: theme.spacing.lg,
          color: theme.colors.gray300,
          fontFamily: theme.typography.fontFamily.body,
        }}
      >
        <span>Docs</span>
        <span>Account</span>
      </div>
    </div>
  );
};
