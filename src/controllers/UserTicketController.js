const { Ticket, User, UserTicket } = require('../models')
const MpController = require('./mercadopagoController')
const { sendEmail } = require('./EmailController')

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
    const bill_url = await MpController.create(user, ticket)

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
    await sendEmail(userEmail, ticket.name, bill_url)

    return res.status(200).send('foi')
  }
}
