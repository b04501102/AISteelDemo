const router = require('express').Router()
const pool = require('mysql').createPool({
  host: '166.62.30.147',
  user: 'rainforest80256',
  password: 'DGWmzC3Bya8pcjE',
  database: 'AISteel'
})
const fs = require('fs')

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  pool.query('Select id, color_path from Test2', (err, response) => {
    console.
    res.send(response.map(e => {
      return {
        id: e.id,
        preview: 'data:image/png;base64, ' + new Buffer(fs.readFileSync(e.color_path)).toString('base64')
      }
    }))
  })
})

router.get('/:id/color', (req, res) => {
  pool.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].color_path)
  })
})

router.get('/:id/depth', (req, res) => {
  pool.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].depth_path)
  })  
})

router.get('/:id/infrared', (req, res) => {
  pool.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].infrared_path)
  })
})

router.get('/:id/ply', (req, res) => {
  pool.query('Select * from Test2', (err, response) => {
    res.sendFile(response[0].ply_path)
  })
})

module.exports = router