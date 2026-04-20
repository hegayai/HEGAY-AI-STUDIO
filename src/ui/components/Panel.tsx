import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";

export const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme.colors.gray800,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.xl,
        border: `1px solid ${theme.colors.gray700}`,
      }}
    >
      <h2
        style={{
          marginBottom: theme.spacing.md,
          fontFamily: theme.typography.fontFamily.heading,
          fontSize: theme.typography.fontSize.xl,
          color: theme.colors.cosmicWhite,
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
};
