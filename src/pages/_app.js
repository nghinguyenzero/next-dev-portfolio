import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { LangProvider } from "@/context/LangContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: ["--font-mont"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <LangProvider>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </LangProvider>
  );
}
