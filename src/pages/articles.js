import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/article_1.png";
import article2 from "../../public/images/articles/article_2.png";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MoveImage = ({ title, image, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="sm:w-full"
    >
      <h2 className="capitalize text-2xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={image}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};
const Article = ({ image, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 
        border border-solid border-dark border-r-4 border-b-4 
        dark:border-light dark:bg-dark dark:text-light
        sm:flex-col"
    >
      <MoveImage title={title} image={image} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ image, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl 
    dark:border-light dark:bg-dark dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles | ZN</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Works Can Change The World!" 
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              image={article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
             Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
            <FeaturedArticle
              image={article1}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
             Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
            <FeaturedArticle
              image={article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
             Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-6 mt-32 dark:text-light">
            All Articles
          </h2>
          <ul>
            <Article
              image={article2}
              title="Validate form React"
              date="March 22, 2023"
              link="/"
            />
            <Article
              image={article2}
              title="Validate form React"
              date="March 22, 2023"
              link="/"
            />
            <Article
              image={article2}
              title="Validate form React"
              date="March 22, 2023"
              link="/"
            />

            <Article
              image={article2}
              title="Validate form React"
              date="March 22, 2023"
              link="/"
            />
            <Article
              image={article2}
              title="Validate form React"
              date="March 22, 2023"
              link="/"
            />
            <Article
              image={article2}
              title="Validate form React"
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
