/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import styles from "./styles.module.scss";

export function Header() {

   return (
      <header className={styles.headerContainer}>
         <img className={styles.logo} src="/logo.png" alt="PetFeliz" />
         <nav>
            <ul>
               <li>
                  <Link href="/">
                     <a className={styles.focus}>Início</a>
                  </Link>
               </li>
               <li>
                  <Link href="/catalog" passHref={true}>
                     <button className={styles.categoryButton}>
                        Categorias
                        <img
                           className={styles.icon2}
                           src="/arrow.svg"
                           width="12"
                           height="12"
                           alt="Search"
                        />
                     </button>
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
         <span className={styles.navRightSide}>
            <button className={styles.imageButton}>
               <img
                  className={styles.icon}
                  src="/search.svg"
                  width="20"
                  height="20"
                  alt="Search"
               />
            </button>
            <p>Procurar</p>
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
               <img
                  className={styles.icon}
                  src="/account.svg"
                  width="28"
                  height="28"
                  alt="Account"
               />
            </button>
            <button className={styles.imageButton}>
               <img
                  className={styles.icon}
                  src="/cart.svg"
                  width="20"
                  height="20"
                  alt="Cart"
               />
            </button>
         </span>
      </header>
   );
}
