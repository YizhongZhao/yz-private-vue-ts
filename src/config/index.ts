/**
 * @Author: yizhongZhao
 * @Date: 2022年8月10日17:23:41
 * @Description: 配置统一暴露
 * @warning: 注意命名空间
 */

// 主题相关配置
import {themeConfig} from './theme.config'
// axios相关配置
import {netConfig} from './net.config'

export const config = {
    ...themeConfig,
    ...netConfig
}