import { createContext, useContext } from "react";

// split functionality into separate files
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
