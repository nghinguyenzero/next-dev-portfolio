import '@/styles/globals.css'
import { Head } from 'next/head'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: ['--font-mont']

})
export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  {/* <Head>
    <meta name='viewport' content='width=device-width'/>
    <link rel='icon' href='/favicon.ico'/>
  </Head> */}

    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <Component {...pageProps} />
    </main>
  </>
  )
}

