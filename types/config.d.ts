/**
 * @Author: yizhongZhao
 * @Date: 2022年8月11日10:44:21
 * @Description: src/config文件夹用到的接口
 * @warning:
 */
import {ContentType, Storage} from '@/enums/configEnums'

export interface INetConfig {
    baseURL: string
    requestTimeout: number
    contentType: ContentType
}

export interface ISettingConfig {
    tokenName: string
    tokenTableName: string
    storage: Storage
    pickedCorpId: string
    pickedRole: string
}