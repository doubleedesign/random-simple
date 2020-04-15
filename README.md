# random-simple

Simple random numbers|letters|string generator

## Install

```
$ npm install random-simple
```

## Usage
```js
const rndm = require('random-simple')

// Generato random numbers
const randomNumbers = rndm({ length: 4, type: 'numbers' })
const randomLetters = rndm({ length: 6, type: 'letters' })
const randomString = rndm({ length: 10, type: 'string' })

// By default generate string
const randomString = rndm({ length: 256 })

```
