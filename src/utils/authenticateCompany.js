const { Company } = require('../models/index')

module.exports = async (email, password) => {
  const company = await Company.findOne({
    where: {
      email, password
    }
  })

  if (!company) return false
  return true
}
