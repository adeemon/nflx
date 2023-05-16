import type { AppProps } from 'next/app'
import { Header } from './Header';
import { Footer } from './Footer';

import '../styles/globals.css'

export function SiteLayout({ Component, pageProps }: AppProps) {
  return (
    <>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
  )  
}
