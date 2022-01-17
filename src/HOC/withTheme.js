import { useState } from "react";
import { ThemeContext } from "../hooks";

export const withTheme = (Component) => (props) => {
  const [theme, setTheme] = useState(props.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...props} />
    </ThemeContext.Provider>
  );
};
