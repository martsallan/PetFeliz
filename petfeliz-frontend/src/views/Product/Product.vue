<template>
   <div class='productContainer' style="min-height:100vh;">
        <button style="margin-top:200px;" @click="getProduct()"> teste </button>
            <div class='imageContainer'>
                <div class='imgGallery'>
                    <h1></h1>
                </div>
            </div>
            <div class='infoContainer'>
                <div class='info'>
                    <h1>{{product.name}} - Categoria item</h1>
                    <p>unidades em estoque item {{product.qtt_storage}}</p>
                    <h2>R$ Preco item {{Number(product.price).toFixed(2)}}</h2>
                    <h3>Deseja adicionar quantos items?</h3>
                    <button @click="addToCart(p.id,qtt);" :disabled="qtt != 0 ? 0 : 1">Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
</template>

<script>

import axios from 'axios'
import Cart from '../scripts/cart.js'

export default {

components:{

},
data(){
    return{
        product:{},
        error:'',
        qtt : 0
    }
},
mounted(){
    this.getProduct();
},
methods:{
    getProduct(){
        axios.get('/api/products/'+this.$route.params.id)
        .then((response) => {
            if(response.data.success == true){
                this.product = response.data.product
            }else
            this.error = response.data.message
        })
        .catch( (err) => {
            this.error = err.message
        })
    },
    addToCart(id, qtt){
        Cart.addToCart(id,qtt);
    },
    removeFromCart(id, qtt){
        Cart.removeFromCart(id,qtt);
    }
}

}
</script>

<style lang='scss'>
    @import '../../styles/Product.scss';
</style>