import { createApp } from 'vue'
import { Store } from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.config.globalProperties.$store = store

app.use(store)
app.use(router)
app.use(Element)

app.mount('#app')

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<any>,
    }
}
