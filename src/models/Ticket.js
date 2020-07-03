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
  }

  return Ticket
}
