const eventseed: number[] = [
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0,
  ((new Date()).getTime() * 41 ^ (Math.random() * Math.pow(2, 32))) >>> 0
]

const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const letters: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
const strings: (string|number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

const calc = (chars: (string|number)[], length: number): (string | number) => {
  let random = ''
  for (var i = length; i > 0; --i) {
    random += chars[Math.abs((Math.floor(Math.random() * Math.pow(2, 32)) ^ (eventseed[i % 4] >>> (i % 23))) % (chars.length - 1 + 1))]
  }
  return random
}

export const rndm = {
  numbers: (l: number = 4) => calc(numbers, l),
  letters: (l: number = 4) => calc(letters, l),
  strings: (l: number = 6) => calc(strings, l)
}
