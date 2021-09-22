<template>
  <div>
    <div
      class="emptyCart"
      v-if="cart.length <= 0"
    >
      <div>
        <h1>Seu carrinho está vazio! :(</h1>
        <div class="emptyCartButton">
          <router-link to="/">
            <button>
              <img src="/arrow-back.svg" width="40" height="40" alt="Voltar" />
              <span>Voltar para a página principal</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="cartContainer"
      v-else
    >

      <div class="leftContainer">
        <div class="cartLeftContainer">
          <div class="titleCartLeft">
            <h2>Carrinho de Compras</h2>
            <div class="push">
              <router-link to="/">
                <button>
                  <img
                    src="/arrow-back.svg"
                    width="15"
                    height="15"
                    alt="Voltar"
                  />
                  <span>Continuar comprando</span>
                </button>
              </router-link>
            </div>
          </div>
          <div class="linha-horizontal"></div>
          <ul>
            <li v-for="product in cart" :key="product.id">
              <router-link to="/">
                {{ product.name }}
              </router-link>
              <div class="infosProductBar">
                <button @click="addItem(product.id)">
                  <img src="/add.svg" width="15" height="15" alt="Adicionar" />
                </button>
                <input :value="product.qtt" disabled />
                <button @click="subtractItem(product.id)">
                  <img
                    src="/subtract.svg"
                    width="15"
                    height="15"
                    alt="Diminuir"
                  />
                </button>
                <span
                  >R$ {{ Number(product.price * product.qtt).toFixed(2) }}</span
                >
                <div>
                  <button @click="removeItem(product.id)">
                    <img
                      src="/remove.svg"
                      width="15"
                      height="15"
                      alt="Remover"
                    />
                    <span>REMOVER</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="formLeftContainer">
          <h2>Complete com as suas informações</h2>
          <div v-if="message!=''">{{message}}</div>
          <div class="linha-horizontal"></div>
          <div class="formInfos">
            <form>
              <div>
                <h3>Contato</h3>
                <div class="inputContainer">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome completo *"
                    v-model="client.name"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email *"
                    v-model="client.email"
                  />
                </div>
              </div>
              <div>
                <h3>Endereço</h3>
                 <small style="color:gray;">Informando seu cep o endereço será preenchido automaticamente</small>
                <div class="inputContainer">
                  <input
                    type="text"
                    name="cep"
                    id="cep"
                    placeholder="CEP *"
                    v-model="address.postalCode"
                    @blur="getAddress()"
                  />
                  <input
                    type="text"
                    name="street"
                    id="street"
                    placeholder="Rua *"
                    v-model="address.street"
                    disabled
                  />
                  <input
                    type="text"
                    name="bairro"
                    id="bairro"
                    placeholder="Bairro *"
                    v-model="address.hood"
                    disabled
                  />
                  
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Cidade *"
                    v-model="address.city"
                    disabled
                  />
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Estado *"
                    v-model="address.FU"
                    disabled
                  />
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Número"
                    v-model="address.number"
                  />
                </div>
              </div>
              <div>
                <h3>Método de Pagamento *</h3>
                <div class="inputContainer">
                  <select
                    name="metodoPag"
                    id="metodoPag"
                    placeholder="Método de Pagamento"
                    v-model="client.payment_method"
                  >
                    <option value="dinheiro">Dinheiro</option>
                    <option value="cartao-credito">Cartão de Crédito</option>
                    <option value="cartao-debito">Cartão de Débito</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="cartDivisorContainer"></div>
      <div class="cartRightContainer">
        <h2>Resumo do pedido</h2>
        <div class="linha-horizontal"></div>
        <div class="rightContent">
          <h3>Subtotal: R$ {{ Number(total).toFixed(2) }}</h3>
          <a href="/confirmPage">
            <button type="button" @click.prevent.stop="validateData()">
              CONFIRMAR PEDIDO
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cart from "../scripts/cart.js";
export default {
  data() {
    return {
      cart: [],
      total: 0,
      message: "",
      client: {
        name: "",
        email: "",
        address: "",
        payment_method: "",
      },
      address: {
        street: "",
        hood: "",
        city: "",
        FU: "",
        postalCode: "",
        number: ""
      },
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.cart = Cart.getCart();
      this.emmitter.emit("updateCart", this.cart.length);
      this.getTotal();
    },
    getTotal() {
      this.cart.forEach((element) => {
        this.total += element.price * element.qtt;
      });
    },
    addItem(productId) {
      let product = {
        id: productId,
      };
      Cart.addToCart(product, 1);
      this.total = 0;
      this.getCart();
    },
    subtractItem(productId) {
      Cart.subtractFromCart(productId, 1);
      this.total = 0;
      this.getCart();
    },
    removeItem(productId) {
      Cart.removeFromCart(productId);
      this.total = 0;
      this.getCart();
    },
    validateData() {
      this.client.address = `${this.address.street} ,${this.address.number !== '' ? this.address.number : 'sem Nº' } - ${this.address.hood}, ${this.address.city} - ${this.address.FU} - ${this.address.postalCode} `;
      if (
        this.client.name == "" ||
        this.client.email == "" ||
        this.client.address == ""||
        this.payment_method == ""
      ) {
        this.message = 'Todos os campos com * devem estar preenchidos!'
        return false;
      } else {
        this.message = ''
        this.sendOrder();
      }
    },

    getAddress() {
      axios
        .get(
          "http://viacep.com.br/ws/" +
            this.address.postalCode +
            "/json/unicode/"
        )
        .then((response) => {
          let data = response.data;
          this.address.street = data.logradouro;
          this.address.hood = data.bairro;
          this.address.city = data.localidade;
          this.address.FU = data.uf;
          this.address.postalCode = data.cep;
        })
        .catch((err) => {
          console.log(err.message)
          this.message = 'Ops! parece que algo deu errado.Por favor, tente novamente mais tarde.'
        });
    },

    sendOrder() {
      axios
        .post("api/order/store", {
          name: this.client.name,
          email: this.client.email,
          products: this.cart,
          address: this.client.address,
          cost: this.total,
          shipping_cost: this.total > 100 ? 0 : 15,
          payment_method: this.client.payment_method,
        })
        .then((response) => {
          if(response.data.success == true){
            Cart.destroyCart()
            this.emmitter.emit("updateCart", 0)
            this.$router.push({name:'Message'})
          }else{
            this.message = response.data.message;
          }
        })
        .catch((err) => {
          console.log(err.message)
          this.message = 'Ops! parece que algo deu errado.Por favor, tente novamente mais tarde.'
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/Cart.scss";
</style>
