import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
    plugins: [
        vue(
            {reactivityTransform: true}
        ),
        createSvgIconsPlugin({
                iconDirs: [resolve(process.cwd(), "src/assets/icons")],
                symbolId: "icon-[name]", // symbol的id
                inject: "body-last",
                customDomId: "__svg__icons__dom__"
            }
        )
    ],
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
            },
        ]
    },
})
