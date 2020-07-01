module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', [{
      corporate_name: 'Bourbon Country Theater',
      password: '123',
      email: 'borboun@gmail.com',
      cnpj: '123'
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {})
  }
}
