import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
//用户id的key
const userIdKey = 'userId';
//存储用户id
export function setUserId(value){
  return Cookies.set(userIdKey,value);
}
//获取用户id
export function getUserId(){
  return Cookies.get(userIdKey);
}
//删除用户id
export function removeUseId(){
  return Cookies.remove(userIdKey);
}
//清空sessionStorage里面的所有内容
export function clearSession(){
  return sessionStorage.clear();
}