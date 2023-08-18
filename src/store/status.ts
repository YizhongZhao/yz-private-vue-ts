/**
 * @Author: yizhongZhao
 * @Date: 2022/9/1 16:19
 * @Description:
 * @warning:
 */

import {defineStore} from "pinia";
import {Names} from "@/enums/storeEnums";
import {ThemeEnum} from '@/enums/storeEnums'
import {APP_MODE_KEY_} from '@/enums/cacheEnum'
// import {config} from '@/config/index'
// const {darkModeOpen} = config


interface StatusState {
    // 黑夜模式&明亮模式
    mode?: ThemeEnum;
}

export const useStatusStore = defineStore(Names.STATUS, {
    state: (): StatusState => {
        return {
            mode: undefined
        }
    },
    getters: {
        getDarkMode(): ThemeEnum | string {
            return this.mode || localStorage.getItem(APP_MODE_KEY_) || ThemeEnum.LIGHT;
        },
    },
    actions: {
        setDarkMode(key: ThemeEnum): void {
            this.mode = key;
            localStorage.setItem(APP_MODE_KEY_, key);
        },
    },
})