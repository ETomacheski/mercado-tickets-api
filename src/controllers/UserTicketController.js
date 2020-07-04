const { Ticket, User } = require('../models')

module.exports = {
  async buyTicket (req, res) {
    const userEmail = req.cookies.userEmail
    const ticketID = req.params.id

    var user = await User.findOne({
      where: {
        email: userEmail
      },
      include: ['tickets']
    })

    const ticket = await Ticket.findOne({
      where: {
        id: ticketID
      }
    })

    const status = 'pending'

    ticket.addUser(user, {
      through: {
        status
      }
    })

    return res.status(200).send()
  }
}
