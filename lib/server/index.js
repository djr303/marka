// eslint-disable-next-line no-unused-vars
const colors = require('colors')
const express = require('express')
const app = express()
const port = 3000

const server = () => {
  app.get('/', (req, res) => res.send('Hello markajs!'))
  app.listen(port, () => console.log(`markajs server listening on ${port}!`.green))
}

module.exports = server
