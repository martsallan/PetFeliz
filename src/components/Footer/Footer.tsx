/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import styles from "./styles.module.scss";

export function Footer() {

   return (
      <footer className={styles.footerContainer}>
         <nav>
            <p className={styles.titleSection}>Links úteis</p>
            <ul>
               <li>
                  <Link href="/">
                     <a>Início</a>
                  </Link>
               </li>
               <li>
                  <Link href="/catalog">
                     <a>Categorias</a>
                  </Link>
               </li>
               <li>
                  <Link href="/notReady">
                     <a>Promoções</a>
                  </Link>
               </li>
               <li>
                  <Link href="/notReady">
                     <a>Sobre nós</a>
                  </Link>
               </li>
               <li>
                  <Link href="/notReady">
                     <a>Contato</a>
                  </Link>
               </li>
            </ul>
         </nav>
         <div className={styles.centerContainer}>
            <p>PetFeliz LTDA.</p> © 2021. All Rights Reserved
         </div>
         <div className={styles.rightSideContainer}>
            <div className={styles.container}>
               <p>Redes Sociais</p>
               <div>
                  <Link href="/notReady" passHref={true}>
                     <img
                        src="/facebook.svg"
                        width="30"
                        height="30"
                        alt="Facebook"
                     />
                  </Link>
                  <Link href="/notReady" passHref={true}>
                     <img
                        src="/instagram.svg"
                        width="30"
                        height="30"
                        alt="Instagram"
                     />
                  </Link>
                  <Link href="/notReady" passHref={true}>
                     <img
                        src="/whatsapp.svg"
                        width="30"
                        height="30"
                        alt="Whatsapp"
                     />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
