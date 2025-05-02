import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 👈 이 줄이 꼭 있어야 해
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)  // 👈 이 줄도 꼭 있어야 해!
app.mount('#app')
app.use(createPinia())