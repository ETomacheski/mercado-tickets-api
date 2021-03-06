const { User } = require('../models')

module.exports = {
  async index (req, res) {
    const email = req.cookies.userEmail
    try {
      const users = await User.findAll({
        where: {
          email
        },
        include: {
          association: 'tickets',
          through: {
            attributes: ['qr_code_id_hash']
          }
        }
      })

      return res.json(users)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async show (req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        include: ['tickets']
      })

      return res.json(user)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async store (req, res) {
    try {
      const user = await User.create(req.body)

      return res.json(user)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async update (req, res) {
    try {
      const user = await User.findByPk(req.params.id)

      await user.update(req.body)

      return res.json({ user })
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async destroy (req, res) {
    try {
      const user = await User.findByPk(req.params.id)

      await user.destroy()

      return res.json()
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}
