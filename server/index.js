const { resolve } = require('path')
const history = require('connect-history-api-fallback')
const express = require('express')
const app = express()

const { PORT = 4000 } = process.env

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const publicPath = resolve(__dirname, '../client/dist')
const staticConf = { maxAge: '1y', etag: false }

app.use(express.static(publicPath, staticConf))
app.use('/', history())

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.use('/api/test2', require('./api/Test2/test2'))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})