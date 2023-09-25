import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  if (false) {
    console.log(mode, env, '----');
  }
  return {
    plugins: [
      vue({ reactivityTransform: true }),
      vueSetupExtend(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[name]', // symbol的id
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
    server: {
      port: 9802,
    },
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
  };
});
