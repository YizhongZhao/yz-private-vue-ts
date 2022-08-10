import axios from 'axios'
import qs from 'qs'

import {config} from '@/config'
import {getToken} from '@/utils/token'
import NProgress from "nprogress";

// 结构所需配置项
const {baseURL, contentType, requestTimeout, tokenName, showNProgress} = config
// axios初始化
const instance = axios.create({
    baseURL,
    timeout: requestTimeout,
    headers: {
        'Content-Type': contentType,
    },
})

instance.interceptors.request.use(
    (config) => {
        if (showNProgress) {
            NProgress.start();
        }
        const token = getToken()
        if (token) config.headers[tokenName] = token
        if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)