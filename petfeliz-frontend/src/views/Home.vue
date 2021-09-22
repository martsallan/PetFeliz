<template>
  <div class="container">
    <Banner />

    <Title title="NOSSOS PRODUTOS" />

    <div class="featuredContainer">
      <ul>
        <li v-for="product in products" :key="product.id">
          <div class="featuredProductContainer">
            <router-link :to="{ name: 'Product', params: { id: product.id } } ">
              <div class="featuredCardContainer">
                <div class="featuredCard"><!-- Imagem do produto vai vir por aqui--></div>
                <span>{{ product.name }}</span>
              </div>
            </router-link>
            <span>R$ {{Number(product.price).toFixed(2)}}</span>
            <div class="featuredButton">
              <button>
              <img src="/add.svg" width="15" height="15" alt="Horário" /><span>COMPRAR</span></button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="aboutContainer">
      <div class="aboutLeftContainer">
        <div class="title">
          <Title title="SOBRE NÓS" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="aboutRightContainer">
        <div class="aboutCard"></div>
      </div>
    </div>

    <Title title="CONTATE-NOS" />

    <div class="contactContainer">
      <div class="contactLeftContainer">
        <div class="mapFrame">MAP</div>
      </div>
      <div class="contactRightContainer">
        <section class="sectionContacts">
          <img src="/mark.svg" width="30" height="30" alt="Marcador" />
          <p>Rua dos Morros, 0</p>
        </section>
        <section class="sectionContacts">
          <img src="/telephone.svg" width="30" height="30" alt="Telefone" />
          <p>(22)99999-9999</p>
        </section>
        <section class="sectionContacts">
          <img src="/email.svg" width="30" height="30" alt="Email" />
          <p>contate_nos@petfeliz.com.br</p>
        </section>
        <section class="sectionContacts">
          <img src="/clock.svg" width="30" height="30" alt="Horário" />
          <p>Seg a Sáb, 09h às 18h</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import Title from "@/components/Title/Title.vue";

import axios from "axios";

export default {
  components: {
    Banner,
    Title,
  },
  data() {
    return {
      products: [],
      err: "",
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("/api/products")
        .then((response) => (this.products = response.data.products))
        .catch((err) => (this.err = err.message));
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/Home.scss";
</style>
