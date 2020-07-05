const { Router } = require('express')
const userController = require('./controllers/UserController')
const companyController = require('./controllers/CompanyController')
const loginController = require('./controllers/LoginController')
const ticketController = require('./controllers/TicketController')
const userTicketController = require('./controllers/UserTicketController')
const logoutController = require('./controllers/logoutController')
const routes = Router()
const authMiddleware = require('./middlewares/auth')

routes.post('/userLogin', loginController.user)
routes.post('/companyLogin', loginController.company)
routes.post('/user', userController.store)
routes.post('/company', companyController.store)

routes.use(authMiddleware)
routes.get('/user', userController.index)
routes.get('/user/:id', userController.show)
routes.put('/user/:id', userController.update)
routes.delete('/user/:id', userController.destroy)
routes.get('/logout', logoutController)

routes.get('/company', companyController.index)
routes.get('/company/:id', companyController.show)
routes.put('/company/:id', companyController.update)
routes.delete('/company/:id', companyController.destroy)

routes.get('/ticket', ticketController.index)
routes.get('/ticket/:id', ticketController.show)
routes.post('/ticket', ticketController.store)
routes.put('/ticket/:id', ticketController.update)
routes.delete('/ticket/:id', ticketController.destroy)

routes.post('/buyTicket/:id', userTicketController.buyTicket)
routes.post('/checkTicket', ticketController.validateTicket)

module.exports = routes
