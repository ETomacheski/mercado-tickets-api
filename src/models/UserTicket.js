module.exports = (sequelize, DataTypes) => {
  const UserTicket = sequelize.define('UserTicket', {
    status: DataTypes.STRING,
    bill_url: DataTypes.STRING
  }, {
    tableName: 'users_tickets'
  })

  UserTicket.associate = function (models) {
    UserTicket.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    UserTicket.belongsTo(models.Ticket, {
      foreignKey: 'ticket_id',
      as: 'ticket'
    })
  }

  return UserTicket
}
