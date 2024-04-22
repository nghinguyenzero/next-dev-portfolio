import { createContext, useState } from "react";

const LangContext = createContext();

function LangProvider({ children }) {
  const [lang, setLang] = useState("vn");

  const toggleLanguage = () => {
    setLang(lang === "en" ? "vn" : "en");
  };
  const value = {
    lang,
    toggleLanguage,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export { LangContext, LangProvider };
