import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/luffy-gear-5.png";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
const inter = Inter({ subsets: ["latin"] });
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title> Portfolio Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Next.js"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Bringing Ideas to Life Through Code and Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Exemplifying proficiency in frontend development, I specialize
                in crafting cutting-edge web applications from concept to
                execution. Delve into my recent projects and articles,
                highlighting my mastery in React.js and frontend development
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/nghi_cv.pdf"
                  target="_blank"
                  className="flex  items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:nghinguyenzero@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt='nextjs' className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
}
