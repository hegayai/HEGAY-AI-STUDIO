import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: theme.spacing.xs }}>
      {label && (
        <label
          style={{
            color: theme.colors.gray300,
            fontSize: theme.typography.fontSize.sm,
            fontFamily: theme.typography.fontFamily.body,
          }}
        >
          {label}
        </label>
      )}

      <input
        {...props}
        style={{
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          background: theme.colors.gray800,
          border: `1px solid ${theme.colors.gray700}`,
          borderRadius: theme.radius.md,
          color: theme.colors.cosmicWhite,
          fontFamily: theme.typography.fontFamily.body,
          fontSize: theme.typography.fontSize.md,
          outline: "none",
          transition: theme.motion.normal,
        }}
      />
    </div>
  );
};
