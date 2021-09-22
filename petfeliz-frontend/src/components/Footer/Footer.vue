<template>
      <footer class="footerContainer">
         <nav>
            <p class="titleSection">Links úteis</p>
            <ul>
               <li>
                  <router-link to="/">
                     <a>Início</a>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <a>Produtos</a>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <a>Destaques</a>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <a>Sobre nós</a>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <a>Contato</a>
                  </router-link>
               </li>
            </ul>
         </nav>
         <div class="centerContainer">
            <p>PetFeliz LTDA.</p> © 2021. All Rights Reserved
         </div>
         <div class="rightSideContainer">
            <div>
               <p>Redes Sociais</p>
               <div>
                  <router-link to="/">
                     <img
                        src="/facebook.svg"
                        width="30"
                        height="30"
                        alt="Facebook"
                     />
                  </router-link>
                  <router-link to="/" class="centerSocialLogo">
                     <img
                        src="/instagram.svg"
                        width="30"
                        height="30"
                        alt="Instagram"
                     />
                  </router-link>
                  <router-link to="/">
                     <img
                        src="/whatsapp.svg"
                        width="30"
                        height="30"
                        alt="Whatsapp"
                     />
                  </router-link>
               </div>
            </div>
         </div>
      </footer>
</template>

<style lang="scss">
   @import "Footer.scss";
</style>