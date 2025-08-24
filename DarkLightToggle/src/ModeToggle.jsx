import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ModeToggle = () => {
  const { theme, handleToggle } = use(ThemeContext);

  return (
    <div className={`flex flex-col justify-center items-center h-lvh capitalize ${theme === "light" ? "bg-amber-50" : "bg-gray-800"} `}>
      <h1 className={`${theme === "light" ? "text-black" : "text-white"}`}>dark light mode website</h1>
      <h3 className={`${theme === "light" ? "text-black" : "text-white"}`}>hello world</h3>
      <button onClick={handleToggle} className="bg-blue-700 mt-4 p-4 capitalize font-bold text-white rounded-md cursor-pointer border-none">{theme === 'light' ? 'swith to dark mode' : 'switch to light mode'}</button>
    </div>
  );
};
