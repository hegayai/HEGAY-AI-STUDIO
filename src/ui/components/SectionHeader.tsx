import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";

export const SectionHeader = ({ title }: { title: string }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <h3
      style={{
        fontFamily: theme.typography.fontFamily.heading,
        fontSize: theme.typography.fontSize.lg,
        color: theme.colors.cosmicWhite,
        marginBottom: theme.spacing.md,
      }}
    >
      {title}
    </h3>
  );
};
