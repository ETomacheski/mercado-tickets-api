module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    corporate_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    photo: DataTypes.STRING
  })

  Company.associate = function (models) {
    Company.hasMany(models.Ticket, {
      foreignKey: 'owner_company',
      as: 'tickets'
    })
    Company.belongsToMany(models.Ticket, {
      through: 'users_tickets',
      foreignKey: 'ticket_id',
      as: 'usersTickets'
    })
  }

  return Company
}
