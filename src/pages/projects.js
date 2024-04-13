import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
// import { Head } from "next/head";
import Image from "next/image";

import Link from 'next/link';
import project1  from "../../public/images/projects/project_1.png";
import project2  from "../../public/images/projects/fashion-studio-website.jpg";



const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex  items-center justify-between
      rounded-3xl border border-solid border-dark bg-light shadow-2xl"
    >
      <Link href={link} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex-col items-start justify-between pl-6"  >
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2> {title}</h2>
        </Link>
        <p>{summary}</p>
        <Link href={github} target="_blank">
          <GithubIcon />
        </Link>
        <Link href={link} target="_blank">
          Visit project
        </Link>
      </div>
    </article>
  );
};

const projects = (props) => {
  return (
    <>
      {/* <Head>
            <title>Zero | Projects Pages</title>
            <meta name='description' content="any description"></meta>
        </Head> */}
      <main className="w-full  mb-16 flex flex-col justify-center items-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knownledge!" />
          <div className="grid grid-cols-12  gap-24">
            <div className="col-span-12">Features Project</div>
            <div className="col-span-6">
              <FeaturedProject
                type="Featured Project"
                title="Portfolio Zero Appication"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                image={project1}
                link="https://github.com/nghinguyenzero/next-dev-portfolio"
                github="https://github.com/nghinguyenzero/next-dev-portfolio"
              />
            </div>
            <div className="col-span-6">
              <FeaturedProject
                type="Featured Project"
                title="Portfolio Zero Appication"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                image={project2}
                link="https://github.com/nghinguyenzero/next-dev-portfolio"
                github="https://github.com/nghinguyenzero/next-dev-portfolio"
              />
            </div>
            <div className="col-span-6"> P1</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
