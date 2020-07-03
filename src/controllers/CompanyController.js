const { Company } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const companies = await Company.findAll({ include: ['tickets'] })

      return res.json(companies)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async show (req, res) {
    try {
      const company = await Company.findByPk(req.params.id, {
        include: ['tickets']
      })

      return res.json(company)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async store (req, res) {
    try {
      const company = await Company.create(req.body)

      return res.json(company)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async update (req, res) {
    try {
      const company = await Company.findByPk(req.params.id)

      await company.update(req.body)

      return res.json({ company })
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async destroy (req, res) {
    try {
      const company = await Company.findByPk(req.params.id)

      await company.destroy()

      return res.json()
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}
