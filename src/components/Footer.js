import Link from "next/link";
import Layout from "./Layout";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation(['footer'])


    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light sm:text-base
        ">
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <Link href='https://nextjs.org/' className="underline underline-offset-2"  target="_blank"> {t("sayHello")}</Link>

                <span>{new Date().getFullYear()} &copy; {t("allRightsReserved")}</span>
                <div className="flex items-center lg:py-2">
                {t("buildWith")} <span className="text-primary text-2xl px-1 dark:text-primaryDark inline-block animate-rubberBand"> &#9825;</span>  {t("by")} &nbsp;
                <Link href='https://nextjs.org/' className="underline underline-offset-2" target="_blank">NextJS</Link>

                </div>

            </Layout>
        </footer>
    );
}

export default Footer;