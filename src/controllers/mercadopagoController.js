
module.exports = {
  async test (req, res) {
    const mercadopago = require('mercadopago')

    await mercadopago.configure({
      sandbox: true,
      access_token: 'TEST-6516124841781548-070321-a739e9a68fe62ca91ce0c5fffa68d27b-283355242'

    })
    mercadopago.payment.create({
      description: 'Buying a PS4',
      transaction_amount: 10500,
      payment_method_id: 'rapipago',
      payer: {
        email: 'test_user_3931694@testuser.com',

        identification: {
          type: 'DNI',
          number: '34123123'
        }

      }
    }).then(function (mpResponse) {
      console.log(mpResponse)
    }).catch(function (mpError) {
      console.log(mpError)
    })
    return true
  },
  async testApi (req, res) {
    res.status(200).send('opa')
  }
}
