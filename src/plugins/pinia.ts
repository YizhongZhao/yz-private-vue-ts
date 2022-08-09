import {createPinia} from 'pinia'

export default {
    install: (app: import("vue").App<any>) => {
        const pinia = createPinia()
        app.use(pinia)
    },
};