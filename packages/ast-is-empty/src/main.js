import isObj from 'lodash.isplainobject'

function isEmpty(input) {
  let i
  let len
  let res = true
  if (Array.isArray(input)) {
    if (input.length === 0) {
      return true
    }
    for (i = 0, len = input.length; i < len; i++) {
      res = isEmpty(input[i])
      if (res === null) {
        return null
      } else if (!res) {
        return false
      }
    }
  } else if (isObj(input)) {
    if (Object.keys(input).length === 0) {
      return true
    }
    for (i = 0, len = Object.keys(input).length; i < len; i++) {
      res = isEmpty(input[Object.keys(input)[i]])
      if (res === null) {
        return null
      } else if (!res) {
        return false
      }
    }
  } else if (typeof input === 'string') {
    if (input.length !== 0) {
      return false
    }
  } else {
    return null
  }
  return res
}

export default isEmpty
