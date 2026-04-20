import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";
import { useTransition } from "../motion/useTransition";

export const CosmicPanel = ({
  title,
  children,
  visible = true,
}: {
  title: string;
  children: React.ReactNode;
  visible?: boolean;
}) => {
  const theme = React.useContext(ThemeContext);
  const style = useTransition(visible, "fadeIn");

  return (
    <div
      style={{
        ...style,
        background: theme.colors.gray900,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.xl,
        border: `1px solid ${theme.colors.gray800}`,
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
