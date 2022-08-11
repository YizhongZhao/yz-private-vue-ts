/**
 *  默认路由
 */

import {RouteRecordRaw} from 'vue-router'

const globalRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: '/login'
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/404.vue"),
    },
];


export {globalRoutes}
