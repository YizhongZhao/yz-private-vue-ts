/**
 * @Author: yizhongZhao
 * @Date: 2022/8/9
 * @Description: 引入element+
 */

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "dayjs/locale/zh-cn";
export default {
    install: (app:import("vue").App<any>) => {
        app.use(ElementPlus, {
            locale: zhCn,
            size: "default",
            zIndex: 3000
        });
    },
};
