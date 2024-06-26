import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";

import LiIcon from "./LiIcon";

const Details = ({ data }) => {
  const { position, company, companyLink, time, address, work } = data;
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const { t } = useTranslation(["about"]);
  const experiences = [
    {
      position: "Web Developer",
      company: "FPT Information System",
      time: "2020-Present",
      address: "District 7, HCM",
      work: `Worked on a team responsible for developing new features for Fis's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization`,
    },
    {
      position: "Frontend Developer",
      company: "TMA Solutions",
      time: "2019-2020",
      address: "District 12, HCM",
      work: `Worked on a team responsible for developing new features for TMA's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization`,
    },
    {
      position: "Frontend Developer",
      company: "Hahalolo company",
      time: "2019-2020",
      address: "District 12, HCM",
      work: `Worked on a team responsible for developing new features for TMA's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization`,
    },
    {
      position: "Frontend Developer",
      company: "FPT software",
      time: "2017-2018",
      address: "District 9, HCM",
      work: `Worked on a team responsible for developing new features for TMA's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization`,
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
        md:text-6xl xs:text-4xl md:mb-16"
      >
        {t("experience.title")}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
              md:w-[2px] md:left-[30px] xs:left-[20px]
            "
        ></motion.div>
        <ul
          className="w-full flex flex-col items-start justify-between ml-4
        xs:ml-2
        "
        >
          {experiences.map((item, index) => (
            <Details key={index} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
