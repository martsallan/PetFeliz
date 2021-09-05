import React from "react"
import Image from "next/image"
import styles from "./styles.module.scss"
import Produto from "../../core/Produto"
import Link from "next/link"

interface ItemProps {
    product : Produto
}

export default function Item(props:ItemProps) {
    return (
        <Link href={{
            pathname: '/produto/[id]',
            query: { id:props.product.id },
        }}>
            <a className={styles.item}>
                <Image src="/vercel.svg" alt="Vercel Logo" className={`${styles.img}`} width={178} height={201} />
                <div className={`${styles.text}`}>
                    <h1>{props.product.title}</h1>
                    <h4>R$ {props.product.price}</h4>
                </div>
            </a>
        </Link>
    )
}