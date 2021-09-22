import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Message from '../views/Message.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },{
    path:'/products/:id',
    name: 'Product',
    component: Product
  },{
    path:'/cart',
    name: 'Cart',
    component: Cart
  },{
    path:'/message',
    name: 'Message',
    component: Message,
    props : {message:''}
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
