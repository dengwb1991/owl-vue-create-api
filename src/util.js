const camelizeRE = /-(\w)/g

export function lowerCaseFirst (str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export function camelize (str) {
  return (str + '').replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
}

export function isBoolean (value) {
  return typeof value === 'boolean'
}

export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

export function isUndef (value) {
  return value === undefined
}

export function isStr (value) {
  return typeof value === 'string'
}

export function isFunction (fn) {
  return typeof fn === 'function'
}

