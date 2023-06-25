import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <Context.Provider value={{ mode, toggleMode }}>{children}</Context.Provider>
  );
};

export { Context as ModeContext, ContextProvider as ModeContextProvider };
