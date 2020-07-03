const QR = require('qr-image')

module.exports = {
  generate (req, res) {
    const text = 'trevisan'
    const code = QR.image(text, {
      type: 'png',
      size: 15,
      margin: 1
    })

    res.type('png')
    code.pipe(res)
  }
}
