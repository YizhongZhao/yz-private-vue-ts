import cookie from 'js-cookie';
import { config } from '@/config';

const { tokenTableName, storage, pickedRole, pickedCorpId } = config;

//获取token
export function getToken(): string | null | undefined {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(tokenTableName);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(tokenTableName);
    } else if ('cookie' === storage) {
      return cookie.get(tokenTableName);
    } else {
      return localStorage.getItem(tokenTableName);
    }
  } else {
    return localStorage.getItem(tokenTableName);
  }
}

// 设置token
export function setToken(token: string): void {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(tokenTableName, token);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(tokenTableName, token);
    } else if ('cookie' === storage) {
      return cookie.set(tokenTableName, token);
    } else {
      return localStorage.setItem(tokenTableName, token);
    }
  } else {
    return localStorage.setItem(tokenTableName, token);
  }
}

// 移除token
export function removeToken() {
  removePickedRole();
  removePickedCorpId();
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(tokenTableName);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear();
    } else if ('cookie' === storage) {
      return cookie.remove(tokenTableName);
    } else {
      return localStorage.removeItem(tokenTableName);
    }
  } else {
    return localStorage.removeItem(tokenTableName);
  }
}

// 移除role
export function removePickedRole() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(pickedRole);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear();
    } else if ('cookie' === storage) {
      return cookie.remove(pickedRole);
    } else {
      return localStorage.removeItem(pickedRole);
    }
  } else {
    return localStorage.removeItem(pickedRole);
  }
}

// 移除pickedCorpId

export function removePickedCorpId() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(pickedCorpId);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear();
    } else if ('cookie' === storage) {
      return cookie.remove(pickedCorpId);
    } else {
      return localStorage.removeItem(pickedCorpId);
    }
  } else {
    return localStorage.removeItem(pickedCorpId);
  }
}
