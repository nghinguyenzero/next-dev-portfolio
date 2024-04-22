import { LangContext } from "@/context/LangContext";
import { useContext, useEffect, useState } from "react";

const useLanguageSwitcher = () => {

  const {lang, toggleLanguage} = useContext(LangContext)
  const [language, setLanguage ] = useState(lang)
  useEffect(() => {
    const langLocal = window.localStorage.getItem("lang");
    const hanldeChange = () => {
      if(langLocal === lang) return
      if (langLocal) {
        toggleLanguage(langLocal === "en" ? "en" : "vn");
      }
    };
  console.log('hanldeChange');
  console.log({lang});


    hanldeChange()
  }, []);

  useEffect(() => {
    console.log('SEEEE');
    console.log({lang});
    if(language !== lang) {
      toggleLanguage(language)
    }

    if (lang === "en") {
      window.localStorage.setItem("lang", "en");
    } 
    if(lang ==='vn') {
      window.localStorage.setItem("lang", "vn");
    }
  }, [language]);

  return [language, setLanguage];
};

export default useLanguageSwitcher;
