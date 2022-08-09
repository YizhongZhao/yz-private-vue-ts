import {createApp} from 'vue'
import App from './App.vue'

// 引入样式类
import 'normalize.css/normalize.css'
// 引入
import elementIcon from "@/plugins/element-icon";
import element from "@/plugins/element";
import pinia from '@/plugins/pinia'

const app = createApp(App)
app.use(elementIcon)
    .use(element)
    .use(pinia)
    .mount('#app')
