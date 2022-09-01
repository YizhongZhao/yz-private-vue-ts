/**
 * @Author: yizhongZhao
 * @Date: 2022/8/9
 * @Description: 引入element+
 */

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
    install: (app: import("vue").App) => {
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(`el-icon-${key}`, component)
        }
    },
};