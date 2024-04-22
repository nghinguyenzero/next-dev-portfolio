import { LangContext } from "@/context/LangContext";
import { useContext, useEffect } from "react";

const useLanguageSwitcher = () => {
  const {lang, toggleLanguage} = useContext(LangContext)
  useEffect(() => {
    const userPref = window.localStorage.getItem("lang");
    const hanldeChange = () => {
      if (userPref) {
        let check = userPref === "en" ? "en" : "vn";
        toggleLanguage(check);
      }
    };
    hanldeChange()
  }, []);

  useEffect(() => {
    if (lang === "en") {
      window.localStorage.setItem("lang", "en");
    } 
    if(lang ==='vn') {
      window.localStorage.setItem("lang", "vn");
    }
  }, [lang]);

  return [lang, toggleLanguage];
};

export default useLanguageSwitcher;
