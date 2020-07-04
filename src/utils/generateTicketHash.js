const crypto = require('crypto')

module.exports = (generateUniqueId) => {
  return crypto.randomBytes(6).toString('HEX')
}
