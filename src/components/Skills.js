import { useContext } from "react";
import { motion } from "framer-motion";

import { LangContext } from "@/context/LangContext";
import { CONTENT } from "@/constants";

const Skill = ({name, x, y}) => {
    return (
        <motion.div className="flex justify-center items-center rounded-full font-semibold text-light
        bg-dark py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:border-light dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        "
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x,y, transition: {duration:1.5}}}
        viewport={{once:true}}
        >
         {name}
       </motion.div>
    )
}

const Skills = () => {
  const {lang} = useContext(LangContext)
  const ABOUT = CONTENT[`${lang}`].about
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32"> {ABOUT.skills}</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
        dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg dark:lg:bg-circularDarkLg
        md:bg-circularLightMd dark:md:bg-circularDarkMd
        sm:bg-circularLightSm dark:sm:bg-circularDarkSm"
      >
        <motion.div className="flex justify-center items-center rounded-full font-semibold text-light
         bg-dark dark:text-dark dark:border-light dark:bg-light p-8 shadow-dark cursor-pointer
         lg:p-6 md:p-4 xs:text-xs xs:p-2"
         whileHover={{scale:1.05}}
         >
          Web
        </motion.div>
        <Skill name='HTML' x='-25vw' y='2vw'/>
        <Skill name='CSS' x='-5vw' y='-10vw'/>
        <Skill name='Javascript' x='20vw' y='6vw'/>
        <Skill name='React' x='0vw' y='12vw'/>
        <Skill name='NextJS' x='-20vw' y='-15vw'/>
        <Skill name='Node' x='15vw' y='-12vw'/>
        <Skill name='Web design' x='32vw' y='-5vw'/>
        <Skill name='Figma' x='0vw' y='-20vw'/>
        <Skill name='Firebase' x='-25vw' y='18vw'/>
        <Skill name='TailwindCSS' x='18vw' y='18vw'/>
      </div>
    </>
  );
};
export default Skills;
