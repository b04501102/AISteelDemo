const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.use('/api/test2', require('./api/Test2/test2'))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})