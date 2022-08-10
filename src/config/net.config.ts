/**
 * @Author: yizhongZhao
 * @Date: 2022年8月10日17:23:41
 * @Description: axios相关妹纸
 * @warning:
 */

interface INetConfig {
    baseURL: string
    requestTimeout: number
    contentType: ContentType
    tokenName: string
    tokenTableName: string
    storage: Storage
}

enum ContentType {
    JSON = 'application/json;charset=UTF-8',//Json
    DEFAULT = 'application/x-www-form-urlencoded'//default
}


enum Storage {
    COOKIE = 'cookie',//cookie
    LOCALSTORAGE = 'localStorage',//cookie
    SESSIONSTORAGE = 'sessionStorage',//cookie
}

export const netConfig: INetConfig = {
    // 基础路径
    baseURL: 'https://dev-api-sy-bdc-phoebe.lianjieabs.com',
    // 超时时间 ms
    requestTimeout: 5000,
    // 请求头
    contentType: ContentType.JSON,
    // token 的名字
    tokenName: 'k-sid',
    // token 存贮时的key
    tokenTableName: 'k-sid',
    // token存的位置
    storage: Storage.COOKIE
}