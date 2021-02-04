import Cookies from 'js-cookie'
export function getCookieName(name) {
  return Cookies.get(name)
}
export function setCookieName(name,value) {
  return Cookies.set(name, value)
}
export function removeCookieName(name) {
  return Cookies.remove(name)
}
