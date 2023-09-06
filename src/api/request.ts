/**
 * @Author: yizhongZhao
 * @Date: 2022/8/11 10:40
 * @Description: axios二次封装
 * @warning:
 */

import axios from 'axios';
import qs from 'qs';
import NProgress from 'nprogress';
import { ElMessageBox, ElMessage } from 'element-plus';

import { config } from '@/config';
import { getToken, removeToken } from '@/utils/token';
import { locationToLogin, locationToUpPwd } from '@/utils/path';

// 结构所需配置项
const { baseURL, contentType, requestTimeout, tokenName, showNProgress } = config;
// axios初始化
const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  },
});

const err = (error) => {
  if (error.response) {
    const data = error.response.data;
    if (error.response.status === 500) {
      switch (data.code) {
        case 'SESSION_NOT_EXIST': {
          // 返回登录页面前，清除token
          removeToken();
          locationToLogin();
        }
        case 'SESSION_EXPIRE': {
          // 返回登录页面前，设置token已在其他地方登录的状态参数
          ElMessageBox.alert('您的账户已在其它设备登录', '提示', {
            confirmButtonText: '确认',
            callback: () => {
              // 返回登录页面前，清除token
              removeToken();
              locationToLogin();
            },
          });
          break;
        }
        case 'PASSWORD_EXPIRE': {
          // 返回登录页面前，设置token已在其他地方登录的状态参数
          ElMessageBox.alert('您的账户密码已过期，请立即修改登录密码', '提示', {
            confirmButtonText: '确认',
            callback: () => {
              // 返回登录页面前，清除token
              locationToUpPwd({
                msg: 'EXPIRED',
              });
            },
          });
          break;
        }
        default: {
          if (!error.config.errorCatch) {
            ElMessage.error(data.message);
          }
          break;
        }
      }
    }
  }
  // 错误信息返回结果作为reject 参数
  return Promise.reject(error.response.data);
};

instance.interceptors.request.use(
  (config) => {
    if (showNProgress) {
      NProgress.start();
    }
    const token = getToken();
    if (token) config.headers[tokenName] = token;
    if (
      config.data &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8'
    ) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use((response) => {
  if (showNProgress) {
    NProgress.done();
  }
  return response.data;
}, err);

export default instance;
