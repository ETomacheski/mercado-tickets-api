const { Ticket } = require('../models')
const { Company } = require('../models')
const generateHash = require('../utils/generateTicketHash')

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
      const email = req.cookies.userEmail
      const company = await Company.findOne({
        where: {
          email: email
        }
      })

      req.body.owner_company = company.id
      req.body.qr_code_id_hash = generateHash()
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
  },

  async validateTicket (req, res) {
    const { code } = req.body

    const isValidTicket = await Ticket.findOne({
      where: {
        qr_code_id_hash: code
      }
    })

    if (!isValidTicket) {
      return res.status(404).json({
        ticket: 'invalid'
      })
    }
    return res.status(200).json({
      ticket: 'valid'
    })
  }

}
