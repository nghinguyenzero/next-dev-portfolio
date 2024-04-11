import Link from "next/link";
import Layout from "./Layout";

const Footer = (props) => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium text-lg
        ">
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>
                    Buid with <span className="text-primary text-2xl px-1"> &#9825;</span> by &nbsp;
                <Link href='https://nextjs.org/' className="underline underline-offset-2" target="_blank">NextJS</Link>

                </div>
                <Link href='https://nextjs.org/' className="underline underline-offset-2"  target="_blank">Say Hello</Link>

            </Layout>
        </footer>
    );
}

export default Footer;