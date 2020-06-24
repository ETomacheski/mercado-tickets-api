require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cookieParser())

const routes = require('./routes')
app.use(routes)

module.exports = app
