import cookie from 'js-cookie'
import {config} from '@/config'

const {tokenTableName, storage} = config

//获取token
export function getToken(): string | null | undefined {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.getItem(tokenTableName)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.getItem(tokenTableName)
        } else if ('cookie' === storage) {
            return cookie.get(tokenTableName)
        } else {
            return localStorage.getItem(tokenTableName)
        }
    } else {
        return localStorage.getItem(tokenTableName)
    }
}

// 设置token
export function setToken(token: string): void {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.setItem(tokenTableName, token)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.setItem(tokenTableName, token)
        } else if ('cookie' === storage) {
            return cookie.set(tokenTableName, token)
        } else {
            return localStorage.setItem(tokenTableName, token)
        }
    } else {
        return localStorage.setItem(tokenTableName, token)
    }
}