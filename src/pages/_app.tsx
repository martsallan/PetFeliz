import '../styles/global.scss'

import { Header } from '../components/Header'

import styles from '../styles/app.module.scss'

import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
  )
}

export default MyApp