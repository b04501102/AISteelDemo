const router = require('express').Router()
const connection = require('mysql').createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rainforest',
  database: 'AISteel'
})
const fs = require('fs')

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  connection.query('Select id, color_path from Test2', (err, response) => {
    res.send(response.map(e => {
      return {
        id: e.id,
        preview: 'data:image/png;base64, ' + new Buffer(fs.readFileSync(e.color_path)).toString('base64')
      }
    }))
  })
})

router.get('/:id/color', (req, res) => {
  connection.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].color_path)
  })
})

router.get('/:id/depth', (req, res) => {
  connection.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].depth_path)
  })
})

router.get('/:id/infrared', (req, res) => {
  connection.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].infrared_path)
  })
})

router.get('/:id/ply', (req, res) => {
  connection.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].ply_path)
  })
})

module.exports = router