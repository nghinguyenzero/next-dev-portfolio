import Link from "next/link";
import Layout from "./Layout";
import { LangContext } from "@/context/LangContext";
import { useContext } from "react";
import { CONTENT } from "@/constants";

const Footer = () => {
    const {lang} = useContext(LangContext)
    const FOOTER = CONTENT[`${lang}`].footer
    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light sm:text-base
        ">
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <Link href='https://nextjs.org/' className="underline underline-offset-2"  target="_blank"> {FOOTER.sayHello}</Link>

                <span>{new Date().getFullYear()} &copy; {FOOTER.allRightsReserved}</span>
                <div className="flex items-center lg:py-2">
                {FOOTER.buildWith} <span className="text-primary text-2xl px-1 dark:text-primaryDark inline-block animate-rubberBand"> &#9825;</span>  {FOOTER.by} &nbsp;
                <Link href='https://nextjs.org/' className="underline underline-offset-2" target="_blank">NextJS</Link>

                </div>

            </Layout>
        </footer>
    );
}

export default Footer;