/**
 *  默认路由
 */

import {RouteRecordRaw} from 'vue-router'
import naiveui from '@/utils/naiveui';

const globalRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home.vue"),
        beforeEnter: (to, form, next) => {
            if (to) {
                naiveui.message.info('测试');
            } else {
                console.log(form)
            }
            next()
        }
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/404.vue"),
    },
];


export {globalRoutes}
