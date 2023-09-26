/**
 * @Author: yizhongZhao
 * @Date: 2022年8月11日10:44:17
 * @Description: 二次封装axios用到的接口
 * @warning:
 */

export interface RequestOptions {
  // Splicing request parameters to url
  // 是否将参数添加到url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  // 是否格式化入参中的时间
  formatDate?: boolean;
  // 是否处理请求结果
  isTransformResponse?: boolean;
  // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers
  // 是否返回完整的响应(带响应头那种)
  isReturnNativeResponse?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // Whether to send token in header
  withToken?: boolean;
  // 请求重试机制
  retryRequest?: RetryRequest;
}
