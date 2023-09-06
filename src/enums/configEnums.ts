/**
 * @Author: yizhongZhao
 * @Date: 2022/8/11 10:40
 * @Description: src/config文件夹用到的枚举
 * @warning:
 */

export enum ContentType {
  JSON = 'application/json;charset=UTF-8', //Json
  DEFAULT = 'application/x-www-form-urlencoded', //default
}

export enum Storage {
  COOKIE = 'cookie', //cookie
  LOCALSTORAGE = 'localStorage', //cookie
  SESSIONSTORAGE = 'sessionStorage', //cookie
}
