/**
 * @Author: yizhongZhao
 * @Date: 2022年8月11日15:21:04
 * @Description: 一些配置
 * @warning:
 */

import { ISettingConfig } from '#/config';
import { Storage } from '@/enums/configEnums';

export const settingConfig: ISettingConfig = {
  // token存储的的位置
  storage: Storage.COOKIE,
  // token 的名字
  tokenName: 'k-sid',
  // token 存贮时的key
  tokenTableName: 'k-sid',
  // 当前所选 企业 Id在localStorage、sessionStorage、cookie存储的key的名称
  pickedCorpId: 'pickedCorpId',
  // 当前所选 角色 Id在localStorage、sessionStorage、cookie存储的key的名称
  pickedRole: 'pickedRole',
};
