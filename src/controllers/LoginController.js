const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
const privateKey = fs.readFileSync(path.resolve('./', 'private.key'))
const authenticateUser = require('../utils/authenticateUser')
const authenticateCompany = require('../utils/authenticateCompany')

module.exports = {

  async user (req, res) {
    const { email, password } = req.body

    const isUserAuthenticated = await authenticateUser(email, password)

    if (!isUserAuthenticated) return res.status(401).send()
    const token = await jwt.sign({ email }, privateKey, {
      expiresIn: 3600 * 24 // expires in 1 hour
    })
    res.cookie('auth', token)
    res.cookie('userEmail', email)
    res.status(200).json({ token, email })
  },

  async company (req, res) {
    const { email, password } = req.body

    const isCompanyAuthenticated = await authenticateCompany(email, password)

    if (!isCompanyAuthenticated) return res.status(401).send()
    const token = jwt.sign({ email }, privateKey, {
      expiresIn: 3600 * 24 // expires in 1 hour
    })
    res.cookie('auth', token)
    res.cookie('userEmail', email)

    res.status(200).json(token, email)
  }

}
