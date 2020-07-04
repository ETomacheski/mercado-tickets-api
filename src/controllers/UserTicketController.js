const { Ticket, User, UserTicket } = require('../models')
const MpController = require('./mercadopagoController')

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
    const bill_url = await MpController.create(ticketID, user.id)

    const status = 'pending'

    const ticketUser = await ticket.addUser(user)
    console.log(ticketUser[0].id)
    await UserTicket.update({
      status,
      bill_url
    }, {
      where: {
        id: ticketUser[0].id
      }
    }
    )

    return res.status(200).json(ticketUser)
  }
}
