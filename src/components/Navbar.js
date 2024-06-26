import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import {
  FacebookIcon,
  GoogleIcon,
  MoonIcon,
  NotionIcon,
  SunIcon,
  XtwitterIcon,
} from "./Icons";
import Logo from "./Logo";

import useThemeSwitcher from "./hooks/useThemeSwitcher";

import UsaFlag from "../../public/images/usa64.png";
import VietFlag from "../../public/images/vietnam64.png";
import { locales } from "@/i18n/i18n";

const CustomLink = ({ href, title, className = "" }) => {
  
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-3000
            dark:bg-light
            ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-3000
            dark:bg-dark
            ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const {i18n} = useTranslation()
  const {t} = useTranslation(['navbar'])

  const currentLanguage = {
    key: i18n.language,
    value: locales[i18n.language]
  } 

  console.log({currentLanguage});
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const changeLanguage = (lng) => {
    console.log({lng});
    i18n.changeLanguage(lng)
  }

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10
      lg:px-16 md:px-12 sm:px-8
      "
    >
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
        `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
        `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={t('home')} className="mx-4" />
          <CustomLink href="/about" title={t('about')} className="mx-4" />
          <CustomLink href="/projects" title={t('projects')} className="mx-4" />
          <CustomLink href="/articles" title={t('articles')} className="mx-4" />
        </nav>
        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://facebook.com/nghinguyenzero"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 bg-light rounded-full"
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
          >
            <XtwitterIcon className="dark:fill-light" />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
          >
            <GoogleIcon />
          </motion.a>
          <motion.a
            href="https://www.notion.so/nghinguyenzero"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
          >
            <NotionIcon className="dark:fill-light" />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`mx-3 flex items-center justify-center rounded-full p-1 mr-6
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-light" />
            )}
          </button>
          <select defaultValue={changeLanguage} onChange={(e) => {changeLanguage(e.target.value)}} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="en">{t("english")}</option>
            <option value="vi">{t("vietnamese")}</option>
          </select>
            <Image src={UsaFlag} alt='nextjs' className={`w-6 mx-3 ${currentLanguage.key === 'vi'? 'hidden': 'animate-spin-slow'}`}/>
            <Image src={VietFlag} alt='nextjs'className={`w-6 mx-3 ${currentLanguage.key === 'en'? 'hidden': 'animate-spin-slow'}`}/>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title={t('home')}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={t('about')}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={t('projects')}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title={t('articles')}
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex justify-center items-center flex-wra mt-2">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
            >
              <FacebookIcon />
            </motion.a>

            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <XtwitterIcon className="dark:fill-dark fill-light" />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <GoogleIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
            >
              <NotionIcon className="dark:fill-dark fill-light" />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`mx-3 flex items-center justify-center rounded-full p-1
              ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-light" />
              )}
            </button>

            <button
            onClick={() => changeLanguage('en')}
            >
          <Image src={UsaFlag} alt='nextjs' className={`w-6 mx-3 ${currentLanguage.key === 'vi'? 'blur-[1px]': 'animate-spin-slow'}`}/>
          </button>
          <button
            onClick={() => changeLanguage('vi')}
            >
          <Image src={VietFlag} alt='nextjs'className={`w-6 mx-3 ${currentLanguage.key === 'en'? 'blur-[1px]': 'animate-spin-slow'}`}/>
          </button>

          </nav>
        </motion.div>
      ) : null}

      <div className="absolute  left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
