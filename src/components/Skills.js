import { motion } from "framer-motion";
const Skill = ({name, x, y}) => {
    return (
        <motion.div className="flex justify-center items-center rounded-full font-semibold text-light
        bg-dark py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:border-light dark:bg-light"
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x,y, transition: {duration:1.5}}}
        viewport={{once:true}}
        >
         {name}
       </motion.div>
    )
}
const Skills = (props) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center"> Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div className="flex justify-center items-center rounded-full font-semibold text-light
         bg-dark dark:text-dark dark:border-light dark:bg-light p-8 shadow-dark cursor-pointer"
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
