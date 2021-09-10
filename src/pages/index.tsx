/* eslint-disable @next/next/no-img-element */
import React from "react";
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";

import Title from "../components/Title/Title";

import styles from "../styles/Home.module.scss";

export default function Home() {
   return (
      <div className={styles.container}>
         <CarouselBanner />

         <Title title="NAVEGUE POR DEPARTAMENTO" />

         <div className={styles.categoryContainer}>
            <div className={styles.categoryCard}></div>
            <div className={styles.categoryCard}></div>
            <div className={styles.categoryCard}></div>
            <div className={styles.categoryCard}></div>
         </div>

         <Title title="NOSSOS DESTAQUES" />

         <div className={styles.featuredContainer}>
            <div className={styles.featuredCard}>Item 1</div>
            <div className={styles.featuredCard}></div>
            <div className={styles.featuredCard}></div>
            <div className={styles.featuredCard}></div>
            <div className={styles.featuredCard}></div>
            <div className={styles.featuredCard}></div>
         </div>

         <div className={styles.aboutContainer}>
            <div className={styles.aboutLeftContainer}>
               <div className={styles.title}>
                  <Title title="SOBRE NÓS" />
               </div>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </p>
            </div>
            <div className={styles.aboutRightContainer}>
               <div className={styles.aboutCard}></div>
            </div>
         </div>

         <Title title="CONTATE-NOS" />

         <div className={styles.contactContainer}>
            <div className={styles.contactLeftContainer}>
               <div className={styles.mapFrame}>MAP</div>
            </div>
            <div className={styles.contactRightContainer}>
               <section className={styles.sectionContacts}>
                  <img src="/mark.svg" width="30" height="30" alt="Marcador" />
                  <p>Rua dos Morros, 0</p>
               </section>
               <section className={styles.sectionContacts}>
                  <img
                     src="/telephone.svg"
                     width="30"
                     height="30"
                     alt="Telefone"
                  />
                  <p>(22)99999-9999</p>
               </section>
               <section className={styles.sectionContacts}>
                  <img src="/email.svg" width="30" height="30" alt="Email" />
                  <p>contate_nos@petfeliz.com.br</p>
               </section>
               <section className={styles.sectionContacts}>
                  <img src="/clock.svg" width="30" height="30" alt="Horário" />
                  <p>Seg a Sáb, 09h às 18h</p>
               </section>
            </div>
         </div>
      </div>
   );
}
