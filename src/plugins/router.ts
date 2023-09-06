import { createRouter, createWebHistory } from 'vue-router';
import { globalRoutes } from '@/router/globalRoutes';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: globalRoutes,
});

export default router;
