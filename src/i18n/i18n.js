import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ABOUT_EN from "../locales/en/about.json";
import HOME_EN from "../locales/en/home.json";
import ARTICLE_EN from "../locales/en/article.json";
import NAVBAR_EN from "../locales/en/navbar.json";
import FOOTER_EN from "../locales/en/footer.json";
import PROJECT_EN from "../locales/en/project.json";

import ABOUT_VI from "../locales/vi/about.json";
import HOME_VI from "../locales/vi/home.json";
import ARTICLE_VI from "../locales/vi/article.json";
import NAVBAR_VI from "../locales/vi/navbar.json";
import FOOTER_VI from "../locales/vi/footer.json";
import PROJECT_VI from "../locales/vi/project.json";

const resources = {
    en: {
        home: HOME_EN,
        about: ABOUT_EN,
        article: ARTICLE_EN,
        project: PROJECT_EN,
        navbar: NAVBAR_EN,
        footer: FOOTER_EN

    },
    vi: {
        home: HOME_VI,
        about: ABOUT_VI,
        article: ARTICLE_VI,
        project: PROJECT_VI,
        navbar: NAVBAR_VI,
        footer: FOOTER_VI
    }
}

const defaultNS = 'home'

export const locales = {
    en: 'English',
    vi: 'Tiếng Việt'
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:'en',
    ns:['home', 'about' , 'article', 'project', 'navbar', 'footer'],
    fallbackLng:'vi',
    defaultNS,
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      }
})

