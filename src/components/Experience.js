import React, { useContext, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { CONTENT} from "@/constants";
import { LangContext } from "@/context/LangContext";


const Details = ({data}) => {
    const { position, company, companyLink, time, address, work } = data
    const ref = useRef(null)
  return (

    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between
      md:w-[80%]"
    >
        <LiIcon reference={ref}/>
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
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
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm"
        >
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const {lang} = useContext(LangContext)

  const EXPERIENCE = CONTENT[`${lang}`].about.experience

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center
        md:text-6xl xs:text-4xl md:mb-16"
      >
        {EXPERIENCE.title}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div 
            style={{scaleY: scrollYProgress}} 
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
              md:w-[2px] md:left-[30px] xs:left-[20px]
            ">
        </motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4
        xs:ml-2
        ">
          {
            EXPERIENCE.experiences.map((item, index) =>  (<Details key={index} data={item}/>))
          }
        </ul>
      </div>
    </div>
  );
};

export default Experience;
