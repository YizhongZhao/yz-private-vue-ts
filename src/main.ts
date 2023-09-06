import {createApp} from 'vue'
import App from './App.vue'

// 引入样式类
import 'normalize.css/normalize.css'
import "tailwindcss/tailwind.css"

// 引入三方库
import elementIcon from "@/plugins/element-icon";
import element from "@/plugins/element";
// 状态管理与路由
import pinia from '@/plugins/pinia'
import router from "@/plugins/router";
// 注册全局组件
import globalComponent from "@/plugins/global-component";

const app = createApp(App)
app.use(elementIcon)
    .use(element)
    .use(pinia)
    .use(router)
    .use(globalComponent)
    .mount('#app')

