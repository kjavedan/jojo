import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [curLan, setCurLan] = useState("fa");

  const selectLanguage = (language) => {
    if (language === "fa") {
      setCurLan("fa");
    } else if (language === "ar") {
      setCurLan("ar");
    } else {
      setCurLan("en");
    }
  };

  return (
    <Context.Provider value={{ curLan, selectLanguage }}>
      {children}
    </Context.Provider>
  );
};

export {
  Context as LanguageContext,
  ContextProvider as LanguageContextProvider,
};
