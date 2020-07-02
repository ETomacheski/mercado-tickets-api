require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const routes = require('./routes')
app.use(routes)

module.exports = app
