'use strict'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
const string = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

const eventseed = [
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0
]

/**
 * Generate random numbers/letters/string
 * @param {Number} length - length of the generated number.
 * @param {String=} type - one of [numbers, letters, string].
 * @returns {String|Number} - returns string or number.
 */
const generate = ({ length, type }) => {
  type = type || 'string'

  let result = ''
  let chars = ''

  if (type === 'numbers') chars = numbers
  else if (type === 'letters') chars = letters
  else if (type === 'string') chars = string
  else throw new Error(`Invalid Type: ${type}. Only allowed: numbers, letters or string`)

  for (var i = length; i > 0; --i) {
    result += chars[Math.abs((Math.floor(Math.random() * Math.pow(2, 32)) ^ (eventseed[i % 4] >>> (i % 23))) % (chars.length - 1 + 1))]
  }
  return result
}

module.exports = generate
