<template>
  <header class="headerContainer">
    <img class="logo" src="/logo.svg" alt="PetFeliz" />
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <a class="focus">Início</a>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <button class="categoryButton">
              Produtos
              <!--<img
                class="icon2"
                src="/arrow.svg"
                width="12"
                height="12"
                alt="Search"
              />-->
            </button>
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
    <span class="navRightSide">
    <router-link to="/">
      <button class="imageButton">
        <img
          class="icon"
          src="/account.svg"
          width="28"
          height="28"
          alt="Account"
        />
      </button>
      </router-link>
      <router-link to="/cart">
        <button class="imageButton">
          <img class="icon" src="/cart.svg" width="20" height="20" alt="Cart" />
          <span class="tag" v-if="qttdItemsCart > 0">{{qttdItemsCart}}</span>
        </button>
        <!-- LENGTH ARRAY CART HERE -->
      </router-link>
    </span>
  </header>
</template>

<script>
import Cart from '../../scripts/cart'
export default {
   data(){
      return{
         qttdItemsCart : 0
      }
   },
   mounted(){
    this.updateCart() 
    this.emmitter.on('updateCart',(length)=>{
       this.qttdItemsCart = length
     })
   },
   methods:{
     updateCart(){
        let cartLength = Cart.getCart().length
        this.qttdItemsCart = cartLength
     }
   }
}
</script>



<style lang="scss">
@import "Header.scss";
</style>
