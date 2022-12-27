import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyComponents from '../packages'
import ElementPlus from 'element-plus'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import 'element-plus/dist/index.css'
import Preview from './components/Preview.vue'
import './assets/markdown.css'
const app = createApp(App)
app.use(MyComponents)
app.use(router)
app.use(ElementPlus)
app.use(antd)
app.component('Preview', Preview)
app.mount('#app')
