import baseRequest from '@/api/base-request';

interface LoginDto {
  account: string;
  passWord: string;
}

// 登录
export const login = (data: LoginDto): BaseRespond => {
  return baseRequest.post('/user/login', data);
};

interface CheckUniquenessDto {
  account: string;
}

// 校验账号唯一性
export const checkAccountUnique = (data: CheckUniquenessDto): BaseRespond => {
  return baseRequest.post('/user/checkUniqueness', data);
};

interface ReqQRCodeDto {
  username: string;
  account: string;
}

interface ReqQRCodeVo {
  url: string;
  id: string;
}
// 获取密码二维码
export const reqQRCode = (data: ReqQRCodeDto): Respond<ReqQRCodeVo> => {
  return baseRequest.post('/user/getQRCode', data);
};

export const register = (data) => {
  return baseRequest.post('/user/register', data);
};
