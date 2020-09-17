const express = require('express')
const path = require('path')
const app = express()

var ip = require("ip");

var cors = require("cors");

app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());
app.get('/message', (req, res) => {
  return res.send(process.env.PAGE_TITLE)
})
app.get('/version', (req, res) => {
  return res.send(process.version)
})
app.get('/ipaddress', (req, res) => {
  return res.send(ip.address())
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(8080)
