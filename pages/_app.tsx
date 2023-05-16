import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/app.module.scss'

import '../styles/globals.css'
import store from '../store/store'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <div className={styles.container}>
    <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </Provider>
}
