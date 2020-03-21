import request from '@/utils/request'
/**
 * 用于登录注册时写的api接口的页面
 * 1、登录获取token
 * 2、获取用户的信息
 * **/
// 1、登录获取token
export function login(userName, password) {
  return request({
    url: '/power/account/login?name=' + userName + '&password=' + password,
    method: 'get'
  })
}
// 2、获取用户的信息
export function getUserInfo() {
  return request({
    url: '/power/account/info',
    method: 'get'
  })
}
