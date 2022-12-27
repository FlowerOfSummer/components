import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyKit from '../packages'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Preview from './components/Preview.vue'
import './assets/markdown.css'
const app = createApp(App)
app.use(MyKit)
app.use(router)
app.use(ElementPlus)
app.component('Preview', Preview)
app.mount('#app')
