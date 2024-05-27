import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/style.scss'
import './assets/style/_var.scss'

createApp(App).use(store).use(router).mount('#app')
