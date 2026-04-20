import React from "react";
import { ThemeContext } from "../layout/ThemeProvider";

export const Divider = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: theme.colors.gray800,
        margin: `${theme.spacing.md} 0`,
      }}
    />
  );
};
