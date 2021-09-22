<template>
  <div class="productContainer">
    <div class="imageContainer">
      <div class="imgGallery">
        <img
          :src="product.image"
          :alt="product.name"
          width="200px"
          height="200px"
        />
      </div>
    </div>
    <div class="infoContainer">
      <div class="info">
        <h1 class="productTitle">{{ product.name }}</h1>
        <p class="productDescription">{{ product.description }}</p>
        <p class="productStatus">
          Status :
          <span
            :style="
              `font-weight:900;${
                product.qtt_storage > 0 ? 'color: green;' : 'color: red;'
              }`
            "
            >{{ product.qtt_storage > 0 ? "Disponível" : "Indisponível" }}</span
          >
        </p>
        <h2 class="productPrice">R$ {{ Number(product.price).toFixed(2) }}</h2>
        <h3>Deseja adicionar quantos items?</h3>
        <div class="boxProductQtt">
          <button class="subButton" @click="qtt = qtt - 1 < 0 ? qtt : qtt - 1">
            <img
              src="/subtract.svg"
              width="15"
              height="15"
              alt="subtrair item"
            />
          </button>
          <input type="text" :value="qtt" disabled />
          <button class="sumButton" @click="qtt = qtt + 1">
            <img src="/add.svg" width="15" height="15" alt="adicionar item" />
          </button>
        </div>
        <button
          id="addToCartButton"
          @click="addToCart(product, qtt)"
          :disabled="qtt == 0 || product.qtt_storage <= 0 ? 1 : 0"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cart from "../scripts/cart.js";

export default {
  components: {},
  data() {
    return {
      product: {},
      error: "",
      qtt: 0,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios
        .get("/api/products/" + this.$route.params.id)
        .then((response) => {
          if (response.data.success == true) {
            this.product = response.data.product;
          } else this.error = response.data.message;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    addToCart(p, qtt) {
      if (qtt > 0) {
        let product = {
          id: p.id,
          name: p.name,
          price: p.price,
        };

        Cart.addToCart(product, qtt);
        this.emmitter.emit("updateCart", Cart.getCart().length);
        this.$router.push({ name: "Cart" });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/Product.scss";
</style>
