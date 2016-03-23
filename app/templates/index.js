'use strict'

module.exports = (str, opts) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  opts = opts || {}

  return 'I am cool'
}
