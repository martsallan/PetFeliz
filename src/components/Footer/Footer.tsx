/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./styles.module.scss"

export function Footer() {
   const currentDate = format(new Date(), "EEEEEE, d MMMM", {
      locale: ptBR,
   });

   return (
      <footer className={styles.footerContainer}>aaa</footer>
   );
}
