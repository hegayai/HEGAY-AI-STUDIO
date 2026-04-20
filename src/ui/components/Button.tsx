import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const theme = React.useContext(ThemeContext);

  const styles = {
    primary: {
      background: theme.colors.mythicBlue,
      color: theme.colors.cosmicWhite,
      border: "none",
    },
    secondary: {
      background: theme.colors.gray800,
      color: theme.colors.cosmicWhite,
      border: `1px solid ${theme.colors.gray600}`,
    },
    ghost: {
      background: "transparent",
      color: theme.colors.cosmicWhite,
      border: "none",
    },
  };

  return (
    <button
      {...props}
      style={{
        padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
        borderRadius: theme.radius.md,
        fontFamily: theme.typography.fontFamily.body,
        fontSize: theme.typography.fontSize.md,
        cursor: "pointer",
        transition: theme.motion.normal,
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
};
