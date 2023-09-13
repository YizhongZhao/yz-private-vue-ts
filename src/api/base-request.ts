import axios from 'axios';
import NProgress from 'nprogress';
import { config } from '@/config';
const { baseURL, contentType } = config;

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': contentType,
  },
});
instance.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (response?.data?.code !== '200') return Promise.reject(response.data);
    NProgress.done();
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
