module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tickets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    owner_company: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    show: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }),
  down: queryInterface => queryInterface.dropTable('tickets')
}
