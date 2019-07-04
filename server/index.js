const { resolve } = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express')
const app = express()

const { PORT = 4000 } = process.env

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static(resolve(__dirname, '../client/dist')))

app.get('*', function (req, res) {
  const html = fs.readFileSync(resolve(__dirname, '../client/dist/index.html'), 'utf-8')
  res.send(html)
})

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.use('/api/test2', require('./api/Test2/test2'))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})