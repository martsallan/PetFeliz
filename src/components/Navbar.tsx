import React, { Component } from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Navbar.module.scss"

class Navbar extends Component {
    render() {
        return (
            <div className={styles.header}>
                <nav className={styles.navbar}>
                    <ul>
                        <li><Link href="/"><a className={styles.selected}>início</a></Link></li>
                        <li><Link href="/notReady"><a >Categorias</a></Link></li>
                        <li><Link href="/notReady"><a >Promoções</a></Link></li>
                        <li><Link href="/notReady"><a >Sobre nós</a></Link></li>
                        <li><Link href="/notReady"><a >contato</a></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar