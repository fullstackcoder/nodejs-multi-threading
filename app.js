const express = require('express')
const app = express()
const { test } = require('./index')

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    test()
  console.log(`Example app listening on port ${port}`)
})