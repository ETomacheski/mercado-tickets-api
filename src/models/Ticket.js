module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    name: DataTypes.STRING,
    show: DataTypes.STRING,
    description: DataTypes.STRING,
    qr_code_id_hash: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  })

  Ticket.associate = function (models) {
    Ticket.belongsTo(models.Company, {
      foreignKey: 'owner_company',
      as: 'company'
    })
    Ticket.belongsToMany(models.User, {
      through: 'users_tickets',
      foreignKey: 'ticket_id',
      as: 'user'
    })
  }

  return Ticket
}
