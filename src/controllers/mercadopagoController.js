const mercadopago = require('mercadopago')
const { User } = require('../models')
const { Ticket } = require('../models')

module.exports = {
  async testApi (req, res) {
    res.status(200).send('opa')
  },

  async create (user, ticket) {
    // console.log(user, ticket)
    const paymentData = {
      transaction_amount: parseFloat(ticket.price),
      description: ticket.name,
      payment_method_id: 'bolbradesco',
      payer: {
        email: user.email,
        first_name: user.name,
        last_name: ' ',
        identification: {
          type: 'CPF',
          number: user.cpf
        },
        address: {
          zip_code: '96700000',
          street_name: 'Marcionilio Saraiva da Fonseca',
          street_number: '728',
          neighborhood: 'Centro',
          city: 'São Jerônimo',
          federal_unit: 'RS'
        }
      }
    }

    const data = await mercadopago.payment.create(paymentData)
    const url = await data.response.transaction_details.external_resource_url
    return url
  }
}
