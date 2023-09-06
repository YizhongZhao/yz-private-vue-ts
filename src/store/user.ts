import { defineStore } from 'pinia';
import { Names } from '@/enums/storeEnums';

export const useUserStore = defineStore(Names.USER, {
  state: () => {
    return {
      userName: '',
      passWord: '',
    };
  },
  getters: {},
  actions: {
    setUserName(val: string) {
      this.userName = val;
    },
    setPassWord(val: string) {
      this.passWord = val;
    },
  },
});
