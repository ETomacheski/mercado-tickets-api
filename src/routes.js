const { Router } = require('express')
const userController = require('./controllers/UserController')
const companyController = require('./controllers/CompanyController')
const loginController = require('./controllers/LoginController')
const QRController = require('./controllers/QRController')

const routes = Router()
const authMiddleware = require('./middlewares/auth')

routes.post('/userLogin', loginController.user)
routes.post('/companyLogin', loginController.company)
routes.get('/qrcode', QRController.generate)

// routes.use(authMiddleware)
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

module.exports = routes
