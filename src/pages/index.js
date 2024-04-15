import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/luffy-gear-5.png";
import AnimatedText from "@/components/AnimatedText";
import { LightOff, LightOn, LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
const inter = Inter({ subsets: ["latin"] });
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import sunBulb from "../../public/images/svgs/sun.png";
import sunBulb1 from "../../public/images/svgs/sun_blue.png";
import sunBulb2 from "../../public/images/svgs/sun_1.png";



import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <>
      <Head>
        <title> Portfolio | Zero </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full 
            lg:flex-col"
          >
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Next.js"
                className="dark:animate-rubberBand w-full h-auto 
                  lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center 
              lg:w-full lg:text-center"
            >
              <AnimatedText
                text="Bringing Ideas to Life Through Code and Design."
                className="!text-6xl !text-left
                  xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium 
                md:text-sm sm:text-xs"
              >
                Exemplifying proficiency in frontend development, I specialize
                in crafting cutting-edge web applications from concept to
                execution. Delve into my recent projects and articles,
                highlighting my mastery in React.js and frontend development
              </p>
              <div className="flex items-center self-start mt-2 
                lg:self-center"
              >
                <Link
                  href="/nghi_cv.pdf"
                  target="_blank"
                  className="flex  items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold 
                  hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent
                  dark:bg-light dark:text-dark 
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:nghinguyenzero@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          {/* <LightOn */}
          {/* {mode === "dark" ? (
                <LightOff/>
              ) : (
                <LightOn/>
              )} */}
          {/* <LightOn className="w-full h-auto dark:!fill-dark dark:!text-dark dark:!bg-dark dark:!color-dark"></LightOn> */}
          <Image src={sunBulb2} alt='nextjs' className="w-full h-auto animate-spin-slow dark:hidden"/>
          
          <Image src={sunBulb1} alt='nextjs' className="w-full h-auto hidden dark:block"/>
        </div>
      </main>
    </>
  );
}
