const { Ticket } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const tickets = await Ticket.findAll()

      return res.json(tickets)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async show (req, res) {
    try {
      const ticket = await Ticket.findByPk(req.params.id)

      return res.json(ticket)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async store (req, res) {
    try {
      const ticket = await Ticket.create(req.body)

      return res.json(ticket)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async update (req, res) {
    try {
      const ticket = await Ticket.findByPk(req.params.id)

      await ticket.update(req.body)

      return res.json({ ticket })
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },

  async destroy (req, res) {
    try {
      const ticket = await Ticket.findByPk(req.params.id)

      await ticket.destroy()

      return res.json()
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}
