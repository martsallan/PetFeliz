import Head from "next/head"
import Link from "next/link"


export default function NotReady() {
    return (
        <div>
            <Head>
                <title>PetFeliz</title>
                <meta name="description" content="pege in construction" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <main className="main">
                    <h1 className="title">
                        Sorry, but we are currently working on this page!<span>&#128531;</span>
                    </h1>
                </main>

                <footer className="footer">
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