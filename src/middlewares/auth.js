const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
const privateKey = fs.readFileSync(path.resolve('./', 'private.key'))

const middleware = (req, res, next) => {
  const token = req.cookies.auth
  if (token) {
    jwt.verify(token, privateKey, function (err, payload) {
      if (err) {
        return res.status(403).send('Error')
      } else {
        console.log(payload)
        next()
      }
    })
  } else {
    return res.status(403).send('No token')
  }
}

module.exports = middleware
