import {createApp} from 'vue'
import App from './App.vue'

// 引入样式类
import 'normalize.css/normalize.css'

// element
import elementIcon from "@/plugins/element-icon";
import element from "@/plugins/element";

const app = createApp(App)
app.use(elementIcon)
    .use(element)
    .mount('#app')
