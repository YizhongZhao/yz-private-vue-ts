import SvgIcon from '@/components/global/svg-icon.vue';
import type { App, Component } from 'vue';
import 'virtual:svg-icons-register';

const components: { [name: string]: Component } = { SvgIcon };
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      console.log(key, 9999);
      app.component(key, components[key]);
    });
  },
};
