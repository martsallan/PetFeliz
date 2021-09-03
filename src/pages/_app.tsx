import {Header} from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import type { AppProps /*, AppContext */ } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </div>
  )
}

export default MyApp