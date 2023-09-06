/**
 *  默认路由
 */

import { RouteRecordRaw } from 'vue-router';
import naiveui from '@/utils/naiveui';

const globalRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    beforeEnter: (to, form, next) => {
      if (to) {
        naiveui.message.success('测试');
      } else {
        console.log(form);
      }
      next();
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
];

export { globalRoutes };
