module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Eduardo Dias',
      password: '123',
      email: 'cadu@gmail.com',
      cpf: '19119119100'
    },
    {
      name: 'Rafael Trevisan',
      password: '123',
      email: 'trevisan@gmail.com',
      cpf: '19119119100'
    }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
