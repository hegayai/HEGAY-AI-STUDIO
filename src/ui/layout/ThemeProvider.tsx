import React from "react";
import { theme } from "../theme";

export const ThemeContext = React.createContext(theme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
