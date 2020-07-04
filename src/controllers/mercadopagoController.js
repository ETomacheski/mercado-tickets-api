
module.exports = {
  async test (req, res) {
    var mercadopago = require('mercadopago')
    mercadopago.configure({
      sandbox: true,
      access_token: 'TEST-6516124841781548-070321-a739e9a68fe62ca91ce0c5fffa68d27b-283355242'
    })
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
  }
}
