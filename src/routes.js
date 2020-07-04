const { Router } = require('express')
const userController = require('./controllers/UserController')
const companyController = require('./controllers/CompanyController')
const loginController = require('./controllers/LoginController')
const QRController = require('./controllers/QRController')
const ticketController = require('./controllers/TicketController')
const userTicketController = require('./controllers/UserTicketController')
const Pay = require('./controllers/mercadopagoController')
const routes = Router()
const authMiddleware = require('./middlewares/auth')

routes.get('/test', Pay.test)
routes.get('/', Pay.testApi)
routes.post('/userLogin', loginController.user)
routes.post('/companyLogin', loginController.company)
routes.get('/qrcode', QRController.generate)

routes.use(authMiddleware)
routes.get('/user', userController.index)
routes.get('/user/:id', userController.show)
routes.post('/user', userController.store)
routes.put('/user/:id', userController.update)
routes.delete('/user/:id', userController.destroy)

routes.get('/company', companyController.index)
routes.get('/company/:id', companyController.show)
routes.post('/company', companyController.store)
routes.put('/company/:id', companyController.update)
routes.delete('/company/:id', companyController.destroy)

routes.get('/ticket', ticketController.index)
routes.get('/ticket/:id', ticketController.show)
routes.post('/ticket', ticketController.store)
routes.put('/ticket/:id', ticketController.update)
routes.delete('/ticket/:id', ticketController.destroy)

routes.post('/buyTicket/:id', userTicketController.buyTicket)

module.exports = routes
