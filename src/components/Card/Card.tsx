import Link from "next/link";

import styles from "./styles.module.scss";

export function Card() {
    return(
        <>
        <div className={styles.card}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida tincidunt tincidunt.</p>
            <div></div>
            <button>Compre agora</button>
        </div>
        </>
    );
}