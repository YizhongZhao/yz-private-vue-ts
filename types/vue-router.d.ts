export {};
declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    // 是否在导航区隐藏
    hidden: boolean;
    // 路由名
    title: string;
    // icon
    icon?: string;
  }
}
