/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./styles.module.scss"

export function Header() {
   const currentDate = format(new Date(), "EEEEEE, d MMMM", {
      locale: ptBR,
   });

   return (
      <header className={styles.headerContainer}>
         <img className={styles.logo} src="/logo.png" alt="Search" />
         <nav>
            <ul>
               <li>
                  <Link href="/">
                     <a className={styles.focus}>Início</a>
                  </Link>
               </li>
               <li>
                  <Link href="/notReady">
                     <a>Categorias</a>
                  </Link>
                  <img className={styles.icon2} src="/vector.svg" width="12" height="12" alt="Search" />
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
         <span className={styles.navRightSide}>
            <button className={styles.imageButton}>
               <img className={styles.icon} src="/search.svg" width="20" height="20" alt="Search" />
            </button>
            <p>Procurar item...</p>
            <button className={styles.imageButton}>
               <img
                  className={styles.icon}
                  src="/favorite.svg"
                  width="20"
                  height="20"
                  alt="Favorite"
               />
            </button>
            <button className={styles.imageButton}>
               <img className={styles.icon} src="/account.svg" width="20" height="20" alt="Account" />
            </button>
            <button className={styles.imageButton}>
               <img className={styles.icon} src="/cart.svg" width="20" height="20" alt="Cart" />
            </button>
         </span>
      </header>
   );
}
