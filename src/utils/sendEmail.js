const nodemailer = require('nodemailer')

module.exports = async (email, ticket, url) => {
  const transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {

      user: 'melitickets@gmail.com',
      pass: 'teste.123'
    }
  })

  const mailOptions = {
    from: 'Meli Tickets <melitickets@gmail.com>',
    to: email,
    subject: 'Boleto Meli Tickets',
    text: `Link referente a compra do ingresso ${ticket}:  ${url}`,
    html: `<b>Link referente a compra do ingresso </b>${ticket}: <br />  ${url}`
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      return true
    }
  })
}
