import baseRequest from '@/api/base-request';
import { BaseRespond } from '#/gobal';

export class LoginDto {
  username: string;
  passWord: string;
}

// 登录
export const login = (data: LoginDto): BaseRespond => {
  return baseRequest.post('/user/login', data);
};
