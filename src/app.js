require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const mp = require('mercadopago')
const cors = require('cors')

const app = express()

mp.configure({
  sandbox: true,
  access_token: process.env.ACCESS_TOKEN_MP
})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))

const routes = require('./routes')
app.use(routes)

module.exports = app
