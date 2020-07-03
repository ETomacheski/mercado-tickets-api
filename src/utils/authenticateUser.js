const { User } = require('../models/index')

module.exports = async (email, password) => {
  const user = await User.findOne({
    where: {
      email, password
    }
  })

  if (!user) return false
  return true
}
