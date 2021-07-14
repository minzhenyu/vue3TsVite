

import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from "./router";
import { store, key } from './store'
import App from './App.vue'

const app = createApp(App)
console.log(import.meta.env.VITE_APP_BASE_API )
console.log(import.meta.env )
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.use(store, key)
app.use(router)

app.mount('#app')

// createApp(App).use(Element3).mount('#app')
