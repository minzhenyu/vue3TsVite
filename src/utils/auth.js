import Cookies from 'js-cookie'
import Config from '@/settings'

const TokenKey = Config.TokenKey
const RefreshTokenKey = Config.RefreshTokenKey

export function getToken() {
  return Cookies.get(TokenKey)
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    return Cookies.set(TokenKey, token, { expires: Config.tokenCookieExpires })
  } else return Cookies.set(TokenKey, token)
}

export function setRefreshToken(token, rememberMe) {
  if (rememberMe) {
    return Cookies.set(RefreshTokenKey, token, { expires: Config.tokenCookieExpires })
  } else return Cookies.set(RefreshTokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeRefreshToken() {
  return Cookies.remove(RefreshTokenKey)
}
export function getCookie(name) {
  return Cookies.get(name)
}
export function setCookie(name, val) {
  return Cookies.set(name, val)
}
export function removeCookie(name) {
  return Cookies.remove(name)
}
