module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    corporate_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    photo: DataTypes.STRING
  })

  return Company
}
