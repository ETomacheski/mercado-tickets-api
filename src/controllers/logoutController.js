module.exports = (req, res) => {
  res.clearCookie('auth')
  res.clearCookie('userEmail')
  res.status(204).send()
}
