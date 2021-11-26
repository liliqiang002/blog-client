import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './normalize.css'
import './assets/iconfont/iconfont.css'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// http请求
import httpRequest from './utils/request'
import Prism from 'prismjs'

// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import SvgIcon from '@/components/svgIcon'

VueMarkdownEditor.use(vuepressTheme, {
  Prism
})
const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.config.globalProperties.$http = httpRequest
app.use(store).use(router).use(VueMarkdownEditor).use(ElementPlus).mount('#app')
