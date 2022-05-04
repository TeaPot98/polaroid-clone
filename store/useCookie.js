import jsCookie from 'js-cookie'

export const getCookie = (key) => {
  let result = []
  if (key) {
    const localData = jsCookie.get(key)
    if(localData && localData.length > 0) {
      result = JSON.parse(localData)
    }
  }

  return result
}

export const setCookie = (key, value) => {
  jsCookie.set(key, JSON.stringify(value))
}