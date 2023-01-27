const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require('./routes')

app.use(cors())
app.use(bodyParser.json({limit: '200kb'}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(express.json())

app.listen(3001)