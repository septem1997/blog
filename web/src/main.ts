import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from 'virtual:generated-pages'
import MyIcon from './components/MyIcon.vue'
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes:routes
})

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.component('my-icon', MyIcon)

app.mount('#app')
