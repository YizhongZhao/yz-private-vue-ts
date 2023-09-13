/**
 * @Author: yizhongZhao
 * @Date: 2022年8月10日17:23:41
 * @Description: axios相关配置
 * @warning:
 */
import { INetConfig } from '#/config';
import { ContentType } from '@/enums/configEnums';

export const netConfig: INetConfig = {
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // 超时时间 ms
  requestTimeout: 5000,
  // 请求头
  contentType: ContentType.JSON,
};
