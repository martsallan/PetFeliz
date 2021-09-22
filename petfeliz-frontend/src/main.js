import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
const emmitter = mitt()

const app = createApp(App)
app.config.globalProperties.emmitter = emmitter;
app.use(router).mount('#app')
