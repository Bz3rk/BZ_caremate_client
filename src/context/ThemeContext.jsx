import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  console.log(theme)



  //checks for dark or light theme on load
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // toggle theme on fire
  const toogleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };


  return(
    <ThemeContext.Provider value={{theme, toogleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
};


export const useTheme = ()=> useContext(ThemeContext)