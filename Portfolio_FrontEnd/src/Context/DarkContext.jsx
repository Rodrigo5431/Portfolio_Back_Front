import { createContext, useState, useContext, useEffect } from "react";

export const DarkContext = createContext();

export default function DarkProvider({ children }) {
  const [darkmode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkmode");
    return savedDarkMode === "true"; 
  });


  useEffect(() => {
    document.body.style.backgroundColor = darkmode ? "#121212" : "#e8e8e8"; 
  }, [darkmode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem("darkmode", newDarkMode); 
      return newDarkMode;
    });
  };

  return (
    <DarkContext.Provider value={{ darkmode, toggleDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkContext);
