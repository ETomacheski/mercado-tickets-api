const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
const privateKey = fs.readFileSync(path.resolve('./', 'private.key'))

module.exports = {

  async user (req, res) {
    const { email, password } = req.body

    if (email === 'carloseduardodiasm@gmail.com' && password === '123') {
      const token = jwt.sign({ email }, privateKey, {
        expiresIn: 3600 // expires in 1 hour
      })
      res.cookie('auth', token, {
        httpOnly: true
      })

      res.status(200).send()
    } else {
      res.status(401).send('unauthenticated')
    }
  },

  async company (req, res) {
    res.status(200).send()
  }

}
