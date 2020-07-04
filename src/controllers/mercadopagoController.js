const mercadopago = require('mercadopago')
const { User } = require('../models')
const { Ticket } = require('../models')

module.exports = {
  async testApi (req, res) {
    res.status(200).send('opa')
  },

  async create (ticketId, userId) {
    const user = await User.findOne({
      where: {
        id: userId
      }
    })
    const ticket = await Ticket.findOne({
      where: {
        id: ticketId
      }
    })
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
    const payment_data = {
      transaction_amount: 100,
      description: 'Título do produto',
      payment_method_id: 'bolbradesco',
      payer: {
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        identification: {
          type: 'CPF',
          number: '19119119100'
        },
        address: {
          zip_code: '06233200',
          street_name: 'Av. das Nações Unidas',
          street_number: '3003',
          neighborhood: 'Bonfim',
          city: 'Osasco',
          federal_unit: 'SP'
        }
      }
    }

    const data = await mercadopago.payment.create(paymentData)
    const url = await data.response.transaction_details.external_resource_url
    return url
    // .then(async function (data) {
    //   const test = await data.response.transaction_details.external_resource_url
    //   // console.log(test)
    //   return test
    // }).catch(function (error) {
    //   console.log(error)
    // })
  }
}
