const mercadopago = require('mercadopago')
const User = require('../models/User')
const Ticket = require('../models/Ticket')

module.exports = {
  async test (req, res) {
    // 27644986
    mercadopago.payment.get('27644985').then(function (data) {
      console.log(data.status)
      return res.json(data.response.status)
    }).catch(function (error) {
      console.log(error)
    })
    // const payment_data = {
    //   transaction_amount: 100,
    //   description: 'Título do produto',
    //   payment_method_id: 'bolbradesco',
    //   payer: {
    //     email: 'test@test.com',
    //     first_name: 'Test',
    //     last_name: 'User',
    //     identification: {
    //       type: 'CPF',
    //       number: '19119119100'
    //     },
    //     address: {
    //       zip_code: '06233200',
    //       street_name: 'Av. das Nações Unidas',
    //       street_number: '3003',
    //       neighborhood: 'Bonfim',
    //       city: 'Osasco',
    //       federal_unit: 'SP'
    //     }
    //   }
    // }

    // mercadopago.payment.create(payment_data).then(function (data) {
    //   console.log(data)
    // }).catch(function (error) {
    //   console.log(error)
    // })
  },
  async testApi (req, res) {
    res.status(200).send('opa')
  },

  async create (ticketId, userId) {
    const user = User.findOne({
      where: {
        id: userId
      }
    })
    const ticket = Ticket.findOne({
      where: {
        id: ticketId
      }
    })
    const paymentData = {
      transaction_amount: ticket.price,
      description: ticket.name,
      payment_method_id: 'bolbradesco',
      payer: {
        email: user.email,
        first_name: user.email,
        last_name: '',
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
  }
}
