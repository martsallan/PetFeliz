import React from "react";

import styles from "./styles.module.scss";

export default function CarouselBanner() {
   return (
      <>
         <div className={styles.card}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
               gravida tincidunt tincidunt.
            </p>
            <div></div>
            <button>Compre agora</button>
         </div>
      </>
   );
}
