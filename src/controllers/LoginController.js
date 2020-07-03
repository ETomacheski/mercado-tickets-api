const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
const privateKey = fs.readFileSync(path.resolve('./', 'private.key'))
const authenticateUser = require('../utils/authenticateUser')

module.exports = {

  async user (req, res) {
    const { email, password } = req.body

    const isUserAuthenticated = await authenticateUser(email, password)

    if (!isUserAuthenticated) return res.status(401).send()
    const token = jwt.sign({ email }, privateKey, {
      expiresIn: 3600 // expires in 1 hour
    })
    res.cookie('auth', token, {
      httpOnly: true
    })

    res.status(200).send()
  },

  async company (req, res) {
    res.status(200).send()
  }

}
