module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    photo: DataTypes.STRING
  })

  User.associate = function (models) {
    User.belongsToMany(models.Ticket, {
      through: 'users_tickets',
      foreignKey: 'user_id',
      as: 'tickets'
    })
  }

  return User
}
