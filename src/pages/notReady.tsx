import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Home.module.scss'

export default function NotReady() {
    return (
          <div className={styles.container}>
            <Head>
                <title>PetFeliz</title>
                <meta name="description" content="pege in construction" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Sorry, but we are currently working on this page!<span>&#128531;</span>
                    </h1>
                </main>

                <footer className={styles.footer}>
                    <Link href="/">
                        <a>
                            Powered by PetFeliz
                        </a>
                    </Link>
                </footer>

            </div>
        </div>
    )
}