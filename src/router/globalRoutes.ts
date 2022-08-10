/**
 *  默认路由
 */

import {RouteRecordRaw} from 'vue-router'

const globalRoutes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/404.vue"),
    },
];


export {globalRoutes}
