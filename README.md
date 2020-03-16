# random-simple

Simple random numbers|letters|string generator

## Install

```
$ npm install random-simple
```

## Usage
```js
const random = require('random-simple')

// Generato random numbers
const randomNumbers = random({ length: 4, type: 'numbers' })
const randomLetters = random({ length: 6, type: 'letters' })
const randomString = random({ length: 10, type: 'string' })

// By default generate string
const randomString = random({ length: 256 })

```
