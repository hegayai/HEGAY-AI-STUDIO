import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme.colors.gray900,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.lg,
        border: `1px solid ${theme.colors.gray700}`,
      }}
    >
      {children}
    </div>
  );
};
