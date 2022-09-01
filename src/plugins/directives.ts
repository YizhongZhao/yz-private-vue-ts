/**
 * @Author: yizhongZhao
 * @Date: 2022/8/12 10:38
 * @Description: 自定义指令
 * @warning:
 */
import {resize} from '@/directives/resize'

export default {
    install: (app: import("vue").App<Element>) => {
        app.directive('resize', resize);
    },
};