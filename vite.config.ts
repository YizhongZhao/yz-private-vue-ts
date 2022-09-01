import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';


function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 9802
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
            },]
    },

})
